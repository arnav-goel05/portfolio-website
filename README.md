# Arnav Goel Portfolio

The source for [arnav-goel.com](https://arnav-goel.com), a lightweight portfolio presenting selected work
across product development, applied AI, and spatial computing. Each project is summarized directly on the
homepage through its problem, implementation, outcome, technology, media, and relevant external links.

## Featured work

- **TRIBE v2 Music Optimization** — a neuroscience-guided music-production pipeline that uses predicted
  cortical responses to optimize a track toward a calmer profile.
- **Amble** — a live, cloud-native 3D map for discovering events, food, landmarks, and routes in Singapore.
- **Vision Pro Hand Dexterity Assessment** — a visionOS hand-eye coordination assessment developed with the
  NUH Department of Rehabilitation for clinical research and stroke rehabilitation.
- **ProcurePilot** — a multi-tenant, AI-assisted F&B procurement workflow connecting Telegram, Gmail,
  document intelligence, delivery checks, and owner approvals.

Project claims and links are maintained in [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Site highlights

- Responsive two-column project presentation that supports an arbitrary number of projects.
- Compact frosted navigation shared across the portfolio and About pages.
- Accessible heading structure, keyboard focus, accordion semantics, and reduced-motion support.
- Mouse-only custom cursor that safely falls back for touch and coarse-pointer devices.
- Lazy-loaded project images and viewport-aware, muted video playback.
- Explicit not-found state and direct loading of `/about` through Cloudflare's SPA fallback.
- No external font dependency, database, object-storage bucket, or client-side routing package.

## Technology

| Area        | Tools                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Interface   | React 19, TypeScript, semantic HTML, modular CSS                                               |
| Development | Vite, ESLint, Prettier                                                                         |
| Hosting     | Cloudflare Workers Static Assets                                                               |
| Validation  | Vitest, Playwright (Chromium and WebKit), TypeScript build, ESLint, repository structure audit |
| Planning    | GitHub Spec Kit artifacts under [`specs/`](specs/)                                             |

## Routes

| Route          | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `/`            | Hero and selected project case studies           |
| `/about`       | Profile, contact details, experience, and skills |
| Any other path | Explicit not-found page with a link home         |

## Local development

Requirements:

- Node.js 22 or newer
- npm

```bash
git clone https://github.com/arnav-goel05/portfolio-website.git
cd portfolio-website
npm ci
npm run dev
```

Vite prints the available local URL. To use a fixed port:

```bash
npm run dev -- --host 127.0.0.1 --port 4174
```

## Commands

| Command                    | Purpose                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------- |
| `npm run dev`              | Start the Vite development server                                                       |
| `npm run build`            | Type-check and create the production bundle in `dist/`                                  |
| `npm run preview`          | Preview the production bundle locally                                                   |
| `npm run preview:worker`   | Serve the built `dist/` bundle through local Wrangler on port 8787                      |
| `npm run lint`             | Run ESLint                                                                              |
| `npm run format`           | Format tracked text files covered by the Prettier configuration                         |
| `npm run format:check`     | Verify formatting without changing files                                                |
| `npm run audit:structure`  | Check module reachability, asset use, dependency cycles, data IDs, and repository rules |
| `npm run test:unit`        | Run route, collection, and data-integrity unit tests                                    |
| `npm run test:e2e`         | Run functional journeys in Chromium and WebKit against local Wrangler                   |
| `npm run test`             | Run unit and functional browser tests                                                   |
| `npm run check:quality`    | Run formatting, architecture, lint, unit tests, and production build                    |
| `npm run check:ci`         | Run all quality checks plus a Wrangler deployment dry run                               |
| `npm run smoke:production` | Make one 15-second production request and validate status plus page title               |
| `npm run deploy:preview`   | Build and run the Worker locally through Wrangler                                       |
| `npm run deploy`           | Build and deploy the Worker to the configured domains                                   |
| `npm run deploy:ci`        | Deploy the existing build and immediately run the one-request production smoke check    |

Before committing a change, run:

```bash
npm run check:ci
npm run build
npm run test:e2e
```

Install Playwright's two browser engines once before the first local functional run:

```bash
npx playwright install chromium webkit
```

## Updating content

- Add or edit projects in [`src/data/portfolio.ts`](src/data/portfolio.ts). The project grid constructs rows
  automatically, so adding a project does not require CSS positioning changes.
- Update profile, experience, and skills in [`src/data/about.ts`](src/data/about.ts). Every experience requires
  a stable, unique `id` for accordion state and accessibility wiring.
- Update shared navigation and contact links in [`src/data/site.ts`](src/data/site.ts).
- Update decorative hero stickers and their position tokens in [`src/data/hero.ts`](src/data/hero.ts) and
  [`src/styles/portfolio.css`](src/styles/portfolio.css).
- Place only production-ready media in `src/assets/`; generated source material and QA captures remain
  untracked.

## Architecture

The application intentionally keeps responsibilities narrow:

- `src/App.tsx` owns page selection and consumes shared path normalization from `src/lib/`.
- `src/pages/` owns page-level composition.
- `src/components/` owns reusable interface and behavior.
- `src/data/` owns static portfolio content and asset metadata.
- `src/lib/` owns small framework-independent utilities and their unit tests.
- `src/styles/` owns feature CSS; responsive and reduced-motion rules remain centralized.
- `src/App.css` is an import manifest only.

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for module and media-delivery decisions, [`DESIGN.md`](DESIGN.md)
for the visual contract, and [`AGENTS.md`](AGENTS.md) for repository contribution constraints.

## Deployment

The production build is deployed as static assets through the `arnav-goel-portfolio` Cloudflare Worker.
[`wrangler.jsonc`](wrangler.jsonc) configures:

- `arnav-goel.com` and `www.arnav-goel.com` as custom domains.
- `dist/` as the production asset directory.
- Single-page fallback for direct route loading.
- Automatic trailing-slash handling.

The current portfolio is fully static, so D1 and R2 are intentionally not configured. Wrangler authentication
must be available locally before running `npm run deploy`; credentials are never stored in this repository.

### Branch and release flow

`master` is the stable default and production branch. `develop` is the integration branch.

```text
codex/<description> → pull request to develop → manual pull request from develop to master
```

- Feature branches must explicitly target `develop`.
- Pull requests to `develop` require the `quality` and `e2e` checks.
- Production pull requests are opened manually from `develop` to `master` and additionally require
  `release-source`.
- Direct pushes, force pushes, and deletion are blocked on both long-lived branches. No approval count is
  required while the repository has one maintainer.
- GitHub Actions runs with read-only permissions except for the dedicated uptime workflow.

### Cloudflare previews and production

Cloudflare Workers Builds is connected to this repository. Feature branches and `develop` upload
non-production versions for review. Only `master` deploys the configured custom domains. The production
build runs the same deterministic quality command as local development, deploys the Worker, and then makes
one smoke request to verify HTTP 200 and the expected portfolio title.

No D1 database, R2 bucket, queue, staging Worker, snapshot preparation, or application secret is part of
this deployment.

### Uptime monitoring

The production uptime workflow runs on demand and on a five-minute cron offset from the start of the hour.
Each execution makes exactly one request to `https://arnav-goel.com/`, waits at most 15 seconds, and retries
zero times. A result is healthy only when the response is HTTP 200 and includes the expected portfolio
title.

On failure, the workflow opens one labelled issue named `[Uptime] arnav-goel.com is unavailable`; repeated
failures leave that issue unchanged. The first later success adds one recovery comment and closes it.
GitHub schedules are best effort: runs can be delayed or dropped under load, and public-repository schedules
are disabled after 60 days without repository activity.

## Contact

- [Email](mailto:arnav.goel@u.nus.edu)
- [LinkedIn](https://www.linkedin.com/in/arnav--goel/)
- [GitHub](https://github.com/arnav-goel05)
