# Original avatar

`avatar.png` is the original 940 × 940 PNG supplied by the user in a ZIP attachment.
It has not been regenerated, edited, cropped, or recompressed.

SHA-256: `6fcd7ae65530f401016a938794b2045598dd7b8c462fd3daedf1c2967598eb91`

`portraitSrc` in `app.js` references this file. The build copies image files byte
for byte into `dist/assets/`. The existing responsive layout uses
`object-fit: contain` and preserves the complete square image.
This note is excluded from the production build.
