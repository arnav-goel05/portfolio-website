# Design QA: Selected Work media frames

- Source visual truth: `/var/folders/kt/mjsyky8537n9z1rtwl34g_l00000gn/T/TemporaryItems/NSIRD_screencaptureui_e1DHqr/Screenshot 2026-07-20 at 3.31.17 PM.png`
- Implementation screenshot: `/tmp/portfolio-media-after-full.png`
- Combined comparison: `/tmp/portfolio-media-comparison-final.png`
- Viewport: desktop layout evaluated at 2642 × 900 CSS pixels; responsive checks also run at 1280 × 720 and 390 × 844.
- State: homepage Selected Work section with the first two project cards visible and the Amble recording loaded.

## Full-view comparison evidence

The supplied screenshot showed both project assets centered inside large grey panels. The revised desktop capture keeps the same two-column card structure and reduces the visible grey treatment to an 8 px frame around a white media canvas. Card headings and detail rows remain aligned.

## Focused region comparison evidence

The combined comparison isolates the project media treatment. The TRIBE animation and Amble recording remain fully contained without cropping, while each media element now occupies the complete inner canvas. A focused comparison was necessary because the requested change concerned the frame and asset scale rather than the rest of the page.

## Fidelity surfaces

- Fonts and typography: unchanged from the existing portfolio system; headings, summaries, and detail labels retain their previous sizes, weights, and wrapping.
- Spacing and layout rhythm: grey space is reduced to an 8 px frame, media height is reduced from 420 px to 360 px at wide desktop widths, and the shared card rows remain aligned.
- Colors and visual tokens: the existing `#f8f8f8` grey is retained only as the narrow outer frame; the inner media canvas is white.
- Image quality and asset fidelity: original image, GIF, and video assets are reused with `object-fit: contain`; no asset is stretched or cropped.
- Copy and content: unchanged.

## Comparison history

1. First pass exposed a P1 crop issue because percentage height resolved against the replaced media element rather than the fixed frame. Fixed by absolutely positioning media inside the frame with explicit 8 px insets.
2. Mobile verification exposed a P2 width override that kept images narrower than video. Fixed by applying the same full-canvas width rule to both images and video below 620 px.
3. Post-fix desktop and mobile measurements confirmed consistent insets, no horizontal overflow, and aligned card media.

## Interaction and runtime checks

- Amble video reached ready state 4 with no media error.
- Desktop two-column, default single-column, and 390 px mobile layouts were checked.
- Mobile document width matched the 390 px viewport with no horizontal overflow.
- Browser console contained no errors or warnings.

## Findings

No actionable P0, P1, or P2 differences remain for the requested media-frame change.

## Follow-up polish

None required for this scoped change.

final result: passed
