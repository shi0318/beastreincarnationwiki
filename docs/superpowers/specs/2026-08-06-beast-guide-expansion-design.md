# Beast of Reincarnation Guide Expansion Design

Date: 2026-08-06

## Goal

Add six English, source-backed post-launch guides to beastreincarnationwiki.com. Every gameplay claim must be traceable to an official source or reliable hands-on reporting. Recurring Steam feedback may describe player-reported problems, but a single review must never be presented as confirmed game behavior.

The new pages must appear through the site's existing category system and /guides/ collection page. They must not add items to the primary navigation.

## Source Standard

Use sources in this order:

1. Steam store data, official Steam announcements, official trailers, and Game Freak/Fictions material.
2. Reliable hands-on reporting that describes observed controls, mechanics, routes, or upgrade systems.
3. Multiple Steam reviews or discussion reports only for clearly labelled community-reported issues.

Each article will end with a Sources section containing direct URLs and a checked date. Unsupported numbers, hidden item locations, complete boss move sets, and unverified optimization claims will be omitted.

## Article Set

### 1. Koo Bloom Arts, FP and QTE Guide

- Slug: /guides/koo-bloom-arts-qte-guide/
- Category: combat
- Primary sources: official combat overview material and Polygon hands-on combat reporting.
- Scope: FP generation and spending, Bloom Art selection, QTE timing, healing and entanglement interactions, full-FP behavior, and the restriction on repeating the same Bloom Art.

### 2. Parry, Guard, Dodge and Controls Guide

- Slug: /guides/parry-guard-dodge-controls-guide/
- Category: combat
- Primary sources: official combat material, Polygon hands-on reporting, and launch-week tips from reliable outlets.
- Scope: confirmed keyboard/controller inputs, the difference between parry and early guard, entanglement cost, red-glow unblockable attacks, dodge decisions, and a reproducible practice routine.

### 3. Elements, Weakness, Stagger and Daze Guide

- Slug: /guides/elements-weakness-stagger-guide/
- Category: combat
- Primary sources: official combat material and hands-on reporting.
- Scope: visible weakness indicators, confirmed damage/status vocabulary, stagger and daze distinction where sources support it, and how to test element matching without inventing damage values.

### 4. Cleanse Walker Upgrade Materials Guide

- Slug: /guides/cleanse-walker-upgrade-materials-guide/
- Category: beginner
- Primary sources: official game descriptions plus launch-week hands-on tips from Kotaku and ScreenRant.
- Scope: confirmed Walker functions, Generator Devices, Electronic Brains, Memory Chips, weapon/projectile upgrade gating, campsite preparation, and a source-safe upgrade priority framework.

### 5. Lift, Extend and Exploration Guide

- Slug: /guides/lift-extend-traversal-guide/
- Category: exploration
- Primary sources: official gameplay material and launch-week hands-on reporting.
- Scope: Lift and Extend traversal, vertical route reading, air-assassination setup, campsite and material sweeps, and an observation checklist. It will not claim a complete map or collectible list.

### 6. Deluxe DLC and Pre-order Entitlement Fix Guide

- Slug: /guides/deluxe-dlc-entitlement-fix-guide/
- Category: beginner
- Primary sources: official pre-order contents, launch announcement, and the 2026-08-06 official entitlement-fix announcement.
- Scope: exact Standard/Deluxe/pre-order contents, the fixed entitlement issue, Steam update and DLC checks, and a support-report checklist. Community reports may be used only to describe recurring symptoms.

## Images

Each article will use at least one locally stored official Steam or publisher image:

- a relevant card/hero image in frontmatter;
- at least one in-body figure with descriptive alt text and a factual caption;
- no hotlinked third-party editorial images.

Existing official assets will be reused when they accurately match the topic. New official Steam gallery images will be downloaded only when a topic lacks a suitable existing image.

## Collection Placement

No navigation component or navigation data will be changed.

The existing content collection controls placement:

- category: combat places articles 1-3 in the Combat section and combat category page;
- category: beginner places articles 4 and 6 in the Beginner section and beginner category page;
- category: exploration places article 5 in the Exploration section and exploration category page;
- all six automatically appear on /guides/ and in the generated sitemap.

Orders will place the new pages near related post-launch guides without displacing the site's main beginner entry page.

## Internal Linking

Each article will link to two or more relevant existing pages. Existing pages may receive narrowly scoped reciprocal links when useful, especially:

- first-hours build and combat;
- launch-day beginner guide;
- progression and builds;
- PC performance and Steam reception;
- Nushi boss guide.

No unrelated navigation or homepage redesign is included.

## Verification

Before commit:

1. Run npm run build.
2. Confirm all six generated routes exist.
3. Confirm /guides/ contains all six links under the intended categories.
4. Confirm category pages contain only their assigned articles.
5. Confirm each page renders its local image and contains a Sources section.
6. Confirm sitemap-0.xml contains all six canonical URLs.
7. Run git diff --check and inspect the final diff for unsupported claims or accidental navigation edits.

After push, verify each production URL and the /guides/ page through the configured proxy.
