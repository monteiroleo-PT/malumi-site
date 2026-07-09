# Malumi — Site v2 (malumi.pt)

Atelier de design sensorial · Lisboa. Site estático construído com [Astro](https://astro.build), publicado via Netlify.

## Estrutura

- `src/data/velas.js` — **fonte única de dados**: velas, preços, textos, links Stripe
- `src/pages/index.astro` — homepage (hero com foto, banda matéria/fragrância/presença, catálogo, atelier, edição privada, malumi by, faixa @malumi)
- `src/pages/by.astro` — página Malumi by (B2B)
- `src/pages/shop.astro` — loja (6 velas por fragrância)
- `src/pages/product/[slug].astro` — páginas de produto geradas automaticamente (/product/olive, etc.)
- `src/layouts/Base.astro` — header (menu de 5 entradas), footer (4 colunas), estilos globais
- `public/` — favicon, logótipos, fotos (`img/velas/<slug>.png` é detectado automaticamente)

## Desenvolvimento local

```bash
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site em dist/
```

## Publicação

Cada `git push` para `main` publica automaticamente via Netlify (ver `netlify.toml`).

## Pendentes

- Substituir `SUBSTITUIR_STRIPE_XXXX` em `src/data/velas.js` pelos Payment Links do Stripe
- Fotos das velas: colocar `public/img/velas/<slug>.png` (detecção automática no build)
- Fotos da banda matéria/fragrância/presença e do atelier (`index.astro`)
- Textos completos de Nordic, Onyx, Cotto, Amber, Violet + 7.ª peça (preencher `velas.js`)
- Link do Instagram no footer (`src/layouts/Base.astro`)
