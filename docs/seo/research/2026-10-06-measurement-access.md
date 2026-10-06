# Measurement access checkpoint — RUN-019

Observed 2026-10-06. The plugin catalog returned GSC Wizard as available but not installed/connected; a suggestion to connect was already issued. No Google sign-in, property list, Search Console rows or GA4 data have been accessed. Until connection/property authorization, impressions, clicks, queries, indexing status and traffic remain unknown.

This session exposes no Chrome DevTools MCP tools (`navigate_page`, `performance_start_trace`, or related network/trace methods). The `web-perf` skill requires verifying those tools first and says to stop when unavailable. No Core Web Vitals or laboratory performance value is reported. A browser responsive DOM test is not a CWV measurement. Do not substitute generic curl or repeat the same browser sample and call it field data.

Next prerequisites: connect GSC Wizard and choose the Lumi Local property for read-only Search Console work; add the Chrome DevTools MCP through the documented config before any lab performance trace. No account or MCP config change is made by this checkpoint.
