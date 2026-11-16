// ============================================================
// CHECKOUT DO CARRINHO - Netlify Function
// Recebe o carrinho do site ({ lang, items: [{ slug, qty }] }) e cria
// uma Stripe Checkout Session com várias velas numa só encomenda.
//
// - Preços e nomes vêm de src/data/velas.js (nunca do browser).
// - Portes, países de envio e restantes opções são copiados do
//   Payment Link de uma das velas: continuam a gerir-se no dashboard
//   Stripe > Payment Links, sem tocar em código.
// - Os portes do Payment Link valem para 1 vela. Cada vela adicional
//   soma ACRESCIMO_POR_VELA (65%) desse valor:
//   1 vela = 100% · 2 = 165% · 3 = 230% · 4 = 295% ...
// - Precisa da variável de ambiente STRIPE_SECRET_KEY no Netlify.
// ============================================================
import { velas, fragrances } from '../../src/data/velas.js';

export const config = { path: '/api/checkout' };

const STRIPE = 'https://api.stripe.com/v1';
const MAX_POR_PECA = 10;
const ACRESCIMO_POR_VELA = 0.65;

/** '€ 68' -> 6800 (cêntimos) */
const centimos = (price) =>
  Math.round(parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) * 100);

/** Objecto aninhado -> formato de formulário da API Stripe (a[b][0][c]=x). */
function formulario(obj, prefixo = '', out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) continue;
    const chave = prefixo ? `${prefixo}[${k}]` : k;
    if (typeof v === 'object') formulario(v, chave, out);
    else out.append(chave, String(v));
  }
  return out;
}

async function stripe(caminho, chave, corpo) {
  const res = await fetch(`${STRIPE}${caminho}`, {
    method: corpo ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${chave}`,
      ...(corpo && { 'Content-Type': 'application/x-www-form-urlencoded' }),
    },
    body: corpo ? formulario(corpo) : undefined,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || `Stripe ${res.status}`);
  return json;
}

// Opções do Payment Link, guardadas 10 minutos para não repetir o pedido.
let cache = { quando: 0, opcoes: null };

async function opcoesDoPaymentLink(chave) {
  if (cache.opcoes && Date.now() - cache.quando < 10 * 60 * 1000) return cache.opcoes;

  const urls = new Set(velas.map((v) => v.stripeUrl));
  const lista = await stripe('/payment_links?active=true&limit=100', chave);
  const pl = lista.data.find((l) => urls.has(l.url));
  if (!pl) throw new Error('Nenhum Payment Link activo corresponde às velas do site.');

  const o = {};
  if (pl.shipping_address_collection?.allowed_countries?.length) {
    o.shipping_address_collection = {
      allowed_countries: pl.shipping_address_collection.allowed_countries,
    };
  }
  // Tarifas de envio base (valor para 1 vela), lidas uma a uma.
  const tarifas = [];
  for (const s of pl.shipping_options || []) {
    const id = typeof s.shipping_rate === 'string' ? s.shipping_rate : s.shipping_rate?.id;
    const r = await stripe(`/shipping_rates/${id}`, chave);
    if (r.type !== 'fixed_amount' || !r.fixed_amount) continue;
    tarifas.push({
      display_name: r.display_name,
      amount: r.fixed_amount.amount,
      currency: r.fixed_amount.currency,
      tax_behavior: r.tax_behavior,
      tax_code: typeof r.tax_code === 'string' ? r.tax_code : r.tax_code?.id,
      delivery_estimate: r.delivery_estimate,
    });
  }
  if (pl.billing_address_collection) o.billing_address_collection = pl.billing_address_collection;
  if (pl.phone_number_collection?.enabled) o.phone_number_collection = { enabled: true };
  if (pl.allow_promotion_codes) o.allow_promotion_codes = true;
  if (pl.automatic_tax?.enabled) o.automatic_tax = { enabled: true };
  if (pl.tax_id_collection?.enabled) o.tax_id_collection = { enabled: true };
  if (pl.invoice_creation?.enabled) o.invoice_creation = { enabled: true };
  if (pl.consent_collection?.terms_of_service) {
    o.consent_collection = { terms_of_service: pl.consent_collection.terms_of_service };
  }

  cache = { quando: Date.now(), opcoes: { sessao: o, tarifas } };
  return cache.opcoes;
}

/** Portes escalonados: base + 65% da base por cada vela além da primeira. */
function portes(tarifas, totalVelas) {
  const factor = 1 + ACRESCIMO_POR_VELA * (totalVelas - 1);
  return tarifas.map((t) => ({
    shipping_rate_data: {
      type: 'fixed_amount',
      display_name: t.display_name,
      fixed_amount: { amount: Math.round(t.amount * factor), currency: t.currency },
      tax_behavior: t.tax_behavior,
      tax_code: t.tax_code,
      delivery_estimate: t.delivery_estimate,
    },
  }));
}

const resposta = (status, corpo) =>
  new Response(JSON.stringify(corpo), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export default async (req) => {
  if (req.method !== 'POST') return resposta(405, { error: 'method' });

  const chave = process.env.STRIPE_SECRET_KEY;
  if (!chave) {
    console.error('STRIPE_SECRET_KEY em falta nas variáveis de ambiente do Netlify.');
    return resposta(503, { error: 'config' });
  }

  let pedido;
  try {
    pedido = await req.json();
  } catch {
    return resposta(400, { error: 'json' });
  }

  const lang = pedido?.lang === 'en' ? 'en' : 'pt';
  const origem = new URL(req.url).origin;
  const pre = lang === 'en' ? '/en' : '';

  // Junta quantidades por vela e valida contra o catálogo.
  const qtds = new Map();
  for (const it of Array.isArray(pedido?.items) ? pedido.items : []) {
    const q = Math.floor(Number(it?.qty));
    if (!velas.some((v) => v.slug === it?.slug) || !(q >= 1)) continue;
    qtds.set(it.slug, Math.min(MAX_POR_PECA, (qtds.get(it.slug) || 0) + q));
  }
  if (qtds.size === 0) return resposta(400, { error: 'empty' });

  const line_items = [...qtds].map(([slug, quantity]) => {
    const v = velas.find((x) => x.slug === slug);
    const frag = fragrances.find((f) => f.slug === v.fragrance);
    return {
      quantity,
      price_data: {
        currency: 'eur',
        unit_amount: centimos(v.price),
        product_data: {
          name: `${v.name} · ${frag.name}`,
          images: [`${origem}/img/velas/${v.slug}.jpg`],
          metadata: { slug: v.slug },
        },
      },
    };
  });

  // Página de regresso em caso de desistência: a mesma de onde veio.
  let voltar = `${origem}${pre}/shop/`;
  try {
    const r = new URL(pedido?.voltar || '', origem);
    if (r.origin === origem) voltar = r.origin + r.pathname;
  } catch {}

  try {
    const { sessao: opcoes, tarifas } = await opcoesDoPaymentLink(chave);
    const totalVelas = [...qtds.values()].reduce((a, b) => a + b, 0);
    const shipping_options = portes(tarifas, totalVelas);
    const sessao = await stripe('/checkout/sessions', chave, {
      mode: 'payment',
      locale: lang === 'en' ? 'en-GB' : 'pt',
      line_items,
      success_url: `${origem}${pre}/obrigado/`,
      cancel_url: voltar,
      ...opcoes,
      ...(shipping_options.length && { shipping_options }),
    });
    return resposta(200, { url: sessao.url });
  } catch (e) {
    console.error('Checkout Stripe falhou:', e.message);
    return resposta(502, { error: 'stripe' });
  }
};
