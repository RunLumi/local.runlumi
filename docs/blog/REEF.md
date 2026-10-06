# Reef adaptation

Source: [Aloha Pixel Reef](https://github.com/alohapixelcom-hash/reef), fetched 2026-10-06; commit `c54222a37e5367d91e544985d0cd229abf4e099f`, package version 3.8.5. The [Astro theme listing](https://astro.build/themes/details/reef/) described an older Aloha-backed release at access time; the repository supports EmDash 0.38.0.

Adapted: FeaturedPostCard's full-width editorial band, quiet two-column archive, mobile collapsed/desktop rail TableOfContents, one-source bilingual route model, paginated published-only database reads and switchable static/EmDash live collection wiring. Lumi's implementation is intentionally smaller than the full Reef starter: no fictional studio posts/authors, newsletter, demo photos, Capacitor app, Aloha extensions or remote fonts.

Changed: English/French becomes Vietnamese/English, paper/navy/Lumi Blue replaces Reef tones, Geist replaces display families, original folded-L mark replaces waves. Featured art is original inspectable SVG, not a screenshot of customer work. Local-guide content and the owner-first scope follow COPY.md. The commercial landing and authenticated data Functions remain in place.

Files: src/components/blog/PostCard.astro and TableOfContents.astro; blog.config.mjs; src/live.config.ts; src/blog/source.emdash.js; src/blog/live.*.js. These are adaptations, not a claim that the whole Reef theme was imported unchanged. [MIT notice](../../licenses/reef-MIT.txt) is retained. EmDash and Astro libraries retain their package licenses.
