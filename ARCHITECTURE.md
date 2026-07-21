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
- `src/lib/routes.ts`: framework-independent browser-path normalization.
- `src/lib/collections.ts`: generic project-row chunking with input validation.
- `src/styles/`: base, portfolio, About, and centralized responsive/reduced-motion rules.
- `src/App.css`: import manifest only.
- `scripts/audit-structure.mjs`: deterministic checks for architectural regressions.

The project list is divided into reusable two-card visual rows. Each row uses CSS subgrid to align card
sections, while automatic row construction supports odd counts and growth without index-specific CSS.
Project contributions may be stored as a single paragraph or a short list of structured points;
`ProjectCard` owns the corresponding semantic paragraph or list rendering.
Project records may also expose one featured external link in the title row for a relevant launch or
project post, while the standard product and GitHub links sit below the project summary and above its
detailed Problem, Built, and Outcome rows.

## Media delivery

- Hero decoration uses WebP assets and is hidden from assistive technology.
- Below-fold project images lazy-load and decode asynchronously.
- Project video uses its still as a loading poster, loads with the card, autoplays silently, loops
  continuously, retains inline playback, and exposes no playback controls or pointer interaction.
- Generated source material and QA captures are not tracked; only production-ready assets belong in
  `src/assets/`.

## Validation and deployment

- `npm run check:quality` runs formatting, the structure audit, lint, unit tests, TypeScript compile, and the
  production build. `npm run check:ci` adds a Wrangler deployment dry run.
- Vitest tests colocated in `src/lib/` cover framework-independent utilities and static-data invariants.
- Playwright journeys in `tests/` run in Chromium and WebKit against `dist/` served by `wrangler dev`, so
  Cloudflare SPA fallback and trailing-slash behavior are part of functional validation.
- `scripts/check-site.mjs` owns the one-request, 15-second, status-and-title availability decision reused by
  production smoke checks and recurring uptime monitoring.
- `wrangler.jsonc` owns Worker routes, asset output, and SPA fallback behavior.
- The site has no server-side data requirement; D1 and R2 must not be introduced without a specified need.
- Spec Kit artifacts under `.specify/`, `.agents/skills/`, and `specs/` document governed changes and
  convergence evidence.

## Delivery ownership

- `.github/workflows/ci.yml` owns read-only pull-request and protected-branch validation. Stable job names
  `quality` and `e2e` gate both branches; `release-source` additionally gates production PRs.
- `.github/workflows/uptime.yml` is the only workflow with issue-write permission. It maintains one quiet
  outage issue across a single-request failure and subsequent recovery.
- `develop` is the integration branch. `master` remains the default, stable, and production branch.
- Feature branches target `develop`; production releases are manually opened from `develop` to `master`.
- Cloudflare Workers Builds owns branch previews and production deployments. Non-production branches upload
  versions; only `master` deploys the canonical routes and runs the production smoke command.
- The deployment remains one static asset Worker with no D1, R2, queues, secrets, snapshot preparation, or
  staging Worker.
