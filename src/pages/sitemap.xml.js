import { velas } from '../data/velas.js';

const SITE = 'https://malumi.pt';

// Páginas .astro dentro de src/pages, descobertas automaticamente.
const modulos = import.meta.glob('./**/*.astro');

/** './en/shop.astro' -> '/en/shop' · './index.astro' -> '/' */
function rotaDe(ficheiro) {
  let r = ficheiro.replace(/^\./, '').replace(/\.astro$/, '');
  r = r.replace(/\/index$/, '');
  return r === '' ? '/' : r;
}

/** Par PT/EN de cada rota, para os alternates do sitemap. */
function alternates(rota) {
  const pt = rota.replace(/^\/en(\/|$)/, '/').replace(/\/{2,}/g, '/') || '/';
  const en = pt === '/' ? '/en' : '/en' + pt;
  return { pt, en };
}

export function GET() {
  const rotas = new Set();

  for (const ficheiro of Object.keys(modulos)) {
    const rota = rotaDe(ficheiro);
    if (rota.includes('[')) continue; // rotas dinâmicas tratadas à parte
    rotas.add(rota);
  }

  // Páginas de produto (PT + EN)
  for (const v of velas) {
    rotas.add(`/product/${v.slug}`);
    rotas.add(`/en/product/${v.slug}`);
  }

  const lista = [...rotas].sort();

  const entradas = lista
    .map((rota) => {
      const { pt, en } = alternates(rota);
      const prioridade = rota === '/' ? '1.0' : rota === '/shop' || rota === '/by' ? '0.9' : '0.7';
      return [
        '  <url>',
        `    <loc>${SITE}${rota === '/' ? '/' : rota}</loc>`,
        `    <xhtml:link rel="alternate" hreflang="pt-PT" href="${SITE}${pt === '/' ? '/' : pt}"/>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pt === '/' ? '/' : pt}"/>`,
        `    <priority>${prioridade}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entradas}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
