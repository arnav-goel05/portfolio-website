# Implementation Plan: Portfolio CI/CD and Uptime Pipeline

**Branch**: `codex/portfolio-ci-cd` | **Date**: 2026-07-20 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-portfolio-ci-cd/spec.md`

## Summary

Introduce a two-branch delivery model with deterministic local and hosted validation, production-equivalent browser tests, Cloudflare branch previews, manual releases, and a single-request uptime monitor. Small pure utilities make existing route normalization and project-row construction directly unit-testable. GitHub Actions supply the required `quality`, `e2e`, and `release-source` checks; Cloudflare Workers Builds supplies preview and production deployments without adding runtime state.

## Technical Context

**Language/Version**: TypeScript 6, Node.js 22, ECMAScript modules, YAML workflow definitions

**Primary Dependencies**: React 19, Vite 8, Wrangler 4, Prettier, Vitest, Playwright, GitHub Actions, Cloudflare Workers Static Assets

**Storage**: N/A; workflows may manage a GitHub issue but the application remains stateless

**Testing**: Vitest for pure utilities and data invariants; Playwright projects for Chromium and WebKit; deterministic architecture audit; ESLint; production TypeScript/Vite build; Wrangler dry run

**Target Platform**: Modern desktop and mobile web browsers, GitHub-hosted Ubuntu runners, Cloudflare Workers Static Assets

**Project Type**: Static client web application with repository automation

**Performance Goals**: Uptime decision after one request with a 15-second timeout; superseded pull-request runs cancelled; one application build per browser-test job

**Constraints**: No D1, R2, queues, staging Worker, visual snapshots, automatic release PRs, monitor retry, or extra runtime secret; `master` remains default and production

**Scale/Scope**: One portfolio application, four current project cards, two protected branches, two browser engines, one canonical production URL

## Constitution Check

*GATE: Passed before research and passed again after design.*

- **I. Visual Fidelity**: PASS. No visual behavior is changed; browser tests protect established layouts and reduced overflow risk.
- **II. Explicit Module Boundaries**: PASS. Shared pure utilities live in `src/lib/`; application composition remains in existing owners; automation stays in `.github/` and `scripts/`.
- **III. Lean and Reproducible Delivery**: PASS. Dev-only validation dependencies are purposeful, generated reports are ignored, and deployment remains static with no stateful Cloudflare services.
- **IV. Accessible and Responsive by Default**: PASS. Functional coverage includes accordion ARIA relationships, navigation, direct routes, and desktop/mobile overflow.
- **V. Evidence Before Completion**: PASS. Local quality, unit, browser, build, dry-run, smoke, hosted check, preview, deployment, and uptime exercises are explicit rollout gates.
- **Engineering constraints**: PASS. React/TypeScript and Cloudflare Workers remain; `ARCHITECTURE.md` and README will document the new ownership and workflow; no visual design change requires `DESIGN.md` modification.

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-ci-cd/
├── checklists/requirements.md
├── contracts/
│   ├── branch-policy.md
│   └── uptime-monitor.md
├── data-model.md
├── plan.md
├── quickstart.md
├── research.md
├── spec.md
└── tasks.md
```

### Source Code (repository root)

```text
.github/
├── pull_request_template.md
└── workflows/
    ├── ci.yml
    └── uptime.yml
scripts/
├── audit-structure.mjs
└── check-site.mjs
src/
├── App.tsx
├── data/
├── lib/
│   ├── collections.test.ts
│   ├── collections.ts
│   ├── data-integrity.test.ts
│   ├── routes.test.ts
│   └── routes.ts
└── pages/
    └── PortfolioPage.tsx
tests/
└── portfolio.spec.ts
.prettierignore
.prettierrc.json
playwright.config.ts
package.json
wrangler.jsonc
```

**Structure Decision**: Preserve the existing static Vite application. Put reusable deterministic runtime logic and colocated unit tests in `src/lib/`, cross-page browser journeys in `tests/`, repository automation in `.github/`, and reusable command-line verification in `scripts/`. No page, component, data, or CSS ownership changes are needed.

## Complexity Tracking

No constitution violations require justification.

