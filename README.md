# Yolo Brand Guide

A responsive brand guide built with React, Vite, and Tailwind CSS.

## Run locally

```sh
npm ci
npm run dev
```

Open the URL printed by Vite.

## Build

```sh
npm run build
npm run preview
```

Production files are generated in `dist/`.

## Features

- Responsive brand guidelines, logo artwork, mascot expressions, colors, typography, and visual examples.
- Animated menu with a stationary navigation bar.
- Individual eye animations with reduced-motion support.
- Copyable color values and downloadable fonts.
- Complete asset ZIP available from the hero and menu.

## Update the asset bundle

After changing artwork or fonts, regenerate the ZIP with Python 3:

```sh
python3 scripts/package-assets.py
```

Assets and fonts are stored locally under `public/`. No backend or external image service is required. See `HOWITWORKS.md` for implementation details.
