# Research: SEO and GEO Discovery

## Live audit evidence

Chrome inspection of `https://arnav-goel.com/` and `/about` found:

- no canonical link or robots meta on either route;
- identical titles and descriptions on Home and About;
- Open Graph metadata missing site name and locale, with no Twitter metadata;
- no JSON-LD structured data;
- project details mounted only after the accordion is opened;
- five correctly headed project articles and one primary heading per route;
- project preview images already have meaningful alternative text, while decorative stickers are correctly empty.

Direct HTTP inspection found:

- unknown routes return HTTP 200, creating a soft-404 signal;
- `/robots.txt`, `/sitemap.xml`, and `/llms.txt` currently fall through to the HTML application shell instead of serving discovery resources;
- both Home and About return HTTP 200 as expected.

## Decision 1: Add a minimal edge request handler

**Decision**: Run a small Worker before static assets to canonicalize the hostname, serve route-specific HTML metadata, and return 404 for unknown application routes.

**Rationale**: Client-side head updates cannot provide reliable status codes or metadata to crawlers and social clients that do not execute JavaScript. The Worker reuses the existing built `index.html` and does not create a server-rendered application.

**Alternatives considered**:

- Client-only metadata component: rejected because it cannot fix soft 404s or non-JavaScript social previews.
- Separate HTML files per route: rejected because the user explicitly prohibited new pages and it would duplicate the application shell.
- Full SSR migration: rejected as disproportionate for a two-route static portfolio.

## Decision 2: Use one canonical metadata model

**Decision**: Keep route metadata and JSON-LD graphs in one typed data module and inject them into the existing document head.

**Rationale**: One owner prevents title, canonical, social, and structured-data facts from drifting across the Worker.

**Alternatives considered**:

- Hard-code route metadata directly in the request handler: rejected because it mixes facts with transport behavior.
- Add a head-management dependency: rejected because navigation uses full route requests and the Worker already supplies the authoritative response.

## Decision 3: Provide standards-based and emerging discovery resources

**Decision**: Add `robots.txt`, `sitemap.xml`, and `llms.txt` under `public/`.

**Rationale**: Robots and sitemap are conventional crawl controls. `llms.txt` is an emerging, non-authoritative discovery aid that offers concise, source-linked context to answer engines without hiding content or creating a visual page.

**Alternatives considered**:

- AI-crawler-specific allow rules: rejected because the general allow policy already covers all crawlers and avoids maintaining a vendor list.
- Keyword-heavy AI landing content: rejected because it would reduce trust and violate the no-new-pages constraint.

## Decision 4: Keep accordion content in the document

**Decision**: Render each details region consistently and toggle the native `hidden` attribute instead of mounting and unmounting it.

**Rationale**: The content remains directly associated with the control and available in the rendered document while the visible interaction remains unchanged.

**Alternatives considered**:

- Keep conditional mounting: rejected because machine readers only see the detailed evidence after interaction.
- Expand all projects by default: rejected because it changes the approved interface.

## Final validation evidence

- The focused local Worker audit passed with Home 200, About 200, unknown-route 404, four homepage JSON-LD entities, exactly five project entries, and valid robots, sitemap, and LLM discovery resources.
- Chrome confirmed unique Home and About titles, descriptions, canonicals, indexing directives, social metadata, and route-specific JSON-LD.
- Chrome confirmed the not-found interface retains its existing heading while receiving noindex metadata and no structured data.
- Chrome confirmed one homepage H1, five project articles with matching stable fragments, and five detail regions present and collapsed by default. Opening Amble changed `aria-expanded` to true and removed native hidden state without changing its content.
- The structure audit, lint, 13 unit tests, production build, 12 Chromium/WebKit journeys, and Wrangler deployment dry run passed.
- The first live smoke check exposed an outdated expected-title contract. The monitored title was updated to the new canonical title so uptime checks continue to measure availability rather than report a false outage.
