export type SectionFact = { label: string; value: string };

export type WeaponDetail = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  facts: SectionFact[];
  steps: string[];
  evidence: string;
  sourceNote: string;
};

export const WEAPON_DETAILS: WeaponDetail[] = [
  {
    slug: 'blades',
    title: 'Beast of Reincarnation Blades: Count, Upgrades & NG+',
    description:
      'Beast of Reincarnation blades guide covering the Steam-reported blade count, Blade Enthusiast upgrade target, Deluxe distinction and NG+ timing.',
    image: '/images/beast-of-reincarnation-emma-character.webp',
    imageAlt: 'Emma holding a blade in Beast of Reincarnation',
    intro:
      'The safest way to plan Beast of Reincarnation blade collection is to separate what Steam players report from what the game itself asks for. The Steam achievement guide reports 21 blades in the standard progression and 22 when the Deluxe-only Big Dipper is included. It also says the final standard blade appears when the save moves into New Game+.',
    facts: [
      { label: 'Standard progression', value: '21 blades reported by the Steam guide' },
      { label: 'Deluxe distinction', value: '22 including Big Dipper, according to the Steam guide and its author comment' },
      { label: 'Blade Enthusiast', value: 'Fully upgrade every blade' },
      { label: 'Upgrade target in the guide', value: 'Every blade to +3 for the achievement' },
      { label: 'NG+ warning', value: 'The guide reports that the last standard blade appears when starting New Game+' },
    ],
    steps: [
      'Do not assume a first-playthrough inventory is complete. The Steam guide explicitly warns that not every blade is available before New Game+.',
      'Use the Blade Enthusiast achievement as the upgrade checkpoint: every blade must be fully upgraded for that achievement, while the guide describes the +3 milestone.',
      'If you own Deluxe, identify Big Dipper separately instead of counting it as proof that every standard blade has been collected.',
      'Before spending late-game Amber on every upgrade, finish the story route and compare your inventory again after entering New Game+.',
      'Treat a missing blade location as unresolved until a Steam map or player screenshot identifies it; this page does not invent a universal location list.',
    ],
    evidence:
      'The Steam guide also says some Emma Blade Arts, Finishers and skill-tree nodes open during New Game+. That makes a second run relevant to both collection and full progression, but it does not prove that every weapon upgrade requires NG+.',
    sourceNote:
      'Facts checked against the Steam Community achievement guide for Beast of Reincarnation (ID 3777472649), including the Blade Enthusiast description, standard/Deluxe count note and NG+ guidance. The official Steam store page confirms gear and loadout customization, but does not publish a complete blade list.',
  },
  {
    slug: 'thunderwave-sword',
    title: 'Beast of Reincarnation Thunderwave Sword: Lacerta Guide',
    description:
      'Beast of Reincarnation Thunderwave Sword guide: where it fits in the Steam-reported Lacerta strategy, electric damage and Bolt Shards.',
    image: '/images/beast-of-reincarnation-nushi-boss-fight.webp',
    imageAlt: 'Emma facing a boss in Beast of Reincarnation',
    intro:
      'Thunderwave Sword is useful as an example of how to match a Beast of Reincarnation weapon to a boss weakness. A Steam Community achievement guide identifies Lacerta as weak to electricity and names Thunderwave Sword and Bolt Shards as electric options. The guide does not publish a complete stat table or a guaranteed drop location for the sword.',
    facts: [
      { label: 'Named encounter', value: 'Lacerta' },
      { label: 'Weakness reported by Steam guide', value: 'Electricity' },
      { label: 'Named melee option', value: 'Thunderwave Sword' },
      { label: 'Named ranged option', value: 'Bolt Shards' },
      { label: 'Not established here', value: 'Exact damage, upgrade cost and universal acquisition location' },
    ],
    steps: [
      'Confirm the target is Lacerta before copying the electric setup; the source note is encounter-specific.',
      'Equip Thunderwave Sword if it is already in your inventory, or use the named Bolt Shards alternative when a ranged approach is safer.',
      'Keep the visible weakness and your own damage result as the test: the Steam guide does not provide a fixed multiplier to reproduce.',
      'Use parries to create openings rather than standing at range for the whole fight; the rest of the combat loop still depends on Emma and Koo working together.',
      'If electricity is not producing the expected result after a patch or difficulty change, record the version instead of treating the old guide note as permanent balance data.',
    ],
    evidence:
      'The source describes Lacerta as a boss whose jaw and tail combinations can be parried and recommends attacking during the pause after those combinations. Those encounter observations remain player-reported; this page does not present them as developer-published frame data.',
    sourceNote:
      'The electric weakness, Thunderwave Sword, Bolt Shards and encounter advice are taken from the Steam Community achievement/walkthrough guide (ID 3777472649), checked August 17, 2026. The official Steam store page is used only for the broader equipment and combat premise.',
  },
  {
    slug: 'big-dipper',
    title: 'Beast of Reincarnation Big Dipper Guide: Deluxe Blade Notes',
    description:
      'Beast of Reincarnation Big Dipper guide covering the Steam-reported Deluxe Edition start item and how it affects blade counting.',
    image: '/images/beast-of-reincarnation-deluxe-dlc.webp',
    imageAlt: 'Beast of Reincarnation Deluxe Edition artwork',
    intro:
      'Big Dipper is the important Deluxe Edition exception in the Beast of Reincarnation blade count. A comment on the Steam achievement guide says the Deluxe edition grants Big Dipper from the start. That makes it useful to track separately when checking the standard blade collection achievement.',
    facts: [
      { label: 'Edition', value: 'Deluxe Edition' },
      { label: 'Steam player report', value: 'Big Dipper is granted at the start of the game' },
      { label: 'Collection effect', value: 'The guide reports 22 total blades with Deluxe instead of 21 in standard progression' },
      { label: 'What is not confirmed here', value: 'Big Dipper damage, element, scaling and upgrade route' },
    ],
    steps: [
      'Check your inventory near the start of a Deluxe save and record whether Big Dipper is present.',
      'Do not use Big Dipper alone to decide that the standard blade collection is complete; the Steam guide says a standard blade can still be missing.',
      'Compare the inventory against the Blade Collector requirements and keep a separate note for the Deluxe item.',
      'If you are pursuing Blade Enthusiast, upgrade the weapons you actually use first and leave a full collection sweep for a stable endgame checkpoint.',
      'If the item is missing after entitlement synchronization, use the official Steam support and DLC entitlement guidance before assuming the weapon is a gameplay drop.',
    ],
    evidence:
      'The official Steam listing is the first-party source for the game and its Deluxe product context. The Big Dipper name and start-of-game behavior come from the Steam guide author’s comment, not from an official stat sheet.',
    sourceNote:
      'Official product context: Beast of Reincarnation on Steam. Player evidence: the comment thread on Steam Community guide ID 3777472649, where the author discusses the 21/22 blade count and Big Dipper Deluxe entitlement. Checked August 17, 2026.',
  },
];

export type ChapterDetail = {
  slug: string;
  number: number;
  chapterName: string;
  region: string;
  description: string;
  image: string;
  imageAlt: string;
  facts: SectionFact[];
  checklist: string[];
  evidence: string;
};

const mapSource = 'https://steamcommunity.com/sharedfiles/filedetails/?id=3781175670';

export const CHAPTER_DETAILS: ChapterDetail[] = [
  { slug: 'chapter-1', number: 1, chapterName: 'Seedling', region: 'Ogouchi Buffer Zone', description: 'Beast of Reincarnation Chapter 1 collectible planning for Ogouchi Buffer Zone, with Steam-reported campsites, documents and Keeper Golems.', image: '/images/beast-of-reincarnation-amber-farm-map.webp', imageAlt: 'Map image used for a Beast of Reincarnation early route', facts: [{ label: 'Campsites', value: '18 reported' }, { label: 'Wayside shrines', value: '0 reported' }, { label: 'Documents', value: '4 reported' }, { label: 'Keeper Golems', value: '3 reported' }], checklist: ['Activate each campsite you pass so later return routes remain available.', 'Use the Steam guide screenshots as a visual reference for the region rather than treating the count as an automatic map marker.', 'Prioritize the four documents and three Keeper Golems if you are clearing Chapter 1 before moving on.', 'If your map count differs, record the missing collectible and check the source date before assuming a bug.'], evidence: 'The Steam Community guide lists Chapter 1 as 小河内缓冲区 and reports 18 campsites, 0 shrines, 4 documents and 3 Keeper Golems. The English region name on this page follows the matching Steam map guide label Ogouchi Buffer Zone.' },
  { slug: 'chapter-2', number: 2, chapterName: 'Creeping Tendrils', region: 'Ancient Civilization Zone', description: 'Beast of Reincarnation Chapter 2 guide for the Ancient Civilization Zone, using Steam player data for campsites, shrine, document and Golem targets.', image: '/images/beast-of-reincarnation-waterfall-grotto.webp', imageAlt: 'Ruined environment from Beast of Reincarnation', facts: [{ label: 'Campsites', value: '9 reported' }, { label: 'Wayside shrines', value: '3 reported' }, { label: 'Documents', value: '1 reported' }, { label: 'Keeper Golems', value: '2 reported' }], checklist: ['Light the three shrines while the region is open instead of leaving the return route entirely to the endgame.', 'Mark the single document separately from combat objectives so it is not confused with a boss reward.', 'Check both Keeper Golem interactions against the Steam guide screenshots and preserve a return point at a campsite.', 'Use the existing Cleanse Walker and upgrade guides for progression questions; this page is a chapter collection checklist, not a stat guide.'], evidence: 'The Steam Community guide lists Chapter 2 as 古文明区 and reports 9 campsites, 3 shrines, 1 document and 2 Keeper Golems. The English region label matches the Steam map guide’s Ancient Civilization Zone.' },
  { slug: 'chapter-3', number: 3, chapterName: 'The Vessel', region: 'Giant Wall Terraces', description: 'Beast of Reincarnation Chapter 3 collectible checklist for Giant Wall Terraces, with source-bounded Steam counts and return-route advice.', image: '/images/beast-of-reincarnation-emma-koo-river-exploration.webp', imageAlt: 'Emma and Koo exploring a Beast of Reincarnation route', facts: [{ label: 'Campsites', value: '15 reported' }, { label: 'Wayside shrines', value: '8 reported' }, { label: 'Documents', value: '3 reported' }, { label: 'Keeper Golems', value: '5 reported' }], checklist: ['Treat the eight shrines as a separate sweep because shrine progress is tracked independently from campsites.', 'Use Lift and Extend traversal to revisit vertical ledges after the required movement options are available.', 'Keep a five-Golem checklist and note the map layer for each one; the Steam guide warns that some regions require careful vertical exploration.', 'Do not copy an exact route from a screenshot if a patch or language layout changes the map; match landmarks instead.'], evidence: 'The Steam Community guide lists Chapter 3 as 巨壁梯田 and reports 15 campsites, 8 shrines, 3 documents and 5 Keeper Golems. Giant Wall Terraces is an English rendering of the Steam guide’s region label, not a developer-published chapter subtitle.' },
  { slug: 'chapter-4', number: 4, chapterName: 'Stems', region: "Pilgrim's Zone", description: "Beast of Reincarnation Chapter 4 guide for Pilgrim's Zone, with Steam-reported campsite, shrine, document and Keeper Golem counts.", image: '/images/beast-of-reincarnation-forest-hero-wide.webp', imageAlt: "Beast of Reincarnation's blighted forest", facts: [{ label: 'Campsites', value: '11 reported' }, { label: 'Wayside shrines', value: '7 reported' }, { label: 'Documents', value: '1 reported' }, { label: 'Keeper Golems', value: '3 reported' }], checklist: ['Light all seven shrines before leaving the region if you are working toward the Steam shrine achievement.', 'Keep the lone document on a separate note because the Steam guide reports zero documents in several later regions.', 'Return to the three Keeper Golems after opening any blocked route instead of assuming they are all on the main path.', 'Use the Steam interactive-map guide for filters such as camps, shrines and Golems when a screenshot is not enough.'], evidence: "The Steam Community guide lists Chapter 4 as 巡礼者区 and reports 11 campsites, 7 shrines, 1 document and 3 Keeper Golems. The matching English map label is Pilgrim's Zone." },
  { slug: 'chapter-5', number: 5, chapterName: 'Branching Paths', region: 'Matsukawa Zone', description: 'Beast of Reincarnation Chapter 5 collectible guide for Matsukawa Zone, where the Steam checklist reports the highest document count.', image: '/images/beast-of-reincarnation-header-banner.webp', imageAlt: 'Beast of Reincarnation world banner', facts: [{ label: 'Campsites', value: '12 reported' }, { label: 'Wayside shrines', value: '9 reported' }, { label: 'Documents', value: '10 reported' }, { label: 'Keeper Golems', value: '3 reported' }], checklist: ['Plan an actual sweep for the ten documents; they are the largest document count in the Steam chapter table.', 'Light all nine shrines and record them separately from the document route.', 'Search building interiors and upper levels carefully; the Steam guide specifically calls out the left side of Matsukawa as interior-heavy.', 'Use campsites as checkpoints so a missed collectible does not force a full chapter restart.'], evidence: 'The Steam Community guide lists Chapter 5 as 松川区 and reports 12 campsites, 9 shrines, 10 documents and 3 Keeper Golems. Matsukawa Zone is also named in the Steam interactive-map guide.' },
  { slug: 'chapter-6', number: 6, chapterName: 'Necrosis', region: 'Fuji Frontier Zone', description: 'Beast of Reincarnation Chapter 6 route checklist for Fuji Frontier Zone, with Steam-reported campsites, shrines and Keeper Golems.', image: '/images/beast-of-reincarnation-key-art.webp', imageAlt: 'Emma and Koo in Beast of Reincarnation key art', facts: [{ label: 'Campsites', value: '9 reported' }, { label: 'Wayside shrines', value: '5 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '4 reported' }], checklist: ['Do not spend time searching for documents based only on the chapter table: the Steam guide reports zero in this region.', 'Focus the sweep on five shrines and four Keeper Golems, then compare the map icons before leaving.', 'Keep a campsite active for the return route because collectible progress can be completed over multiple visits.', 'Cross-check the Steam map filter names when a location is described differently in a translated guide.'], evidence: 'The Steam Community guide lists Chapter 6 as 富士边境区 and reports 9 campsites, 5 shrines, 0 documents and 4 Keeper Golems. Fuji Frontier Zone is the matching English label in Steam’s map guide.' },
  { slug: 'chapter-7', number: 7, chapterName: 'Root Rot', region: 'Giant Tree Zone', description: 'Beast of Reincarnation Chapter 7 guide for Giant Tree Zone, with a source-backed checklist and a warning about layered exploration.', image: '/images/beast-of-reincarnation-waterfall-grotto.webp', imageAlt: 'Overgrown Beast of Reincarnation ruins', facts: [{ label: 'Campsites', value: '16 reported' }, { label: 'Wayside shrines', value: '4 reported' }, { label: 'Documents', value: '1 reported' }, { label: 'Keeper Golems', value: '4 reported' }], checklist: ['Expect vertical and layered exploration; the Steam guide specifically warns that Giant Tree Zone needs a careful sweep.', 'Use Lift and Extend routes to inspect upper platforms after the movement abilities are available.', 'Track the single document and four Golems separately from the sixteen campsites.', 'Do not treat a clear-looking ground route as proof that the zone is complete; compare the Steam map filters.'], evidence: 'The Steam Community guide lists Chapter 7 as 巨树区 and reports 16 campsites, 4 shrines, 1 document and 4 Keeper Golems. Giant Tree Zone is also explicitly named in Steam’s interactive-map guide.' },
  { slug: 'chapter-8', number: 8, chapterName: 'Worm Food', region: 'Giant Crater Zone', description: 'Beast of Reincarnation Chapter 8 collectible checklist for Giant Crater Zone, with Steam-reported shrine and Golem targets.', image: '/images/beast-of-reincarnation-wasteland-colossal-boss.webp', imageAlt: 'Large enemy encounter in Beast of Reincarnation', facts: [{ label: 'Campsites', value: '13 reported' }, { label: 'Wayside shrines', value: '1 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '5 reported' }], checklist: ['Prioritize the five Keeper Golems because the Steam table reports more Golems than documents in this region.', 'Light the single shrine while you are already routing through the crater.', 'Skip a document search unless a later Steam guide revision adds one; the checked guide reports zero.', 'Keep combat and collectible sweeps separate so a boss encounter does not make you overlook the return route.'], evidence: 'The Steam Community guide lists Chapter 8 as 巨陨坑区 and reports 13 campsites, 1 shrine, 0 documents and 5 Keeper Golems. Giant Crater Zone is a translated region label used for this page, not an official chapter subtitle.' },
  { slug: 'chapter-9', number: 9, chapterName: 'Branching Out', region: 'Inukamikawa Zone', description: 'Beast of Reincarnation Chapter 9 guide for Inukamikawa Zone, with the Steam checklist’s compact collectible targets.', image: '/images/beast-of-reincarnation-emma-koo-river-exploration.webp', imageAlt: 'Emma and Koo moving through a Beast of Reincarnation area', facts: [{ label: 'Campsites', value: '3 reported' }, { label: 'Wayside shrines', value: '0 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '2 reported' }], checklist: ['Use the three campsites as the main return-route markers because the Steam table reports no shrines or documents here.', 'Check both Keeper Golem positions before advancing the story if you are cleaning up chapter regions in order.', 'Do not infer that zero documents means zero collectibles of every type; the source table only covers its listed categories.', 'Use the broader Steam map filters for crops, valuables and locked treasures rather than expanding this page beyond its evidence.'], evidence: 'The Steam Community guide lists Chapter 9 as 犬上川区 and reports 3 campsites, 0 shrines, 0 documents and 2 Keeper Golems. Inukamikawa Zone is an English rendering of that region label.' },
  { slug: 'chapter-10', number: 10, chapterName: 'Malefact', region: 'Starfall Tower', description: 'Beast of Reincarnation Chapter 10 checklist for Starfall Tower, using Steam-reported campsites and shrine data without inventing documents or Golem locations.', image: '/images/beast-of-reincarnation-machine-swarm-combat.webp', imageAlt: 'Beast of Reincarnation combat in a ruined area', facts: [{ label: 'Campsites', value: '5 reported' }, { label: 'Wayside shrines', value: '1 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '0 reported' }], checklist: ['Activate all five campsites and the single shrine shown by the Steam chapter table.', 'Do not add document or Golem locations from another region to this page: the checked source reports zero for both categories.', 'Use the Starfall Tower route as a story-and-return checklist, not as a complete all-collectibles guide.', 'If the Steam map later adds a marker, update this page with the guide date and exact source rather than silently changing the count.'], evidence: 'The Steam Community guide lists Chapter 10 as 星坠之塔 and reports 5 campsites, 1 shrine, 0 documents and 0 Keeper Golems. Starfall Tower is the direct English rendering used here.' },
  { slug: 'chapter-11', number: 11, chapterName: 'Budding Realization', region: 'Hiei Mountain', description: 'Beast of Reincarnation Chapter 11 guide for Hiei Mountain, a short Steam-reported region checkpoint with one campsite.', image: '/images/beast-of-reincarnation-forest-hero-wide.webp', imageAlt: 'Beast of Reincarnation forest environment', facts: [{ label: 'Campsites', value: '1 reported' }, { label: 'Wayside shrines', value: '0 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '0 reported' }], checklist: ['Activate the single reported campsite so the region has a return point.', 'The checked Steam table reports no shrines, documents or Keeper Golems; do not create extra targets without a new source.', 'Use this page to orient the story sequence and then return to the larger region pages for unfinished collectibles.', 'Keep the chapter number separate from the region name because the Steam guide uses regional labels rather than the English chapter subtitles.'], evidence: 'The Steam Community guide lists Chapter 11 as 比睿山区 and reports 1 campsite, 0 shrines, 0 documents and 0 Keeper Golems. Hiei Mountain is the English rendering used on this page.' },
  { slug: 'chapter-12', number: 12, chapterName: 'The Firmament', region: 'Capital', description: 'Beast of Reincarnation Chapter 12 collectible checklist for Capital, with Steam-reported campsites and shrines before the ending sequence.', image: '/images/beast-of-reincarnation-header-banner.webp', imageAlt: 'Beast of Reincarnation landscape banner', facts: [{ label: 'Campsites', value: '8 reported' }, { label: 'Wayside shrines', value: '2 reported' }, { label: 'Documents', value: '0 reported' }, { label: 'Keeper Golems', value: '0 reported' }], checklist: ['Activate the eight campsites and two shrines reported by the Steam guide before moving into the ending sequence.', 'The checked table reports no documents or Keeper Golems in Capital, so keep the page focused on the listed categories.', 'Return to earlier region pages for unfinished shrine and Golem cleanup; the Steam guide says shrine progress can span multiple runs.', 'Use the ending achievements page for story unlocks instead of guessing that a collectible count controls the ending.'], evidence: 'The Steam Community guide lists Chapter 12 as 王都 and reports 8 campsites, 2 shrines, 0 documents and 0 Keeper Golems. Capital is the matching English region label in the data used by this site.' },
  { slug: 'chapter-13', number: 13, chapterName: 'To Bloom, Then Fall', region: 'Endgame sequence', description: 'Beast of Reincarnation Chapter 13 endgame guide: what Steam confirms about the final boss, ending achievement and New Game+ transition.', image: '/images/beast-of-reincarnation-nushi-boss-fight.webp', imageAlt: 'Beast of Reincarnation boss encounter artwork', facts: [{ label: 'Steam story achievement', value: 'The End of Reincarnation — Defeat the Beast of Reincarnation' }, { label: 'Post-ending achievement', value: 'Life After the End — Reach the ending of the game' }, { label: 'New Game+', value: 'Reincarnated — Clear New Game+' }, { label: 'Chapter 13 route data', value: 'The checked Steam regional guide does not publish a separate Chapter 13 collectible table' }], checklist: ['Finish the final sequence and confirm the ending achievement rather than using an unverified chapter route.', 'Before starting New Game+, finish any collection sweep you want to do in the current save and record the region pages still incomplete.', 'Use the Steam achievement guide’s NG+ note as the source boundary: it confirms the second run exists, not every change in enemy or weapon behavior.', 'After entering NG+, re-check blade, skill and collectible progress against the new save before spending resources.', 'Do not treat this page as a boss move-by-move guide; the current Steam sources confirm the achievement and NG+ transition but do not publish a complete final encounter route.'], evidence: 'The official Steam achievement data and the Steam Community achievement guide confirm the Beast of Reincarnation ending and New Game+ achievements. The regional Steam collection guide covers Chapters 1–12 and does not provide a separate Chapter 13 region table.' },
];

export type SkillDetail = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  character: string;
  intro: string;
  facts: SectionFact[];
  checklist: string[];
  evidence: string;
};

export const SKILL_DETAILS: SkillDetail[] = [
  {
    slug: 'emma-skill-tree',
    title: 'Beast of Reincarnation Emma Skill Tree: NG+ & Resets',
    description:
      'Beast of Reincarnation Emma skill tree guide covering Blade Arts, Finishers, level 100, NG+ unlocks and the Steam-reported reset option.',
    image: '/images/beast-of-reincarnation-homing-shot-skill.webp',
    imageAlt: 'Skill tree screenshot used in a Beast of Reincarnation guide',
    character: 'Emma',
    intro:
      'Emma’s Beast of Reincarnation skill tree is not just a damage checklist. The Steam achievement guide describes two parts of the tree, reports that some Blade Arts, Finishers and skills open during New Game+, and uses level 100 as the full-tree target. That makes a first-run build and a completion build different goals.',
    facts: [
      { label: 'Full-tree achievement', value: 'Giant Tree Budburst — Obtain all of Emma’s skills' },
      { label: 'Combat upgrade achievement', value: 'Blademaster — Fully upgrade all of Emma’s Blade Arts and Finishers' },
      { label: 'Steam guide milestone', value: 'Level 100 is cited for fully developing Emma’s skill tree' },
      { label: 'NG+ boundary', value: 'Some Blade Arts, Finishers and skills are reported to unlock during NG+' },
      { label: 'Reset option', value: 'The guide reports a reset function through Mikoto in the Ancient Civilization region for Amber' },
    ],
    checklist: [
      'Choose early nodes around the combat problem you are actually facing instead of trying to complete the whole tree immediately.',
      'Keep a separate note for Blade Arts and Finishers because Blademaster tracks those upgrades independently from the all-skills achievement.',
      'Do not interpret an unavailable node as a bug before checking whether the Steam guide places it behind New Game+.',
      'Use a reset only after you understand the Amber cost and the route to Mikoto; the Steam guide does not publish a universal best reset order.',
      'Treat level 100 as the cited completion milestone, not a promise that every player must reach it before the story is finishable.',
    ],
    evidence:
      'The official Steam store page confirms unique skill trees and Emma’s sword abilities. The detailed unlock, achievement and reset notes come from Steam Community guide ID 3777472649; they are player-authored observations rather than a developer skill database.',
  },
  {
    slug: 'koo-skill-tree',
    title: 'Beast of Reincarnation Koo Skills: Bloom Arts & NG+',
    description:
      'Beast of Reincarnation Koo skill tree guide covering Floral Profusion, Giant Tree in Bloom, Bloom Arts, NG+ and rapport priorities.',
    image: '/images/beast-of-reincarnation-koo-blighted-wolf.webp',
    imageAlt: 'Koo, Emma’s companion, in Beast of Reincarnation',
    character: 'Koo',
    intro:
      'Koo’s Beast of Reincarnation progression is tied to the companion loop rather than Emma’s blade upgrades. The official Steam description says the player commands Koo’s techniques, while the Steam achievement guide separates all Koo skills from all Koo flower techniques and tracks them with different achievements.',
    facts: [
      { label: 'Full-tree achievement', value: 'Giant Tree in Bloom — Obtain all of Koo’s skills' },
      { label: 'Technique achievement', value: 'Floral Profusion — Fully upgrade all of Koo’s flower techniques' },
      { label: 'Progression structure', value: 'The Steam guide describes roots and the main skill tree for both characters' },
      { label: 'NG+ boundary', value: 'Some Koo skills and techniques are reported as second-run progression' },
      { label: 'Combat role', value: 'Command Koo’s techniques while Emma handles direct swordplay' },
    ],
    checklist: [
      'Spend Koo resources around the encounter: healing, status, elemental pressure and damage do not solve the same problem.',
      'Track Floral Profusion separately from Giant Tree in Bloom so a complete skill tree is not mistaken for fully upgraded flower techniques.',
      'Use the visible enemy weakness to choose a Bloom Art, then complete the prompt rather than treating every technique as interchangeable.',
      'Expect a completion build to extend into NG+ if a node is still unavailable after the first ending; the Steam guide reports that boundary but not every unlock order.',
      'Link Koo’s build decisions back to Emma’s parry and entanglement loop because the official design presents them as one combat unit.',
    ],
    evidence:
      'The official Steam listing confirms Koo commands techniques in the hybrid combat system. Achievement names and the roots/tree/NG+ boundaries come from Steam Community guide ID 3777472649, with Bloom Art timing covered separately in the site’s sourced combat guide.',
  },
];
