# Tasks: Portfolio Engineering Remediation

**Input**: Design documents from `/specs/001-portfolio-remediation/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contract.md

**Tests**: A deterministic structural audit and end-to-end validation commands are required by the spec.

## Phase 1: Setup and Governance

- [x] T001 Record project engineering principles in `.specify/memory/constitution.md`
- [x] T002 [P] Capture remediation intent and acceptance criteria in `specs/001-portfolio-remediation/spec.md`
- [x] T003 [P] Document implementation decisions and validation in `specs/001-portfolio-remediation/plan.md`, `research.md`, `data-model.md`, `contracts/ui-contract.md`, and `quickstart.md`

## Phase 2: Foundational Repository Hygiene

- [x] T004 Expand tracked-file exclusions for generated and temporary content in `.gitignore`
- [x] T005 Remove unused UI dependencies and scripts from `package.json` and `package-lock.json`
- [x] T006 Remove dead Vision transition code, generated artifacts, superseded assets, and starter files from `src/`, `scripts/`, `outputs/`, `.qa/`, and repository root
- [x] T007 [P] Add deterministic architecture checks in `scripts/audit-structure.mjs` and wire `npm run check` in `package.json`

## Phase 3: User Story 1 - Browse a Reliable Portfolio (Priority: P1)

**Goal**: Every route and interaction remains visually faithful, accessible, responsive, and correct.

**Independent Test**: Validate the route, accordion, heading, keyboard, mobile, and reduced-motion scenarios in `quickstart.md`.

- [x] T008 [US1] Add normalized routing and a not-found composition in `src/App.tsx` and `src/pages/NotFoundPage.tsx`
- [x] T009 [US1] Give experiences stable identities and correct accordion semantics in `src/data/about.ts` and `src/pages/AboutPage.tsx`
- [x] T010 [US1] Correct page heading hierarchy and remove inactive reveal hooks in `src/pages/PortfolioPage.tsx` and `src/pages/AboutPage.tsx`
- [x] T011 [US1] Make the custom cursor animation-frame driven and pointer-aware in `src/components/CustomCursor.tsx` and `src/styles/responsive.css`

## Phase 4: User Story 2 - Maintain Projects Without Special Cases (Priority: P2)

**Goal**: Data and reusable presentation have clear owners and support arbitrary project counts.

**Independent Test**: Add a temporary fifth project record and confirm it renders without stylesheet changes.

- [x] T012 [US2] Move global contact/navigation values into `src/data/site.ts` and update consumers
- [x] T013 [US2] Move hero decoration configuration into `src/data/hero.ts` and keep `src/pages/PortfolioPage.tsx` composition-only
- [x] T014 [US2] Extract reusable project presentation into `src/components/ProjectCard.tsx`
- [x] T015 [US2] Replace four-card index positioning with cardinality-independent project rows in `src/pages/PortfolioPage.tsx` and `src/styles/portfolio.css`
- [x] T016 [US2] Consolidate duplicated and dead style rules in `src/styles/base.css`, `src/styles/about.css`, and `src/styles/portfolio.css`

## Phase 5: User Story 3 - Build and Deploy From the Public Repository (Priority: P3)

**Goal**: A clean checkout builds a lean, documented, deployable site.

**Independent Test**: Run every command and inspect every expected outcome in `quickstart.md`.

- [x] T017 [US3] Defer below-fold media and viewport-gate video playback in `src/components/ProjectMedia.tsx`
- [x] T018 [US3] Optimize production video and image assets referenced from `src/data/portfolio.ts` and `src/data/hero.ts`
- [x] T019 [US3] Rewrite setup/deployment documentation and reconcile architecture/design docs in `README.md`, `ARCHITECTURE.md`, `DESIGN.md`, and maintained checklists
- [x] T020 [US3] Remove unused font network requests and add production metadata in `index.html`

## Phase 6: Validation and Convergence

- [x] T021 Run `npm run check`, dependency audit, Worker dry run, structural scan, and production-size comparison
- [x] T022 Inspect the running site at desktop/mobile widths and validate all `specs/001-portfolio-remediation/quickstart.md` scenarios
- [x] T023 Run Spec Kit convergence against the completed implementation and append any remaining work

## Dependencies & Execution Order

- Setup and Governance can complete immediately.
- Repository Hygiene precedes source refactors so dead paths and dependency assumptions are explicit.
- User Story 1, 2, and 3 work depends on Phase 2; source files shared by tasks are handled sequentially.
- Validation and convergence depend on every implementation phase.

## Implementation Strategy

Complete the public visitor correctness slice first, then the maintainability slice, then reproducibility and
performance. Run the complete validation gate and convergence after all slices so cross-cutting regressions
are discovered and converted into traceable tasks.
