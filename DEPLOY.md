# Deployment

Target: **Cloudflare Pages**  
Production origin: **https://local.runlumi.app**

## Build

- framework: Astro
- output: static
- build command: `npm run build`
- output directory: `dist`
- Node: >=22.12

## Release deployment

Cloudflare Pages project: `lumi-local` in the RunLumi account.
The Pages origin is `https://lumi-local.pages.dev`.
The intended custom domain remains `https://local.runlumi.app`; attaching it and
changing DNS require explicit authorization.

`.github/workflows/release.yml` builds and deploys the exact tag when a stable
GitHub release is published. Drafts, prereleases, and ordinary pushes do not
deploy. A manual run accepts an existing tag for redeployment or rollback.

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

## Pre-deploy checklist

- `npm install`
- `npm run build`
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
