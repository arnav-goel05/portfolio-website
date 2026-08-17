# Design QA

## Source visual truth

The supplied 968 × 308 pixel screenshot shows the centered hero status block with graduation timing above
the location line. The requested change adds one centered row directly above that graduation line while
preserving the existing type, spacing, and alignment.

## Implementation evidence

- Desktop: `.qa/hero-education-desktop.jpg`, captured at a 1280 × 720 CSS viewport.
- Mobile: `.qa/hero-education-mobile.jpg`, captured at a 390 × 844 CSS viewport.
- Comparison: `.qa/hero-education-comparison.jpg`, showing the supplied source and the updated homepage.
- State: homepage hero at initial load.

## Findings

- P0: none.
- P1: none.
- P2: none.
- P3: none.

## Fidelity surfaces

- Copy: the new row reads `National University of Singapore, Computer Science (Hons.) Year 4` and appears
  immediately above `Graduating in May 2027`.
- Typography: the new row inherits the existing hero status type size, weight, and centered alignment.
- Spacing: the existing 10 pixel vertical rhythm is preserved across all three rows.
- Responsive layout: desktop renders the new row on one line; mobile wraps it cleanly to two centered lines.
- Overflow: no horizontal overflow was observed at either viewport.
- Console: no warnings or errors were reported.

final result: passed
