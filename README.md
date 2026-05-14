# Ofox-Docs

> **Showcase** — ~15% skeleton. Core implementation not included.

Source for the [OfoxAI developer documentation](https://ofox.ai/docs). OfoxAI is a unified API gateway providing access to 100+ LLMs through a single endpoint. This site is not open source; the repository demonstrates the documentation infrastructure.

## Stack

- Next.js 15
- Nextra 4
- TypeScript
- MDX

## Scope

- 10 languages (i18n via Nextra)
- 20+ tool integration tutorials (OpenAI SDK, LangChain, LlamaIndex, etc.)
- API reference, quickstart, model catalog, pricing, changelog

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
Ofox-Docs/
├── pages/
│   ├── en/          # English source pages
│   ├── zh/          # Chinese translations
│   └── ...          # 8 additional locales
├── components/      # custom MDX components
├── public/          # static assets
├── theme.config.tsx # Nextra theme config
└── next.config.js
```

## Adding a Page

1. Create an MDX file under `pages/<locale>/`.
2. Add the route to `_meta.json` in the same directory.
3. If adding a new tutorial, follow the template in `pages/en/integrations/_template.mdx`.

## Note

This repository is a showcase of the documentation site architecture. The live site is maintained privately.
