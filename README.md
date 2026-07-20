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

| Area | Tools |
|---|---|
| Interface | React 19, TypeScript, semantic HTML, modular CSS |
| Development | Vite, ESLint |
| Hosting | Cloudflare Workers Static Assets |
| Validation | TypeScript build, ESLint, repository structure audit |
| Planning | GitHub Spec Kit artifacts under [`specs/`](specs/) |

## Routes

| Route | Purpose |
|---|---|
| `/` | Hero and selected project case studies |
| `/about` | Profile, contact details, experience, and skills |
| Any other path | Explicit not-found page with a link home |

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

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create the production bundle in `dist/` |
| `npm run preview` | Preview the production bundle locally |
| `npm run lint` | Run ESLint |
| `npm run audit:structure` | Check module reachability, asset use, dependency cycles, data IDs, and repository rules |
| `npm run check` | Run the structure audit, lint, and production build |
| `npm run deploy:preview` | Build and run the Worker locally through Wrangler |
| `npm run deploy` | Build and deploy the Worker to the configured domains |

Before committing a change, run:

```bash
npm run check
npx wrangler deploy --dry-run
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

- `src/App.tsx` owns path normalization and page selection.
- `src/pages/` owns page-level composition.
- `src/components/` owns reusable interface and behavior.
- `src/data/` owns static portfolio content and asset metadata.
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

## Contact

- [Email](mailto:arnav.goel@u.nus.edu)
- [LinkedIn](https://www.linkedin.com/in/arnav--goel/)
- [GitHub](https://github.com/arnav-goel05)
