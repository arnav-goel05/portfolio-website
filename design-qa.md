# Design QA

## Source visual truth

The source consists of four supplied 1254 × 1254 pixel images and the requested two by two arrangement:

- `src/assets/liveshield-qr-code-redaction.png` — QR Code
- `src/assets/liveshield-face-redaction.png` — Face
- `src/assets/liveshield-text-redaction.png` — Text
- `src/assets/liveshield-area-redaction.png` — Area

The normalized source board is `.qa/liveshield-source-grid.jpg` at 670 × 730 pixels.

## Implementation evidence

- Desktop: `.qa/liveshield-gallery-desktop.jpg` at 1280 × 720 pixels, captured from a 1280 × 720
  CSS viewport. The browser reported device scale factor 2 and returned a CSS pixel normalized capture.
- Mobile: `.qa/liveshield-gallery-mobile-final.jpg` at 390 × 844 pixels, captured from a 390 × 844
  CSS viewport at device scale factor 1.
- Full comparison: `.qa/liveshield-gallery-comparison.jpg` at 1974 × 730 pixels.
- State: LiveShield card collapsed for visual comparison. The details accordion was separately opened to
  confirm the supplied Problem, Built, Outcome, and Built With content.

The full view confirms that the four source images appear in the requested order and preserve their square
crop, visual treatment, and black privacy masks. The gallery itself is the focused comparison region, so no
additional crop was required.

## Findings

- P0: none.
- P1: none.
- P2: resolved. The first mobile pass inherited the general project image width and rendered each image at
  132.2 pixels inside a 169.5 pixel tile. A gallery specific responsive rule now makes every image fill its
  tile. The final mobile gallery measures 346 × 392 pixels, each image measures 169.5 × 169.5 pixels, and
  the media and gallery scroll dimensions match their visible dimensions.
- P3: none.

## Fidelity surfaces

- Fonts and typography: captions use the existing compact monospace metadata style; project title and copy
  retain the established portfolio hierarchy.
- Spacing and layout: the gallery uses equal two column and two row tracks with consistent gaps and caption
  strips. No horizontal or internal gallery overflow was observed on desktop or mobile.
- Colors and tokens: white caption surfaces, grey metadata text, and existing divider tokens match the
  portfolio system and do not compete with the images.
- Image quality: all four original square PNG files are used directly with no generated replacements or
  content changes.
- Copy and content: captions read QR Code, Face, Text, and Area. The supplied polished LiveShield copy and
  GitHub destination are present.

The details accordion expanded correctly, its Built With row appeared, and the browser console reported no
warnings or errors.

final result: passed
