# Lumi Local blog operations

Built 2026-10-06. Release PR preparation; live activation is recorded below when verified. Editorial contract: [content-guideline.md](../../content-guideline.md); prioritization: [keyword-plan.md](keyword-plan.md); adaptation: [REEF.md](REEF.md); verification: [verification.md](verification.md).

## Shape

| Surface | Source | Purpose |
|---|---|---|
| /blog/ and /en/blog/ | Journal.astro, Blog.astro, blog.css | Bilingual journal |
| /blog/{slug}/ | Five paired guides | One URL per intent |
| /blog/topics/{slug}/ | src/blog/site.js | Controlled topic archives |
| /blog/search/ | Browser search, noindex | Title/summary lookup with accent folding |
| /blog/about/ | Journal.astro | Real organization, editorial disclosure |
| /blog/rss.xml and /en/blog/rss.xml | src/blog/feed.js | Published-only feeds |
| /sitemap.xml | src/pages/sitemap.xml.js | Indexable landing/blog pages only |
| /_emdash/admin | EmDash | Drafts, revisions, explicit publication |

EN mirrors blog routes under /en/. The keyword CSV and authenticated /data dashboard are now upstream on main from PR #15; all password/session/build-extraction guards are preserved. No Pages Function is replaced for enquiries or data authentication.

## Runtime and local start

Use Node **22.22.2+ in the 22.x line**, **24.15.0+ in 24.x**, or **26+**, per package.json. This task verified with Node 24.19.0; the host's Node 22.14.0 is too old for the CMS dependency tree. Prefer Node 24. Set the same supported version in CI/hosting. Use npm ci for a clean install. `.node-version` pins the verified Node 24.19.0 for both GitHub workflows; they run the static build/tests, seed validation and CMS build before a release. Hosted CI has not run for these uncommitted edits.

```sh
npm ci
npm run dev                 # static snapshot preview, no CMS required
npm run build               # public Pages assets; private data extracted
npm run dev:blog            # local Worker/D1/R2, http://127.0.0.1:4324
```

For a fresh LOCAL CMS only, open http://127.0.0.1:4324/_emdash/api/setup/dev-bypass?redirect=/_emdash/admin. This applies the reviewed seed and signs in a local dev admin. Never use dev bypass against production. The API client's auth bypass only signs in; it does not initialize the schema. The setup route above is required once.

The seed is generated from src/blog/content/*.json by npm run blog:seed. It includes a posts collection and ten bilingual articles. Validate it:

```sh
node node_modules/emdash/dist/cli/index.mjs seed seed/blog.json --validate
npm run blog:import         # skip existing entries, never overwrite CMS changes
npm run test:blog:cms
```

The lifecycle verifier creates one synthetic draft in the LOCAL database, checks invisibility, publishes, checks VI/feed/sitemap and absent EN, edits then explicitly republishes, unpublishes and soft-deletes only its fixture. Publishing the edited draft is necessary; a save does not publish it.

EmDash uses live collection _emdash. Static mode aliases to reviewed JSON; CMS mode aliases to D1 reads and never falls back to the seed after a live error. The admin font uses bundled Geist through Astro's local Font provider; disabling EmDash's default Google font alone leaves its required Font component unregistered. Both Noto fetching and the blank-shell failure are avoided.

## Publish content

Open Articles in the admin. Draft first. Required fields include title, summary, short answer, Portable Text article, topic, publisher slug, publication date, source-check date and sources JSON. Author is lumi-local. Topic slugs: lua-chon-dich-vu, quyen-so-huu, hien-dien-dia-phuong, danh-gia-trung-thuc. Sources use objects with label/url; related contains existing article slugs. Date strings use ISO format. Maintain paired slugs when translating.

Preview the text and complete the editorial gate. Save a revision, then choose Publish explicitly. Public pages read published entries on each request; no rebuild is needed to expose a published edit. Draft-only and future-dated entries are excluded from lists, direct routes, feeds and sitemap. English does not silently serve a Vietnamese fallback. Keep source checks and corrections in editorial-log.md.

The title/description fields drive public metadata. Built-in SEO-panel overrides are not consumed by this narrowed theme; do not assume changing that panel alters canonicals/noindex. Use drafts to withhold a page. Rich text supports paragraphs, headings, lists and links; images/custom EmDash plugin blocks need a deliberate renderer extension before use. No plugin marketplace or custom sandbox runner is enabled.

## Production topology — preparation, not deployment

1. Keep the existing Pages site for landing, enquiries and protected research. Build it with npm run build. The added Functions proxy blog/admin/CMS asset/sitemap routes through optional service binding **BLOG**.
2. Build the CMS Worker with npm run build:blog. Output: dist-blog/server/wrangler.json and dist-blog/client/. Any private data HTML/CSV in a shared development build and adapter-generated `.dev.vars`/`.env` copies are removed by the post-build guard before the output is ready for deployment. Deploy only the generated Worker config; the source config is for adapter/dev generation. Do not deploy dist-blog as the primary Pages site: it does not run the Pages enquiry/data Functions.
3. Worker resources: BLOG_DB (D1), BLOG_MEDIA (R2), adapter-generated SESSION (KV). Names/config are in wrangler.blog.jsonc. workers_dev is disabled; publishing resources/bindings is an explicit release action and can affect hosting costs. No resources were created remotely here.
4. For a new production CMS, use an owner-controlled passkey and the official setup flow at the final public origin. Keep the initial uninitialized Worker inaccessible to the public while claiming the first admin: use an authorized staging/Access boundary or a private preview, complete setup, then enable the public service binding. Do not expose an unclaimed setup wizard. Never copy a local dev-admin database to production.
5. After the Worker is initialized, add the Pages service binding BLOG pointing to lumi-local-blog in the appropriate production/preview environment. No DNS change is needed. Deploy Pages with the route manifest. All CMS assets use /_blog-assets/ to avoid collisions with the static landing's /_astro/ files. Preserve Origin, cookies and request body through the binding.
6. Admin requires a route-specific CSP tested for EmDash's inline boot/hydration script and styles. The existing global Pages script-src 'self' policy is retained on public pages. The blog proxy sets a nonce-based policy on admin HTML; deploy-time browser checks must confirm hydration and WebAuthn at the actual HTTPS origin. Do not broaden public CSP or publish until the actual admin works.
7. Verify VI/EN real URLs, profile scope, 404/draft exclusion, feeds/sitemap, asset loading, admin auth, unauthenticated API denial, enquiry failure/success with synthetic data and private /data denial. Local proof is not production proof. No production secret is printed or saved by these scripts.

Without BLOG binding, blog routes serve the reviewed static snapshot; admin/assets return 404. With BLOG configured, an upstream failure returns 503 and never silently resurrects static articles. The proxy preserves auth responses and uses no-store. No customer enquiries are sent to EmDash.

## Backup and rollback

Back up D1 and media using an explicitly authorized secure destination before a production migration. Never rerun seed over a live database. If a CMS release fails, roll back its Worker version first; preserve database changes and inspect compatibility. Removing BLOG restores the static snapshot and can resurrect articles later unpublished in the CMS: only do this with a freshly reviewed/exported snapshot or with affected routes deliberately withheld. Rollback must preserve policy corrections and withdrawals. Recheck public URLs and private-data guards after either path.

## Known evidence limits

Search visibility, AI citations and paid sales are unmeasured. Keyword estimates are historical; settings are unknown. Admin/Worker and static builds are separate proof layers. The editor's vendor UI is distinct from Lumi's public visual system. No newsletter, external outreach, Google profile operations, payment flow, scheduled publishing or custom plugin renderer is part of this release.

## Local service-binding verification

`npm run test:blog:cms` accepts `BLOG_CMS_URL` for an HTTP loopback origin and exercises only synthetic content. For a complete local development boundary, run a secret-free Pages copy with service binding BLOG to the named local CMS Worker (lumi-local-blog), then use `BLOG_CMS_URL=http://127.0.0.1:4335 npm run test:blog:cms`. Wrangler's binding status must show connected. This verifies request/Origin/cookie forwarding and publication through the Functions layer; it is still a development CMS.

`npm run test:blog:proxy` accepts `BLOG_PROXY_URL` (default http://127.0.0.1:4335). It expects a secret-free Pages preview bound to the **compiled** CMS Worker with reviewed local content. It checks public VI/EN routes, feeds/sitemap, matching fresh admin nonces, compiled admin assets, disabled dev bypass, anonymous admin API denial, private-data denial and the missing-webhook response. It rejects Astro dev HTML, so a development server cannot accidentally count as compiled release proof.

For compiled runtime testing, use an isolated consistent SQLite backup of local development D1/KV metadata and a copied build under a private temporary directory; do not read or copy production data. Run its generated config with `wrangler dev --local`, a distinct name and local persistence directory, then point the temporary Pages service binding to that name. Never copy a local dev admin database to a real deployment. Stop both task-owned previews after checking; the owner's original Astro CMS preview remains separate.

Build safety: Astro's adapter can create local credential copies in the server output. `scripts/protect-blog-build.mjs` removes credential filenames recursively **before** extracting private research. The guard removes only generated output; the source `.dev.vars` is untouched. Deploy only after `npm run build:blog` exits successfully, never a raw or interrupted `astro build` directory.

## Production first-admin lock

`server/blog-setup-lock.js` protects all `/_emdash/` routes whenever a BLOG service binding exists and `BLOG_ADMIN_READY` is not the string `true`. With no strong `BLOG_SETUP_TOKEN`, editor routes return 503. With a temporary encrypted setup token, they require HTTP Basic username `owner` and that token; incorrect/malformed requests return 401 before any CMS request. Public blog routes stay readable.

Bootstrap a newly created D1 from a fresh seed-only database with zero users, sessions, API tokens or passkeys; never copy the local development admin. Keep `workers_dev` disabled. Save a generated setup token only to an encrypted Pages secret and a private temporary owner handoff file; never into Git, build output or terminal arguments. Preserve existing Pages secrets when changing service bindings. After the owner registers a passkey, verify one real administrator and completed setup in D1, set `BLOG_ADMIN_READY=true` for production, delete the temporary secret and deploy the Pages update. The owner must perform passkey registration. Check the setup lock on both the custom domain and Pages alias.

CMS Worker deploy uses `wrangler deploy --config dist-blog/server/wrangler.json` after a successful CMS build. D1, R2 and SESSION IDs are explicit in wrangler.blog.jsonc. The existing GitHub Pages token has Pages scope; it is not assumed to authorize CMS Worker deployment. Future CMS code releases require an authorized Worker deployment before/alongside the normal Pages release.

The CMS post-build guard also clears only its generated `.wrangler/deploy/config.json` redirect. This prevents a subsequent Pages deployment from reading the CMS Worker config. Worker releases still use the explicit dist-blog/server/wrangler.json. Other generated redirects are preserved.

Final release evidence: [RELEASE-2026-10-06.md](../RELEASE-2026-10-06.md). `node scripts/verify-release.mjs` performs only read-only production checks; it sends no enquiries or credentials.

## Explicit Pages binding configuration

wrangler.jsonc is the Pages source configuration; wrangler.blog.jsonc is the separate Astro CMS configuration. Pages production declares BLOG to lumi-local-blog; preview explicitly has no production service binding. Local Pages QA that needs the CMS may pass `--service BLOG=lumi-local-blog`. No credentials are stored in either config. Existing encrypted Pages secrets remain server-side.

The production verifier requires no-store on live blog HTML and a protected CMS editor response rather than static 404. Deployment metadata alone does not prove that requests reach the binding. The release workflow runs this live check. Keep readiness as a server-side encrypted environment marker if it must survive config-managed deployments; only mark ready after verified owner registration.

Owner registration and temporary-access closure: [OWNER-HANDOFF.md](OWNER-HANDOFF.md). Public release verification does not establish editor readiness.

## Photographic assets

Each of the ten initial VI/EN guides has a distinct generated photographic illustration. src/blog/photographs.js maps exact locale/slug pairs; src/components/blog/Photograph.astro renders the responsive cover and visible AI disclosure. EmDash text and publication state are not replaced by the image library. Unknown future slugs receive no unrelated photo. Prompt provenance and output hashes live in photography.json; final WebP derivatives live in public/blog-images/.

To regenerate distribution files from selected built-in outputs, pass a private JSON manifest of `{key,path,prompt}` entries to `node scripts/prepare-blog-photographs.mjs <manifest-path>`. Inspect each selected output before accepting it. The script uses Astro's existing Sharp dependency; it resizes and encodes only, without inventing or altering visual content.

Release order for image/template updates: deploy the reviewed Pages assets first, then deploy the matching CMS Worker build with its explicit generated config. This ensures the new images are available before live templates reference them. After both deployments, run `node scripts/verify-blog-photographs.mjs` and `node scripts/verify-release.mjs`; these checks are read-only. Keep production text and identities intact; no seed import or CMS database write is needed to release these presentation assets.
