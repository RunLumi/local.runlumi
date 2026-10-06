# Search Console access path — RUN-018

Observed 2026-10-06. The connector catalog returned GSC Wizard as available, not installed/connected. It describes Search Console performance/query/page analysis and URL inspection; it also advertises other capabilities, so any later use must be constrained to read-only performance and inspection. A suggestion to connect was issued. No Google OAuth, property listing, account data or URL inspection occurred. Current campaign metrics remain unknown until the user connects and selects the appropriate property.

Do not use URL submission, IndexNow, GA4, or other write/data scopes as implied by a Search Console read request. If connected, confirm the correct property and date range, request only bounded query/page performance data for the selected intent groups, preserve denominators and dates, and do not equate impressions, AI citations, enquiries or paid outcomes.
