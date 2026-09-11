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
