# Ofox-Docs

> ⚠️ Showcase Only — Core implementation not included.

Developer documentation site for [OfoxAI](https://ofox.ai) — a unified API gateway that provides a single interface to 100+ large language models. This repository showcases the public-facing documentation built from scratch by the author during an internship at OfoxAI.

**Live site:** <https://ofox.ai/docs>

---

## Overview

OfoxAI lets developers call any supported LLM through a unified, OpenAI-compatible API endpoint. This docs site is the canonical reference for integrating with the platform — from first API call to production deployment.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Docs engine | Nextra 4 |
| Language | TypeScript |
| Content format | MDX |
| Styling | Tailwind CSS |
| Hosting | Vercel |

## Features

### Internationalization
The site ships in **10 languages**, with full content parity across:

`zh` · `en` · `ja` · `ko` · `fr` · `de` · `es` · `pt` · `ru` · `zh-TW`

### Documentation Coverage

**Quick-start guides**
Step-by-step onboarding for the three most common protocol families:
- OpenAI-compatible (`/v1/chat/completions`)
- Anthropic Messages API
- Google Gemini API

**API Reference**
Complete endpoint documentation including request/response schemas, authentication, rate limits, error codes, and model capability tables.

**Integration Tutorials**
20+ guides covering popular tools and frameworks:

| Category | Tools |
|---|---|
| AI coding assistants | Claude Code, Cursor, Cline, Zed, GitHub Copilot |
| Frameworks | LangChain, LlamaIndex |
| Clients & plugins | OpenWebUI, Continue, ChatBox |
| And more | cherry-picked by community demand |

## Architecture

```
MDX content (per-locale)
        │
        ▼
  Nextra 4 (file-system routing, sidebar generation)
        │
        ▼
  Next.js 15 (App Router, SSG/ISR)
        │
        ▼
  Vercel Edge Network  ──►  ofox.ai/docs
```

## Status

This is a showcase repository. The documentation source is maintained as an internal project at OfoxAI. The live site at <https://ofox.ai/docs> reflects the current published version.

## Author

Built during an internship at OfoxAI. All content, structure, and tooling choices were designed and implemented by the author.
