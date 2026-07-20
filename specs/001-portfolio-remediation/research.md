# Research: Portfolio Engineering Remediation

## Project layout

**Decision**: Render projects as automatically placed cards inside row-level subgrids created from data.

**Rationale**: The current case-study details align across each visual row. Pairing records into reusable
rows preserves that alignment while removing selectors tied to specific child indices or exactly four cards.

**Alternatives considered**: A plain auto-fit grid is simpler but loses cross-card detail-row alignment;
manually assigning row positions repeats the existing cardinality defect.

## Routing

**Decision**: Normalize `window.location.pathname` and use a small explicit route table plus a not-found page.

**Rationale**: The site has only two content routes and needs no navigation state or nested routing. A library
would add weight without user value.

**Alternatives considered**: A routing dependency was rejected as unnecessary; silently falling back to home
was rejected because it hides broken links.

## Media delivery

**Decision**: Keep the current formats where they are already efficient, transcode the 21 MB walkthrough to
a web-appropriate MP4 at its rendered resolution, convert large transparent stills/stickers to WebP, lazy
decode images, and only load/play video near the viewport.

**Rationale**: This reduces transfer and decode cost without changing visible content or requiring a CDN.

**Alternatives considered**: R2 was rejected because the current static media fits Worker asset delivery;
aggressive low-quality compression was rejected due to the portfolio's visual role.

## Repository cleanup

**Decision**: Remove tracked generated QA/output directories, dead Vision transition code, unused assets,
starter assets, and unused UI-framework dependencies. Ignore but preserve `tmp/`.

**Rationale**: These files do not participate in the live site or reproducible development path.

**Alternatives considered**: Archiving generated files in-repository keeps the size/privacy problem; retaining
dead dependencies creates false architectural signals.

## Validation

**Decision**: Add a deterministic structural audit and a `check` script that runs it with lint and build.

**Rationale**: The user explicitly requested repeated rechecks, while the project does not warrant a browser
test framework for this remediation.

**Alternatives considered**: Adding a full test runner was rejected as disproportionate; manual-only review
cannot reliably catch duplicate IDs, local paths, or resurrected cardinality selectors.
