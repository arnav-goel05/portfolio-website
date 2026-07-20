## What changed

<!-- Summarize the change and why it matters. -->

## Validation

- [ ] `npm run check:ci`
- [ ] `npm run build && npm run test:e2e`
- [ ] Cloudflare preview reviewed when applicable

## Branch target

- Feature work must target `develop`.
- Production releases are created manually from `develop` to `master`.
- Pull requests to `master` from any other source will fail `release-source`.
