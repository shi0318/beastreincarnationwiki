---
title: "Beast of Reincarnation PC Fixes and v1.0.7 Update"
description: "Source-backed PC fixes for Beast of Reincarnation, plus the official v1.0.7 result for upscaling reset, V-Sync, input, camera, and text issues."
heading: "PC Performance & Settings: The Fixes Players Actually Found"
category: beginner
keyword: "beast of reincarnation pc performance fix"
image: "beast-of-reincarnation-machine-swarm-combat.webp"
imageAlt: "Emma surrounded by spindly machine enemies with glowing red markings in a ruined overgrown clearing in Beast of Reincarnation"
publishDate: 2026-08-04
updateDate: 2026-08-10T08:10:00.000Z
order: 8
featured: true
preview: false
source: community
---

Beast of Reincarnation shipped on **August 4, 2026** at **version 1.0.6**, and the launch-week Steam forums focused heavily on the PC port. Version **1.0.7**, published on August 9, now officially fixes the upscaling-setting reset and the V-Sync resolution interaction. Other reports below remain player reports rather than developer-confirmed fixes. Checked August 10, 2026.

Everything below comes from players discussing the shipped game in the [official Steam forums](https://steamcommunity.com/app/2001760/discussions/) unless it is explicitly attributed to the [official v1.0.7 patch notes](/guides/patch-notes/). Where a fix is one player's report rather than something confirmed by the developer, that is stated. Treat the store page and pinned developer threads as the live source of truth.

## Quick triage: which problem do you have?

| Symptom | Jump to |
| --- | --- |
| Game looks soft/noisy even at high settings | [Film grain and upscaling](#film-grain-and-upscaling-after-v107) |
| No 4K option in the menu | [The missing 4K option](#the-missing-4k-option) |
| Low FPS but GPU **and** CPU sit at 50–60% | [Low GPU usage fix](#low-fps-with-gpu-and-cpu-both-under-60) |
| Game won't launch (Intel 13th/14th-gen) | [Intel launch crash](#the-game-refuses-to-launch-intel-13th14th-gen) |
| Playing on Steam Deck | [Steam Deck](#steam-deck-not-verified-yet) |
| Ultrawide (21:9 / 32:9) | [Ultrawide](#ultrawide-219--329) |

## Film grain and upscaling after v1.0.7

Two complaints dominate every performance thread, and they have the same root cause — the post-processing pipeline.

**1. Film grain and chromatic aberration make the image look noisy.** Multiple players describe native 4K still looking soft and grainy. There is no in-menu toggle for film grain specifically, but two workarounds circulate:

- **Set Post Processing to Low.** Players report this disables both film grain and chromatic aberration in one move. The catch, per one commenter, is that Low "will disable other settings as well," so you lose some effects you might want to keep.
- **Edit an `engine.ini` file** to kill only grain and aberration and nothing else. This is the cleaner option. Player "Seibzehn" posted the exact file — create it at:

```
C:\Users\<YOURNAME>\AppData\Local\BeastOfReincarnation\Saved\engine.ini
```

and paste in:

```ini
[SystemSettings]
; Disable Film Grain
r.FilmGrain=0
r.Tonemapper.GrainQuantization=0

; Disable Chromatic Aberration
r.SceneColorFringeQuality=0
```

These are standard Unreal Engine console variables, which is consistent with this being a UE5 title. Back the file up — a game update can overwrite or ignore custom `engine.ini` settings.

**2. Upscaling settings resetting after a restart.** This was a repeated launch-week player report, but it is no longer accurate to say there is no confirmed fix. The official v1.0.7 notes say: **"Fixed a bug causing upscaling settings to reset upon restarting the game."** After Steam updates the game, set your preferred option once, restart, and check the setting before applying other workarounds. If it still resets, record the version you see and report that reproducible case through the official route.

<figure>
  <img src="/images/beast-of-reincarnation-machine-swarm-combat.webp" alt="Emma surrounded by eight or more spindly machine enemies with glowing red markings in a ruined overgrown clearing in Beast of Reincarnation" width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Official Beast of Reincarnation screenshot. Busy fights like this are where a soft, grainy image hurts most — clearing up post-processing is the single change players say helped readability the most.</figcaption>
</figure>

## Getting a sharper image on Nvidia (DLSS presets)

The game ships with an older DLSS build (players identified **3.7**) and, by default, uses a preset that several people found noisy. Two things help, both community-reported:

- **Force a newer DLSS preset.** Players say the default is **Preset E**, and that forcing **Preset K** "resolves the noise in this game" better than the alternatives; **Preset L** and **M** are also suggested for RTX 40/50-series cards. You can do this through the **Nvidia App** (which can force the latest DLSS model without any file swapping) or DLSS Swapper.
- **DLSS Swapper / newer DLL.** Some players swap in DLSS **310.7** for cleaner reconstruction and less shimmering. Note two caveats from the threads: one player got **crashes after swapping to 310.6/310.7**, and the game's tendency to fall back to FSR can undo the swap anyway. Your mileage varies — if it crashes, roll back.

The official v1.0.7 post says **DLSS 4/4.5 (L/M)** and **FSR4** are planned for future patches. It does not say either has shipped in v1.0.7. Third-party frame-generation tools are not a publisher-supported replacement; the [mod support status guide](/guides/mod-support-status/) explains why this site does not treat unverified tools as universal fixes.

## The missing 4K option

A recurring, genuinely confusing one: players on 4090 / 4070 Ti cards open the display settings and **the resolution list stops at 1440p** — no 4K entry at all, while other players on 5090s and 4K TVs see 4K fine. Two workarounds surfaced, reported by different players independently:

1. **Set your Windows desktop to 4K *before* launching the game.** The game appears to populate its resolution list from the current desktop resolution.
2. **Switch to Windowed mode, pick 4K, then switch back to Borderless.** One 4090 user (player "kame2") confirmed the 4K option appeared only after toggling to Windowed, and that `GameUserSettings.ini` was then correctly set to 4K.

One honest caveat from the same players: even at confirmed 4K, the image can look "a bit blurry," which they attribute to a low internal texture/render resolution. Clearing film grain (above) helps more than chasing the resolution number.

## Low FPS with GPU *and* CPU both under 60%

A distinctive symptom several players hit: 40–50 FPS while **neither** the GPU nor CPU is maxed out (both sitting around 50–60%). That pattern points to a power/clock issue rather than a raw hardware limit. The fix that worked for player "Chang Chang":

> In **Nvidia Profile Inspector**, change **Power Management Mode** from *Optimal Performance* to **Prefer Maximum Performance**. Also disabling the CPU's E-cores for the game.

Their result: **40–50 FPS jumped to 110–120 FPS** at max settings with ray tracing on. They noted they weren't sure which of the two changes did it, so try the Power Management toggle first (it's the less invasive one).

Separately, this game is **CPU-heavy**. One player with a Ryzen 7 5700X + 4060 Ti reported all cores pinned near 100% "like when games are pre-compiling shaders," and struggled to stay GPU-bound at 1440p. Reports on shaders conflict — some players see no pre-compilation at startup, others say it compiles at launch and during cutscenes — but the consensus is that a **weak CPU will bottleneck you** more than the GPU will, and a fast NVMe SSD noticeably reduces stutter.

## Ray tracing does very little

Several players report **no visible difference** with ray tracing on or off, in either image quality or performance. If you're chasing frames, turning RT off costs you little, and one player running a 5070 Ti explicitly plays with **RT off** for a smooth experience. Treat RT as optional at launch.

## The game refuses to launch (Intel 13th/14th-gen)

If the game won't start and throws an error — some players saw one pointing to an **Oodle/Intel** page, others a **Visual C++ runtime** prompt — the fix reported by 13th/14th-gen Intel owners is:

- **Update your motherboard BIOS.** Player "Blaze" had the game refuse to launch on a 13th-gen chip until updating the BIOS, after which it ran. This ties into the well-documented 2024 Intel 13th/14th-gen instability issue; a UE5 "out of memory" error is a known symptom.
- Also make sure your **Visual C++ redistributables** (x64 and x86) are current — one player hit a missing-runtime prompt at launch.

Most Intel owners (12th, 13th, 14th-gen) in the thread reported **no issues at all**, so this is specific to affected chips, not universal.

## Steam Deck: not Verified yet

This one has a **first-party answer**. In the Steam Deck thread, a poster identifying as being on the team ("Sam") wrote:

> "It is not currently Verified and the experience is not ideal right now. We're hoping to address this and resubmit for a second Deck review soon… we're aware of the issues and working to fix them."

Player reports are mixed but usable:

- One reviewer's footage showed **20–32 FPS** on lowest settings with FSR 3 Balanced, dipping into single digits on load.
- A Deck OLED owner got a **stable ~30 FPS** on all-Low, HDR off, using **Proton Experimental** and called it fine.
- On Linux, players say **GE-Proton (Glorious Eggroll)** runs it noticeably smoother than stock Proton.
- A Legion Go S (Z1 Extreme, 32 GB) user reported ~**60 FPS on Medium** with light tweaking — not a Deck, but a data point for handhelds with more headroom.

Playable on a Deck today if you accept 30 FPS and low settings; wait for the promised re-submission if you want it polished.

## Ultrawide (21:9 / 32:9)

The launch forums contain ultrawide concerns, but the official v1.0.7 notes do not announce a native ultrawide change. A community project has published camera-distance, FOV, and ultrawide work, but it is not official support and its author has reported different version labels across its Steam and GitHub pages. See the [mod support status guide](/guides/mod-support-status/) for the source boundary; do not assume a third-party tool works after every patch.

## What the developers have said

Two useful signals from the official threads, both worth weighting more than random comments:

- On performance generally, the team acknowledged the lack of frame generation and, per a player relaying a dev statement, said **they "are on it."**
- On Steam Deck, the team confirmed they're **working toward Verified status** and a re-submission (quoted above).

Beyond that, route bugs and requests through the **pinned official threads** in the Steam forums — that's where Fictions and Game Freak asked players to consolidate reports so they reach the team together.

## What we haven't verified

We have not personally benchmarked the game. Every fix above is attributed to the player who reported it; the `engine.ini` values are standard UE5 cvars but we have not tested that this exact file survives future patches. Hardware behaviour varies wildly — the same 4K-menu bug hits some high-end cards and not others — so treat these as starting points, not guarantees. For the settings that *are* officially documented, see the [PC requirements page](/guides/pc-system-requirements/); for how the game actually plays, see the [beginner's guide](/guides/launch-day-beginner-guide/) and [is it a Soulslike?](/guides/difficulty-and-combat-feel/).

## Sources

- **Developer, first-party.** [Official v1.0.7 patch notes](https://store.steampowered.com/news/app/2001760/view/1840310314349621) - upscaling-reset and V-Sync fixes, plus the future DLSS and FSR wording. Checked August 10, 2026. Team member "Sam" in the [Steam Deck discussion thread](https://steamcommunity.com/app/2001760/discussions/) - not Verified, working on it, resubmitting. [Official launch announcement](https://store.steampowered.com/news/app/2001760) - version 1.0.6, feedback via pinned threads.
- **Player fixes.** [Beast of Reincarnation General Discussions](https://steamcommunity.com/app/2001760/discussions/) (August 3-4, 2026): the `engine.ini` film-grain fix ("Seibzehn"), launch-week DLSS-reset reports, DLSS preset K advice ("Flopparooskey"), the Windowed-to-Borderless 4K fix ("kame2", "Crimsongz"), the Nvidia Profile Inspector Power Management fix ("Chang Chang", "Sleazus"), the Intel BIOS fix ("Blaze"), and the Steam Deck / GE-Proton reports. Checked August 10, 2026.
