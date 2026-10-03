# Deployment

Target: **Cloudflare Pages**  
Production origin: **https://local.runlumi.app**

## Build

- framework: Astro
- output: static
- build command: `npm run build`
- output directory: `dist`
- Node: >=22.12

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
