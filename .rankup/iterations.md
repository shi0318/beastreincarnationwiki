# Iterations

## 2026-09-07 — Evidence label clarification

- Goal: prevent third-party post-launch coverage from being mistaken for this site's personal playthrough.
- Changed: the `third-party-tested` visitor-facing badge now reads `Cited playthrough`; its explanation states that the details come from named post-launch outlets and have not all been independently reproduced here. Updated the About, Disclaimer, Game Info, guide hub, and homepage wording to match.
- Validation: Beast guide checks and Astro build passed; 108 pages generated; `git diff --check` passed.
- Boundary: `Hands-on` remains reserved for original playtest notes; no new boss, weapon, or route claim was added.
- Next improvement: use GSC query data to select the next page-level evidence upgrade.

## 2026-09-07 — Post-launch homepage answer cluster

- Goal: connect the released game’s first-hours, Nushi, achievements, and weapons intents to existing pages without creating thin URLs.
- Changed: added a homepage “Post-launch answers” cluster linking only to existing guides and kept each evidence boundary visible.
- Validation: Astro build generated 108 pages; guide verification tests passed; `git diff --check` passed.
- Boundary: no additional boss data or weapon tier list was invented; pages that rely on community or dated evidence remain labelled accordingly.
- Next improvement: use GSC queries to choose the next page-level update rather than bulk publishing.


## 2026-11-01 — gameplay content batch A

Added two original English gameplay articles, each over 1,000 body words, with local game images, guide-hub discovery, accurate canonical and sitemap dates. Main navigation does not link individual new articles. Official Steam announcement raw evidence, article manifest and output checks are recorded in _hot-research/2026-11-01/a/. Production build and relevant test suite both pass; November Phantom schema dates are explicitly checked. No deployment executed. No measured search-volume or recent popularity claim is made.
