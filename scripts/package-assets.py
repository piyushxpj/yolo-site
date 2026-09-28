"""Regenerate the public brand asset download after updating artwork or fonts."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
output = root / 'public/downloads/yolo-brand-assets.zip'
output.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for folder in ('assets', 'fonts'):
        for asset in sorted((root / 'public' / folder).iterdir()):
            if asset.is_file() and asset.suffix.lower() in ('.png', '.svg', '.ttf'):
                archive.write(asset, f'yolo-brand-assets/{folder}/{asset.name}')
print(f'Created {output.name} ({output.stat().st_size / 1024 / 1024:.1f} MB)')
