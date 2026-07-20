# Contract: Branch and Release Policy

| Target | Allowed source | Required checks | Deployment |
| --- | --- | --- | --- |
| `develop` | Short-lived feature branch | `quality`, `e2e` | Preview version |
| `master` | `develop` only | `quality`, `e2e`, `release-source` | Production Worker |

- Both targets require a pull request and passing required checks.
- Neither target requires an approval count for the solo-maintainer workflow.
- Direct pushes, force pushes, and branch deletion are blocked.
- Release pull requests are opened manually.
- `master` remains the repository default.

