# Feature Specification: Portfolio CI/CD and Uptime Pipeline

**Feature Branch**: `codex/portfolio-ci-cd`

**Created**: 2026-07-20

**Status**: Approved

**Input**: User description: "Protect portfolio changes with pull-request validation, preview deployments, controlled production releases, and single-request uptime monitoring."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Validate every proposed change (Priority: P1)

As the portfolio maintainer, I want every feature and release pull request to run consistent quality and browser checks so regressions cannot be merged into a protected branch.

**Why this priority**: Reliable validation is the foundation for every later preview, release, and monitoring capability.

**Independent Test**: Open a pull request with a known formatting, source-branch, unit, browser, or production-build failure and verify that the relevant required check blocks merging.

**Acceptance Scenarios**:

1. **Given** a feature pull request targets `develop`, **When** validation runs, **Then** formatting, architecture, lint, unit, browser, production-build, and deployment dry-run checks report a clear result.
2. **Given** a pull request targets `master` from a branch other than `develop`, **When** validation runs, **Then** the release-source check fails.
3. **Given** a pull request passes all required checks, **When** the maintainer reviews its status, **Then** it is eligible to merge without requiring a second maintainer's approval.

---

### User Story 2 - Review and release safely (Priority: P2)

As the portfolio maintainer, I want non-production branches to produce reviewable previews and production to update only from a deliberate `develop` to `master` release so deployment state is predictable.

**Why this priority**: Preview and release separation reduces production risk while preserving a lightweight solo-maintainer workflow.

**Independent Test**: Push a feature branch, verify its preview, merge it through `develop`, then manually release `develop` to `master` and verify the canonical site.

**Acceptance Scenarios**:

1. **Given** a feature or `develop` branch is pushed, **When** the hosting build completes, **Then** a non-production preview is available without changing the canonical site.
2. **Given** the maintainer manually opens `develop` to `master`, **When** all required checks pass and the PR is merged, **Then** the production site is built, deployed, and checked once.
3. **Given** a direct push, force push, or deletion is attempted on a protected branch, **When** repository rules evaluate it, **Then** the operation is rejected.

---

### User Story 3 - Detect and resolve outages (Priority: P3)

As the portfolio maintainer, I want a lightweight recurring availability check that creates one actionable outage issue and closes it after recovery without generating repeated noise.

**Why this priority**: Monitoring adds operational confidence after safe delivery is established.

**Independent Test**: Run the monitor once against a guaranteed failing address and once against the healthy canonical site, confirming one issue opens and then closes with one recovery comment.

**Acceptance Scenarios**:

1. **Given** the canonical page returns HTTP 200 and the expected title, **When** the scheduled monitor makes its single request, **Then** the run succeeds and no issue is created.
2. **Given** the single request fails, times out, returns another status, or lacks the expected title, **When** no outage issue is open, **Then** one labelled outage issue is opened and the run fails.
3. **Given** the outage issue is already open, **When** another check fails, **Then** the issue remains unchanged and no duplicate or comment is created.
4. **Given** an outage issue is open, **When** a later single request succeeds, **Then** one recovery comment is added and the issue is closed.

### Edge Cases

- An unknown application path must still resolve through the production-equivalent worker and render the explicit not-found page.
- A direct load of `/about/` must normalize correctly through the production-equivalent worker.
- Browser validation must detect horizontal overflow at both supported desktop and mobile widths.
- Superseded pull-request validation runs must be cancelled to avoid stale results and unnecessary resource use.
- Scheduled monitoring may be delayed or omitted by the workflow provider; the five-minute schedule is a best-effort cadence, not a real-time guarantee.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The repository MUST keep `master` as the stable default and production branch and use `develop` as the integration branch.
- **FR-002**: Feature changes MUST reach `develop` through pull requests from short-lived branches.
- **FR-003**: Production changes MUST reach `master` through manually created pull requests whose source is `develop`.
- **FR-004**: Pull requests to `develop` and `master` MUST pass named quality and browser checks before merge.
- **FR-005**: Pull requests to `master` MUST also pass a release-source check that rejects every source other than `develop`.
- **FR-006**: Protected branches MUST reject direct pushes, force pushes, and deletion without requiring an approval count.
- **FR-007**: Quality validation MUST cover deterministic formatting, architecture rules, lint, unit behavior, production compilation, and a deployment dry run.
- **FR-008**: Browser validation MUST cover Chromium and WebKit against the production bundle served with production-equivalent routing.
- **FR-009**: Browser validation MUST cover homepage projects, About direct and trailing-slash loads, accordion semantics, explicit not-found behavior, navigation destinations, console errors, and desktop/mobile horizontal overflow.
- **FR-010**: Non-production branches MUST be eligible for hosting previews while only `master` may deploy to the canonical production route.
- **FR-011**: The production deployment MUST make one post-deploy smoke request and accept only HTTP 200 containing the expected portfolio title.
- **FR-012**: The uptime workflow MUST run on demand and on a best-effort five-minute schedule offset from the start of each hour.
- **FR-013**: Each uptime execution MUST make exactly one HTTPS request with a 15-second timeout and no retry.
- **FR-014**: A failed uptime execution MUST open at most one issue titled `[Uptime] arnav-goel.com is unavailable`, labelled `uptime`, and MUST NOT add repeat-failure comments.
- **FR-015**: A successful uptime execution MUST close an existing outage issue with exactly one recovery comment and otherwise make no issue change.
- **FR-016**: Only the uptime workflow MAY write issues; validation workflows MUST remain read-only.
- **FR-017**: The portfolio MUST remain a static asset deployment without databases, object storage, queues, staging workers, or application secrets.
- **FR-018**: Repository documentation MUST explain branch targets, local validation commands, preview behavior, manual release steps, production deployment, and monitoring limitations.

### Key Entities

- **Branch role**: A named branch and its allowed incoming changes, required checks, and deployment responsibility.
- **Validation result**: A named quality, browser, or release-source result that determines merge eligibility.
- **Deployment environment**: A preview or production deployment with a source branch, route exposure, and verification outcome.
- **Availability check**: One request result containing target, status, title match, timestamp, and success decision.
- **Outage issue**: The single open incident record identified by an exact title and label, transitioning from open to recovered and closed.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of pull requests into either protected branch report the required validation results before merge eligibility is determined.
- **SC-002**: 100% of pull requests to production from a source other than `develop` are rejected by an automated check.
- **SC-003**: The defined homepage, About, not-found, navigation, accessibility, console, and overflow journeys pass in both supported browser engines.
- **SC-004**: Every successful production release is followed by exactly one verification request that confirms the canonical page and expected title.
- **SC-005**: Every uptime execution makes one request at most, reaches a decision within 15 seconds plus workflow overhead, and creates no duplicate outage issue.
- **SC-006**: A simulated outage opens one issue, a repeated simulated failure creates no new activity, and a subsequent healthy check adds one recovery comment and closes that issue.

## Assumptions

- The repository remains publicly accessible and solo-maintained.
- GitHub-hosted workflow schedules are best effort and can be delayed, dropped under load, or disabled after prolonged repository inactivity.
- Hosting preview comments are useful review aids but are not required merge checks initially.
- The canonical monitoring and smoke-test target is `https://arnav-goel.com/` only.
- Release pull requests are initiated manually rather than created by automation.
- Visual snapshot testing is outside this feature's scope.

