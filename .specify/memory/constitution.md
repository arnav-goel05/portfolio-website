<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Added principles: Visual Fidelity; Explicit Module Boundaries; Lean and Reproducible Delivery;
  Accessible and Responsive by Default; Evidence Before Completion
- Added sections: Engineering Constraints; Delivery Workflow
- Removed sections: none (template placeholders replaced)
- Templates reviewed: ✅ .specify/templates/plan-template.md; ✅ .specify/templates/spec-template.md;
  ✅ .specify/templates/tasks-template.md (no structural changes required)
- Follow-up TODOs: none
-->
# Portfolio Website Constitution

## Core Principles

### I. Visual Fidelity Is a Contract
Changes MUST preserve the approved visual system, content hierarchy, and interaction intent unless the
user explicitly requests a redesign. Refactors MUST not create visible regressions at supported viewport
sizes. Motion MUST be purposeful and MUST respect reduced-motion preferences. Rationale: the website is
a public representation of the owner's work, so implementation quality includes faithful presentation.

### II. Explicit Module Boundaries
Page composition MUST live in `src/pages/`, reusable interface elements in `src/components/`, static
content and configuration in `src/data/`, and feature styling in `src/styles/`. `src/App.tsx` MUST remain
limited to application-level routing and composition. Shared data MUST have one clear owner, and dead or
duplicate abstractions MUST be removed. Rationale: changes should remain local, understandable, and safe.

### III. Lean and Reproducible Delivery
The tracked repository MUST contain everything required to install, build, validate, and deploy the site,
while generated QA output, temporary files, unused dependencies, and superseded assets MUST remain
untracked or be removed. Production media MUST be appropriately optimized for its rendered use. Runtime
infrastructure MUST be no more complex than the product requires. Rationale: a portfolio must load quickly
and remain maintainable by one developer.

### IV. Accessible and Responsive by Default
Every page MUST expose a coherent heading hierarchy, keyboard-visible focus, meaningful control semantics,
and a usable layout across the supported desktop and mobile ranges. Decorative media MUST be hidden from
assistive technology; informative media MUST be labeled. Pointer-only enhancements MUST degrade safely.
Rationale: the portfolio must communicate effectively regardless of input method or viewport.

### V. Evidence Before Completion
No change is complete until relevant static analysis, production build, artifact inspection, and targeted
runtime checks pass. The implementation MUST be compared against the current specification and plan, and
any discovered gap MUST be either fixed or recorded as an explicit task. Rationale: confidence comes from
repeatable evidence, not visual intuition alone.

## Engineering Constraints

- React and TypeScript remain the client stack unless a separate specification authorizes migration.
- Cloudflare Workers remains the deployment target; D1 and R2 MUST NOT be added without a concrete data or
  object-storage requirement.
- Responsive and reduced-motion overrides belong in `src/styles/responsive.css`.
- `src/App.css` MUST contain imports only.
- `ARCHITECTURE.md` MUST change when project structure or ownership changes.
- `DESIGN.md` MUST change when the visual system or interaction contract changes.
- Existing user changes and unrelated worktree files MUST be preserved.

## Delivery Workflow

1. Capture the requested outcome and measurable acceptance criteria in a Spec Kit feature specification.
2. Produce a technical plan and dependency-ordered task list that passes the Constitution Check.
3. Implement tasks in order, marking each completed task with supporting validation.
4. Run Spec Kit convergence against the codebase; append and implement every actionable gap.
5. Repeat validation and convergence until no relevant gaps remain.

## Governance

This constitution governs all feature specifications and implementation plans in this repository. An
amendment requires a documented rationale, a semantic version change, a Sync Impact Report, and updates to
affected templates or guidance. Every implementation review MUST verify each applicable MUST statement.
Complexity that conflicts with a principle requires explicit justification in the feature plan; convenience
alone is insufficient.

**Version**: 1.0.0 | **Ratified**: 2026-07-20 | **Last Amended**: 2026-07-20
