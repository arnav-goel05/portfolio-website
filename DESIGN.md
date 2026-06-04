# DESIGN.md

## Visual Direction

This portfolio uses a light editorial design system.

## Style Preferences

- Use a white background with a subtle pale grey grid.
- Use charcoal text.
- Use clay-red accents sparingly.
- Use soft borders and restrained shadows.
- Keep layouts clean, airy, and professional.
- Avoid dark mode unless explicitly requested.
- Avoid cluttered illustrations or decorative elements that compete with the content.
- Keep animations subtle and content-supporting.

## Typography

- Headings use Fraunces via `--serif`.
- Body and UI text use Manrope via `--sans`.

## CSS Organization

- Keep shared tokens and base typography in `src/index.css`.
- Keep `src/App.css` as an import manifest only.
- Put feature-level visual rules in `src/styles/`.
- Put responsive and reduced-motion overrides in `src/styles/responsive.css`.

## Content Presentation

- Keep project pages editorial and easy to scan.
- Prefer clear sections, concise copy, and a small number of strong visuals.
- Do not make pages feel like dense reports or dashboards unless explicitly requested.
