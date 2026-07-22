# Feature Specification: SEO and GEO Discovery

**Feature Branch**: `codex/seo-geo-audit`

**Created**: 2026-07-22

**Status**: Ready

**Input**: Audit and improve the portfolio's search-engine optimization and generative-engine discoverability without adding pages, using Chrome for live interaction checks and Spec Kit for governed delivery.

## User Scenarios & Testing

### User Story 1 - Search engines understand each route (Priority: P1)

As a recruiter or collaborator searching for Arnav Goel, I want search engines to receive accurate, route-specific information so the portfolio and About page can be indexed and described correctly.

**Why this priority**: Correct status codes, titles, descriptions, canonicals, and crawl directives are the foundation for every other discovery improvement.

**Independent Test**: Request the homepage, About route, and an unknown route and inspect their status codes and metadata without relying on a visual redesign.

**Acceptance Scenarios**:

1. **Given** the canonical homepage, **When** a crawler requests it, **Then** it receives an indexable 200 response with a homepage title, description, canonical URL, and social metadata.
2. **Given** the About route, **When** a crawler requests it, **Then** it receives an indexable 200 response with distinct About metadata and its own canonical URL.
3. **Given** an unknown route, **When** a crawler requests it, **Then** it receives a 404 response marked not to be indexed.
4. **Given** the www hostname, **When** a crawler requests any path, **Then** it is permanently redirected to the matching canonical apex URL.
5. **Given** the trailing-slash About variant, **When** a crawler requests it, **Then** it is permanently redirected to the non-trailing-slash canonical URL.

---

### User Story 2 - Search and answer engines understand the portfolio (Priority: P2)

As a person using a search or AI answer engine, I want Arnav's identity, expertise, and selected projects described in machine-readable and concise source material so the engine can represent the portfolio accurately.

**Why this priority**: Clear entities and source-backed project descriptions improve both conventional search interpretation and generative retrieval without changing the visible site.

**Independent Test**: Parse the structured data and discovery resources and confirm that they identify Arnav, both existing routes, and all five current projects.

**Acceptance Scenarios**:

1. **Given** the homepage, **When** a machine reads its structured data, **Then** it can identify the website owner, public profiles, areas of work, and five selected projects.
2. **Given** the About route, **When** a machine reads its structured data, **Then** it can identify it as Arnav's profile page and connect it to the same person entity.
3. **Given** a crawler requesting site discovery resources, **When** it reads them, **Then** it finds only the two existing indexable routes and a concise text overview of the portfolio.

---

### User Story 3 - Existing visitors retain the same experience (Priority: P3)

As a portfolio visitor, I want the site's appearance, navigation, project accordions, and content to remain unchanged while discovery improvements are added behind the scenes.

**Why this priority**: Search improvements must not compromise the approved portfolio presentation or introduce duplicate project pages.

**Independent Test**: Browse both existing routes, use a project accordion, and compare the rendered content and navigation with the current interaction contract.

**Acceptance Scenarios**:

1. **Given** the homepage, **When** a visitor opens and closes a project, **Then** the same details are available with the same accordion behavior.
2. **Given** either existing route, **When** a visitor uses the navigation, **Then** Home, Work, About, and external destinations continue to work.
3. **Given** the completed change, **When** the route inventory is reviewed, **Then** no new visual page or project route exists.

### Edge Cases

- Trailing-slash and non-trailing-slash About requests resolve to one canonical About URL.
- Query strings and fragments do not create alternate canonical URLs.
- Static assets and discovery files bypass HTML metadata rewriting and retain their correct content types.
- HEAD requests return the same status and headers as GET requests without a body.
- Unknown routes still render the existing friendly not-found interface while returning a real 404 status.

## Requirements

### Functional Requirements

- **FR-001**: The homepage MUST expose a unique title, description, canonical URL, index directive, Open Graph metadata, and Twitter metadata.
- **FR-002**: The About route MUST expose distinct route-specific metadata and canonicalize both slash variants to `https://arnav-goel.com/about`.
- **FR-003**: Unknown application routes MUST return HTTP 404 and a no-index directive while preserving the existing not-found interface.
- **FR-004**: Requests to `www.arnav-goel.com` MUST permanently redirect to the equivalent apex-domain URL.
- **FR-005**: The homepage MUST include machine-readable website, person, and selected-work entities covering all five current projects.
- **FR-006**: The About route MUST include a profile-page entity connected to the same person identity used on the homepage.
- **FR-007**: The site MUST serve a valid robots policy, XML sitemap, and concise LLM-oriented discovery document as non-page resources.
- **FR-008**: The sitemap MUST contain only the existing homepage and About route.
- **FR-009**: Collapsed project details MUST remain semantically associated with their controls and available in the rendered document without changing the visible collapsed state.
- **FR-010**: Static assets and the existing two-route visual application MUST continue to function without new UI pages or new runtime dependencies.
- **FR-011**: All public metadata and discovery claims MUST be grounded in content already presented in the portfolio or its linked public profiles.

### Key Entities

- **Person**: Arnav Goel, his canonical portfolio identity, public profiles, education, location, and areas of work.
- **Website**: The canonical portfolio at `arnav-goel.com`, its owner, language, and description.
- **Page Metadata**: Route-specific title, description, canonical URL, indexing directive, social tags, and structured-data graph.
- **Selected Project**: One of the five current portfolio projects, identified by title, summary, canonical fragment, and author.
- **Discovery Resource**: A crawler-facing robots policy, sitemap, or concise portfolio overview that does not create a new visual page.

## Success Criteria

### Measurable Outcomes

- **SC-001**: The homepage and About route each return HTTP 200 with distinct titles, descriptions, and canonical URLs.
- **SC-002**: Every unknown application route tested returns HTTP 404 and is marked not to be indexed.
- **SC-003**: The www hostname redirects to the matching apex URL in one permanent redirect.
- **SC-004**: The homepage structured data parses as valid JSON and contains one person, one website, and exactly five selected-project entries.
- **SC-005**: The robots policy and LLM discovery resource return plain text, while the sitemap returns XML containing exactly two canonical page URLs.
- **SC-006**: Both existing pages retain one primary heading, all five project cards remain on the homepage, and project accordions continue to expose their existing content and accessibility state.
- **SC-007**: The production-equivalent build and existing quality checks complete without adding a runtime package or visual regression.

## Assumptions

- GEO means improving accurate retrieval and representation by generative answer engines through clear entities, direct language, and accessible discovery resources; it does not mean keyword stuffing or creating AI-only pages.
- The canonical public domain is `https://arnav-goel.com` and the canonical About URL has no trailing slash.
- Existing visible portfolio content is authoritative; the change will not invent awards, employment, metrics, or project claims.
- Static discovery files are crawler resources rather than new website pages and therefore remain within the user's no-new-pages constraint.
- Search ranking outcomes depend on external engines and cannot be guaranteed by technical implementation alone.
