# Design QA: Amble LinkedIn post link

- Source visual truth: `/var/folders/kt/mjsyky8537n9z1rtwl34g_l00000gn/T/TemporaryItems/NSIRD_screencaptureui_GKuecs/Screenshot 2026-07-21 at 4.03.45 PM.png`
- Implementation screenshot: `/Users/arnav/Desktop/projects/portfolio/.tmp-amble-linkedin-qa-5.png`
- Combined comparison: `/tmp/amble-linkedin-comparison.png`
- Viewport: 2048 × 900
- State: Homepage scrolled to the first project row with Amble and ProcurePilot visible

## Full-view comparison evidence

The Amble title, Live beta pill, and summary retain the existing two-column card composition. The new
LinkedIn mark is placed at the far right edge of the Amble title row and does not shift or overlap the
title or status pill.

## Focused region comparison evidence

The focused title-row comparison confirms that the original typography, white background, title weight,
status treatment, and horizontal rhythm are preserved. The implementation adds one recognizable blue
LinkedIn mark at the requested right-edge position.

## Required fidelity surfaces

- Fonts and typography: Existing sans title and monospace status styles are unchanged.
- Spacing and layout rhythm: The title and status remain grouped left; the social link uses the remaining
  row space and stays flush right.
- Colors and visual tokens: Existing black, white, and grey tokens are unchanged; LinkedIn blue is limited
  to the branded icon.
- Image quality and asset fidelity: The LinkedIn mark comes from the React Icons brand library and renders
  sharply as a vector icon.
- Copy and content: Title and Live beta copy match the approved Amble content.

## Interaction and accessibility checks

- One visible link is exposed with the accessible name `View Amble on LinkedIn`.
- The link points to the supplied LinkedIn activity URL and opens in a new tab.
- The browser console contained no errors.

## Findings

No actionable P0, P1, or P2 differences were found.

## Comparison history

Initial implementation passed the focused comparison; no corrective visual iteration was required.

## Follow-up polish

No P3 follow-up is necessary for the requested scope.

final result: passed
