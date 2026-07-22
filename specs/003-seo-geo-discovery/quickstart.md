# Quickstart: Validate SEO and GEO Discovery

## Prerequisites

- Node.js 22+
- Installed dependencies (`npm ci`)

## Build and local Worker preview

```bash
npm run build
npm run preview:worker
```

## Automated audit

```bash
npm run audit:seo -- http://127.0.0.1:8787
npm run check:quality
npx wrangler deploy --dry-run
```

Expected audit outcomes:

- Home and About return 200 with unique canonical metadata.
- Unknown route returns 404 and noindex.
- Robots and LLM resources are plain text; sitemap is XML with two URLs.
- Homepage JSON-LD contains the person, website, and five projects.

## Chrome interaction validation

1. Open the local or deployed homepage in Chrome.
2. Inspect the rendered title, description, canonical, social metadata, and JSON-LD count.
3. Open and close one project accordion.
4. Confirm the controlled details region exists, its hidden state changes, and the visible presentation is unchanged.
5. Open About and confirm its title, description, and canonical differ from Home.

## Production validation

```bash
npm run smoke:production
npm run audit:seo -- https://arnav-goel.com
```
