# Sitemap coverage and visual release follow-up — RUN-079

The user requested complete sitemap coverage for existing and future public
pages and blogs, together with the ongoing ImageGen/design direction.

## Verified starting state

PR #88 merged normally on 2026-10-08 as `c4a0ecb`. Hosted build run
`37691240623` passed on exact head `65e2be0`. Production run `37691424952`
passed the build, tests, EmDash seed validation, CMS build, Pages upload and
live verification. Its deployment host is `https://2babca9e.lumi-local.pages.dev`.
The custom domain shows the new VI/EN Maps-service illustration, disclosure and
contact form. The blog is a separate Worker: production `/en/blog/about/`
still showed the previous photo-free template during this check, so Pages
success does not prove completion of the blog visual release.

## Sitemap change

The static snapshot contains 38 distinct canonical indexable URLs. All 10
published bilingual guides, 8 populated topic archives, 14 service/industry
pages, homepages and journal entry/policy pages are included. Search, 404,
RSS, private research and admin pages are intentionally excluded because they
are nonindexable or non-HTML endpoints.

`src/blog/sitemap.js` now provides one readable, grouped sitemap with canonical
pages, journal entrypoints, populated topics and currently published articles.
Paired pages have reciprocal XHTML language alternates including themselves;
unavailable translations have no invented alternate. New published articles
enter from the live CMS collection; withdrawals remove them. Duplicate,
draft, future-dated, invalid-locale and unsafe/reserved-slug records are excluded.
No production content or seed was changed.

The previous sitemap and Article schema used `reviewed_date` as `lastmod` and
`dateModified`. That field is explicitly a source-check date. Optional
modification metadata is now omitted until a real significant-content update
record exists. The visible source-check date is retained.

Sources checked 2026-10-08:

- [Google: build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
  explains canonical URL selection, XML escaping and accurate significant-update
  dates; priority/change frequency are ignored by Google.
- [Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
  documents reciprocal, self-inclusive sitemap alternates and the XHTML namespace.

## Verification and remaining release

Node 24.19.0 static build generated 42 pages; tests passed 65/65. Coverage is
compared with every built indexable canonical page, not only a hard-coded count.
Synthetic publication, translation, withdrawal, duplicate and invalid-record
cases passed. The CMS build passed with the existing font server allowed by
the execution sandbox; its post-build guard excluded private research and local
credential copies.

The expanded read-only verifier passed against current production: all service
pairs, 10 live RSS articles, their topic links, sitemap coverage, robots pointer
and anonymous `/data/` protection. This confirms existing coverage; the new
grouping/alternate/date behavior still requires the matching Worker release.

Next: merge the reviewed sitemap change, release the corresponding CMS Worker
after the Pages assets, and recheck live sitemap alternates, policy-page images,
article motion/style assets and privacy. No Google submission/indexing write,
customer contact, new community post or acquisition result is authorized or
claimed by this work.
