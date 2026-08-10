# Beast Live-Signal Guides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add source-backed pages for the live patch, Metacritic query, and mod-support query without adding any top-navigation item.

**Architecture:** Content remains Markdown in the existing `guides` collection. A source badge distinguishes review-aggregate data from developer statements and player reports. Existing launch, PC-performance, and Steam-reception pages are updated only where the official v1.0.7 patch changes their factual status.

**Tech Stack:** Astro 5, Astro content collections, Markdown, Node validation scripts.

---

### Task 1: Lock the content contract

**Files:**
- Modify: `scripts/verify-guide-expansion.mjs`

- [ ] Add expected frontmatter, local-image, checked-date, source-link, and internal-link requirements for `patch-notes`, `metacritic-score`, and `mod-support-status`.
- [ ] Assert that the top `NAV` array has no Patch Notes, Metacritic, or Mods item.
- [ ] Run `npm run verify:guides` and confirm it fails because the new guide files and review source label do not yet exist.

### Task 2: Add the source-backed content

**Files:**
- Create: `src/content/guides/patch-notes.md`
- Create: `src/content/guides/metacritic-score.md`
- Create: `src/content/guides/mod-support-status.md`
- Create: `public/images/beast-of-reincarnation-patch-v1-0-7.png`
- Modify: `src/content.config.ts`
- Modify: `src/data/site.ts`

- [ ] Use the Steam v1.0.7 announcement as the sole authority for confirmed patch changes and future-patch wording.
- [ ] Treat Metacritic and Steam counts as dated snapshots, with no claim that this site reviewed the game.
- [ ] Describe only directly verifiable community mod information; do not publish an unverified mod list or installation instructions.
- [ ] Reuse official images or the official Steam patch image, with captions that do not attribute a third-party result to the game.

### Task 3: Correct superseded content

**Files:**
- Modify: `src/content/guides/launch-support-status.md`
- Modify: `src/content/guides/pc-performance-settings-fixes.md`
- Modify: `src/content/guides/steam-reception-and-issues.md`

- [ ] Replace the pre-v1.0.7 claim that upscaling settings have no confirmed fix with the official v1.0.7 result.
- [ ] Link the support page to the patch hub, and link review and mod-status pages only where the reader needs them.
- [ ] Use U.S. long-form dates in reader-facing prose and source notes.

### Task 4: Verify generated output

**Files:**
- Test: `scripts/verify-guide-expansion.mjs`
- Test: `scripts/verify-guide-listing.mjs`

- [ ] Run `npm run verify:guides`, `npm run verify:guide-listing`, and `npm run build`.
- [ ] Inspect generated HTML for all three new routes and confirm the Guide index lists them newest first while `NAV` remains unchanged.
