# Journal

## 2026-09-28 — Single design from LU-0

The user explicitly replaced the separate-version approach with one main design from the new Paper frame. Removed V2 components, applied the new frame to the main route, exported its raster artwork and SVGs locally, and retained existing menu motion, clipboard interactions, and font downloads. Mobile uses a square logo card and two-column expressions.


## 2026-09-28 — V2 fold sizing

Split the mascot expressions from Logo Mark into their own section. Each main section uses viewport height with flexible artwork space, responsive typography, and a 480px minimum for short windows. The desktop hero fits the first screen including its header; on phones it retains its natural aspect ratio to avoid excessive whitespace. Verified 1440×900 desktop and 378×757 mobile section heights without content overflow. V1 remains unchanged.

## 2026-09-28 — Separate Yolo V2

The user asked to preserve the current design and build Paper frame JI-0 as a named alternative with the same menu. Since this folder is not a Git repository, separate URLs provide both versions at once without branch switching. V1 stays at `/`; V2 is at `/v2/`. The header was extracted unchanged, and V2 styles are scoped. Used Paper's exported hero and SVG artwork, plus the existing color-copy interaction. Production build passed and the V2 menu navigates to its Colors section.

## 2026-09-27 — Interactive color palette

Added Paper's seven-color accordion after Clear Space using the exported hex values and desktop dimensions. Cards expand to reveal a name and code, and copy the code on activation. Mobile uses a vertical accordion to keep all seven targets usable. Flex sizing changes are intentional here because the requested effect redistributes space between adjacent cards; reduced motion disables the transition.

## 2026-09-27 — Full-screen menu

The linked Paper frame contains five states of one menu. We used the source JSX for precise type, positions, colors, and SVG decorations, and exported the cropped raster artwork through Paper because its source URLs require authentication. A native dialog contains focus and locks background scrolling. Missing destination sections remain previews rather than broken links.

## 2026-09-27 — Mascot centering

The empty live status span was a second grid item, pushing the mascot above the card's center. Clipboard status now always uses absolute positioning, so it never affects image placement, even before or after copying.

## 2026-09-27 — Mascot expressions

Added the linked Paper grid immediately after the logo description. We preserved the six distinct vector expressions from the JSX export and reused the existing copy control so every card provides its own SVG.

## 2026-09-27 — What is this project

We're building a Yolo brand guide from the Paper design so the brand's purpose, logos, and spacing rules are available in a responsive site.

The main logo card keeps its original PNG presentation while its copy button uses the supplied Frame 19 SVG. Separating the display and clipboard assets preserves the layout while providing the requested vector markup.
