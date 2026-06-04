# AGENTS.md

## Start Here

Before making changes, read:

1. `ARCHITECTURE.md`
2. `DESIGN.md`

Follow these files when deciding where code belongs and how the site should look.

## Engineering Practices

- Keep the app modular.
- Do not put everything in one file.
- Keep `src/App.tsx` small and focused on app-level composition/routing.
- Put page-level UI in `src/pages/`.
- Put reusable UI in `src/components/`.
- Put static portfolio/resume-backed data in `src/data/`.
- Update `ARCHITECTURE.md` when the app structure changes.
- Update `DESIGN.md` when the visual system changes.
- No testing is needed unless the user explicitly asks for it.
