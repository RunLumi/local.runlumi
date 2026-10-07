# Photorealistic concept imagery

Created 2026-10-03 with the built-in ImageGen tool at the user's request.
These are AI-generated concepts, not photographs of actual customers.
Web delivery files live in `public/photos/`, with 480, 960, and 1440px WebP
variants for each scene. They replace the three industry SVG scenes and the
small SVGs in the hero's three phone previews, and also illustrate the hero's
HTML website previews. Originals remain in the ImageGen output directory.

## salon

Use case: photorealistic-natural. Asset type: wide website industry concept photograph, landscape 3:2. A beautiful believable boutique hair salon in contemporary Vietnam, full-size real interior, two elegant taupe upholstered salon chairs facing tall arched mirrors, pale travertine counter, warm oak cabinetry, neatly arranged unbranded glass hair-care bottles, a small living plant, daylight through a street-facing window. Premium architectural editorial photography, 35mm lens, eye level, physically accurate materials, delicate reflections, soft warm morning sunlight and restrained cinematic polish, airy cream and warm wood with subtle deep navy details. Inviting and luminous, exquisite real-world texture, honest scale. No people, no text, no logos, no watermark, no illustration, no miniature, no toy, no plastic CGI, no oversaturated glow. Single uninterrupted photograph, not a collage.

## garage

Use case: photorealistic-natural. Asset type: wide website industry concept photograph, landscape 3:2. A clean professional independent auto workshop in contemporary Vietnam, a real full-size dark graphite sedan in three-quarter front view with hood raised, organized navy tool cabinets, realistic steel workshop lift and concrete floor, broad open workshop entrance admitting beautiful soft daylight. An authentic small business with carefully maintained equipment rather than a luxury car showroom. Premium automotive editorial photography, 35mm lens, eye level, tactile metal, accurate tire and engine geometry, restrained warm highlights and cool navy shadows, believable reflections, polished but natural. No people, no visible car brand, no readable signs, no logos, no watermark. No toy car, no miniature, no cartoon, no CGI render, no surreal equipment. Single uninterrupted photograph, not a collage.

## hvac

Use case: photorealistic-natural. Asset type: wide website industry concept photograph, landscape 3:2. A real modern wall-mounted split air conditioner professionally installed high on a warm off-white wall in a tasteful compact Vietnamese apartment. Beneath it a pale oak console, a linen curtain lit by soft morning sunlight, a leafy plant at the edge, and an open compact professional service kit on a work mat in the lower foreground, conveying careful air-conditioning maintenance. Appliance is the central clear subject with realistic seams and vent slats, installation clean and plausible. Premium interior/product editorial photography, natural full-size architecture and textures, calm luminous cream, pale wood, subtle navy service tools, realistic reflections and shadows. No people, no brand names, no text, no floating air streaks, no snowflakes, no icons, no toys, no plastic CGI, no collage, no watermark.

## cafe

Use case: photorealistic-natural. Asset type: website cafe preview photograph, landscape 3:2 with a center composition that also crops beautifully into a phone banner. A real Vietnamese iced milk coffee in a clear condensation-covered glass on a small warm oak cafe table, a polished stainless Vietnamese phin set just behind it, and one freshly baked croissant on a simple ivory ceramic plate. In the softly out-of-focus background a refined neighborhood cafe with warm timber and sunlit linen, beautiful natural window light grazing the glass and pastry. Premium food editorial photography, 50mm lens, exquisite realistic coffee layers, glass refraction, buttery pastry flakes and wood grain. Warm, luminous, inviting, authentic full-size objects. No people, no lettering, no logos, no watermark, no cartoon, no toy-like forms, no CGI, no exaggerated steam. Single photograph.


## Service and enquiry concepts — integrated 2026-10-03

User supplied directory:
`/Volumes/SSD/symlinks/james-home/codex/generated_images/01a0ff40-deff-7831-9a39-64d01e2ddcc8`.
These seven existing ImageGen outputs replace the service and welcome SVGs.
Original generation prompts for these seven were not supplied in this task.

| Web asset | Original PNG | Scene |
| --- | --- | --- |
| website | exec-f6a4e68e-46c9-468c-8316-6bdfe7b8dd72.png | Laptop and phone website concept |
| contact | exec-3611ae70-b7d6-4b1d-8c50-b9148a635182.png | Phone messaging at a cafe |
| map | exec-b10b792d-d678-4d21-aa0f-7d7e9bf13f71.png | Phone directions outside a cafe |
| review | exec-4539db20-c963-4b1b-80dc-0be17ee239b3.png | Counter QR stand concept |
| hosting | exec-b92c7622-9942-4517-bbc5-bd7a37faf1a7.png | Illustrative server equipment |
| alerts | exec-9245b43e-27f8-4dbf-8934-28ac60f923a3.png | Phone notification concept |
| welcome | exec-eb2b9b9e-591a-45e1-8fd8-1db5f3c393ed.png | Illustrative consultation |

Delivery: Sharp WebP quality 80 at 480/960/1440px, responsive srcset,
explicit dimensions, lazy loading. Visible VI/EN disclosures distinguish
concepts from actual deliverables, premises, customers, and staff. Generated
QR imagery is decorative, not a functional review destination. No claim of
owning the pictured infrastructure is made. Existing brand and interface
SVG icons remain; interactive product previews remain HTML.

## Google Review QR counter artwork — 2026-10-06

At the user's request, the built-in ImageGen tool produced a natural-light
folded paper-card mockup and localized VI/EN invitation edits. The selected
outputs were visually inspected for physical geometry, exact invitation text
and Vietnamese diacritics. No customer, rating, logo or review result is invented.

The QR service-page artifact now uses `public/photos/qr-counter-vi-{480,960,1440}.webp`
and the corresponding `qr-counter-en` variants. The image has explicit dimensions,
responsive sources and eager loading because it appears in the service hero.
The invitation remains readable/selectable HTML, with visible AI disclosure,
an illustrative-code warning and printing/stand exclusions. Other artifacts
retain their existing inspectable HTML/SVG implementation.

Full generation and edit prompts, source hashes, derivative dimensions,
sizes and SHA-256 hashes are recorded in [QR_COUNTER_ASSETS.json](QR_COUNTER_ASSETS.json).
Original PNGs remain in the ImageGen output directory; project-consumed WebP
files are committed locally. Generation adds no runtime image-service dependency.

## Sitewide page coverage — 2026-10-08

The public-route audit found that the home and blog already used relevant
photographs, while service/industry pages showed only text artifacts. The
existing home salon/garage/HVAC concepts now also illustrate their matching
industry pages. Five new ImageGen stills fill the service Maps, owner-check,
website, journal-policy and 404 gaps. Each has its own scene rather than a
generic image reused across unrelated pages. VI/EN siblings share the same
language-neutral image; explanatory copy and alt text are localized.

Original 1536×1024 PNGs are stored under `output/imagegen/`; public derivatives
are responsive local WebP at 480/960/1440px, quality 78, Sharp effort 6. Original
and derivative SHA-256 hashes, byte sizes, final prompts and usage are recorded
in [`site-visual-assets.json`](site-visual-assets.json). Every new public scene
has a visible AI-illustration label; none depicts a real customer, client
location, ranking, measurement, editorial record or business result.

The private `/data/` research dashboard deliberately remains photo-free: its
tables and charts represent historical evidence and analyst hypotheses.
Decorative generated analytics would reduce trust. Feeds, sitemap and API
responses are non-visual endpoints. New public pages require a page-fit art
review and provenance record; never make pages merely to reuse a generated
image.

### Final prompts

**service-maps** — Service Maps page. Alt text: “A small neighborhood shop
entrance seen from the sidewalk after rain.”

> Use case: photorealistic-natural. Asset type: service-page illustration for a local-business website in Vietnam, wide landscape 3:2. Create a single editorial photograph of a small independent Vietnamese neighborhood shop entrance viewed from the sidewalk after a light morning rain: a distinctive but unbranded deep navy-blue doorway, warm interior light, tactile stone threshold, one potted tropical plant, wet pavement catching soft daylight, neighboring storefronts gently out of focus. The exact physical entrance is the subject, suggesting why a customer needs directions to the right place without showing an app or map. Premium documentary architectural photography, eye-level 35mm lens, physically accurate perspective, real glass, metal, stone and foliage textures, calm warm-paper palette with restrained Civic Navy details, natural contrast, subtle fine-grain realism. Composition: entrance slightly right of center with clear breathing room on the left for responsive cropping. No people, no phone, no screens, no map, no signage, no legible text, no logos, no Google marks, no business name, no QR, no watermark, no fake customer result, no collage, no illustration/CGI look, no oversaturated glow. Keep the scene believable and modest rather than luxury retail.

**service-check** — Owner-confirmed business-information check page. Alt text:
“A blank notebook, paper, pencil and key on a wooden counter.”

> Use case: photorealistic-natural. Asset type: local-business service-page illustration, wide landscape 3:2. A close editorial still life on the owner’s real neighborhood-shop counter: a small closed navy notebook with completely blank cover, a simple pencil, a brass key, an unbranded phone face down, and a single blank cream paper sheet; morning daylight falls across real paper fibers, oak grain and matte metal. The composition feels like a calm owner checking the facts they control before publishing, not a Google-account audit or software dashboard. Premium Vietnamese editorial photography, tactile natural materials, precise physically plausible light and shadows, warm paper with restrained Civic Navy and Lumi Blue accents, moderately shallow depth of field. Objects grouped on the right half with quiet negative space on the left; simple, believable, not staged as luxury. No people, no legible text, no handwriting, no interface, no logos, no Google marks, no ratings, no graphs, no watermark, no CGI, no collage, no invented business documents.

**service-website** — Done-for-you website page. Alt text: “A laptop and
phone with blank screens on a wood counter.”

> Use case: photorealistic-natural. Asset type: local-business website service-page illustration, wide landscape 3:2. A beautifully realistic small Vietnamese service business counter prepared for opening: an unbranded compact laptop and smartphone resting side by side on a warm oak counter, both screens softly lit with plain warm-white blank surfaces and no interface or text, a neat blank paper service menu held by a simple navy clip, one ceramic cup pushed to the far edge, tactile real glass and brushed metal. The physical devices are supporting props; do not make a fake website screenshot. Premium contemporary editorial product photography, close three-quarter angle, natural side-window light, restrained Civic Navy details, soft Paper-colored background, delicate but physically accurate reflections, understated high-end clarity. Compose the devices in the right half with clear calm negative space on the left. No people, no hands, no logos, no readable text, no UI, no charts, no fake customer claim, no Google marks, no QR, no watermark, no CGI, no collage, no oversaturated light.

**editorial-method** — VI/EN journal policy page. Alt text describes a blank
notebook and pencil; the visible caption says the scene is not evidence of
actual editorial work.

> Use case: photorealistic-natural. Asset type: editorial policy-page illustration, wide landscape 3:2. A quiet, lived-in Vietnamese editor's desk in morning window light: an open blank notebook with unmarked cream pages, a sharpened graphite pencil, one folded blank sheet, a small ceramic cup and the blurred edge of a laptop with its screen completely dark. The composition should suggest careful source-checking and revision through tactile ordinary tools, not a staged agency office or proof of actual research. Premium documentary still-life photography, natural daylight, nuanced shadows, very realistic paper grain, wood, ceramic and linen textures, warm paper palette with discreet Civic Navy detail, restrained editorial framing with clear negative space. No people, no readable text, no handwriting, no printed source documents, no logos, no business identity, no fake charts, no browser UI, no watermark, no CGI, no collage, no excessive lens flare.

**missing-route** — 404 wayfinding page. Alt text: “A quiet Vietnamese lane
turning out of sight after rain”; caption clarifies that it is not an actual
business address.

> Use case: photorealistic-natural. Asset type: 404 wayfinding illustration for a warm editorial local-business website, wide landscape 3:2. A real quiet lane in contemporary Vietnam seen at a gentle corner where the sidewalk turns out of view; a small cream wall, dark navy painted door set back on one side, potted tropical plants and wet stone pavement after rain, morning light opening around the bend. Compose as a subtle visual metaphor for a route that changed, not a specific identifiable address or lost customer. Premium architectural documentary photography with tactile masonry, foliage, reflections and natural grain; grounded perspective, understated, cinematic but believable; warm Paper, deep navy shadows and a restrained blue door. No people, no phone, no signage, no arrows, no map, no readable text, no business name, no logos, no watermark, no fantasy, no CGI, no collage, no dramatic fog or neon. Preserve quiet open space for adjacent 404 copy.

## Social preview cards — 2026-10-06

`public/social-card-vi.png` and `public/social-card-en.png` (1200×630) are typographic cards rendered from HTML with the shipped Geist files via headless Chrome, then palette-compressed with Sharp. They contain only the hero line, the canonical Starter price and the four included surfaces; no imagery, customers or results. PNG is required because Facebook and Zalo link previews do not render SVG `og:image`. Regenerate both when the hero line or Starter price changes.
