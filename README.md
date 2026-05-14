<div align="center">

# 📖 Ofox Docs

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Nextra](https://img.shields.io/badge/Nextra-4-9B7E51?style=flat-square)](https://nextra.site)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://ofox.ai/docs)

**Developer documentation site for OfoxAI — unified API gateway for 100+ LLMs**

> ⚠️ **Showcase Only** — ~15% skeleton. Full source is internal; live site at [ofox.ai/docs](https://ofox.ai/docs).

</div>

---

## ✨ Overview

OfoxAI provides a single API endpoint that proxies 100+ large language models — GPT, Claude, Gemini and more — with full SDK compatibility. This repo is the documentation site I authored from scratch as part of my internship.

**Live site:** [ofox.ai/docs](https://ofox.ai/docs)

Key coverage:

- Quick-start guides for **OpenAI / Anthropic / Gemini** SDK protocols
- Complete **API reference** for all three protocols
- Integration tutorials for **20+ tools** (Claude Code, Cursor, Cline, Zed, GitHub Copilot, LangChain, LlamaIndex, and more)
- Full **i18n** — 10 languages: zh · en · ja · ko · fr · de · es · pt · ru · zh-TW

---

## 🏗️ Architecture

```
  content/
  ├── zh/                          en/  ja/  ko/  ...
  │   ├── index.mdx                (homepage)
  │   ├── develop/                 (quick-start guides)
  │   │   ├── index.mdx
  │   │   ├── authentication.mdx
  │   │   └── models.mdx
  │   ├── api/                     (API reference)
  │   │   └── ...
  │   └── integrations/            (20+ tool tutorials)
  │       ├── claude-code/
  │       ├── cursor.mdx
  │       ├── cline.mdx
  │       └── ...
  │
  src/app/          ← Next.js App Router (layout, theme, i18n routing)
  src/components/   ← shared UI (cards, tabs, callouts)
```

---

## 📁 Structure

```
ofox-docs/
├── content/
│   ├── zh/
│   │   ├── index.mdx
│   │   ├── develop/
│   │   ├── api/
│   │   └── integrations/
│   └── en/  ja/  ko/  fr/  ...
├── src/
│   ├── app/
│   └── components/
├── public/
├── next.config.ts
└── package.json
```

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Docs engine | Nextra 4 |
| Content | MDX |
| Styling | Tailwind CSS |
| i18n | 10 languages |
| Deployment | Vercel |

---

<div align="center">
<sub>Showcase version · Full source internal · Live at ofox.ai/docs</sub>
</div>
