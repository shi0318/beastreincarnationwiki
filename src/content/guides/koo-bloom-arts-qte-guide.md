---
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
source: third-party-tested
---

Koo's Bloom Arts are the turn-selection half of Beast of Reincarnation's hybrid combat. Emma stays under your direct control, while Koo spends **florescence points (FP)** on commanded techniques. The system looks busy because FP, Emma's entanglement gauge, elemental weaknesses, mods, and an on-screen timing prompt all meet in the same few seconds.

The reliable way to understand it is to separate the jobs: **parries generate resources, the Bloom Art menu chooses Koo's move, and the QTE decides how strong that move is**. The details below come from the shipped game as documented in Polygon's launch combat guide and from the official Combat Overview announcement. We have not invented cooldowns, hidden multipliers, or a complete skill list.

## Quick answer

- **FP belongs to Koo.** He spends it on Bloom Arts.
- **Entanglement belongs to Emma.** Guarding, Blade Arts, Nushi skills, and Entanglement Overdrive use that gauge.
- **Successful parries feed both systems.** This is why the combat loop keeps returning to parry timing.
- **Every Bloom Art has a QTE.** Hitting the yellow timing area gives the strongest version; missing still produces a weaker attack.
- **You cannot repeat the same Bloom Art immediately.** Rotate to a different equipped art before returning to the first one.

If the defensive side is still unclear, use the focused [parry, guard, dodge and controls guide](/guides/parry-guard-dodge-controls-guide/) first. It explains why an early parry becomes a gauge-draining guard.

## How to open and choose Bloom Arts

Once Koo has FP, open his Bloom Art menu with:

| Platform | Bloom Art menu |
| --- | --- |
| PC | `F` |
| Xbox controller | `Y` |
| PlayStation controller | `Triangle` |

Opening the menu **slows time but does not fully pause it**. That gives you room to inspect the equipped techniques and the target's weakness, but it is not a safe pause screen. Open it before an incoming hit reaches Emma, especially when fighting more than one enemy.

Polygon reports that Bloom Arts can be fitted with mods that add secondary effects such as HP restoration or extra damage. New mods are acquired through the skill menu at a campsite or at Bauera. We are deliberately not publishing a universal mod tier list: the useful choice depends on the element, the enemy weakness, and what the mod actually triggers from.

<figure>
  <img src="/images/beast-of-reincarnation-koo-blighted-wolf.webp" alt="Official character render of Koo with dark fur and red blighted foliage growing along his back and tail in Beast of Reincarnation" width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Official Koo character art. Bloom Arts are commanded attacks that spend Koo's FP; his ordinary battle behavior continues automatically when you are not issuing a command.</figcaption>
</figure>

## How the QTE changes the result

After choosing a Bloom Art, watch the circular timing prompt. Press the displayed button while the indicator is inside the **yellow section**.

- A successful input produces the maximum-damage version reported by Polygon.
- A miss does not cancel the move; Koo uses a weaker version.
- Different Bloom Arts can be used one after another.
- The same Bloom Art cannot be used twice in a row.

That last rule matters more than a conventional cooldown. If one technique matches a weakness, you still need another equipped option between uses. Build a short sequence around two or more useful arts instead of assuming one strong move can be repeated.

Do not read an exact frame window into the yellow area. The cited coverage documents the visible timing rule, not a frame count, difficulty modifier, or accessibility setting that changes it.

## Healing, double prompts and Full Bloom

The QTE is not only a damage check. Polygon's shipped-game guide reports three additional results:

1. A successful Bloom Art QTE restores some of Emma's HP.
2. A double QTE, which asks for two button presses, restores some of Emma's entanglement gauge.
3. Using a Bloom Art while FP is full gives Koo the **Full Bloom** effect, reported as **+100% damage and +50% stagger** for that use.

Those two percentages are attributed to Polygon's launch guide; they are not numbers we independently measured. The practical conclusion is source-safe: if the fight gives you enough room to fill FP, spending from full can be substantially stronger, but holding FP forever also means not using Koo's tools.

Healing from a correct QTE is useful support, not a replacement for the game's dedicated healing systems. If Emma is already in danger, choose a safe opening rather than gambling that the next prompt will erase the incoming damage.

## What Koo does without commands

Koo does not stand idle while you wait for FP. Polygon reports that he uses his regular abilities automatically. You only take over when selecting a Bloom Art or issuing the pre-engagement attack command.

To send Koo at an enemy before it has detected Emma:

| Platform | Command |
| --- | --- |
| PC | Right mouse button + middle mouse button |
| Controller | `LT` / `L2` + right stick |

This is a confirmed input, but it is not evidence that every encounter can be cleared from stealth. Treat it as an opener and then react to the enemy that actually remains.

<figure>
  <img src="/images/beast-of-reincarnation-emma-parry-flower-beast.webp" alt="Emma bracing with her sword drawn as a flower-covered Malefect approaches through tall grass in Beast of Reincarnation" width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Official combat screenshot. Emma's parries create the FP that lets Koo enter the loop; separating Emma's defense from Koo's command menu makes the hybrid system much easier to read.</figcaption>
</figure>

## A source-safe combat loop

Use this as a repeatable decision order rather than a claimed optimal rotation:

1. **Parry a normal attack** to build Koo's FP and Emma's entanglement.
2. **Open the Bloom Art menu early enough** that slowed time still leaves room to choose.
3. **Check the visible weakness label** before spending FP. The [elements, weakness, stagger and daze guide](/guides/elements-weakness-stagger-guide/) explains what the UI confirms.
4. **Choose an art whose element or utility matches the situation.** Do not assume raw damage is always the useful effect.
5. **Hit the yellow QTE area.** If the prompt asks twice, complete both inputs for the reported entanglement return.
6. **Rotate to a different art** before trying to use the first one again.

For the broader first-hours upgrade order, including the early dodge roll and Cleanse Walker, see the [launch-day beginner guide](/guides/launch-day-beginner-guide/).

## What remains unverified here

This page does not claim a complete Bloom Art list, every mod location, exact FP costs for every technique, QTE frame windows, or damage values beyond the two Full Bloom percentages explicitly reported by Polygon. Patches can also change balance after the 2026-08-06 check date.

## Sources

- [Official Steam announcement: New Combat Overview Trailer & Previews](https://store.steampowered.com/news/app/2001760/view/1838407329252794) - official explanation of the combat and progression showcase. Checked 2026-08-06.
- [Polygon: Beast of Reincarnation combat guide](https://www.polygon.com/beast-of-reincarnation-combat-guide/) - shipped-game controls, FP and entanglement, Bloom Art menu behavior, QTE outcomes, Full Bloom values, and Koo command inputs. Checked 2026-08-06.
- [Beast of Reincarnation on Steam](https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/) - official description of Emma and Koo's hybrid real-time and turn-based combat. Checked 2026-08-06.
