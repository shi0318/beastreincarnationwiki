---
title: "Beast of Reincarnation Controller Settings Guide"
description: "Beast of Reincarnation controller settings guide for Auto-Target, Parry, Switch, Interact remapping, mouse side buttons, subtitles, and input checks."
heading: "Beast of Reincarnation Controller Settings Guide"
category: combat
keyword: "beast of reincarnation controller settings"
image: "beast-of-reincarnation-emma-parry-flower-beast.webp"
imageAlt: "Emma holding her sword ready against a flower-covered Malefect in Beast of Reincarnation"
publishDate: 2026-08-31
updateDate: 2026-09-03
order: 2
featured: false
preview: false
source: official
---

**Beast of Reincarnation** released on **August 4, 2026** and is now on **v1.0.10**. If your inputs feel different after updating, this guide shows where to look, which settings and input behaviours each patch actually changed, and how to test one change at a time. When a button layout is not confirmed here, use the exact prompt shown by your current game menu.

<figure>
  <img src="/images/beast-of-reincarnation-emma-parry-flower-beast.webp" alt="Emma holding her sword ready against a flower-covered Malefect in Beast of Reincarnation" width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Beast of Reincarnation controller settings guide image.</figcaption>
</figure>

## Where to find Beast of Reincarnation controller settings

Open **Settings** from the menu, then use the control or input page shown by the current build. The verified settings record confirms that **Interact** can be freely remapped in Settings. It does not record a more specific title-screen-versus-pause-menu route, so follow the Settings entry your game currently displays.

If you are checking a post-update input problem, write down the setting name and the value shown before changing it. That keeps a controller issue separate from an unconfirmed button assumption.

## Auto-Target Attack, Parry, and Switch

Version **v1.0.8** changes the default state of these three settings to **off**:

- **Auto-Target Attack**
- **Auto-Target Parry**
- **Auto-Target Switch**

Check all three after the update instead of assuming an older profile still represents your preferred targeting behaviour. Change one toggle at a time, return to the same menu, and use the value currently shown there as the confirmation of what the game accepted.

The names above describe the settings that are recorded for the shipped game. They do not establish a universal controller layout or a platform-specific button. For any Parry, Guard, or Switch action that the menu lets you map, use the prompt displayed in that menu as the current answer.

## Input changes in v1.0.9 and v1.0.10

Two later patches changed how inputs behave rather than what the menu contains, so a settings check alone will not reveal them. The current version is **v1.0.10**, published August 31, 2026.

**v1.0.10 — four input behaviour changes:**

- **Knockback recovery can also be triggered with D-Pad Up**, in addition to the existing input. The original input still works; this is an alternative, not a remap.
- **Aiming a ranged weapon is now a hold input.** The aim stays active while you hold the button instead of toggling on and off. If your ranged aim "stopped sticking" after updating, this is why, and it is intended.
- **Input buffering was added for ranged aiming** during Sliding, Rolling Evasion, and standard Slash attacks. You can queue the aim during those animations instead of waiting them out.
- **Interaction inputs now take priority over the Resupply screen** where both share a button.

**v1.0.9 — vibration and input bug fixes:**

- **PS5 controller vibration intensity was adjusted**, and **vibration was added to Execution Kills and Assassinations.**
- **Counterattack execution timing was adjusted.** No direction and no frame data are published, so re-test the timing rather than assuming it got easier.
- Three PC input bugs were fixed: the **New Game Plus data transfer soft lock** when confirming with keyboard or mouse and then moving the cursor with a controller, the **Return Results screen ignoring the keyboard confirm key**, and the **Bed Menu** triggering "Rest Until Morning" when you clicked "Save Game" or "Special Content" immediately after opening it.

The mixed keyboard-and-controller soft lock is the one worth knowing about: if you play with both devices, being on v1.0.9 or later matters more than any setting on this page. Version-by-version detail is on the [v1.0.9 notes](/guides/beast-of-reincarnation-update-1-0-9/) and [v1.0.10 notes](/guides/beast-of-reincarnation-update-1-0-10/) pages.

## Parry and controller input remapping

The useful rule for Parry is simple: open the control settings, find the action label the game provides, and do not copy a fixed button from another layout into your troubleshooting notes. If the current menu combines defensive actions or displays a different label, record that exact text and follow it.

To verify a Parry change safely:

1. Save or confirm the displayed binding in Settings.
2. Re-open the same control page and check the displayed value.
3. Test the action in a low-risk area before taking the changed layout into a boss encounter.
4. If the result is wrong, change only that action and repeat the check.

This routine confirms the menu value and the in-game response without inventing a key, a controller-family difference, or a timing number that is not recorded here.

## Interact remapping and mouse side buttons

The v1.0.8 record confirms two useful input changes:

- **Interact can be freely remapped in Settings.**
- **Mouse side buttons are supported.**

Choose the Interact action from the current control menu, assign the button or mouse control shown there, and test it away from a dangerous encounter. For a mouse side button, test the side button by itself first, then test Interact separately if you are diagnosing a mixed keyboard-and-mouse setup. The exact side-button name and any displayed key label should come from the current menu.

If Interact still does not respond, reopen Settings and check that the action you edited is the one the game currently calls Interact. Then record the displayed binding, the device you used, and the repeatable action that failed. This gives you a useful input report without assuming a platform difference.

## Subtitle size settings

Version v1.0.8 adds subtitle sizes from **Extra Small** through **Extra Large**. Open the subtitle setting in the current menu, choose the size you can read comfortably, and check it with an actual line of dialogue before continuing.

Do not turn subtitle size into a claim about audio languages, display resolution, or a specific console layout. This guide only covers the recorded size range and the visible setting value.

## A quick post-update verification routine

Use this order when a controller or input setup feels unfamiliar:

1. Confirm that the game has finished updating, and note the version — the input behaviour changes above only exist on **v1.0.9 and v1.0.10**.
2. Open Settings and note the displayed values for Auto-Target Attack, Auto-Target Parry, and Auto-Target Switch.
3. Check the Parry and Switch action labels without copying a button from memory; use the current menu display as the authority.
4. Verify the Interact binding, then test it in a safe area.
5. Test a mouse side button separately if it is part of the setup.
6. Check subtitle size using the displayed Extra Small-to-Extra Large range.
7. **Test ranged aim as a hold**, and try knockback recovery on D-Pad Up, so you are not diagnosing an intended v1.0.10 change as a fault.
8. If one input still fails, change one setting at a time and record the exact menu text, device, platform, and repeatable steps.

This sequence is designed to answer whether the menu accepted your change. It does not claim a universal best controller preset, a fixed button table, or a frame-perfect input result.

## Related Beast of Reincarnation guides

- [Beast of Reincarnation patch notes index](/guides/patch-notes/) — every version from 1.0.7 to 1.0.10
- [Beast of Reincarnation v1.0.10 patch notes](/guides/beast-of-reincarnation-update-1-0-10/)
- [Beast of Reincarnation v1.0.9 patch notes](/guides/beast-of-reincarnation-update-1-0-9/)
- [Beast of Reincarnation v1.0.8 patch notes](/guides/beast-of-reincarnation-update-1-0-8/)
- [Beast of Reincarnation Parry, Guard, Dodge & Controls guide](/guides/parry-guard-dodge-controls-guide/)
- [Beast of Reincarnation PC performance and settings guide](/guides/pc-performance-settings-fixes/)
