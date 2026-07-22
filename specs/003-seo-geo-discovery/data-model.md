# Data Model: SEO and GEO Discovery

## PageMetadata

- `path`: canonical application path (`/`, `/about`, or not-found fallback)
- `title`: route-specific document and social title
- `description`: concise factual route summary
- `canonicalUrl`: absolute apex-domain URL
- `robots`: index/follow policy
- `openGraphType`: social content type
- `structuredData`: zero or more JSON-LD entities
- `status`: HTTP response status for the application shell

### Validation rules

- Every indexable route has a unique title and description.
- Every canonical URL uses HTTPS and the apex hostname.
- Not-found metadata has status 404, `noindex`, and no structured data.
- Query strings and fragments never appear in canonical URLs.

## PersonEntity

- Stable identifier: `https://arnav-goel.com/#person`
- Name and canonical portfolio URL
- Public LinkedIn and GitHub identities
- Education, location, description, and areas of knowledge already stated in the portfolio

## ProjectEntity

- Position in the selected-work list
- Title and summary
- Canonical homepage fragment based on the existing project slug
- Author reference to the shared person identifier

### Validation rules

- Exactly five project entities match `src/data/portfolio.ts`.
- Every project fragment matches an article ID in the rendered homepage.
- Descriptions reuse factual visible summaries rather than adding claims.

## DiscoveryResource

- `robots.txt`: general crawl permission and sitemap location
- `sitemap.xml`: exactly the canonical Home and About URLs
- `llms.txt`: concise identity, route, project, and public-source links

## State transitions

No persisted state is introduced. Request handling selects one metadata state:

```text
www request → permanent apex redirect
apex known route → 200 + index metadata
apex unknown application route → 404 + noindex metadata
static resource → unchanged asset response
```
