# Project-Informed Portfolio Sticker Prompt Set

Mode: built-in `$imagegen`

Style reference: `Screenshot 2026-07-20 at 3.06.46 AM.png`

## Shared prompt

Use case: stylized-concept  
Asset type: small portfolio hero sticker icon  
Input image: supplied portfolio screenshot is a style reference only.  
Style/medium: match the reference sticker language exactly: charming hand-drawn marker and colored-pencil illustration, slightly imperfect black outlines, warm off-white paper body, thick cream die-cut border, very subtle tactile paper grain, muted dusty blue, teal, charcoal, and restrained coral accents. One compact centered object, strong readable silhouette, square composition, generous padding, no cast shadow.  
Scene/backdrop: perfectly flat solid `#00ff00` chroma-key background for removal, one uniform color, no gradients, no texture, no floor, and no lighting variation.  
Constraints: wholly original artwork; no brand logos; no watermark; no readable text; no extra objects; use no `#00ff00` in the sticker; keep the sticker fully separated from the background with crisp edges.

## Asset prompts

1. `amble-city-map.png` — A miniature tilted 3D city-map tile inspired by Singapore discovery, with three simplified cream skyscrapers, a dark teal location pin, and one curved blue route line.
2. `tribe-cortical-audio.png` — A side-view human brain wearing compact studio headphones, with one small flowing audio waveform passing through the brain in muted coral and teal.
3. `vision2value-healthcare-workflow.png` — A medical product-workflow clipboard with a tiny healthcare cross, three connected workflow nodes, and one small app-window thumbnail, integrated into one compact sticker.
4. `currency-accessibility-scan.png` — A modern smartphone camera scanning one abstract banknote, with four simple focus-corner brackets and a tiny speaker-wave accent; no real banknote design.
5. `procurement-conversation.png` — A compact purchase-order clipboard tucked into a grocery produce crate, with one small speech bubble and paper-plane-like message mark, but no recognizable brand logo.
6. `spatial-hand-tracking.png` — A simplified human hand with an extended index finger tracing a curved dotted path between two round 3D targets, with a tiny spatial-depth cube accent.
7. `maternal-risk-rules.png` — A protective heart-shaped badge containing a gentle abstract maternal profile and three small rule-check nodes connected along the edge; respectful and non-clinical.
8. `eye-screening-wheel.png` — One eye combined with a clean radial vision-test wheel, half accented dusty blue and half muted coral, with a tiny focus ring at the center.
9. `spatial-cognition.png` — A simplified brain inside an opaque wireframe spatial cube with three small floating memory tiles around it.
10. `rag-knowledge-retrieval.png` — An open archive drawer containing three document cards, with a bold magnifying glass hovering over one card and two tiny connected retrieval nodes.
11. `credit-risk-gauge.png` — One abstract credit card combined with a semicircular risk gauge and a small upward-versus-downward balance indicator; no card network logo or numbers.
12. `ai-learning-book.png` — An open book with a small neural-network constellation rising from the pages and one modest sparkle, integrated as one compact silhouette.

## Post-processing

The solid chroma background was removed with the installed `remove_chroma_key.py` helper using border auto-key sampling, soft matte, thresholds `12/220`, and despill. Each result was trimmed, centered on a transparent 420 × 420 canvas, and copied into `src/assets/stickers-v2/` for the live site.
