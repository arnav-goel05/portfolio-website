# Portfolio Website Architecture

This is a static Vite, React, and TypeScript portfolio deployed with Cloudflare Workers Static Assets. Keep
it dependency-light: pages compose sections, components own reusable presentation, and data modules own
portfolio content and asset metadata.

`react-icons` is the only approved presentation dependency beyond React itself and supplies branded project
and navigation marks without introducing an additional UI framework.

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
- `src/data/seo.ts`: canonical route metadata, shared person identity, and structured selected-work data.
- `src/lib/routes.ts`: framework-independent browser-path normalization.
- `src/lib/collections.ts`: generic project-row chunking with input validation.
- `src/styles/`: base, portfolio, About, and centralized responsive/reduced-motion rules.
- `src/App.css`: import manifest only.
- `scripts/audit-structure.mjs`: deterministic checks for architectural regressions.
- `scripts/audit-seo.mjs`: production-equivalent status, metadata, structured-data, and crawler-resource checks.

The project list is divided into reusable two-card visual rows. Each row uses CSS subgrid to align card
sections, while automatic row construction supports odd counts and growth without index-specific CSS.
Project contributions may be stored as a single paragraph or a short list of structured points;
`ProjectCard` owns the corresponding semantic paragraph or list rendering.
Project outcomes remain concise paragraphs by default, with an optional structured summary, metric list, and
closing note for projects whose measured results benefit from direct comparison.
Project records may also expose one featured external link in the title row for a relevant launch or
project post. Each card keeps its media, summary, and external links visible, while an independent accessible
accordion reveals its detailed Problem, Built, Outcome, and Built With rows on demand.
Project articles expose stable fragment identifiers used by structured data. Accordion detail regions stay
in the rendered document and use native hidden state so the visible interaction and ARIA relationships remain
unchanged while machine readers can associate the evidence with each project.

## Search and discovery delivery

- `src/worker.ts` runs before static assets and is the response-level owner for apex-host canonicalization,
  route-specific head injection, trailing-slash normalization, HEAD behavior, and genuine 404 responses.
- The Worker reuses the single Vite application shell; it does not create server-rendered or individual
  project pages.
- `index.html` contains a complete homepage metadata baseline between stable SEO markers. The Worker replaces
  only that block for Home, About, and not-found responses.
- `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` are non-visual crawler resources. The sitemap
  contains only the existing Home and About routes.
- JSON-LD describes the portfolio website, Arnav's public person identity, the About profile page, and the
  five visible selected projects using claims already present in portfolio content.

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
- `npm run audit:seo -- <origin>` verifies response statuses, unique canonicals, indexing directives, JSON-LD,
  redirect behavior, and discovery-resource content against a running Worker preview or production origin.
- Vitest tests colocated in `src/lib/` cover framework-independent utilities and static-data invariants.
- Playwright journeys in `tests/` run in Chromium and WebKit against `dist/` served by `wrangler dev`, so
  Cloudflare SPA fallback and trailing-slash behavior are part of functional validation.
- `scripts/check-site.mjs` owns the one-request, 15-second, status-and-title availability decision reused by
  production smoke checks and recurring uptime monitoring.
- `wrangler.jsonc` owns Worker routes, the `ASSETS` binding, Worker-first request handling, asset output, and
  SPA fallback behavior.
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
