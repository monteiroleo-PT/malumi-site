// ============================================================
// FONTE ÚNICA DE DADOS DAS VELAS
// - stripeUrl: substituir cada "SUBSTITUIR_STRIPE_..." pelo
//   Payment Link do Stripe (https://buy.stripe.com/...)
// - Fotografias: public/img/velas/<slug>.jpg (capa) e
//   <slug>-1.jpg, <slug>-2.jpg... (galeria) — detecção automática.
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

// --- Blocos partilhados por fragrância (2 velas cada) ---

const FRAG = {
  'primavera-em-sintra': {
    fragranciaQuote:
      'Uma sinfonia olfativa que desperta os sentidos e celebra a frescura da natureza.',
    fragranciaTexto:
      'Deixe-se abraçar pelo ar fresco de uma manhã de primavera na Serra de Sintra. As notas mais altas desta fragrância revelam a frescura vibrante do eucalipto e da hortelã, lembrando a brisa pura que serpenteia pelas copas das árvores. No seu coração, delicados toques de íris e ananás acrescentam uma luminosidade refinada, enquanto a base — um lenhoso de cedro com musgo húmido — evoca a profundidade serena de uma floresta banhada pela névoa dourada da manhã. Uma homenagem à beleza intocada da natureza.',
    notas: {
      familia: 'Aromático Amadeirado',
      topo: 'Eucalipto, Cânfora, Hortelã Fresca',
      coracao: 'Cravo, Ananás, Íris, Pó de Talco',
      base: 'Patchouli, Cedro, Musgo, Almíscar',
    },
  },
  'golden-oud': {
    fragranciaQuote:
      'Uma jornada sensorial de mistério, onde a tradição encontra a atemporalidade.',
    fragranciaTexto:
      'Profunda, magnética e enigmática, esta fragrância é uma interpretação moderna da rica herança aromática do Médio Oriente. As notas mais altas, verdes, emergem como uma brisa fresca a varrer mercados movimentados, cheios de especiarias e sedas opulentas. No coração, uma fusão de couro, âmbar e almíscar cria uma textura quente e sedutora, que lembra lanternas douradas a brilhar na noite. A base — a sua verdadeira essência — é dominada por um oud nobre e um cedro imponente, deixando um rasto intenso: uma marca de memórias esculpidas no tempo.',
    notas: {
      familia: 'Oriental Amadeirado',
      topo: 'Notas Verdes',
      coracao: 'Couro, Âmbar, Almíscar',
      base: 'Patchouli, Oud, Cedro',
    },
  },
  'serenata-di-fiori': {
    fragranciaQuote:
      'Uma homenagem à feminilidade, onde a delicadeza encontra o poder.',
    fragranciaTexto:
      'Floral, radiante e cativante, esta fragrância transporta-nos para um jardim atemporal, onde a luz dança sobre pétalas exuberantes. As notas mais altas, néroli e bergamota, despertam os sentidos com o seu brilho efervescente, enquanto o coração revela um bouquet refinado de flor de laranjeira, rosa e violeta. Na base, a baunilha envolta em almíscar deixa um rasto que perdura como uma carícia. Uma fragrância para quem abraça a elegância e a presença.',
    notas: {
      familia: 'Âmbar Floral',
      topo: 'Néroli, Bergamota',
      coracao: 'Flor de Laranjeira, Rosa, Violeta',
      base: 'Baunilha, Almíscar',
    },
  },
};

const DETALHES_INTRO =
  'Cada recipiente de eco-resina é meticulosamente feito à mão, um a um, em Sintra — Portugal. A cera é 100% natural e vegana. Sem parafina. Sem parabenos. Sem corantes. Apenas o nosso compromisso com a criação consciente, livre de crueldade, de queima limpa — amorosamente humanizada e acolhedora.';

const DETALHES = [
  'Frasco de eco-resina, 400 g',
  'Cera de soja, 300 g',
  'Pavios de algodão e linho, sem chumbo — garantem uma queima segura e limpa',
  'Aproximadamente 40 h de queima',
  'Fragrâncias da mais alta qualidade, criadas por perfumarias de renome da Europa',
  'Peso total aproximado: 700 g',
  'Dimensões: 100 mm de largura × 100 mm de altura, em caixa com fecho magnético e escrita em alto relevo',
  'Apare o pavio a cerca de 5 mm antes de cada queima. Queime aproximadamente 4 horas de cada vez, ou até a superfície derreter por completo',
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
      'A vela Olive evoca a tranquilidade das paisagens mediterrâneas, onde os olivais se estendem até ao horizonte. Um toque de frescura e elegância para qualquer espaço.',
    ...FRAG['primavera-em-sintra'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
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
    inspiracao:
      'A vela Nordic reflecte a elegância minimalista dos países nórdicos, onde a luz e as sombras, o sol e o frio, criam atmosferas de profundo equilíbrio.',
    ...FRAG['primavera-em-sintra'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
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
    inspiracao:
      'A vela Onyx incorpora a elegância atemporal do preto profundo, exalando modernidade. Uma presença marcante, ideal para espaços que respiram requinte.',
    ...FRAG['golden-oud'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
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
    inspiracao:
      'A vela Cotto é inspirada na cerâmica italiana e nos tons quentes da natureza. Celebra o equilíbrio entre tradição e modernidade, criando um ambiente acolhedor.',
    ...FRAG['golden-oud'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
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
    inspiracao:
      'Inspirada na resina preciosa que atravessa séculos, a vela Amber evoca conforto e tradição. Perfeita para momentos de introspecção.',
    ...FRAG['serenata-di-fiori'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
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
    inspiracao:
      'A vela Violet guarda o entardecer nos campos floridos do sul de França — a hora em que a luz abranda e tudo pede pausa. Entre a rosa e a baunilha, uma doçura que não se impõe: fica, discreta, a fazer companhia.',
    ...FRAG['serenata-di-fiori'],
    detalhesIntro: DETALHES_INTRO,
    detalhes: DETALHES,
  },
];

// 7.ª peça — exemplo de Edição Privada.
// Foto já entregue (Conteudo_Velas/7a_Vela_Edicao_Privada/) — falta o texto.
// Quando existir, cria-se aqui a entrada e a página é gerada automaticamente.

import fs from 'node:fs';
import path from 'node:path';

/** Foto de capa: public/img/velas/<slug>.jpg|png — devolve o URL ou null. */
export function fotoDe(slug) {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    const p = path.resolve(`public/img/velas/${slug}.${ext}`);
    if (fs.existsSync(p)) return `/img/velas/${slug}.${ext}`;
  }
  return null;
}

/** Galeria completa: capa + <slug>-1, <slug>-2, ... por ordem. */
export function galeriaDe(slug) {
  const fotos = [];
  const capa = fotoDe(slug);
  if (capa) fotos.push(capa);
  for (let i = 1; i <= 20; i++) {
    let found = null;
    for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
      const p = path.resolve(`public/img/velas/${slug}-${i}.${ext}`);
      if (fs.existsSync(p)) { found = `/img/velas/${slug}-${i}.${ext}`; break; }
    }
    if (found) fotos.push(found);
  }
  return fotos;
}
