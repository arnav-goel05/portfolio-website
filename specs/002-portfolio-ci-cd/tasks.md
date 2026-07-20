# Tasks: Portfolio CI/CD and Uptime Pipeline

**Input**: Design documents from `/specs/002-portfolio-ci-cd/`

**Tests**: Unit and functional browser tests are required by the feature specification.

## Phase 1: Setup

- [X] T001 Add Prettier, Vitest, and Playwright development dependencies and commands in `package.json` and `package-lock.json`
- [X] T002 [P] Add stable formatting rules and generated-asset exclusions in `.prettierrc.json` and `.prettierignore`
- [X] T003 [P] Extend repository ignore coverage for Playwright and coverage output in `.gitignore`

---

## Phase 2: Foundational

- [X] T004 Extract path normalization into `src/lib/routes.ts` and consume it from `src/App.tsx`
- [X] T005 Extract generic item chunking into `src/lib/collections.ts` and consume it from `src/pages/PortfolioPage.tsx`
- [X] T006 Add the one-request title-validating site check in `scripts/check-site.mjs`
- [X] T007 Configure production-bundle Wrangler serving and browser projects in `playwright.config.ts`

---

## Phase 3: User Story 1 - Validate every proposed change (Priority: P1)

**Goal**: Required local and hosted checks reject formatting, architecture, lint, unit, browser, build, deployment, and release-source regressions.

**Independent Test**: Run the full local check set and open a feature PR plus a deliberately invalid release-source PR.

- [X] T008 [P] [US1] Add route normalization and collection chunking unit tests in `src/lib/routes.test.ts` and `src/lib/collections.test.ts`
- [X] T009 [P] [US1] Add About and portfolio data-invariant tests in `src/lib/data-integrity.test.ts`
- [X] T010 [P] [US1] Add Chromium and WebKit journeys for content, routing, ARIA, overflow, navigation, and console errors in `tests/portfolio.spec.ts`
- [X] T011 [US1] Add read-only quality, e2e, and release-source jobs in `.github/workflows/ci.yml`
- [X] T012 [P] [US1] Add feature and release targeting guidance in `.github/pull_request_template.md`

---

## Phase 4: User Story 2 - Review and release safely (Priority: P2)

**Goal**: Feature and integration branches receive previews while production deploys only after a manual `develop` to `master` release.

**Independent Test**: Review a feature preview, merge through both protected branches, and verify the production smoke result.

- [X] T013 [US2] Add preview, deployment, quality, CI, and production-smoke commands in `package.json`
- [X] T014 [US2] Document source ownership, validation, previews, release flow, and static-only infrastructure in `ARCHITECTURE.md`
- [X] T015 [US2] Document contributor commands and manual release operations in `README.md`
- [X] T016 [US2] Configure Cloudflare Workers Builds for `master` production and non-production branch previews
- [X] T017 [US2] Create `develop` and `master` repository rules requiring the recorded checks and blocking direct destructive changes

---

## Phase 5: User Story 3 - Detect and resolve outages (Priority: P3)

**Goal**: A best-effort five-minute single-request monitor maintains one quiet outage issue through failure and recovery.

**Independent Test**: Manually run healthy, failing, repeated-failing, and recovered checks and inspect the issue lifecycle.

- [X] T018 [US3] Add the single-request scheduled and manual issue-lifecycle workflow in `.github/workflows/uptime.yml`
- [X] T019 [US3] Create the repository `uptime` label and exercise healthy, failure, repeat-failure, and recovery runs

---

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T020 Run formatting, unit, browser, production build, Wrangler dry run, and production smoke validation from `specs/002-portfolio-ci-cd/quickstart.md`
- [X] T021 Publish the feature PR to `develop`, verify required checks and preview, then complete the manual `develop` to `master` release
- [X] T022 Run Spec Kit convergence and implement every actionable gap recorded in `specs/002-portfolio-ci-cd/tasks.md`
- [X] T023 Leave the local checkout on updated `develop` with `master` matching production

## Dependencies & Execution Order

- Phase 1 precedes all other work.
- Phase 2 precedes unit, browser, workflow, smoke, and uptime implementation.
- User Story 1 establishes the required checks before branch rules can require them.
- User Story 2 depends on the check names being recorded by the first feature PR.
- User Story 3 can be implemented with User Story 2 but its lifecycle exercise requires the workflow on `master`.
- Final rollout and convergence follow all implementation phases.

## Parallel Opportunities

- T002 and T003 can proceed independently after dependency installation is defined.
- T008, T009, T010, and T012 affect separate files after the foundational utilities exist.
- Documentation updates can proceed independently of hosted configuration once final commands are stable.

## Implementation Strategy

1. Establish deterministic local validation and production-equivalent functional coverage.
2. Publish a feature PR so GitHub records stable required check names.
3. Configure Cloudflare previews and branch rules around those proven checks.
4. Release manually to production, then validate the complete uptime issue lifecycle.
