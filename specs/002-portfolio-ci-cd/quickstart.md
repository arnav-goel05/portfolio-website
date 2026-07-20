# Quickstart: Validate Portfolio Delivery and Uptime

## Prerequisites

- Node.js 22 and npm
- Authenticated Wrangler and GitHub CLI for remote rollout steps
- Chromium and WebKit Playwright browsers installed locally

## Local validation

```bash
npm ci
npx playwright install chromium webkit
npm run format:check
npm run test:unit
npm run build
npm run test:e2e
npm run check:ci
npm run smoke:production
```

Expected result: every command exits zero; browser tests use the production `dist/` bundle through local Wrangler serving.

## Pull-request validation

1. Push `codex/portfolio-ci-cd` and open a pull request targeting `develop`.
2. Confirm `quality` and `e2e` pass.
3. Confirm a Cloudflare preview is available for review.
4. Merge to `develop` only after the required results pass.

## Manual production release

1. Manually open `develop` to `master`.
2. Confirm `release-source`, `quality`, and `e2e` pass.
3. Merge and verify the Cloudflare production build, deployment, and one-request smoke test.
4. Confirm `https://arnav-goel.com/` contains the expected title.

## Uptime lifecycle exercise

1. Trigger `uptime.yml` manually with its default healthy URL; expect success and no issue.
2. Trigger it with a guaranteed failing URL; expect one open labelled outage issue and a failed run.
3. Trigger the same failure again; expect no duplicate and no new comment.
4. Trigger the default healthy URL; expect one recovery comment and a closed issue.

The scheduled five-minute cadence is best effort and may be delayed, dropped, or disabled after prolonged inactivity in a public repository.

