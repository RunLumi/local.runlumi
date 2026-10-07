# PageSpeed Insights service-page snapshot — RUN-061

Observed: 2026-10-07 16:05 +07:00. URL: `https://local.runlumi.app/dich-vu/website-doanh-nghiep-dia-phuong/`. Read-only PSI run; no account data, form submission or site setting was changed.

## Lab result

- Mobile Lighthouse 13.5.0, emulated Moto G Power, slow 4G, single initial page session.
- Scores: Performance 95, Accessibility 100, Best Practices 92, SEO 100, Agentic Browsing 3/3.
- Lab metrics: FCP 2.1 s, LCP 2.1 s, TBT 0 ms, CLS 0, Speed Index 4.1 s.
- PSI displayed **No Data** for field/real-user metrics. This run is not CrUX evidence and cannot establish field Core Web Vitals or a stable performance baseline.
- Render-blocking requests showed estimated savings of 1,030 ms (unscored). Diagnostics listed 4 KiB estimated JS minification, 10 KiB unused CSS, and one long main-thread task. No optimization was made from a single run.

Report: https://pagespeed.web.dev/analysis/https-local-runlumi-app-dich-vu-website-doanh-nghiep-dia-phuong/4ftftc8tsq?form_factor=mobile

## Platform-injected script discrepancy

PSI Best Practices logged a CSP error for `https://static.cloudflareinsights.com/beacon.min.js/...`: the page's `script-src 'self'` blocked execution. A live browser DOM readback confirmed a `cloudflareinsights.com/beacon.min.js` script tag on this public page. A source search of the repository and the current built `dist/` output found no Cloudflare Insights beacon reference. The likely source is an edge/platform injection, but the Cloudflare setting was not inspected, so configuration ownership/state remains unknown.

Cloudflare documents an optional Pages Web Analytics setup that can inject a JavaScript snippet at deployment/edge, and documents that CSP must explicitly allow the beacon script for it to execute: [Cloudflare Pages Web Analytics](https://developers.cloudflare.com/pages/how-to/web-analytics/), [Web Analytics CSP guidance](https://developers.cloudflare.com/web-analytics/faq/).

Do **not** broaden `script-src` to allow the beacon: that would enable visitor measurement. Existing CSP blocks the script, and this repository has no authorization to install analytics. The presence of an injected script plus its blocked console error merits owner review of the Cloudflare Web Analytics setting. No Cloudflare configuration change was made; no claim is made that a beacon executed or data was collected.

## Decision and limits

No app-source performance change is justified from this one Lighthouse run. If the owner wants Cloudflare Web Analytics, first confirm the intended measurement and authorization, then review the required CSP/data path explicitly. If analytics is not intended, a Cloudflare dashboard change to disable automatic injection would be a separate, explicit platform-setting action. Lab results, field CWV, rankings, traffic, citations and enquiries remain separate and unproven.
