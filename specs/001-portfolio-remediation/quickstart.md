# Quickstart Validation

## Prerequisites

- Node.js 22 or newer
- npm

## Clean validation

```bash
npm ci
npm run check
```

Expected: the structural audit, ESLint, TypeScript compilation, and production build all exit successfully.

## Runtime scenarios

```bash
npm run dev -- --host 127.0.0.1 --port 4174
```

Verify:

1. `/` shows the unchanged hero and all project case studies.
2. `/about` and `/about/` show the same about page; each experience expands independently.
3. `/missing` shows an explicit not-found page with a working home link.
4. Keyboard focus remains visible and navigation works without a pointer.
5. A narrow mobile viewport has no horizontal overflow.
6. Reduced-motion mode disables nonessential transitions and the custom cursor is absent on coarse pointers.

## Repository and deployment checks

```bash
git grep -n '/Users/' -- ':!specs/**'
git ls-files outputs .qa tmp
npx wrangler deploy --dry-run
```

Expected: no machine-specific maintained-documentation paths, no generated artifact files, and a successful
Worker dry run without D1 or R2 bindings.
