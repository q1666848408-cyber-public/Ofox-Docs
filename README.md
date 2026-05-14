# Ofox-Docs

> **⚠️ Showcase Repository** — This is a portfolio demonstration. The full source is the open-source project at [github.com/ofoxai/ofox-docs](https://github.com/ofoxai/ofox-docs), published at **[ofox.ai/docs](https://ofox.ai/docs)**.

Developer documentation site for **OfoxAI** — a unified API gateway giving developers access to 100+ large language models through a single endpoint.

---

## What This Is

I authored this documentation site from scratch as part of my internship at an AI startup. The codebase is fully open-sourced under the [ofoxai](https://github.com/ofoxai) GitHub org.

**Live site:** [ofox.ai/docs](https://ofox.ai/docs)  
**Full source:** [github.com/ofoxai/ofox-docs](https://github.com/ofoxai/ofox-docs)

---

## Architecture

```
ofox-docs/
├── src/
│   ├── app/              # Next.js App Router (layout, theme)
│   ├── components/       # Shared UI components
│   └── lib/              # Utilities
├── content/
│   ├── zh/               # Chinese docs
│   │   ├── index.mdx     # Homepage
│   │   ├── develop/      # Quick-start guides
│   │   ├── api/          # API reference
│   │   └── integrations/ # 20+ tool integration tutorials
│   ├── en/               # English docs
│   ├── ja/               # Japanese
│   ├── ko/               # Korean
│   └── ...               # 10 languages total
├── public/               # Static assets (logos, screenshots)
├── next.config.ts
└── package.json
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Docs Engine | Nextra 4 |
| Content | MDX |
| Styling | Tailwind CSS |
| i18n | 10 languages (zh / en / ja / ko / fr / de / es / pt / ru / zh-TW) |
| Deployment | Vercel |

## Coverage

- **Quick Start** — 3-minute onboarding for OpenAI / Anthropic / Gemini SDK protocols
- **API Reference** — Full endpoint docs for all 3 protocols
- **Tool Integrations** — 20+ tutorials: Claude Code, Cursor, Cline, Zed, GitHub Copilot, LangChain, LlamaIndex, Cherry Studio, and more
- **Changelog** — Version history and release notes
- **Observability** — Logging and monitoring guide

## Local Development

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

---

*Built and maintained by [g.t](https://github.com/q1666848408) · Full source at [github.com/ofoxai/ofox-docs](https://github.com/ofoxai/ofox-docs)*
