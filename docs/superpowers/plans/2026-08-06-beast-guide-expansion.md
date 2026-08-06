# Beast of Reincarnation Guide Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish six English, source-backed post-launch Beast of Reincarnation guides with relevant local official images and automatic placement in the existing guide hub, category pages, and sitemap.

**Architecture:** Each guide is an Astro content-collection Markdown entry under `src/content/guides`, so category placement and route generation come from frontmatter rather than navigation edits. A small Node verification script checks the six-entry contract before the Astro build, while the existing collection pages and sitemap integration provide the public index and canonical URLs.

**Tech Stack:** Astro 5 content collections, Markdown with inline HTML figures, Node.js verification script, Tailwind-powered existing layouts, Steam Web API/store assets, PowerShell network access through `http://127.0.0.1:7897`.

---

## File Map

- Create `scripts/verify-guide-expansion.mjs`: validate the six expected slugs, categories, source labels, local images, figures, Sources sections, checked dates, and internal links.
- Modify `package.json`: add `verify:guides` without changing the existing build command.
- Create `public/images/beast-of-reincarnation-deluxe-dlc.webp`: local official Steam Deluxe DLC card/figure asset.
- Create `src/content/guides/koo-bloom-arts-qte-guide.md`: focused Koo FP, Bloom Art, QTE, healing, and command guide.
- Create `src/content/guides/parry-guard-dodge-controls-guide.md`: defensive controls and practice guide.
- Create `src/content/guides/elements-weakness-stagger-guide.md`: elemental matching, weakness UI, stagger, and daze guide.
- Create `src/content/guides/cleanse-walker-upgrade-materials-guide.md`: Walker upgrade gating and material sweep guide.
- Create `src/content/guides/lift-extend-traversal-guide.md`: Lift, Extend, route reading, and air-assassination guide.
- Create `src/content/guides/deluxe-dlc-entitlement-fix-guide.md`: exact edition contents and official entitlement fix guide.
- Modify `src/content/guides/launch-day-beginner-guide.md`: add narrow reciprocal links to the new focused combat and traversal pages.
- Modify `src/content/guides/first-hours-build-and-combat.md`: add narrow reciprocal links to Walker and defensive-control pages.
- Do not modify `src/components/Header.astro` or `src/data/site.ts`; category frontmatter is the only placement mechanism.

### Task 1: Add the Expansion Contract Verifier

**Files:**
- Create: `scripts/verify-guide-expansion.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add the failing verifier**

Create `scripts/verify-guide-expansion.mjs` with these fixed expectations:

```js
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const guidesDir = join(root, 'src', 'content', 'guides');
const imagesDir = join(root, 'public', 'images');
const expected = {
  'koo-bloom-arts-qte-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-koo-blighted-wolf.webp',
  },
  'parry-guard-dodge-controls-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-emma-parry-flower-beast.webp',
  },
  'elements-weakness-stagger-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-blighted-boar-enemies.webp',
  },
  'cleanse-walker-upgrade-materials-guide': {
    category: 'beginner',
    source: 'handson',
    image: 'beast-of-reincarnation-wasteland-colossal-boss.webp',
  },
  'lift-extend-traversal-guide': {
    category: 'exploration',
    source: 'handson',
    image: 'beast-of-reincarnation-emma-koo-river-exploration.webp',
  },
  'deluxe-dlc-entitlement-fix-guide': {
    category: 'beginner',
    source: 'official',
    image: 'beast-of-reincarnation-deluxe-dlc.webp',
  },
};

const errors = [];

for (const [slug, rules] of Object.entries(expected)) {
  const guidePath = join(guidesDir, `${slug}.md`);
  if (!existsSync(guidePath)) {
    errors.push(`${slug}: guide file is missing`);
    continue;
  }

  const body = readFileSync(guidePath, 'utf8');
  for (const [field, value] of Object.entries(rules)) {
    const pattern = new RegExp(`^${field}: ["']?${value.replaceAll('.', '\\.')}["']?$`, 'm');
    if (!pattern.test(body)) errors.push(`${slug}: expected ${field}=${value}`);
  }

  if (!/^preview: false$/m.test(body)) errors.push(`${slug}: preview must be false`);
  if (!body.includes('<figure>')) errors.push(`${slug}: local in-body figure is missing`);
  if (!body.includes('src="/images/')) errors.push(`${slug}: figure must use /images/`);
  if (!body.includes('## Sources')) errors.push(`${slug}: Sources section is missing`);
  if (!body.includes('Checked 2026-08-06')) errors.push(`${slug}: checked date is missing`);
  const internalLinks = body.match(/\]\(\/guides\//g)?.length ?? 0;
  if (internalLinks < 2) errors.push(`${slug}: expected at least two internal guide links`);
  if (!existsSync(join(imagesDir, rules.image))) errors.push(`${slug}: ${rules.image} is missing`);
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified 6 source-backed guide entries.');
```

Add this script to `package.json`:

```json
"verify:guides": "node scripts/verify-guide-expansion.mjs"
```

- [ ] **Step 2: Run the verifier and confirm the content contract fails before implementation**

Run: `npm run verify:guides`

Expected: exit code 1 with six `guide file is missing` messages.

- [ ] **Step 3: Commit the verifier**

```powershell
git add package.json scripts/verify-guide-expansion.mjs
git commit -m "test: add guide expansion verifier"
```

### Task 2: Add the Official Deluxe DLC Image

**Files:**
- Create: `public/images/beast-of-reincarnation-deluxe-dlc.webp`

- [ ] **Step 1: Download the official Steam DLC header through the configured proxy**

Run:

```powershell
$taskProxy = 'http://127.0.0.1:7897'
Invoke-WebRequest -Proxy $taskProxy -Uri 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4146830/51abc08e21102a96effc1c5758687b7ae8df3bd4/header.jpg?t=1785801564' -OutFile 'image/steam2/deluxe-dlc-header.jpg'
```

Expected: ignored source file `image/steam2/deluxe-dlc-header.jpg` exists and is a valid Steam-hosted JPEG.

- [ ] **Step 2: Convert it to the site's WebP format**

Run:

```powershell
@'
from PIL import Image
src = Image.open('image/steam2/deluxe-dlc-header.jpg').convert('RGB')
src.save('public/images/beast-of-reincarnation-deluxe-dlc.webp', 'WEBP', quality=82, method=6)
'@ | python -
```

Expected: `public/images/beast-of-reincarnation-deluxe-dlc.webp` exists, opens correctly, and is no larger than the original JPEG.

- [ ] **Step 3: Commit the official image**

```powershell
git add public/images/beast-of-reincarnation-deluxe-dlc.webp
git commit -m "assets: add official deluxe dlc image"
```

### Task 3: Add the Koo Bloom Arts, FP and QTE Guide

**Files:**
- Create: `src/content/guides/koo-bloom-arts-qte-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use:

```yaml
title: "Koo Bloom Arts, FP & QTE Guide - Beast of Reincarnation"
description: "How Koo's Bloom Arts work in Beast of Reincarnation: earning and spending FP, landing QTEs, Full Bloom bonuses, healing, and command inputs."
heading: "Koo Bloom Arts, FP & QTE Guide"
category: combat
keyword: "beast of reincarnation bloom arts qte"
image: "beast-of-reincarnation-koo-blighted-wolf.webp"
imageAlt: "Koo with dark fur and red blighted growths along his back and tail in Beast of Reincarnation"
publishDate: 2026-08-06
order: 0
featured: true
preview: false
source: handson
```

Write these sections and no unsupported skill list or damage formula:

- `## Quick answer`: FP belongs to Koo; entanglement belongs to Emma; successful parries refill both.
- `## How to open and choose Bloom Arts`: `F` on PC, `Y` on Xbox, `Triangle` on PlayStation; time slows but does not fully pause.
- `## How the QTE changes the result`: hit the yellow zone for maximum version; a miss still triggers a weaker attack; the same Bloom Art cannot be repeated immediately.
- `## Healing, double prompts and Full Bloom`: successful QTE restores some HP; double prompt restores some entanglement; full FP grants Polygon's reported `+100% damage` and `+50% stagger`, explicitly attributed to that launch guide rather than presented as independently measured.
- `## What Koo does without commands`: regular actions are automatic; pre-engagement command is right mouse plus middle mouse on PC or `LT/L2` plus right stick on controller.
- `## A source-safe combat loop`: parry, inspect weakness, choose a matching art, land the prompt, rotate to a different art, and avoid claiming cooldown or hidden frame data.
- Include figures using `/images/beast-of-reincarnation-koo-blighted-wolf.webp` and `/images/beast-of-reincarnation-emma-parry-flower-beast.webp` with factual captions.
- Link to `/guides/parry-guard-dodge-controls-guide/`, `/guides/elements-weakness-stagger-guide/`, and `/guides/launch-day-beginner-guide/`.
- End with `## Sources` and direct Steam combat-announcement and Polygon URLs, each ending `Checked 2026-08-06`.

- [ ] **Step 2: Run the verifier to confirm only five guide files remain missing**

Run: `npm run verify:guides`

Expected: exit code 1; no error for `koo-bloom-arts-qte-guide`, and five missing-guide errors remain.

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/koo-bloom-arts-qte-guide.md
git commit -m "content: add Koo bloom arts guide"
```

### Task 4: Add the Parry, Guard, Dodge and Controls Guide

**Files:**
- Create: `src/content/guides/parry-guard-dodge-controls-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use `category: combat`, `source: handson`, `preview: false`, `publishDate: 2026-08-06`, `order: 1`, and image `beast-of-reincarnation-emma-parry-flower-beast.webp`. Use the title `Parry, Guard, Dodge & Controls Guide - Beast of Reincarnation` and heading `Parry, Guard, Dodge & Controls Guide`.

Write these sourced sections:

- `## Controls at a glance`: parry `Q` / `LB` / `L1`; red-attack dodge `Ctrl` / `B` / `Circle`; Bloom menu `F` / `Y` / `Triangle`.
- `## Parry and guard use the same input`: just-before-impact is a parry; early input becomes guard; parry shows yellow sword sparkles; guard drains entanglement and gives no FP; empty entanglement means guard no longer prevents full damage.
- `## What a successful parry pays for`: negates the hit, restores FP and entanglement, and allows an immediate attack-button riposte.
- `## Red attacks must be dodged`: Polygon's observed red flash cannot be guarded or parried; successful timed dodge allows an attack-button counter.
- `## Unlock the real dodge roll early`: clearly attribute Kotaku's Tracking Shot skill-tree advice and avoid assigning an unlock cost.
- `## A reproducible five-minute practice drill`: an editorial routine derived from the controls, explicitly saying it is not frame data.
- Include local figures, two or more internal guide links, and `## Sources` with Polygon, Kotaku, and the official combat announcement; all checked 2026-08-06.

- [ ] **Step 2: Run the verifier**

Run: `npm run verify:guides`

Expected: exit code 1 with four missing-guide errors.

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/parry-guard-dodge-controls-guide.md
git commit -m "content: add defensive controls guide"
```

### Task 5: Add the Elements, Weakness, Stagger and Daze Guide

**Files:**
- Create: `src/content/guides/elements-weakness-stagger-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use `category: combat`, `source: handson`, `preview: false`, `publishDate: 2026-08-06`, `order: 2`, and image `beast-of-reincarnation-blighted-boar-enemies.webp`. Use the title `Elements, Weakness, Stagger & Daze Guide - Beast of Reincarnation` and heading `Elements, Weakness, Stagger & Daze`.

Write only these supported claims:

- Poison, acid, flame, and lightning are the four elemental effects Polygon reports as damage-over-time effects.
- Destructive attacks break shields; bind attacks control movement.
- The weakness icon appears next to the enemy HP bar, and matching Bloom Arts show `weak` in Koo's menu.
- Higanbana plus Rapid Cooling is an attributed example, not a universal best build.
- The yellow stagger bar fills from successful hits and parries.
- A full stagger bar stuns normal enemies and offers an attack-button execution; powerful enemies including Nushi are dazed instead, receive no execution prompt, and remain incapacitated briefly.
- Full-FP Bloom's `+50% stagger` is attributed to Polygon; do not invent stagger thresholds.
- Add a `## How to test an element without invented numbers` checklist comparing the visible weakness label, status application, stagger-bar movement, and repeated attempts on the same enemy type.
- Include local figures, links to the Bloom Art, controls, and Rangifer guides, and direct checked Sources.

- [ ] **Step 2: Run the verifier**

Run: `npm run verify:guides`

Expected: exit code 1 with three missing-guide errors.

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/elements-weakness-stagger-guide.md
git commit -m "content: add elements and stagger guide"
```

### Task 6: Add the Cleanse Walker Upgrade Materials Guide

**Files:**
- Create: `src/content/guides/cleanse-walker-upgrade-materials-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use `category: beginner`, `source: handson`, `preview: false`, `publishDate: 2026-08-06`, `order: 2`, and image `beast-of-reincarnation-wasteland-colossal-boss.webp`. Use the title `Cleanse Walker Upgrade Materials Guide - Beast of Reincarnation` and heading `Cleanse Walker Upgrade Materials`.

Write these sections:

- `## What the Cleanse Walker gates`: weapon and projectile upgrades can stop until the home base reaches the level shown beside the item in the enhancement screen.
- `## The three confirmed material names`: Generator Devices, Electronic Brains, and Memory Chips; do not claim counts or fixed locations.
- `## How deposits work`: ScreenRant reports Koo discovers these rare items during regional exploration and returning to the Walker deposits them toward its next level.
- `## A practical region-sweep routine`: check side paths and vertical routes, respond to Koo discoveries, return before a boss, deposit materials, and re-check the enhancement requirement.
- `## What to do at the Walker before leaving`: clearly attribute Kotaku's restock, crop, Koo/Kagura research, and companion-conversation observations.
- `## What this guide does not claim`: no complete map, drop rate, respawn rule, or upgrade cost.
- Include local official figures, links to first-hours, progression, traversal, and beginner guides, plus checked ScreenRant, Kotaku, Steam store, and launch-announcement Sources.

- [ ] **Step 2: Run the verifier**

Run: `npm run verify:guides`

Expected: exit code 1 with two missing-guide errors.

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/cleanse-walker-upgrade-materials-guide.md
git commit -m "content: add Cleanse Walker materials guide"
```

### Task 7: Add the Lift, Extend and Exploration Guide

**Files:**
- Create: `src/content/guides/lift-extend-traversal-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use `category: exploration`, `source: handson`, `preview: false`, `publishDate: 2026-08-06`, `order: 0`, and image `beast-of-reincarnation-emma-koo-river-exploration.webp`. Use the title `Lift & Extend Traversal Guide - Beast of Reincarnation` and heading `Lift, Extend & Exploration Routes`.

Write these supported sections:

- Lift acts like a long double jump when the jump button is held and reaches higher routes.
- Extend forms a straight hair path across gaps.
- Extend can be placed above an enemy for an air assassination; timed Lift can raise Emma above awareness before a falling assassination.
- Emma cannot swim, attributed to Kotaku, so water is a route boundary rather than an escape system.
- Regional sweeps matter because Koo can discover Walker materials; link to the Walker guide instead of repeating unverified locations.
- Include a route-reading checklist for ledges, gaps, high ground, Koo discoveries, campsites, and return paths; explicitly state it is not a complete map.
- Include river and waterfall official figures, links to Walker, controls, Rangifer, and beginner guides, and checked ScreenRant, Kotaku, official combat/gameplay, and Steam store Sources.

- [ ] **Step 2: Run the verifier**

Run: `npm run verify:guides`

Expected: exit code 1 with only `deluxe-dlc-entitlement-fix-guide` missing.

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/lift-extend-traversal-guide.md
git commit -m "content: add Lift and Extend traversal guide"
```

### Task 8: Add the Deluxe DLC and Entitlement Fix Guide

**Files:**
- Create: `src/content/guides/deluxe-dlc-entitlement-fix-guide.md`

- [ ] **Step 1: Write the guide with exact frontmatter**

Use `category: beginner`, `source: official`, `preview: false`, `publishDate: 2026-08-06`, `order: 3`, and image `beast-of-reincarnation-deluxe-dlc.webp`. Use the title `Deluxe DLC & Pre-Order Entitlement Fix - Beast of Reincarnation` and heading `Deluxe DLC & Pre-Order Entitlement Fix`.

Include this exact official edition table:

| Purchase | Official contents |
| --- | --- |
| Standard pre-order | Brown Shiba skin for Koo; 30,000 Amber |
| Deluxe edition / Deluxe DLC | Brown and Black Shiba skins for Koo; Big Dipper sword; Oni's Hat; 100,000 Amber; vegetable seedlings |

Then write:

- The official 2026-08-05 UTC / 2026-08-06 China-time announcement says Valve added the missing entitlement to the pre-order Deluxe package for Steam and key-site buyers.
- The first official remedy is restarting Steam.
- Verify that the account actually pre-ordered Deluxe, check the game's DLC list, and do not repurchase the DLC while the entitlement is being investigated.
- If still absent, report purchase channel, order/key evidence, account region, whether Steam was restarted, and a screenshot of the DLC list; label this as a support-report checklist, not an official guaranteed fix.
- Mention the launch announcement's separately purchasable Deluxe Upgrade for Standard owners.
- Include the local Steam DLC image and Koo Brown Shiba render, links to Steam reception, PC issues, and beginner pages, and direct checked URLs for the official pre-order announcement, launch announcement, fix announcement, Deluxe DLC store page, and Fictions support.

- [ ] **Step 2: Run the verifier and confirm it passes**

Run: `npm run verify:guides`

Expected: exit code 0 and `Verified 6 source-backed guide entries.`

- [ ] **Step 3: Commit the guide**

```powershell
git add src/content/guides/deluxe-dlc-entitlement-fix-guide.md
git commit -m "content: add deluxe dlc entitlement guide"
```

### Task 9: Add Reciprocal Internal Links Without Editing Navigation

**Files:**
- Modify: `src/content/guides/launch-day-beginner-guide.md`
- Modify: `src/content/guides/first-hours-build-and-combat.md`

- [ ] **Step 1: Add focused follow-on links to the broad beginner guide**

After the relevant combat/traversal sections, add short prose links to:

```markdown
[Koo Bloom Arts, FP & QTE guide](/guides/koo-bloom-arts-qte-guide/)
[parry, guard, dodge and controls guide](/guides/parry-guard-dodge-controls-guide/)
[elements, weakness, stagger and daze guide](/guides/elements-weakness-stagger-guide/)
[Lift and Extend traversal guide](/guides/lift-extend-traversal-guide/)
```

- [ ] **Step 2: Add upgrade follow-on links to the first-hours guide**

Add short links to:

```markdown
[Cleanse Walker upgrade materials guide](/guides/cleanse-walker-upgrade-materials-guide/)
[parry, guard, dodge and controls guide](/guides/parry-guard-dodge-controls-guide/)
```

- [ ] **Step 3: Confirm navigation files are untouched**

Run: `git diff --name-only 1cedaf5..HEAD | Select-String 'Header.astro|src/data/site.ts'`

Expected: no output.

- [ ] **Step 4: Commit the reciprocal links**

```powershell
git add src/content/guides/launch-day-beginner-guide.md src/content/guides/first-hours-build-and-combat.md
git commit -m "content: link focused post-launch guides"
```

### Task 10: Build and Verify Routes, Categories, Images and Sitemap

**Files:**
- Verify generated files under `dist/`; do not commit `dist/`.

- [ ] **Step 1: Run content verification and production build**

Run:

```powershell
npm run verify:guides
npm run build
```

Expected: verifier passes; Astro reports a successful static build with all six routes generated.

- [ ] **Step 2: Verify every generated route and Sources heading**

Run:

```powershell
$slugs = @(
  'koo-bloom-arts-qte-guide',
  'parry-guard-dodge-controls-guide',
  'elements-weakness-stagger-guide',
  'cleanse-walker-upgrade-materials-guide',
  'lift-extend-traversal-guide',
  'deluxe-dlc-entitlement-fix-guide'
)
foreach ($slug in $slugs) {
  $file = "dist/guides/$slug/index.html"
  if (-not (Test-Path $file)) { throw "Missing $file" }
  if (-not (Select-String -LiteralPath $file -Pattern 'Sources' -Quiet)) { throw "Missing Sources in $slug" }
}
```

Expected: no output and exit code 0.

- [ ] **Step 3: Verify hub and category placement**

Run:

```powershell
$combat = Get-Content -Raw 'dist/guides/category/combat/index.html'
$beginner = Get-Content -Raw 'dist/guides/category/beginner/index.html'
$exploration = Get-Content -Raw 'dist/guides/category/exploration/index.html'
$hub = Get-Content -Raw 'dist/guides/index.html'
@('koo-bloom-arts-qte-guide','parry-guard-dodge-controls-guide','elements-weakness-stagger-guide') | ForEach-Object { if (-not $combat.Contains("/guides/$_/")) { throw "Combat missing $_" } }
@('cleanse-walker-upgrade-materials-guide','deluxe-dlc-entitlement-fix-guide') | ForEach-Object { if (-not $beginner.Contains("/guides/$_/")) { throw "Beginner missing $_" } }
if (-not $exploration.Contains('/guides/lift-extend-traversal-guide/')) { throw 'Exploration missing Lift guide' }
$slugs | ForEach-Object { if (-not $hub.Contains("/guides/$_/")) { throw "Hub missing $_" } }
```

Expected: no output and exit code 0.

- [ ] **Step 4: Verify sitemap and local images**

Run:

```powershell
$sitemap = Get-Content -Raw 'dist/sitemap-0.xml'
$slugs | ForEach-Object { if (-not $sitemap.Contains("https://beastreincarnationwiki.com/guides/$_/")) { throw "Sitemap missing $_" } }
Get-ChildItem public/images/*.webp | ForEach-Object { if ($_.Length -eq 0) { throw "Empty image $($_.Name)" } }
```

Expected: no output and exit code 0.

- [ ] **Step 5: Inspect source boundaries and repository cleanliness**

Run:

```powershell
rg -n "PLACEHOLDER|exact damage|drop rate|complete map|all locations" src/content/guides/*guide.md
git diff --check
git status --short
```

Expected: no placeholders, no whitespace errors, and only intended uncommitted files if the final verification itself changed nothing.

### Task 11: Push and Verify the Cloudflare Pages Deployment

**Files:**
- No source changes expected.

- [ ] **Step 1: Push the current branch through the local proxy**

Run:

```powershell
$env:HTTPS_PROXY = 'http://127.0.0.1:7897'
$env:HTTP_PROXY = 'http://127.0.0.1:7897'
git push origin HEAD
```

Expected: GitHub accepts the branch update and reports the pushed commit range.

- [ ] **Step 2: Verify production URLs through the proxy after Cloudflare Pages finishes**

Run:

```powershell
$taskProxy = 'http://127.0.0.1:7897'
$urls = @(
  'https://beastreincarnationwiki.com/guides/',
  'https://beastreincarnationwiki.com/guides/category/combat/',
  'https://beastreincarnationwiki.com/guides/category/beginner/',
  'https://beastreincarnationwiki.com/guides/category/exploration/',
  'https://beastreincarnationwiki.com/guides/koo-bloom-arts-qte-guide/',
  'https://beastreincarnationwiki.com/guides/parry-guard-dodge-controls-guide/',
  'https://beastreincarnationwiki.com/guides/elements-weakness-stagger-guide/',
  'https://beastreincarnationwiki.com/guides/cleanse-walker-upgrade-materials-guide/',
  'https://beastreincarnationwiki.com/guides/lift-extend-traversal-guide/',
  'https://beastreincarnationwiki.com/guides/deluxe-dlc-entitlement-fix-guide/',
  'https://beastreincarnationwiki.com/sitemap-0.xml'
)
foreach ($url in $urls) {
  $response = Invoke-WebRequest -Proxy $taskProxy -Uri $url -UseBasicParsing
  if ($response.StatusCode -ne 200) { throw "$url returned $($response.StatusCode)" }
}
```

Expected: all URLs return HTTP 200.

- [ ] **Step 3: Record the GSC submission URLs**

Return the six article URLs plus `https://beastreincarnationwiki.com/sitemap-index.xml` to the user.
