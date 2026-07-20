# UI Contract

## Routes

| Input path | Required result |
|---|---|
| `/` | Portfolio page |
| `/about` or `/about/` | About page |
| Any other path | Not-found page with a route back home |

## Project collection

- Rendering must accept one or more project records.
- Every record uses the same card component and data schema.
- An odd final record occupies the first column without requiring a selector for its index.
- Adding a record cannot require edits to layout CSS.

## Experience accordion

- Every trigger has a stable unique key.
- `aria-expanded` reflects only that row's state.
- `aria-controls` references the matching content region.
- Activating one trigger cannot open another record with a different identifier.

## Media

- Project stills expose meaningful alternative text.
- Decorative looping video is ignored by assistive technology.
- Video pauses and avoids loading full data when far outside the viewport.
- Media containers retain the approved visual dimensions and cropping behavior.
