# Implementation Plan: SEO and GEO Discovery

**Branch**: `codex/seo-geo-audit` | **Date**: 2026-07-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/003-seo-geo-discovery/spec.md`

## Summary

Improve crawlability, route identity, social previews, and machine-readable portfolio context without adding visual pages. A small Cloudflare request handler will serve route-specific metadata, canonical redirects, and real 404 responses around the existing Vite application. Static robots, sitemap, and LLM discovery resources plus JSON-LD will describe the same person, routes, and five projects already visible in the site.

## Technical Context

**Language/Version**: TypeScript 6, HTML5, XML, plain text

**Primary Dependencies**: React 19, Vite 8, Cloudflare Workers Static Assets, Wrangler 4; no new package

**Storage**: N/A

**Testing**: Existing Vitest and Playwright suites, Wrangler dry run, HTTP metadata assertions, Chrome rendered-page interaction audit

**Target Platform**: Modern browsers and Cloudflare Workers

**Project Type**: Static client-rendered portfolio with a lightweight edge request handler

**Performance Goals**: Preserve current visual behavior and asset caching; metadata rewriting applies only to HTML application routes

**Constraints**: No new visual pages, no fabricated claims, no D1/R2/queues, no new runtime dependency, no redesign

**Scale/Scope**: Two indexable routes, one shared not-found interface, five selected projects, three crawler discovery resources

## Constitution Check

### Pre-design gate

- **Visual Fidelity**: PASS. Work is head, routing-status, semantic-markup, and crawler-resource only.
- **Explicit Module Boundaries**: PASS. Metadata configuration belongs in `src/data/`; edge behavior has one focused Worker entry; reusable card semantics remain in the existing component.
- **Lean Delivery**: PASS. Uses platform primitives and tracked static files with no new package, storage product, or page.
- **Accessible and Responsive**: PASS. Accordion relationships remain intact and hidden state stays native and keyboard controlled.
- **Evidence Before Completion**: PASS. The plan includes production-equivalent HTTP checks, structured-data parsing, existing quality validation, and a Chrome interaction audit.

### Post-design gate

All gates remain PASS. The request handler is justified by the need for route-specific response metadata, canonical-host redirects, and genuine 404 status codes that a client-only component cannot provide to non-JavaScript crawlers.

## Project Structure

### Documentation (this feature)

```text
specs/003-seo-geo-discovery/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── discovery-contract.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
index.html
public/
├── robots.txt
├── sitemap.xml
└── llms.txt
src/
├── worker.ts
├── components/
│   └── ProjectCard.tsx
└── data/
    └── seo.ts
scripts/
└── audit-seo.mjs
wrangler.jsonc
ARCHITECTURE.md
```

**Structure Decision**: Preserve the existing React/Vite layout. Static metadata facts live in `src/data/seo.ts`; `src/worker.ts` owns response-level canonicalization, status, and head injection; crawler files stay in `public/`; the existing project card owns accordion semantics.

## Complexity Tracking

No constitution violations require justification.
