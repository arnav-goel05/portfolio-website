# Portfolio Redesign Checklist

This file is the source of truth for the Yutong Wang-inspired portfolio redesign.
Update task status as work progresses:

- `[ ]` not started
- `[~]` in progress
- `[x]` completed
- `[!]` blocked or changed by evidence

## 1. Source Capture And Constraints

- [x] Confirm repo state, project structure, and existing constraints from `AGENTS.md`, `ARCHITECTURE.md`, and `DESIGN.md`.
  - Progress: Repo is Vite + React + TypeScript with dependency-free path routing, static portfolio data, and CSS split across `src/styles/`.
  - Progress: Existing docs request modular pages/components/data/styles and note no testing unless explicitly asked, but this redesign plan requires build and visual QA.
- [x] Capture Yutong Wang homepage desktop reference.
  - Evidence: `outputs/source-captures/yutong-home-desktop.png`.
- [x] Capture Yutong Wang homepage mobile reference.
  - Evidence: `outputs/source-captures/yutong-home-mobile.png`.
- [x] Capture Yutong Wang `puzzle-ai` desktop reference.
  - Evidence: `outputs/source-captures/yutong-puzzle-desktop.png`.
- [x] Capture Yutong Wang `puzzle-ai` mobile reference.
  - Evidence: `outputs/source-captures/yutong-puzzle-mobile.png`.
- [x] Inspect reference interactions: cursor, hover states, navigation/menu, scroll reveals, project cards, carousel/draggable sections if present.
  - Progress: Browser/Chrome plugin tools were unavailable, so interaction inspection used Framer HTML/search index plus headless Chrome screenshots.
  - Progress: Reference uses tiny dot brand, WORK/ABOUT nav, custom cursor attributes, sparse text links, large white space, pastel gradient homepage base, status pills, scroll/appear transitions, and left-to-right Framer appear animations.
- [x] Record source-capture findings before implementation.
  - Progress: Homepage first viewport is centered intro text with italic serif name and underline; project page starts with status pill, serif title, right-aligned tagline, large blue hero block, then two-column overview and metadata rows.

## 2. Content Mapping

- [x] Audit current project data and decide final fields for both projects.
- [x] Remove homepage employment timeline, article placeholder, and unnecessary resume-style content.
- [x] Map Customer Support project into Puzzle-style case-study sections.
- [x] Map Hand-Eye Coordination project into Puzzle-style case-study sections.
- [x] Mark unknown or unavailable evidence as explicit placeholders instead of inventing screenshots, metrics, users, clients, or research findings.

## 3. Homepage Redesign

- [x] Rebuild homepage around the reference portfolio index flow.
- [x] Add project metadata treatment: image, year, status, category/domain, platform, title, and short summary.
- [x] Add simplified contact/footer area.
- [x] Ensure homepage navigation matches the new reduced content structure.

## 4. Project Page Redesign

- [x] Replace Customer Support page with Puzzle-style case-study flow.
- [x] Replace Hand-Eye Coordination page with Puzzle-style case-study flow.
- [x] Preserve useful existing project visuals where they fit the new structure.
- [x] Simplify or remove the existing Vision Pro launch if it conflicts with the new case-study flow.

## 5. Motion, Cursor, And Responsiveness

- [x] Implement source-inspired custom cursor behavior without blocking normal keyboard or touch usage.
- [x] Implement scroll/entry animations similar to the reference.
- [x] Add hover states and link transitions similar to the reference.
- [x] Add reduced-motion fallbacks.
- [x] Verify desktop layout.
  - Evidence: `outputs/implementation-captures/home-desktop-settled.png`, `customer-desktop-settled.png`, `hand-eye-desktop-settled.png`.
- [x] Verify mobile layout.
  - Evidence: `outputs/implementation-captures/home-mobile-settled.png`, `customer-mobile-settled.png`, `hand-eye-mobile-settled.png`.

## 6. Documentation

- [x] Update `ARCHITECTURE.md` if structure, components, data modules, or style responsibilities change.
- [x] Update `DESIGN.md` to reflect the new reference-driven visual system.

## 7. Verification And QA

- [x] Run `npm run build`.
  - Progress: Final build passed after docs and mobile polish.
  - Progress: `npm run lint` also passed.
- [x] Start local dev server.
  - Progress: Running at `http://127.0.0.1:5173/`.
- [x] Inspect homepage and both project pages on desktop.
- [x] Inspect homepage and both project pages on mobile.
- [x] Create `design-qa.md` with source visual paths, implementation screenshots, viewport, state, findings, and final result.
- [x] Fix any P0/P1/P2 QA findings.
  - Progress: Mobile hero and long project-title clipping were fixed before final QA.
- [x] Re-check this checklist against the final state.

## 8. Git

- [x] Review changed files.
- [x] Commit the completed redesign.
  - Progress: Committed as `8d3c519` with message `Redesign portfolio around project case studies`.
