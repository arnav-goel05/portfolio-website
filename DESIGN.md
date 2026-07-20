# DESIGN.md

## Visual Direction

This portfolio uses a sparse, reference-driven system inspired by Yutong Wang's
portfolio and the clear information hierarchy of Puzzle AI.

## Style Preferences

- Use a white background with very large whitespace.
- Use black text and thin grey dividers.
- Use pastel media panels for project imagery.
- Use sparse dot navigation and compact uppercase links.
- Give the fixed navigation a subtle translucent white surface with restrained
  backdrop blur so page content remains softly visible beneath it while scrolling.
- Keep the navigation compact, with approximately 25% less vertical height than
  the original spacious header treatment.
- Keep layouts clean, airy, and reference-like rather than resume-like.
- Keep Selected Work media cards full-width while using compact media heights
  and restrained image scale.
- Align paired desktop project cards on shared content rows, using consistent
  spacing for their media, metadata, copy, details, evidence, stack, and links.
- Avoid dark mode unless explicitly requested.
- Avoid cluttered illustrations or decorative elements that compete with the content.
- Keep animations subtle: left-to-right reveal, image scale on hover, and a
  mouse-only custom cursor.

## Typography

- Headings use an Erode-like serif stack via `--serif`.
- Body and UI text use a Switzer/Inter-like stack via `--sans`.
- Metadata and navigation use Fragment Mono-like text via `--mono`.
- Project-card details use compact mono labels, readable body copy, and bordered
  highlight cells so the information remains scannable.

## CSS Organization

- Keep shared tokens and base typography in `src/index.css`.
- Keep `src/App.css` as an import manifest only.
- Put feature-level visual rules in `src/styles/`.
- Put responsive and reduced-motion overrides in `src/styles/responsive.css`.

## Content Presentation

- Keep project information on the homepage. Each card should quickly communicate
  the overview, problem, contribution, outcome, evidence, tools, and links.
- Keep the About page aligned to Yutong Wang's About flow: compact red section
  labels, large Switzer-like paragraphs, a right-side portrait, underlined
  contact links, thin bordered expandable rows, and a simple two-column skills
  list.
- Prefer clear sections, concise copy, and a small number of strong visuals.
- Use explicit placeholders when real project evidence is unavailable.
- Do not make pages feel like dense reports or dashboards unless explicitly requested.
