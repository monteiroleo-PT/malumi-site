# Malumi — Site v2 (malumi.pt)

Atelier de design sensorial · Sintra. Site estático bilingue (PT/EN) construído com [Astro](https://astro.build), publicado via Netlify, com checkout via Stripe Payment Links.

## Estrutura

- `src/data/velas.js` — **fonte única de dados**: velas, preços, textos (PT/EN), links Stripe
- `src/i18n/textos.js` — dicionário de strings de UI (PT/EN)
- `src/components/*Page.astro` — componentes partilhados (HomePage, ShopPage, ByPage, ProductPage), recebem `lang` como prop
- `src/pages/*.astro` e `src/pages/en/*.astro` — wrappers finos por idioma que renderizam os componentes acima
- `src/pages/product/[slug].astro` e `src/pages/en/product/[slug].astro` — páginas de produto geradas automaticamente (/product/olive, etc.)
- `src/layouts/Base.astro` — header (menu de 5 entradas), footer (4 colunas), estilos globais, hreflang PT/EN
- `public/img/velas/` — fotos das velas, detecção automática por slug (`<slug>.jpg` capa + `<slug>-N.jpg` galeria)

## Desenvolvimento local

```bash
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site em dist/
```

## Publicação

Cada `git push` para `main` publica automaticamente via Netlify (ver `netlify.toml`). Site em produção: `malumi.netlify.app` (domínio malumi.pt por apontar).

## Estado (21 Jul 2026)

Feito: as 6 velas com fotos, textos (PT/EN) e Payment Links Stripe activos; loja, páginas de produto com galeria, homepage, /by bilingues.

Pendentes:
- Texto da 7.ª peça (exemplo de Edição Privada, foto já na homepage)
- Handle real do Instagram no footer (`src/layouts/Base.astro`)
- Revisão das tarifas de envio no Stripe (valores e países)
- Apontar o DNS de malumi.pt para o Netlify
