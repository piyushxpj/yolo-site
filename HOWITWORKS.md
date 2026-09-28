# How It Works

_Last updated: 2026-09-28_

Yolo is a static React brand guide built with Vite and Tailwind CSS. There is one design at `/`, implemented from Paper frame LU-0. Legacy `/v2/` URLs normalize to the main URL while retaining their section hash; V2 components and assets were removed.

`src/main.jsx` renders the hero, purpose, principles, logo lockup, expression grid, character artwork, colors, and typography. `src/guide.css` defines the responsive presentation over shared base styles. The mobile logo card is square; the desktop card preserves Paper’s 1280:692 proportions. `design/paper-current-source.jsx` records the source design. Local `brand-*` assets contain Paper exports and vectors.

`Header.jsx` reuses `Menu.jsx` and `MenuArtwork.jsx`. The native dialog handles focus and scrolling, keeps the navigation header stationary while only the panel beneath it slides up on entry and down on exit, and respects reduced motion. All five menu destinations now have sections, with Visual Language linking to the four-image gallery after the font specimens. The closed header uses Paper’s black background.

Logo and mascot copy buttons are removed. `Mascot.jsx` renders the original vectors inline; each color has its own continuous eye motion: orange blinks, green glances sideways with its pupils, yellow winks, blue lifts its smiling eyes, red looks upward, and purple squints. Loops run at different intervals and pause outside the viewport. Pupils are clipped to their eye whites. Reduced-motion preferences disable decorative eye movement. Cards have no borders. `Colors.jsx` retains hex copying and `Typography.jsx` retains local TTF downloads with 12px top/right button insets.

Run `npm run dev` for the local server and `npm run build` to produce `dist`. No backend is required.

The menu footer includes a Download assets link to `/downloads/yolo-brand-assets.zip`, containing the local artwork and both fonts. Regenerate it after asset changes with `python3 scripts/package-assets.py`.

Page artwork uses 640/1280/1600px WebP variants generated with `python3 scripts/optimize-images.py` (requires cwebp). Original PNGs remain downloadable. Below-fold images start fetching early at low priority; the hero has high priority.
