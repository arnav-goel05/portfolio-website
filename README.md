# Arnav Goel Portfolio

A lightweight React and TypeScript portfolio for selected product, applied-AI, and spatial-computing work.
Project case studies live on the homepage; the site also includes an About page and explicit not-found state.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Vite prints the available local URL. To use a fixed port:

```bash
npm run dev -- --host 127.0.0.1 --port 4174
```

## Validation

```bash
npm run check
```

This runs the repository structure audit, ESLint, TypeScript compilation, and a production Vite build.

## Content and structure

- Project case studies: `src/data/portfolio.ts`
- About content: `src/data/about.ts`
- Shared site links: `src/data/site.ts`
- Hero sticker configuration: `src/data/hero.ts`
- Reusable interface: `src/components/`
- Page composition: `src/pages/`
- Visual rules: `src/styles/`

Read `ARCHITECTURE.md`, `DESIGN.md`, and `AGENTS.md` before changing structure or visuals.

## Deployment

The site deploys as static assets on Cloudflare Workers. `wrangler.jsonc` contains the Worker name, custom
domains, asset directory, and single-page fallback. No D1 database or R2 bucket is required.

```bash
npm run deploy
```

Use `npx wrangler deploy --dry-run` to validate the bundle without publishing.
