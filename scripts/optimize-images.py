"""Generate responsive WebP display assets; keep source PNGs for downloads.
Requires cwebp (libwebp).
"""
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[1]
assets = root / 'public/assets'
names = ['brand-hero', 'brand-plush-expressions', 'brand-characters', *[f'visual-language-{i}' for i in range(1, 5)]]
for name in names:
    for width in (640, 1280, 1600):
        subprocess.run(['cwebp', '-quiet', '-q', '85', '-m', '6', '-resize', str(width), '0', str(assets / f'{name}.png'), '-o', str(assets / f'{name}-{width}.webp')], check=True)
original = sum((assets / f'{name}.png').stat().st_size for name in names)
optimized = sum((assets / f'{name}-1600.webp').stat().st_size for name in names)
print(f'All seven images: {original:,} bytes PNG → {optimized:,} bytes WebP at 1600px ({100*(1-optimized/original):.1f}% smaller)')
