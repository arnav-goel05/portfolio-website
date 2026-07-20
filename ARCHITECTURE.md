# Portfolio Website Architecture

This is a static Vite, React, and TypeScript portfolio deployed with Cloudflare Workers Static Assets. Keep
it dependency-light: pages compose sections, components own reusable presentation, and data modules own
portfolio content and asset metadata.

## Application flow

- `src/main.tsx` mounts the app.
- `src/App.tsx` normalizes the browser path, renders the shared cursor once, and selects:
  - `PortfolioPage` for `/`
  - `AboutPage` for `/about` and `/about/`
  - `NotFoundPage` for every unknown path
- Project information stays on the homepage; there are no individual project routes.
- Cloudflare's single-page fallback serves direct route loads.

## Ownership boundaries

- `src/pages/`: page-level section order and composition only.
- `src/components/`: reusable navigation, project card/media, and cursor behavior.
- `src/data/portfolio.ts`: typed project records and production-media references.
- `src/data/about.ts`: About profile, uniquely identified experiences, and skills.
- `src/data/site.ts`: shared navigation and contact destinations.
- `src/data/hero.ts`: decorative hero asset inventory and positioning tokens.
- `src/styles/`: base, portfolio, About, and centralized responsive/reduced-motion rules.
- `src/App.css`: import manifest only.
- `scripts/audit-structure.mjs`: deterministic checks for architectural regressions.

The project list is divided into reusable two-card visual rows. Each row uses CSS subgrid to align card
sections, while automatic row construction supports odd counts and growth without index-specific CSS.

## Media delivery

- Hero decoration uses WebP assets and is hidden from assistive technology.
- Below-fold project images lazy-load and decode asynchronously.
- Project video uses its still as a poster, attaches its source near the viewport, pauses outside it, loops
  silently, and retains inline playback.
- Generated source material and QA captures are not tracked; only production-ready assets belong in
  `src/assets/`.

## Validation and deployment

- `npm run check` runs the structure audit, lint, TypeScript compile, and production build.
- `wrangler.jsonc` owns Worker routes, asset output, and SPA fallback behavior.
- The site has no server-side data requirement; D1 and R2 must not be introduced without a specified need.
- Spec Kit artifacts under `.specify/`, `.agents/skills/`, and `specs/` document governed changes and
  convergence evidence.
