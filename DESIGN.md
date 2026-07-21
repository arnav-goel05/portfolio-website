# Portfolio Design System

## Direction

The site uses a sparse, editorial portfolio system: white surfaces, black typography, thin grey dividers,
large whitespace, restrained project media, and compact monospace navigation and metadata.

## Stable visual contract

- Keep the fixed navbar compact and frosted, with the retro computer mark plus Work, About, Email, LinkedIn,
  and GitHub links.
- Keep the centered hero statement, supporting line, graduation timing, location, and twelve
  project-derived stickers.
- Present work in two-column rows on wide screens and a single column below the established breakpoint.
- Align media, copy, details, stack, and link regions across cards in the same wide-screen row.
- Allow the Built row to use a short bullet list when separate implementation layers need to remain scannable.
- Allow measured Outcome rows to pair concise context with a short metric list when exact results are central
  to the project story.
- Keep each project summary and external links visible, with a compact accordion toggle at the bottom right
  above the divider for revealing the detailed project rows.
- Place an optional branded project-post link at the far right of the title row without displacing the title
  or status pill.
- Use a compact outlined status pill beside a project title when the work is actively updated.
- Keep project information on the homepage; do not add individual project pages or a duplicate footer.
- Preserve compact media height and contained imagery with minimal grey gutter.
- Avoid dark mode, dense dashboards, and decorative elements that compete with content unless requested.

## Typography

- Headings use the local serif fallback stack in `--serif`.
- Body and UI text use the local system sans stack in `--sans`.
- Metadata and navigation use the local monospace stack in `--mono`.
- The site intentionally makes no external font request.

## Interaction and accessibility

- Keep hover scale and link transitions subtle; do not add first-load or scroll reveal animations.
- The custom cursor is mouse-only and must never replace normal focus, touch, or coarse-pointer behavior.
- Respect reduced-motion preferences.
- Accordion controls must expose their expanded state and controlled detail region to assistive technology.
- Maintain one primary heading per page, visible keyboard focus, labeled controls, and meaningful media text.

## CSS organization

- Shared tokens and resets: `src/index.css`
- Shell, navigation, cursor, and not-found page: `src/styles/base.css`
- Hero and project index: `src/styles/portfolio.css`
- About page: `src/styles/about.css`
- Breakpoints and reduced-motion overrides: `src/styles/responsive.css`
- Import order only: `src/App.css`

Update this document whenever a requested change alters the visual or interaction contract.
