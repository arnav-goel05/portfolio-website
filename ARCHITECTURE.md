# Portfolio Website Architecture

This is a Vite + React + TypeScript portfolio site. Keep the app lightweight:
prefer small page/components, static data modules, and CSS in the existing visual
system over adding dependencies.

## Top-Level Flow

- `src/main.tsx` mounts the React app.
- `src/App.tsx` is intentionally small. It chooses between:
  - `PortfolioPage` for `/`
  - `CustomerSupportProjectPage` for `/projects/customer-support`
  - `HandEyeCoordinationProjectPage` for `/projects/hand-eye-coordination`
- Routing is currently path-based and dependency-free. Add a router only when
  there are enough pages to justify it.

## Source Layout

- `src/pages/`
  - Page-level components. Pages own section order and page-specific layout.
  - `PortfolioPage.tsx` renders the homepage.
  - `CustomerSupportProjectPage.tsx` renders the project case study.
  - `HandEyeCoordinationProjectPage.tsx` renders the hand-eye coordination
    project experience: a Vision Pro-style assessment intro followed by the
    case-study sections.
- `src/components/`
  - Reusable UI shared across pages.
  - `SiteNav.tsx` owns the common navigation skeleton.
- `src/data/`
  - Static portfolio content and asset-backed data.
  - Keep resume-backed content here when possible so page components stay
    mostly presentational.
- `src/assets/`
  - Generated and static images used by the UI.
  - Do not delete generated originals from `.codex/generated_images`; copy
    selected assets into this folder.
- `src/App.css`
  - Current shared page styling.
  - If it grows much further, split it into `src/styles/portfolio.css`,
    `src/styles/case-study.css`, and `src/styles/components.css`, then import
    them from `App.css`.
- `src/index.css`
  - Global tokens, base typography, resets, and root styling.

## Content Rules

- Use the resume as source of truth for claims, dates, roles, metrics, and
  project outcomes.
- Placeholder sections are allowed only when clearly marked, such as the
  Articles placeholder.
- Do not invent screenshots, clients, datasets, or extra metrics. Illustrative
  visuals should feel explanatory, not like fabricated product evidence.

## Visual System

- Light editorial system: white background, subtle grid, charcoal text, clay-red
  accents, soft borders, restrained shadows.
- Typography:
  - Headings: Fraunces fallback stack via `--serif`
  - Body/UI: Manrope fallback stack via `--sans`
- Keep motion subtle and respect readability. Avoid adding decorative animation
  to the hero unless it supports the content.

## Development Notes

- The user prefers skipping build/lint checks unless explicitly requested.
- The user asked to commit after every completed change.
- Commit focused changes separately; avoid bundling unrelated visual and content
  edits into one commit.
