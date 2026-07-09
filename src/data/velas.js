// ============================================================
// FONTE ÚNICA DE DADOS DAS VELAS
// - stripeUrl: substituir cada "SUBSTITUIR_STRIPE_..." pelo
//   Payment Link do Stripe (https://buy.stripe.com/...)
// - Fotografia: colocar public/img/velas/<slug>.png — é detectada
//   automaticamente no build (não é preciso mexer em código)
// - Textos completos (inspiracao, fragranciaQuote, fragranciaTexto,
//   notas, detalhes): preencher a partir dos docs de cada vela.
//   Secções vazias não aparecem na página.
// ============================================================

export const fragrances = [
  {
    slug: 'primavera-em-sintra',
    name: 'Primavera em Sintra',
    family: 'AROMÁTICO AMADEIRADO',
  },
  {
    slug: 'golden-oud',
    name: 'Golden Oud',
    family: 'ORIENTAL AMADEIRADO',
  },
  {
    slug: 'serenata-di-fiori',
    name: 'Serenata di Fiori',
    family: 'ÂMBAR FLORAL',
  },
];

export const velas = [
  {
    slug: 'olive',
    name: 'Olive',
    num: '01 / 06',
    price: '€ 68',
    fragrance: 'primavera-em-sintra',
    line: 'O verde-oliva que respira sob a copa dos pinheiros.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #9FA478 0%, #7C8160 40%, #5C6342 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_OLIVE',
    inspiracao:
      'A vela Olive evoca a tranquilidade das paisagens mediterrâneas, onde os olivais se estendem até ao horizonte. Um toque de frescor e elegância para qualquer espaço.',
    fragranciaQuote:
      'Uma sinfonia olfativa que desperta os sentidos e celebra o frescor da natureza.',
    fragranciaTexto:
      'Deixe-se abraçar pelo ar fresco de uma manhã de primavera na Serra de Sintra. As notas mais altas desta fragrância revelam o frescor vibrante do eucalipto e da hortelã, lembrando a brisa pura que serpenteia pelas copas das árvores. No seu coração, delicados toques de íris e ananás acrescentam uma luminosidade refinada, enquanto a base — um lenhoso de cedro com musgo húmido — evoca a profundidade serena de uma floresta banhada pela névoa dourada da manhã. Uma homenagem à beleza intocada da natureza.',
    notas: {
      familia: 'Aromático Amadeirado',
      topo: 'Eucalipto, Cânfora, Hortelã Fresca',
      coracao: 'Cravo, Ananás, Íris, Pó de Talco',
      base: 'Patchouli, Cedro, Musgo, Almíscar',
    },
    detalhesIntro:
      'Cada recipiente de eco-resina é meticulosamente feito à mão, um a um, em Sintra — Portugal. A cera exclusiva é 100% natural e vegana. Sem parafina. Sem parabenos. Sem corantes. Apenas o nosso compromisso com a criação consciente, livre de crueldade, de queima limpa — amorosamente humanizada e acolhedora.',
    detalhes: [
      'Frasco de eco-resina, 400 g',
      'Cera de soja, 300 g',
      'Pavios de algodão e linho, sem chumbo — garantem uma queima segura e limpa',
      'Aproximadamente 40 h de queima',
      'Fragrâncias da mais alta qualidade, criadas por perfumarias de renome da Europa',
      'Peso total aproximado: 700 g',
      'Dimensões: 100 mm de largura × 100 mm de altura, em caixa com fecho magnético e escrita em alto relevo',
      'Apare o pavio a cerca de 5 mm antes de cada queima. Queime aproximadamente 4 horas de cada vez, ou até a superfície derreter por completo',
    ],
  },
  {
    slug: 'nordic',
    name: 'Nordic',
    num: '02 / 06',
    price: '€ 68',
    fragrance: 'primavera-em-sintra',
    line: 'A névoa nórdica que cobre a serra antes do mar.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #7B8995 0%, #5F6E7B 40%, #3F4E5B 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_NORDIC',
    // Texto completo em preparação — preencher a partir do doc Nordic
    inspiracao: '',
    fragranciaQuote: '',
    fragranciaTexto: '',
    notas: null,
    detalhesIntro: '',
    detalhes: [],
  },
  {
    slug: 'onyx',
    name: 'Onyx',
    num: '03 / 06',
    price: '€ 72',
    fragrance: 'golden-oud',
    line: 'Mistério e sofisticação num só reflexo.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #3A3835 0%, #252321 40%, #0E0D0C 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_ONYX',
    inspiracao: '',
    fragranciaQuote: '',
    fragranciaTexto: '',
    notas: null,
    detalhesIntro: '',
    detalhes: [],
  },
  {
    slug: 'cotto',
    name: 'Cotto',
    num: '04 / 06',
    price: '€ 72',
    fragrance: 'golden-oud',
    line: 'O terracota que nos liga à terra e à tradição.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #C16847 0%, #9D5132 40%, #723620 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_COTTO',
    inspiracao: '',
    fragranciaQuote: '',
    fragranciaTexto: '',
    notas: null,
    detalhesIntro: '',
    detalhes: [],
  },
  {
    slug: 'amber',
    name: 'Amber',
    num: '05 / 06',
    price: '€ 68',
    fragrance: 'serenata-di-fiori',
    line: 'O calor dourado que ilumina qualquer espaço.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #E8B5A0 0%, #D08C72 40%, #A36148 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_AMBER',
    inspiracao: '',
    fragranciaQuote: '',
    fragranciaTexto: '',
    notas: null,
    detalhesIntro: '',
    detalhes: [],
  },
  {
    slug: 'violet',
    name: 'Violet',
    num: '06 / 06',
    price: '€ 68',
    fragrance: 'serenata-di-fiori',
    line: 'A violeta entre rosa e baunilha — a doçura que não se impõe.',
    gradient: 'radial-gradient(ellipse at 45% 65%, #C8B8D8 0%, #9F8AB8 40%, #6F5A88 100%)',
    stripeUrl: 'SUBSTITUIR_STRIPE_VIOLET',
    inspiracao: '',
    fragranciaQuote: '',
    fragranciaTexto: '',
    notas: null,
    detalhesIntro: '',
    detalhes: [],
  },
];

// 7.ª peça — exemplo de Edição Privada.
// Quando o Leo entregar a foto + texto, preencher aqui e
// a página /product/<slug> é gerada automaticamente.
// export const edicaoPrivadaExemplo = { ... };

import fs from 'node:fs';
import path from 'node:path';

/** Devolve o caminho da foto se existir em public/img/velas/<slug>.png|.jpg, senão null. */
export function fotoDe(slug) {
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const p = path.resolve(`public/img/velas/${slug}.${ext}`);
    if (fs.existsSync(p)) return `/img/velas/${slug}.${ext}`;
  }
  return null;
}
