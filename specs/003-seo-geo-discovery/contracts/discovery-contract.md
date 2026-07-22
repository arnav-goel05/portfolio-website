# Discovery Contract

## Canonical host

- `https://www.arnav-goel.com/<path>` returns a permanent redirect to `https://arnav-goel.com/<path>`.
- Path and query are preserved by the redirect; the canonical HTML URL excludes the query.

## Homepage

- Request: `GET /` or `HEAD /`
- Status: `200`
- Canonical: `https://arnav-goel.com/`
- Robots: index and follow
- Structured data: WebSite, WebPage, Person, and an ItemList containing five projects

## About

- Request: `GET /about` or `HEAD /about`
- Status: `200`
- Canonical: `https://arnav-goel.com/about`
- Robots: index and follow
- Structured data: ProfilePage linked to the shared Person identifier
- `GET /about/` and `HEAD /about/` permanently redirect to `/about`.

## Unknown application route

- Request: any non-asset path other than Home or About
- Status: `404`
- Robots: noindex and nofollow in both HTML metadata and response header
- Body: existing client application shell, which renders `NotFoundPage`

## Static discovery resources

- `/robots.txt`: `200 text/plain`
- `/sitemap.xml`: `200 application/xml` or `text/xml`, exactly two canonical URLs
- `/llms.txt`: `200 text/plain`, concise portfolio overview

## Existing interface

- No new navigation entry or visual route.
- Existing project accordion controls retain `aria-expanded` and `aria-controls`.
- Every project article exposes a stable fragment ID matching structured data.
