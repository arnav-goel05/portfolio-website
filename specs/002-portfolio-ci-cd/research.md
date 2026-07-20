# Research: Portfolio CI/CD and Uptime Pipeline

## Branch and release model

- **Decision**: Keep `master` as default/production, use `develop` for integration, require feature PRs to `develop`, and create release PRs manually from `develop` to `master`.
- **Rationale**: This preserves the established production branch while separating day-to-day integration from releases. A dedicated source check makes the manual release contract machine-verifiable.
- **Alternatives considered**: Trunk-based delivery was simpler but did not provide the requested integration buffer. Automatic release PR creation conflicted with the explicit manual-release preference.

## Validation split

- **Decision**: Expose `quality`, `e2e`, and conditional `release-source` jobs. Quality runs formatting, architecture, lint, unit, build, and Wrangler dry run; e2e runs Chromium and WebKit against the built Worker bundle.
- **Rationale**: Stable job names map cleanly to required status checks. Separating browser work keeps feedback readable and avoids repeated browser installation in the quality job.
- **Alternatives considered**: One monolithic job was easier to configure but obscured failure domains and could not express the requested required check names.

## Production-equivalent browser serving

- **Decision**: Build once in the e2e job and let Playwright start `wrangler dev` against `dist/`.
- **Rationale**: This exercises Cloudflare SPA fallback and trailing-slash handling instead of only Vite's development behavior.
- **Alternatives considered**: Vite dev and Vite preview were faster but would not validate the deployed routing contract.

## Formatting and generated files

- **Decision**: Apply one stable Prettier configuration to source, scripts, workflows, and top-level documentation while excluding production media, generated Spec Kit assets, dependency/build output, and browser reports.
- **Rationale**: Formatting must be deterministic without mechanically rewriting governed/generated artifacts or binary assets.
- **Alternatives considered**: Formatting source only would leave workflow and configuration drift; formatting the entire repository would create noisy Spec Kit changes.

## Availability check contract

- **Decision**: Use one reusable Node script for production smoke and uptime decisions. It makes one fetch with an abort timeout, accepts only HTTP 200 plus the exact expected document title, and never retries.
- **Rationale**: One implementation prevents production smoke and recurring monitoring from disagreeing while satisfying the immediate one-attempt decision rule.
- **Alternatives considered**: `curl` was concise but made portable body validation and timeout reporting less clear. Multi-attempt voting was explicitly rejected.

## Outage issue lifecycle

- **Decision**: Use the GitHub CLI already available on hosted runners to find the exact open issue, create it once on failure, and add one recovery comment before closing it on success.
- **Rationale**: This avoids an additional action dependency and makes duplicate/comment suppression explicit.
- **Alternatives considered**: A third-party uptime service added infrastructure. Repeated failure comments would create five-minute noise.

## Cloudflare build responsibilities

- **Decision**: Cloudflare Workers Builds runs `npm ci && npm run check:quality`, uploads branch versions for previews, and deploys `master` followed by the smoke command.
- **Rationale**: GitHub remains the merge gate while Cloudflare owns environment-specific preview and production deployment. The application remains a single static Worker.
- **Alternatives considered**: Deploying from GitHub Actions would require Cloudflare credentials in GitHub and duplicate the requested Workers Builds setup.

