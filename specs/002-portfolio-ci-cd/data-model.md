# Data Model: Portfolio CI/CD and Uptime Pipeline

This feature adds no application persistence. The entities below describe repository and operational state managed by GitHub and Cloudflare.

## Branch Policy

- **name**: `develop` or `master`
- **role**: integration or production
- **allowed source**: any short-lived branch for `develop`; `develop` only for `master`
- **required checks**: `quality`, `e2e`, and optionally `release-source`
- **pull request required**: true
- **approval count**: zero
- **direct push / force push / deletion**: blocked

## Validation Run

- **event**: pull request, protected-branch push, or manual dispatch
- **commit**: immutable source revision
- **jobs**: quality, e2e, and conditionally release-source
- **state**: queued → running → passed, failed, cancelled, or skipped
- **artifacts**: Playwright report only when e2e fails

## Deployment

- **source branch**: feature, develop, or master
- **environment**: preview for non-master; production for master
- **build result**: passed or failed
- **deployment result**: uploaded/deployed or failed
- **verification result**: production only; passed or failed after one request

## Availability Check

- **target**: canonical root by default, overrideable for manual lifecycle validation
- **timeout**: 15 seconds
- **attempt count**: exactly one
- **HTTP status**: response status or unavailable
- **title match**: true or false
- **decision**: healthy or unavailable

## Outage Issue

- **identity**: exact title `[Uptime] arnav-goel.com is unavailable` plus `uptime` label
- **state**: absent → open → recovered/closed
- **failure transition**: absent to open; open remains unchanged
- **success transition**: open receives one recovery comment and closes; absent remains absent

