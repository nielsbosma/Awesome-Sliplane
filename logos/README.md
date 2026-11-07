# Logos

One logo per spec, `logos/<app>.svg`, built by `node scripts/logos.mjs [app ...]`. Each spec's `app.icon` points at its file here, so the README and the deployer show the same logo.

Every logo is a 256×256 SVG: the project's own mark centred on a rounded tile (white by default, or the brand colour when the mark is white), with a faint outline so the tile reads on light and dark pages. An app with no entry in `sources.json` gets a text tile instead: its name in white on slate.

## sources.json

| Field | Meaning |
|---|---|
| `src` | A path in the app's `source` repo (read from its default branch), or a full URL. SVG is nested as vector; PNG, JPEG and WebP are embedded. |
| `bg` | Tile colour, for marks that are white. Default `#ffffff`. |
| `pad` | Space around the mark, in px of 256. Default `40`. |
| `text` | Make a text tile with this text instead of fetching a logo. |

Take the logo from the project's own repo or website, prefer an SVG mark (not a wordmark), and fall back to the project's GitHub organisation avatar.

## Trademarks

Every logo is the trademark of its project and is used here only to identify that project next to a link to deploy it. Logos come unchanged from each project's own repository or GitHub organisation; they are not covered by this repository's licence.
