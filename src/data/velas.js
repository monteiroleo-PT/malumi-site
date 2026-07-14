// ============================================================
// FONTE ÚNICA DE DADOS DAS VELAS - PT + EN
// - stripeUrl: Payment Links do Stripe, activos desde 14 Jul 2026
//   (gerem-se no dashboard Stripe > Payment Links)
// - Fotografias: public/img/velas/<slug>.jpg (capa) e
//   <slug>-1.jpg, <slug>-2.jpg... (galeria) - detecção automática.
// - EN é rascunho para revisão do Leo (chegará ficheiro PT/EN).
// - Usar velaLoc(vela, lang) e fragLoc(frag, lang) nas páginas.
// ============================================================

export const fragrances = [
  {
    slug: 'primavera-em-sintra',
    name: 'Primavera em Sintra',
    family: 'AROMÁTICO AMADEIRADO',
    familyEn: 'WOODY AROMATIC',
  },
  {
    slug: 'golden-oud',
    name: 'Golden Oud',
    family: 'ORIENTAL AMADEIRADO',
    familyEn: 'WOODY ORIENTAL',
  },
  {
    slug: 'serenata-di-fiori',
    name: 'Serenata di Fiori',
    family: 'ÂMBAR FLORAL',
    familyEn: 'FLORAL AMBER',
  },
];

// --- Blocos partilhados por fragrância (2 velas cada) ---

const FRAG = {
  'primavera-em-sintra': {
    pt: {
      fragranciaQuote:
        'Uma sinfonia olfativa que desperta os sentidos e celebra a frescura da natureza.',
      fragranciaTexto:
        'Deixe-se abraçar pelo ar fresco de uma manhã de primavera na Serra de Sintra. As notas mais altas desta fragrância revelam a frescura vibrante do eucalipto e da hortelã, lembrando a brisa pura que serpenteia pelas copas das árvores. No seu coração, delicados toques de íris e ananás acrescentam uma luminosidade refinada, enquanto a base - um lenhoso de cedro com musgo húmido - evoca a profundidade serena de uma floresta banhada pela névoa dourada da manhã. Uma homenagem à beleza intocada da natureza.',
      notas: {
        familia: 'Aromático Amadeirado',
        topo: 'Eucalipto, Cânfora, Hortelã Fresca',
        coracao: 'Cravo, Ananás, Íris, Pó de Talco',
        base: 'Patchouli, Cedro, Musgo, Almíscar',
      },
    },
    en: {
      fragranciaQuote:
        'An olfactory symphony that awakens the senses and celebrates the freshness of nature.',
      fragranciaTexto:
        'Let yourself be embraced by the fresh air of a spring morning in the Sintra hills. The top notes of this fragrance reveal the vibrant freshness of eucalyptus and mint, recalling the pure breeze that winds through the treetops. At its heart, delicate touches of iris and pineapple add a refined luminosity, while the base - cedar wood over damp moss - evokes the serene depth of a forest bathed in golden morning mist. A tribute to the untouched beauty of nature.',
      notas: {
        familia: 'Woody Aromatic',
        topo: 'Eucalyptus, Camphor, Fresh Mint',
        coracao: 'Clove, Pineapple, Iris, Talc',
        base: 'Patchouli, Cedar, Moss, Musk',
      },
    },
  },
  'golden-oud': {
    pt: {
      fragranciaQuote:
        'Uma jornada sensorial de mistério, onde a tradição encontra a atemporalidade.',
      fragranciaTexto:
        'Profunda, magnética e enigmática, esta fragrância é uma interpretação moderna da rica herança aromática do Médio Oriente. As notas mais altas, verdes, emergem como uma brisa fresca a varrer mercados movimentados, cheios de especiarias e sedas opulentas. No coração, uma fusão de couro, âmbar e almíscar cria uma textura quente e sedutora, que lembra lanternas douradas a brilhar na noite. A base - a sua verdadeira essência - é dominada por um oud nobre e um cedro imponente, deixando um rasto intenso: uma marca de memórias esculpidas no tempo.',
      notas: {
        familia: 'Oriental Amadeirado',
        topo: 'Notas Verdes',
        coracao: 'Couro, Âmbar, Almíscar',
        base: 'Patchouli, Oud, Cedro',
      },
    },
    en: {
      fragranciaQuote:
        'A sensory journey of mystery, where tradition meets timelessness.',
      fragranciaTexto:
        'Deep, magnetic and enigmatic, this fragrance is a modern interpretation of the rich aromatic heritage of the Middle East. The green top notes emerge like a fresh breeze sweeping through bustling markets, full of spices and opulent silks. At the heart, a fusion of leather, amber and musk creates a warm, seductive texture, like golden lanterns glowing in the night. The base - its true essence - is ruled by a noble oud and an imposing cedar, leaving an intense trail: a mark of memories carved in time.',
      notas: {
        familia: 'Woody Oriental',
        topo: 'Green Notes',
        coracao: 'Leather, Amber, Musk',
        base: 'Patchouli, Oud, Cedar',
      },
    },
  },
  'serenata-di-fiori': {
    pt: {
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
    en: {
      fragranciaQuote:
        'A tribute to femininity, where delicacy meets power.',
      fragranciaTexto:
        'Floral, radiant and captivating, this fragrance carries us into a timeless garden, where light dances over lush petals. The top notes, neroli and bergamot, awaken the senses with their sparkling brightness, while the heart reveals a refined bouquet of orange blossom, rose and violet. At the base, vanilla wrapped in musk leaves a trail that lingers like a caress. A fragrance for those who embrace elegance and presence.',
      notas: {
        familia: 'Floral Amber',
        topo: 'Neroli, Bergamot',
        coracao: 'Orange Blossom, Rose, Violet',
        base: 'Vanilla, Musk',
      },
    },
  },
};

const DETALHES_PT = {
  detalhesIntro:
    'Cada recipiente de eco-resina é meticulosamente feito à mão, um a um, em Sintra - Portugal. A cera é 100% natural e vegana. Sem parafina. Sem parabenos. Sem corantes. Apenas o nosso compromisso com a criação consciente, livre de crueldade, de queima limpa - amorosamente humanizada e acolhedora.',
  detalhes: [
    'Frasco de eco-resina, 400 g',
    'Cera de soja, 300 g',
    'Pavios de algodão e linho, sem chumbo - garantem uma queima segura e limpa',
    'Aproximadamente 40 h de queima',
    'Fragrâncias da mais alta qualidade, criadas por perfumarias de renome da Europa',
    'Peso total aproximado: 700 g',
    'Dimensões: 100 mm de largura × 100 mm de altura, em caixa com fecho magnético e escrita em alto relevo',
    'Apare o pavio a cerca de 5 mm antes de cada queima. Queime aproximadamente 4 horas de cada vez, ou até a superfície derreter por completo',
  ],
};

const DETALHES_EN = {
  detalhesIntro:
    'Each eco-resin vessel is meticulously handmade, one by one, in Sintra - Portugal. The wax is 100% natural and vegan. No paraffin. No parabens. No dyes. Only our commitment to conscious, cruelty-free creation and a clean burn - lovingly human and welcoming.',
  detalhes: [
    'Eco-resin vessel, 400 g',
    'Soy wax, 300 g',
    'Cotton and linen wicks, lead-free - for a safe, clean burn',
    'Approximately 40 h of burn time',
    'Fragrances of the highest quality, created by renowned European perfume houses',
    'Total weight: approximately 700 g',
    'Dimensions: 100 mm wide × 100 mm tall, in a box with magnetic closure and embossed lettering',
    'Trim the wick to about 5 mm before each burn. Burn for around 4 hours at a time, or until the surface melts completely',
  ],
};

export const velas = [
  {
    slug: 'olive',
    name: 'Olive',
    num: '01 / 06',
    price: '€ 68',
    fragrance: 'primavera-em-sintra',
    gradient: 'radial-gradient(ellipse at 45% 65%, #9FA478 0%, #7C8160 40%, #5C6342 100%)',
    stripeUrl: 'https://buy.stripe.com/5kQ00kb6HfPA1bu4xa3VC05',
    pt: {
      line: 'O verde-oliva que respira sob a copa dos pinheiros.',
      inspiracao:
        'A vela Olive evoca a tranquilidade das paisagens mediterrâneas, onde os olivais se estendem até ao horizonte. Um toque de frescura e elegância para qualquer espaço.',
    },
    en: {
      line: 'The olive green that breathes beneath the pine canopy.',
      inspiracao:
        'The Olive candle evokes the tranquillity of Mediterranean landscapes, where olive groves stretch to the horizon. A touch of freshness and elegance for any space.',
    },
  },
  {
    slug: 'nordic',
    name: 'Nordic',
    num: '02 / 06',
    price: '€ 68',
    fragrance: 'primavera-em-sintra',
    gradient: 'radial-gradient(ellipse at 45% 65%, #7B8995 0%, #5F6E7B 40%, #3F4E5B 100%)',
    stripeUrl: 'https://buy.stripe.com/28E7sM7UvdHs3jC7Jm3VC04',
    pt: {
      line: 'A névoa nórdica que cobre a serra antes do mar.',
      inspiracao:
        'A vela Nordic reflecte a elegância minimalista dos países nórdicos, onde a luz e as sombras, o sol e o frio, criam atmosferas de profundo equilíbrio.',
    },
    en: {
      line: 'The nordic mist that covers the hills before the sea.',
      inspiracao:
        'The Nordic candle reflects the minimalist elegance of the North, where light and shadow, sun and cold, create atmospheres of deep balance.',
    },
  },
  {
    slug: 'onyx',
    name: 'Onyx',
    num: '03 / 06',
    price: '€ 72',
    fragrance: 'golden-oud',
    gradient: 'radial-gradient(ellipse at 45% 65%, #3A3835 0%, #252321 40%, #0E0D0C 100%)',
    stripeUrl: 'https://buy.stripe.com/4gM7sM0s37j47zS3t63VC03',
    pt: {
      line: 'Mistério e sofisticação num só reflexo.',
      inspiracao:
        'A vela Onyx incorpora a elegância atemporal do preto profundo, exalando modernidade. Uma presença marcante, ideal para espaços que respiram requinte.',
    },
    en: {
      line: 'Mystery and sophistication in a single reflection.',
      inspiracao:
        'The Onyx candle embodies the timeless elegance of deep black, exhaling modernity. A striking presence, made for rooms that breathe refinement.',
    },
  },
  {
    slug: 'cotto',
    name: 'Cotto',
    num: '04 / 06',
    price: '€ 72',
    fragrance: 'golden-oud',
    gradient: 'radial-gradient(ellipse at 45% 65%, #C16847 0%, #9D5132 40%, #723620 100%)',
    stripeUrl: 'https://buy.stripe.com/9B6fZigr1dHs2fyaVy3VC02',
    pt: {
      line: 'O terracota que nos liga à terra e à tradição.',
      inspiracao:
        'A vela Cotto é inspirada na cerâmica italiana e nos tons quentes da natureza. Celebra o equilíbrio entre tradição e modernidade, criando um ambiente acolhedor.',
    },
    en: {
      line: 'The terracotta that ties us to the earth and to tradition.',
      inspiracao:
        'The Cotto candle draws on Italian ceramics and the warm tones of nature. It celebrates the balance between tradition and modernity, creating a welcoming atmosphere.',
    },
  },
  {
    slug: 'amber',
    name: 'Amber',
    num: '05 / 06',
    price: '€ 68',
    fragrance: 'serenata-di-fiori',
    gradient: 'radial-gradient(ellipse at 45% 65%, #E8B5A0 0%, #D08C72 40%, #A36148 100%)',
    stripeUrl: 'https://buy.stripe.com/fZu4gAa2D0UG8DW8Nq3VC01',
    pt: {
      line: 'O calor dourado que ilumina qualquer espaço.',
      inspiracao:
        'Inspirada na resina preciosa que atravessa séculos, a vela Amber evoca conforto e tradição. Perfeita para momentos de introspecção.',
    },
    en: {
      line: 'The golden warmth that lights up any room.',
      inspiracao:
        'Inspired by the precious resin that has crossed centuries, the Amber candle evokes comfort and tradition. Perfect for moments of introspection.',
    },
  },
  {
    slug: 'violet',
    name: 'Violet',
    num: '06 / 06',
    price: '€ 68',
    fragrance: 'serenata-di-fiori',
    gradient: 'radial-gradient(ellipse at 45% 65%, #C8B8D8 0%, #9F8AB8 40%, #6F5A88 100%)',
    stripeUrl: 'https://buy.stripe.com/00weVeeiTeLwdYg8Nq3VC00',
    pt: {
      line: 'A violeta entre rosa e baunilha - a doçura que não se impõe.',
      inspiracao:
        'A vela Violet guarda o entardecer nos campos floridos do sul de França - a hora em que a luz abranda e tudo pede pausa. Entre a rosa e a baunilha, uma doçura que não se impõe: fica, discreta, a fazer companhia.',
    },
    en: {
      line: 'The violet between rose and vanilla - a sweetness that never imposes itself.',
      inspiracao:
        'The Violet candle holds the dusk of the flowering fields of southern France - the hour when the light softens and everything asks for pause. Between rose and vanilla, a sweetness that never imposes itself: it stays, discreet, keeping you company.',
    },
  },
];

// 7.ª peça - exemplo de Edição Privada.
// Foto integrada na secção Edição Privada da homepage; falta o texto.

/** Vela localizada: junta os campos do idioma + fragrância + detalhes. */
export function velaLoc(vela, lang) {
  const l = lang === 'en' ? 'en' : 'pt';
  const frag = FRAG[vela.fragrance][l];
  const det = l === 'en' ? DETALHES_EN : DETALHES_PT;
  return { ...vela, ...vela[l], ...frag, ...det };
}

/** Fragrância localizada (nome mantém-se; família traduz). */
export function fragLoc(frag, lang) {
  return { ...frag, family: lang === 'en' ? frag.familyEn : frag.family };
}

import fs from 'node:fs';
import path from 'node:path';

/** Foto de capa: public/img/velas/<slug>.jpg|png - devolve o URL ou null. */
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
