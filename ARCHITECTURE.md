# Portfolio Website Architecture

This is a Vite + React + TypeScript portfolio site. Keep the app lightweight:
prefer small page/components, static data modules, and CSS in the existing visual
system over adding dependencies.

## Top-Level Flow

- `src/main.tsx` mounts the React app.
- `src/App.tsx` is intentionally small. It chooses between:
  - `PortfolioPage` for `/`
  - `AboutPage` for `/about`
  - `AIWorkflowProjectPage` for `/projects/ai-workflow-system`
- Routing is currently path-based and dependency-free. Add a router only when
  there are enough pages to justify it.

## Source Layout

- `src/pages/`
  - Page-level components. Pages own section order and page-specific layout.
  - `PortfolioPage.tsx` renders the homepage as a sparse selected-work index.
  - `AboutPage.tsx` renders the Yutong-inspired about/profile page with
    project-based experience rows and skills.
  - `ProjectCaseStudyPage.tsx` renders the shared project case-study flow.
  - `AIWorkflowProjectPage.tsx` is the route wrapper for the placeholder AI
    workflow case study.
- `src/components/`
  - Reusable UI shared across pages.
  - `SiteNav.tsx` owns the common dot-brand navigation skeleton.
  - `CustomCursor.tsx` owns the mouse-only custom cursor.
  - `VisionProjectLaunch.tsx` is retained but no longer used by the active
    project routes.
- `src/data/`
  - Static portfolio content and asset-backed data.
  - `about.ts` owns About-page profile copy, project rows, and skills.
  - `portfolio.ts` currently owns one placeholder AI workflow project and
    should avoid fabricated metrics until real project evidence exists.
  - Keep resume-backed content here when possible so page components stay
    mostly presentational.
- `src/assets/`
  - Generated and static images used by the UI.
  - Do not delete generated originals from `.codex/generated_images`; copy
    selected assets into this folder.
- `scripts/`
  - Local asset-generation utilities.
  - `generate_vision_transition.py` uses Python + Pillow to regenerate
    `src/assets/vision-transition.webp` from existing Vision Pro assets.
- `src/App.css`
  - CSS import manifest only. Keep feature styles in `src/styles/`.
- `src/styles/`
  - `base.css` contains the page shell, dot navigation, custom cursor, and
    shared reveal animation.
  - `portfolio.css` contains the homepage hero, selected-work index, project
    cards, and footer styles.
  - `about.css` contains the standalone about page, contact links, expandable
    project rows, portrait crop, and skills layout.
  - `vision.css` contains the Vision Pro launch, hand-eye experience, and
    related animation keyframes.
  - `case-study.css` contains the shared project case-study flow, metadata,
    section grids, insight cards, takeaways, and placeholders.
  - `responsive.css` contains breakpoint and reduced-motion overrides. Keep it
    imported last so overrides remain predictable.
- `src/index.css`
  - Global tokens, base typography, resets, and root styling.

## Content Rules

- Use the resume as source of truth for claims, dates, roles, metrics, and
  project outcomes.
- Placeholder sections are allowed only when clearly marked.
- Do not invent screenshots, clients, datasets, or extra metrics. Illustrative
  visuals should feel explanatory, not like fabricated product evidence.

## Visual System

- Reference-driven minimal portfolio system based on Yutong Wang's portfolio:
  white background, black text, dot navigation, large whitespace, serif case
  headings, compact mono metadata, pastel media panels, and sparse contact
  footer.
- Typography:
  - Headings: Erode-like serif fallback stack via `--serif`
  - Body/UI: Switzer/Inter-like fallback stack via `--sans`
  - Metadata/UI: Fragment Mono-like stack via `--mono`
- Keep motion subtle and respect readability. Avoid adding decorative animation
  to the hero unless it supports the content.

## Development Notes

- The user prefers skipping build/lint checks unless explicitly requested.
- The user asked to commit after every completed change.
- Commit focused changes separately; avoid bundling unrelated visual and content
  edits into one commit.
- Regenerate the hand-eye launch animation with
  `npm run generate:vision-transition` if the Vision Pro source assets change.
