# Contract: Production Availability Decision

## Request

- Target: `https://arnav-goel.com/` for scheduled checks and production smoke tests.
- Method: HTTPS GET.
- Timeout: 15 seconds.
- Attempts: one, with no retry.

## Healthy response

A check is healthy only when both conditions hold:

1. HTTP status is exactly 200.
2. The response document contains `<title>Arnav Goel — Product, AI, and Software</title>`.

## Failure behavior

- Find an open issue with exact title `[Uptime] arnav-goel.com is unavailable` and label `uptime`.
- Create it only when no exact open issue exists.
- Add no comments to an already-open issue.
- Fail the workflow run.

## Recovery behavior

- If the exact issue is open, add one recovery comment and close it.
- If no exact issue is open, make no issue change.
- Succeed the workflow run.

