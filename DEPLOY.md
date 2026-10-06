# Deployment

Target: **Cloudflare Pages**  
Production origin: **https://local.runlumi.app**

## Build

- framework: Astro
- output: static
- build command: `npm run build`
- output directory: `dist`
- Node: 24.19.0 (see `.node-version`)

## Automatic production deployment

Cloudflare Pages project: `lumi-local` in the RunLumi account.
The Pages origin is `https://lumi-local.pages.dev`.
The production custom domain is `https://local.runlumi.app`, attached on
2026-10-03 with explicit user authorization. Cloudflare created the `local`
CNAME pointing to `lumi-local.pages.dev`. HTTPS and both `/` and `/en/` were
verified on the custom domain. Future DNS changes require explicit authorization.

`.github/workflows/release.yml` builds and deploys the pushed commit whenever
`main` changes. Pull requests and pushes to other branches do not deploy.
The workflow can also be run manually on `main` to redeploy the current commit.
The workflow verifies both languages on the production custom domain after upload.
Production runs are serialized to avoid simultaneous uploads.
Automatic deployment requires the GitHub production credential below.

Required GitHub configuration:

- repository variable `CLOUDFLARE_ACCOUNT_ID`: RunLumi account ID;
- production environment secret `CLOUDFLARE_API_TOKEN`: a token restricted to
  RunLumi with Account / Cloudflare Pages / Edit permission.

The Discord webhook remains an encrypted Pages secret, never a build variable.
Without it the enquiry endpoint returns 503 and the form reports failure.

Manual deployment:

```bash
npm ci
npm run build
npx --no-install wrangler pages deploy dist --project-name lumi-local --branch main
```

## Function

`functions/api/enquiries.js` handles same-origin enquiries.

Required production secret:

`DISCORD_TRIAL_WEBHOOK_URL`

Do not commit its value.

Research access (`/data`) uses the Lumi Local editor sign-in: only an EmDash
ADMIN can open it. It needs the production `BLOG` service binding (declared in
`wrangler.jsonc`) and the encrypted Pages marker `BLOG_ADMIN_READY=true`, set only
after the owner has registered a passkey. There is no research password;
`DATA_PASSWORD` is retired and should not exist in any environment. See
[SECURITY.md](SECURITY.md#research-workspace-access).

Use `npm run build`: its post-build step removes research HTML/CSV from public
`dist` assets and generates the private `.data-build/research.js` Function module.
Deploy from the repository root so Wrangler can compile `functions/data/*` and
the private module. A raw `astro build` is not a safe deploy artifact.

Before claiming research protection live, check that anonymous browser requests
to `/data`, `/data/` and `/data/index.html` redirect to
`/_emdash/admin/login?redirect=/data/`, and that anonymous `/data/keywords.csv`
returns 401 without any dataset. A signed-in administrator must get the
page/CSV with no-store headers; “Sign out” must end the editor session; and
homepages must remain public. Check both the
custom domain and Pages deployment hostname. Do not upload credentials to logs.

## Pre-deploy checklist

- `npm ci`
- `npm run build`
- `npm test`
- inspect `/` and `/en/`
- verify 320/375/768/1440 widths
- verify CTA and enquiry form
- verify 399k / 1.99m / 599k / 999k claims
- verify no Google edit access is implied
- verify missing webhook secret returns a controlled failure
- verify CSP / headers
- verify robots and sitemap point to local.runlumi.app
- verify real production URL before claiming live

DNS changes are outside normal code work and require explicit authorization.

## Optional EmDash blog — 2026-10-06

The public blog can use the static reviewed snapshot or an EmDash Worker via Pages service binding `BLOG`. See [docs/blog/README.md](docs/blog/README.md) for supported Node versions, seed/setup, runtime resource names, private-data exclusion, same-origin admin CSP and release/rollback gates. `npm run build` remains the Pages build. `npm run build:blog` prepares the separate Worker; it does not deploy. No DNS or billing change is part of the implementation. Do not expose an uninitialized admin setup wizard or deploy CMS output as the primary Pages site.
