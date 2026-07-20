# Implementation Plan: Portfolio Engineering Remediation

**Branch**: `master` | **Date**: 2026-07-20 | **Spec**: [spec.md](./spec.md)

## Summary

Refactor the existing portfolio without redesigning it: establish explicit data and component ownership,
make project layout cardinality-independent, repair routing and accessibility, remove dead/generated code and
assets, optimize media delivery, and align documentation plus Cloudflare deployment configuration. Validate
with static checks, production builds, targeted source/runtime audits, and iterative Spec Kit convergence.

## Technical Context

**Language/Version**: TypeScript 6, React 19

**Primary Dependencies**: React, React DOM, Vite; Wrangler for deployment tooling

**Storage**: Static source data and bundled media; no database or object storage

**Testing**: ESLint, TypeScript production build, scripted structural audit, targeted browser/runtime checks

**Target Platform**: Modern evergreen desktop and mobile browsers; Cloudflare Workers static assets

**Project Type**: Static single-page portfolio web application

**Performance Goals**: At least 40% lower production transfer footprint than the 31 MB audit baseline; defer
below-fold media; preserve acceptable media quality

**Constraints**: Preserve current visual design and content; avoid a routing framework; do not delete `tmp/`;
do not add D1/R2; retain direct URL support through the Worker fallback

**Scale/Scope**: Three routes, four current projects with arbitrary future cardinality, two content pages,
one static deployment

## Constitution Check

- **I Visual Fidelity**: PASS. The plan changes structure and delivery, not the approved visual system.
- **II Module Boundaries**: PASS. Site, hero, and portfolio data receive explicit owners; reusable project
  presentation moves to components; app composition stays small.
- **III Lean Delivery**: PASS. Dead code, generated artifacts, unused dependencies, and oversized assets are
  removed or optimized; Worker deployment remains minimal.
- **IV Accessibility**: PASS. Heading, accordion, pointer, route, and media semantics are explicit tasks.
- **V Evidence**: PASS. A structural audit, lint, build, runtime checks, and convergence are required gates.

Post-design re-check: PASS. No planned artifact adds a constitution exception.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-remediation/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-contract.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── CustomCursor.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectMedia.tsx
│   └── SiteNav.tsx
├── data/
│   ├── about.ts
│   ├── hero.ts
│   ├── portfolio.ts
│   └── site.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── NotFoundPage.tsx
│   └── PortfolioPage.tsx
├── styles/
│   ├── about.css
│   ├── base.css
│   ├── portfolio.css
│   └── responsive.css
├── App.css
└── App.tsx

scripts/
└── audit-structure.mjs
```

**Structure Decision**: Retain the existing single frontend project. Split only along already documented
page, reusable-component, static-data, and feature-style boundaries; no service layer is warranted.

## Complexity Tracking

No constitution violations require justification.
