# Tasks: SEO and GEO Discovery

**Input**: Design documents from `specs/003-seo-geo-discovery/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No new product test suite was requested. Tasks use a focused metadata audit plus the repository's existing quality and browser checks.

## Phase 1: Setup and audit baseline

**Purpose**: Preserve the observed discovery baseline and prepare one metadata owner.

- [x] T001 Record Chrome and HTTP audit findings in `specs/003-seo-geo-discovery/research.md`
- [x] T002 Create typed canonical route and structured-data configuration in `src/data/seo.ts`

---

## Phase 2: Foundational response handling

**Purpose**: Establish response-level metadata, canonicalization, and status behavior shared by all routes.

- [x] T003 Implement static-asset delegation, canonical-host redirect, route selection, head injection, HEAD handling, and 404 status in `src/worker.ts`
- [x] T004 Configure the Worker entry and asset binding without changing deployment routes in `wrangler.jsonc`
- [x] T005 Replace the document head baseline with complete homepage metadata markers in `index.html`

**Checkpoint**: Known routes, unknown routes, and static assets have deterministic response behavior.

---

## Phase 3: User Story 1 - Search engines understand each route (Priority: P1) 🎯 MVP

**Goal**: Serve unique, canonical, correctly indexed route responses and genuine not-found status.

**Independent Test**: Request Home, About, www, and an unknown route and compare status, canonical, and robots behavior with the discovery contract.

- [x] T006 [US1] Add focused response and metadata assertions to `scripts/audit-seo.mjs` and expose `npm run audit:seo` in `package.json`

**Checkpoint**: The automated audit proves Home and About metadata, www redirect, and the real 404 response.

---

## Phase 4: User Story 2 - Search and answer engines understand the portfolio (Priority: P2)

**Goal**: Publish structured identity, project, and crawler discovery context grounded in the visible portfolio.

**Independent Test**: Parse homepage and About JSON-LD, then fetch robots, sitemap, and LLM resources and verify the expected entities and two-route inventory.

- [x] T007 [P] [US2] Add general crawler policy and sitemap location in `public/robots.txt`
- [x] T008 [P] [US2] Add a two-route canonical XML sitemap in `public/sitemap.xml`
- [x] T009 [P] [US2] Add a concise source-linked portfolio overview in `public/llms.txt`
- [x] T010 [US2] Extend `scripts/audit-seo.mjs` to validate JSON-LD entities and discovery-resource content types and inventory

**Checkpoint**: Machine readers can identify the person, website, five projects, both pages, and public source links.

---

## Phase 5: User Story 3 - Existing visitors retain the same experience (Priority: P3)

**Goal**: Preserve the visible portfolio and accessible accordion interaction while improving semantic availability.

**Independent Test**: Use Chrome to open and close a project card, navigate to About, and confirm the same visible content, controls, and route count.

- [x] T011 [US3] Add stable project fragment IDs and retain accordion details in the rendered document using native hidden state in `src/components/ProjectCard.tsx`

**Checkpoint**: Project fragments match JSON-LD, and accordion state changes without mounting or removing the controlled details.

---

## Phase 6: Polish and cross-cutting validation

**Purpose**: Document the new ownership boundary and collect completion evidence.

- [x] T012 [P] Update response metadata and discovery-resource ownership in `ARCHITECTURE.md`
- [x] T013 Run formatting, `npm run audit:seo`, `npm run check:quality`, and Wrangler dry-run validation from `specs/003-seo-geo-discovery/quickstart.md`
- [x] T014 Run the final Chrome rendered-metadata, navigation, and accordion audit and record results in `specs/003-seo-geo-discovery/research.md`
- [x] T015 Update multi-entry reachability validation for the browser and Worker graphs in `scripts/audit-structure.mjs`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup**: Starts immediately.
- **Foundational response handling**: Depends on T002.
- **US1**: Depends on T003-T005.
- **US2**: Discovery files T007-T009 can run after setup; T010 depends on T006-T009.
- **US3**: T011 depends on stable project fragment names from T002.
- **Polish**: Depends on all user-story tasks.

### User Story Dependencies

- **US1**: Independent route correctness slice and MVP.
- **US2**: Uses the shared route metadata but remains independently verifiable through structured data and static resources.
- **US3**: Uses project identifiers from the metadata model but does not depend on discovery-resource files.

### Parallel Opportunities

- T007, T008, and T009 affect separate static files and can be completed in parallel.
- T011 and T012 affect different files after the metadata model is stable.

## Implementation Strategy

1. Complete typed metadata and the edge response handler.
2. Validate route-level SEO correctness as the MVP.
3. Add GEO and crawl resources grounded in the same facts.
4. Preserve accordion semantics and add stable fragments.
5. Run production-equivalent automation and Chrome interaction checks.

## Format Validation

All 15 tasks use the required checkbox, sequential task ID, optional parallel marker, user-story label where applicable, and exact file path.
