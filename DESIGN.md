# DESIGN.md

## Visual Direction

This portfolio uses a sparse, reference-driven portfolio system inspired by
Yutong Wang's portfolio and Puzzle AI case-study flow.

## Style Preferences

- Use a white background with very large whitespace.
- Use black text and thin grey dividers.
- Use pastel media panels for project imagery.
- Use sparse dot navigation and compact uppercase links.
- Keep layouts clean, airy, and reference-like rather than resume-like.
- Avoid dark mode unless explicitly requested.
- Avoid cluttered illustrations or decorative elements that compete with the content.
- Keep animations subtle: left-to-right reveal, image scale on hover, and a
  mouse-only custom cursor.

## Typography

- Headings use an Erode-like serif stack via `--serif`.
- Body and UI text use a Switzer/Inter-like stack via `--sans`.
- Metadata and navigation use Fragment Mono-like text via `--mono`.

## CSS Organization

- Keep shared tokens and base typography in `src/index.css`.
- Keep `src/App.css` as an import manifest only.
- Put feature-level visual rules in `src/styles/`.
- Put responsive and reduced-motion overrides in `src/styles/responsive.css`.

## Content Presentation

- Keep project pages aligned to the Puzzle AI flow: status, title, hero visual,
  overview, metadata, problem, research/discovery, solution, system design,
  walkthrough, validation, and takeaways.
- Keep the About page aligned to Yutong Wang's About flow: compact red section
  labels, large Switzer-like paragraphs, a right-side portrait, underlined
  contact links, thin bordered expandable rows, and a simple two-column skills
  list.
- Prefer clear sections, concise copy, and a small number of strong visuals.
- Use explicit placeholders when real project evidence is unavailable.
- Do not make pages feel like dense reports or dashboards unless explicitly requested.
