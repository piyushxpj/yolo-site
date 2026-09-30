# Changelog

## 2026-09-30

- Connected both Download assets buttons to the supplied Yolo Branding Assets ZIP.

## 2026-09-28

### Polished
- Replaced seven large page PNGs with responsive WebP images and began loading below-fold artwork early at low priority. Originals remain in the asset ZIP.
- Added a bottom-of-menu Download assets button with a verified ZIP of 33 artwork and font files.
- Added Visual Language after the font specimens with all four supplied images, and updated its menu destination.
- Added the supplied six-plush-mascot image directly below the animated eye grid, preserving its full proportions.
- Kept the navigation bar stationary during menu opening and closing; only the content panel below the bar slides.
- Matched the open menu header to the hero navigation: black background, white wordmark and controls, identical height and spacing.
- Made eye motions more visible with wider pupil travel, stronger squints, and shorter 3–4.2 second loops that activate as soon as mascots enter view.
- Gave all six mascots distinct continuous eye motions, with independent timing, clipped pupil movement, and reduced-motion support.
- Removed logo and mascot copy buttons and panel borders. Added a subtle, staggered eye glance and blink when the expression grid first enters view, disabled for reduced motion.

### Replaced
- Replaced V1 with Paper frame LU-0: black header, plush hero, colored principles, rounded logo and mascot panels, Brand Colors, and updated font specimens. Removed V2 and normalized its old URL to the main site. Preserved menu, copying, and font downloads.


### Added
- Added Yolo V2 at `/v2/` from Paper frame JI-0, with the mascot hero, purple Logo Mark section, circular expressions, and interactive Brand Colors. V1 remains at `/`.
- Extracted the existing header into a shared component so both versions use the same menu.

### Changed
- Resized V2 into viewport-height Logo Mark, mascot expression, and color sections; the hero fits alongside the header in the first fold. Added responsive type and artwork sizing.
- Standardized all copy and font download buttons to a 12px top and right inset.
- Matched both font download buttons to the light-gray circle and gray icon styling.
- Restyled every logo and mascot copy button with a light-gray circle and gray icon, including the dark logo card.

## 2026-09-27

### Fixed
- Typography specimens now keep consistent bottom spacing, including when the alphabet wraps onto an extra line.
- Menu now slides down before closing, with interruptible 280ms entry and 200ms exit, reduced-motion fading and scrolling, and mouse-only hover effects.
- Menu options return to gray and hide their artwork when the pointer leaves or keyboard focus moves away.
- Centered mascot images by keeping the empty clipboard status element out of the card's grid layout.

### Changed
- Menu text picks a random brand color on each mouse hover, avoids consecutive repeats, and returns to gray on pointer exit.
- Added top-right download buttons to both typography cards for their bundled TTF files.
- Added Paper's Typography section below Colors, showing Alte Haas Grotesk and Uncut Sans Variable specimens with oversized Aa watermarks.
- Color copy confirmation now appears centered inside the clicked swatch.
- Added the Paper Colors section after Clear Space, with expanding swatches, copyable hex codes, and a stacked mobile layout.
- Logo menu artwork slides in slightly and scales up on hover, with a faster exit and no added movement for reduced-motion or touch users.
- Menu slides up from the bottom when opened, respecting reduced-motion preferences.
- Removed the menu button's gray hover background.
- Menu opens with no option selected; highlights appear on interaction.
- Replaced the dropdown with the Paper full-screen menu and five illustrated active states, including keyboard and touch support.
- Added the six Paper mascot expression cards below the logo description, with individual SVG copy buttons and a responsive grid.
- Main logo card now copies the supplied Frame 19 SVG instead of the displayed PNG; its download fallback also uses the SVG.
