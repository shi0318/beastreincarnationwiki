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
    slug: "blades",
    title: "Beast of Reincarnation All 21 Blades: Locations and Effects",
    description:
      "All 21 blades in Beast of Reincarnation with region, location and effect, plus the Deluxe blade, NG+ Kanzashi and the Blade Enthusiast achievement.",
    image: "/images/beast-of-reincarnation-emma-parry-flower-beast.webp",
    imageAlt: "Emma braces with a glowing blade against a flower-covered beast",
    intro:
      "Beast of Reincarnation has 21 standard blades for Emma: two starting swords, three Mechblade variants, eighteen found or earned across the thirteen regions, and Kanzashi at the start of New Game+. Deluxe owners get one extra blade that does not count for achievements. Blades are not marked on the map, so the list below is the checklist.",
    facts: [
      { label: "Mechblade (Standard)", value: "Start – Slash; boosts the third attack after a chain" },
      { label: "Purifier Blade", value: "Start – taking damage briefly reduces Emma’s stagger" },
      { label: "Cirrus Sword", value: "Ogouchi – Retired Gatekeeper at Nushi’s Lair: Gate Approach; Impact, brief damage boost for Emma and Koo" },
      { label: "Mechblade (Light)", value: "Ogouchi – Ruined Tower top floor, tent behind the Elite Golem" },
      { label: "Mechblade (Heavy)", value: "Ancient Civilization – south of Reservoir Interior, by the Lore Painting" },
      { label: "Thunderwave Sword", value: "Ancient Civilization – Elite Golem guarding the Lightning Stone; Shock" },
      { label: "Purity", value: "Ancient Civilization – Ancient Golem vendor south of Raging River; heals 3.5–8.5% of damage dealt" },
      { label: "Bell Sword", value: "Great Wall Terraces – Wandering Merchant south of Mountain Plaza: Forefront; Impact, knockback" },
      { label: "Hunter’s Sword", value: "Great Wall Terraces – Storyteller Golem by Great Forest Entrance; Poison" },
      { label: "Sunrise Sword", value: "Pilgrim’s Zone – path north of Scorched Grassland; Flame" },
      { label: "Resonance Sword", value: "Matsukawa – room with three Malefacts north-west of Cave Entrance; may turn enemies into puppets" },
      { label: "Hazebringer", value: "Matsukawa – below the central pillar door south of Upper Matsukawa Colony; Acid" },
      { label: "Shark Cutter", value: "Fuji Frontier – by Bridge Control Room: Approach; critical chance for Emma and Koo" },
      { label: "First Moon", value: "Giant Tree Zone – Curious Golem north of Cableway Line 0 (bring the box from Corvus); Weaken" },
      { label: "Fall Thunder", value: "Giant Tree Zone – Elite Golem during the story; Shock" },
      { label: "Winterwake", value: "Crater Zone – Wandering Merchant by Nushi’s Lair Entrance; lightning to nearby foes" },
      { label: "Spring Storm", value: "Crater Zone – hallway by a Golem corpse, south-east of Lake Base: Outer Wall; Water" },
      { label: "Silverlight", value: "Inukami River – centre of the stone platform south-east of Ruined Plaza; Slash" },
      { label: "Black Blossom", value: "Mount Hiei – reward for Shidou and Nue; Poison Storm" },
      { label: "Camellia", value: "The Capital – inside the Cleanse Walker after Kunai and Kirin; lightning-charged swings" },
      { label: "Kanzashi", value: "New Game+ start – rejuvenating light barrier" },
    ],
    steps: [
      "Grab the merchant blades (Bell Sword, Purity, Winterwake) when you can afford them – they also return later from the Merchant or from Brad.",
      "Bring the box from the first Corvus fight to the Curious Golem for First Moon.",
      "Nothing is missable: every blade can be collected in free roam after the story.",
      "Blade Enthusiast asks you to fully upgrade every blade; Kanzashi only appears in New Game+, so plan the last upgrades for your second run.",
      "In NG+, re-collecting a blade gives Amber instead of a duplicate.",
    ],
    evidence:
      "Effects listed are the blade passives shown in game; attack values change with upgrades, so they are not listed here.",
    sourceNote:
      "Blade names, locations and effects compiled from released-game player guides and checked against patch v1.1.01 on 15 October 2026.",
  },
  {
    slug: 'thunderwave-sword',
    title: 'Beast of Reincarnation Thunderwave Sword: Lacerta Guide',
    description:
      'Beast of Reincarnation Thunderwave Sword guide: where it fits in the Steam-reported Lacerta strategy, electric damage and Bolt Shards.',
    // Was the final Nushi fight scene; this page is about the Lacerta fight, use a generic combat scene instead.
    image: '/images/beast-of-reincarnation-machine-swarm-combat.webp',
    imageAlt: 'Beast of Reincarnation boss combat scene; no Thunderwave Sword-specific screenshot available',
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
    // Was the Deluxe Edition promotional art; use the neutral key art instead of marketing artwork.
    image: '/images/beast-of-reincarnation-key-art.webp',
    imageAlt: 'Emma and Koo key art; Big Dipper is a Deluxe-only blade with no dedicated screenshot',
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
  {
    slug: "black-blossom",
    title: "Beast of Reincarnation Black Blossom: Poison Storm Blade",
    description:
      "Black Blossom in Beast of Reincarnation: earned from Shidou and Nue on Mount Hiei, its Poison Storm effect, 21 base attack and the late bosses it counters.",
    image: "/images/bor-hot-1.webp",
    imageAlt: "Emma in a straw hat with a glowing blade beside a flower-covered beast",
    intro:
      "Black Blossom is the reward for beating Shidou and Nue on Mount Hiei. Its Poison Storm calls down poison lightning on nearby enemies, which makes it the natural blade for the poison-weak fights of the late game.",
    facts: [
      { label: "How to get it", value: "Automatic after defeating Shidou and Nue (Chapter 11, Mount Hiei)" },
      { label: "Effect", value: "Poison Storm – poison lightning on nearby foes" },
      { label: "Base attack", value: "21" },
      { label: "Best against", value: "Kunai and Kirin (both weak to poison) and Malefact crowds" },
    ],
    steps: [
      "Equip it for the Chapter 12 Kunai and Kirin fight – Poison keeps ticking on one while you handle the other.",
      "Pair it with Koo’s poison skills so build-up never drops.",
      "Upgrade it early; it is one of the few late blades you will actually use for the rest of the run.",
    ],
    evidence:
      "Black Blossom is obtained automatically from the Shidou and Nue encounter.",
    sourceNote:
      "Blade names, locations and effects compiled from released-game player guides and checked against patch v1.1.01 on 15 October 2026.",
  },
  {
    slug: "camellia",
    title: "Beast of Reincarnation Camellia: Kunai’s Blade",
    description:
      "Camellia in Beast of Reincarnation: where to find Kunai’s blade in the Cleanse Walker after the Capital fight, its lightning swings and how to use it.",
    image: "/images/bor-clip-autumn-path.webp",
    imageAlt: "A large walking machine strides along an autumn mountain path",
    intro:
      "Camellia is the blade Kunai leaves behind after the Chapter 12 fight against Kunai and Kirin. It does not drop in the arena – you find it inside the Cleanse Walker, opposite Emma’s bed, together with a document.",
    facts: [
      { label: "How to get it", value: "After defeating Kunai and Kirin in the Capital, check the Cleanse Walker opposite Emma’s bed" },
      { label: "Effect", value: "Lightning-charged swings" },
      { label: "Chapter", value: "12 – The Capital" },
    ],
    steps: [
      "Return to the Cleanse Walker straight after the fight so you do not forget it.",
      "Read the document left with it – it is part of Kunai’s story.",
      "Use it on Shock-weak enemies; it shares that role with the Thunderwave Sword and Fall Thunder but hits harder late in the game.",
    ],
    evidence:
      "Location confirmed by multiple player walkthroughs of Chapter 12.",
    sourceNote:
      "Blade names, locations and effects compiled from released-game player guides and checked against patch v1.1.01 on 15 October 2026.",
  },
  {
    slug: "purity",
    title: "Beast of Reincarnation Purity: The Healing Blade",
    description:
      "Purity in Beast of Reincarnation: buy it from the Ancient Golem vendor in the Ancient Civilization Zone; it heals 3.5–8.5% of damage dealt for five seconds.",
    image: "/images/bor-hot-4.webp",
    imageAlt: "Emma and Koo stand by waterfalls in an overgrown ruin",
    intro:
      "Purity is the sustain blade. After you trigger it, Emma recovers 3.5–8.5% of the damage she deals as HP for a five-second window, which turns parry punishes into healing.",
    facts: [
      { label: "How to get it", value: "Buy from the Ancient Golem vendor south of the Raging River campsite (Ancient Civilization Zone)" },
      { label: "Effect", value: "HP recovery of 3.5–8.5% of damage dealt during a five-second window" },
      { label: "Chapter", value: "2–3" },
    ],
    steps: [
      "Buy it before the second Lacerta fight – healing through Poison is a big help.",
      "Trigger the window right before a parry punish or a Bloom Art for the best return.",
      "It is also a strong pick for Ruthless runs, where every recovered point matters.",
    ],
    evidence:
      "Vendor location and effect from released-game player guides.",
    sourceNote:
      "Blade names, locations and effects compiled from released-game player guides and checked against patch v1.1.01 on 15 October 2026.",
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

export type BossDetail = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  facts: SectionFact[];
  steps: string[];
  evidence: string;
};

export const BOSS_DETAILS: BossDetail[] = [
  {
    slug: "rangifer",
    name: "Rangifer",
    title: "Beast of Reincarnation Rangifer Boss Guide — Both Fights",
    description:
      "Rangifer in Beast of Reincarnation: crater fight at level 9, sealed-lair rematch at level 12, fire weakness, the four-sweep red combo and what Koo learns.",
    image: "/images/beast-of-reincarnation-wasteland-colossal-boss.webp",
    imageAlt: "A towering antlered silhouette over Emma and Koo in a sunlit crater",
    intro:
      "Rangifer is the first Nushi of Beast of Reincarnation and the boss that teaches the game’s parry-to-Flow loop. You fight it twice in Chapter 1 (Ogouchi Buffer Zone): a one-bar crater fight around level 9 and a two-bar rematch around level 12 in its sealed lair near Subcity 03. Steam lists Rangifer’s End at 53.5% of owners.",
    facts: [
      { label: "Chapter / region", value: "Chapter 1 – Ogouchi Buffer Zone" },
      { label: "Fight 1", value: "Level 9 – the crater lake below the Cliff-Facing Tower (campsite nearby), one health bar" },
      { label: "Fight 2", value: "Level 12 – sealed lair past the locked gate near Subcity 03, two health bars, adds a jumping attack" },
      { label: "Weakness", value: "Fire (rematch resists Burn, so use raw fire damage)" },
      { label: "Recommended player level", value: "6–7 for the crater, 10+ for the lair" },
      { label: "Achievement", value: "Rangifer's End – 53.5% of Steam players" },
    ],
    steps: [
      "Activate the Cliff-Facing Tower campsite first, then use Extend to reach the high ground and open with an air assassination.",
      "Stand slightly back so you can read the antler swings. Parry the normal swing and punish the lowered head – each parry fills Flow for Koo.",
      "When the body glows red, give space: the four-sweep combo is not a normal parry check.",
      "Bring Higanbana: Seeds on Koo and Fire Arrows on Emma. In the rematch, keep the same parry timing for phase two and do not stand under the jump.",
      "After the win, Koo can use Rangifer’s Nushi skill to restrain enemies – it becomes the key tool against Corvus later.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "lacerta",
    name: "Lacerta",
    title: "Beast of Reincarnation Lacerta Boss Guide — Shock Weakness",
    description:
      "Beat Lacerta in Beast of Reincarnation: level 13 and 16 fights in the Ancient Civilization Zone, Shock weakness, Poison and Slow, every attack and the rewards.",
    image: "/images/bor-clip-flower-nushi.webp",
    imageAlt: "Close-up of a flower-covered reptilian Nushi head with bared teeth",
    intro:
      "Lacerta is a newt-like Nushi that slips in and out of water and fights with Poison and Slow. You meet it twice in Chapter 2 (Ancient Civilization Zone): a level-13 fight past the Reservoir: Interior campsite and a level-16 lair fight near the Nushi’s Lair Entrance campsite. It is the biggest drop-off point on Steam – Lacerta’s End sits at 43.8%, ten points below Rangifer.",
    facts: [
      { label: "Chapter / region", value: "Chapter 2 – Ancient Civilization Zone" },
      { label: "Fight 1", value: "Level 13 – arena past the Reservoir: Interior campsite" },
      { label: "Fight 2", value: "Level 16 – north-eastern lair near the Nushi’s Lair Entrance campsite, two full health bars" },
      { label: "Weakness", value: "Shock – Thunderwave Sword, Koo’s Sakura: Javelin, Bolt Shards" },
      { label: "Status it inflicts", value: "Poison and Slow" },
      { label: "Rewards", value: "Lacertine Memories (Nushi Skill: Dokuzeri Shower); Dokuzeri: Fang and Blade Art: Dokuzeri" },
      { label: "Achievement", value: "Lacerta's End – 43.8% of Steam players" },
    ],
    steps: [
      "Equip the Thunderwave Sword (earned in the same zone from the Elite Golem guarding the Lightning Stone) and give Koo Bolt Shards plus an Antidote.",
      "Mouth Snap: three bites – parry each one; it is your best Flow and HP source.",
      "Tail Swipe: it turns away and swings, often twice – parry and watch for the second.",
      "AoE explosion leaves a slowing pool and damaging plants – leave the pool and shoot from range.",
      "Underground lunge: you cannot hit it while submerged, so dodge instead of shooting.",
      "Swamp summons: let Koo clear the small copies while you keep the boss in view.",
      "At about 50% in the lair fight it glows red (Blight). Combos get faster but timings stay the same; purple smoke signals a parryable charging lunge.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "nue-malefact",
    name: "Nue Malefact and Male Purifier",
    title: "Beast of Reincarnation Nue Malefact and Male Purifier Guide",
    description:
      "Nue Malefact in Beast of Reincarnation: the Chapter 3 hunt across the Great Wall Terraces, the level-20 duo fight with the Male Purifier and their poison weakness.",
    image: "/images/bor-hot-5.webp",
    imageAlt: "Emma faces a mechanical walker and boar-like Malefacts in a burning field",
    intro:
      "The Nue Malefact first appears in a Chapter 1 flashback after Rangifer, then becomes the target of a pursuit through Chapter 3’s Great Wall Terraces. The chase ends beyond the massive northern gate in a level-20 duo fight against the Nue and a Male Purifier.",
    facts: [
      { label: "Chapter / region", value: "Chapter 3 – The Great Wall Terraces (flashback in Chapter 1)" },
      { label: "Pursuit encounters", value: "Level 16 – near Mountain Plaza: Forefront (Strange Signal objective), north-east of Great Forest Clearing: Approach, and south of the northern gate by the Titan Buddha" },
      { label: "Final fight", value: "Level 20 – beyond the massive northern gate, Nue + Male Purifier" },
      { label: "Weakness", value: "Poison (both enemies)" },
    ],
    steps: [
      "Clear the three level-16 encounters first; the final fight is locked until you do.",
      "Bring Hunter’s Sword (Poison build-up, from the Storyteller Golem beside Great Forest: Entrance) or Poison Arrows.",
      "In the duo fight, focus whichever enemy is pressuring you and reposition when the second joins – do not force a single-target race.",
      "Park Koo on the Purifier with poison skills while Emma parries the Nue’s claws.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "taurus",
    name: "Taurus",
    title: "Beast of Reincarnation Taurus Boss Guide — Acid Weakness",
    description:
      "Beat Taurus in Beast of Reincarnation: both Chapter 4 fights in Pilgrim’s Zone, acid weakness, horn and root attacks, the charge, and the Charging Botan skill.",
    image: "/images/beast-of-reincarnation-nushi-boss-fight.webp",
    imageAlt: "A towering plant-covered Nushi swings at Emma in a ruined field",
    intro:
      "Taurus is the bull Nushi of Chapter 4 (Pilgrim’s Zone). You fight it mid-chapter until it flees at about half health, then again at the end of the chapter, where it adds faster attacks, a phase and Golem support. Steam lists Taurus’s End at 34.8%.",
    facts: [
      { label: "Chapter / region", value: "Chapter 4 – Pilgrim's Zone" },
      { label: "Fight 1", value: "About level 26 – it flees at roughly 50% health" },
      { label: "Fight 2", value: "About level 29 – chapter finale, extra phase and Golems" },
      { label: "Weakness", value: "Acid – Acid Arrows and Koo’s Bottle of Acid" },
      { label: "Reward", value: "Nushi Skill: Charging Botan (first fight)" },
      { label: "Achievement", value: "Taurus's End – 34.8% of Steam players" },
    ],
    steps: [
      "Do not sprint after it – use ranged Acid while it repositions and prepare for its charge.",
      "Leg slam makes roots burst up: side-step or step back. In the second fight the roots grow a flower – dodge backward.",
      "Triple horn swing: parry all three to build Koo’s command gauge.",
      "Tail projectiles and the jump-away shockwave slam: watch the tails and step out of the wave’s line.",
      "Fight 2: a single horn strike then a dash across the arena into a shockwave slam or tail volley. Use Bind to slow the charge and open a window for Koo.",
      "Save FP for the faster second phase; Koo’s command skills are your main damage source.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "corvus",
    name: "Corvus",
    title: "Beast of Reincarnation Corvus Boss Guide — Two Crows, Ranged Weakness",
    description:
      "Beat Corvus in Beast of Reincarnation Chapter 7: back-to-back crow fights, acid bombs and divebombs, ranged weakness and the Rangifer restraint trick.",
    image: "/images/bor-hot-3.webp",
    imageAlt: "Emma and Koo below a towering long-legged Nushi silhouette in a sunlit canyon",
    intro:
      "Corvus is two Nushi fights back to back in Chapter 7 (Root Rot, Giant Tree Zone). The crows never attack at the same time; each spends most of its fight in the air, so this is the fight where your ranged weapons and Koo’s Rangifer restraint matter. Steam lists Corvus’s End at 28.3%.",
    facts: [
      { label: "Chapter / region", value: "Chapter 7 (Root Rot) – Giant Tree Zone" },
      { label: "Structure", value: "Two Corvus fights in a row; one crow at a time" },
      { label: "Weakness", value: "Ranged attacks and the Rangifer Nushi restraint skill" },
      { label: "Status", value: "Acid bombs and lingering acid pools" },
      { label: "Related reward", value: "The box from the first Corvus unlocks the First Moon blade via the Curious Golem" },
      { label: "Achievement", value: "Corvus's End – 28.3% of Steam players" },
    ],
    steps: [
      "Keep moving between the far ledges with Emma’s hair while it hovers.",
      "Shoot arrows or crossbow bolts while it is airborne; stop before a divebomb and dodge or parry it.",
      "When it lands low, restrain it with Rangifer and attack in melee until it flies off.",
      "Kill the summoned Corvid Malefacts quickly so they do not interrupt your shots.",
      "Second crow: the platforms are unstable (falling only costs time). Its final phase uses three talons, so retime your parries, and do not linger in melee after it lands – a grounded crow releases an acid burst.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "kunai-and-kirin",
    name: "Kunai and Kirin",
    title: "Beast of Reincarnation Kunai and Kirin Boss Guide",
    description:
      "Beat Kunai and Kirin in Beast of Reincarnation: the Chapter 8 scripted loss, the Chapter 12 duo fight at level 49, poison weakness, attacks and rewards.",
    image: "/images/beast-of-reincarnation-emma-parry-flower-beast.webp",
    imageAlt: "Emma braces with a glowing blade while a flower-covered beast charges",
    intro:
      "Kunai is a Blightborn swordswoman travelling to the Capital, and Kirin is the Malefact bonded to her. You meet the pair twice: a scripted loss in Chapter 8 (Crater Zone, level 45) that ends once her health drops by about a fifth to a third, and a real fight in Chapter 12 (Capital Zone, level 49) with two health bars.",
    facts: [
      { label: "First meeting", value: "Chapter 8 – Crater Zone, level 45 (scripted loss)" },
      { label: "Real fight", value: "Chapter 12 – Capital Zone, level 49" },
      { label: "Weakness", value: "Poison (both)" },
      { label: "Kunai", value: "Melee: three-slash heavy swing, branch-assisted pounce, kick-and-slash, lightning slashes – all parryable" },
      { label: "Kirin", value: "Ranged: unparryable one-hit missiles, pounce, thunder skid marks, water beam" },
      { label: "Rewards", value: "Kirin Memories, Blade Art: Thunder, Bloom Art Numasugi: Skewer; Camellia blade in the Cleanse Walker afterwards" },
    ],
    steps: [
      "Equip a Poison blade (Hunter’s Sword or Black Blossom) and Poison arrows or bolts; give Koo poison skills.",
      "Parry Kunai, dodge Kirin – never mix the two answers.",
      "Keep both in view and react to whichever commits first; Kirin’s missiles can kill in one hit.",
      "Do not step on the skid marks – they trigger thunder strikes.",
      "Use Kirin’s lulls to heal or reposition, and keep Poison ticking on whichever one is active.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "ursa",
    name: "Ursa",
    title: "Beast of Reincarnation Ursa Boss Guide — Chapter 10",
    description:
      "Beat Ursa in Beast of Reincarnation: Chapter 10 forest lair at level 46, corrosive and acid weakness, rock pillars, the flower second phase and the finisher.",
    image: "/images/beast-of-reincarnation-waterfall-grotto.webp",
    imageAlt: "Emma and Koo by waterfalls in an overgrown ruin",
    intro:
      "Ursa is the bear Nushi that caps Chapter 10. Its lair sits in a forest, guarded by three Grizzly Malefacts. Empty its first bar and it sheds its shell to become a flower with vine tentacles and a fresh health bar. Steam lists Ursa’s End at 25.0%.",
    facts: [
      { label: "Chapter", value: "Chapter 10 – forest lair" },
      { label: "Level", value: "46" },
      { label: "Weakness", value: "Corrosives, Restrain and Acid (Acid Arrows, Koo’s Bottle of Acid)" },
      { label: "Stealth kill", value: "Not possible" },
      { label: "Phases", value: "Shelled bear, then a flower form with a full new bar" },
      { label: "Achievement", value: "Ursa's End – 25.0% of Steam players" },
    ],
    steps: [
      "Clear the three Grizzly Malefacts before the fight.",
      "Leaping lunge spawns rock pillars – dodge sideways as it leaves the ground.",
      "Rock throws – dodge, or break the boulders before they land.",
      "Close-range stomp – roll out from under the paw.",
      "Vine AoE that blooms blue flowers – create distance during the wind-up.",
      "Multi-swipe combo into a slam – parry the swipes, punish the recovery.",
      "Phase two repeats everything stronger and fills the arena with blue-flowered vines. Save Koo’s Nushi skills for restrained moments; a Lethal prompt finishes it.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "shidou-and-nue",
    name: "Shidou and Nue",
    title: "Beast of Reincarnation Shidou and Nue Boss Guide",
    description:
      "Beat Shidou and Nue in Beast of Reincarnation: Mount Hiei duo fight, poison weakness, the health-siphon trick, every attack and the Black Blossom reward.",
    image: "/images/bor-hot-0.webp",
    imageAlt: "Emma fights two long-legged Golems on a dusty path",
    intro:
      "Shidou is a fast samurai and Emma’s rival; Nue is the lightning-summoning Nushi that fights beside him. Their final meeting on Mount Hiei (Chapter 11) is a duo fight with a twist: at low health Shidou siphons Nue’s health, which you can turn to your advantage. Patch v1.1.0 updated some of Shidou’s attack patterns.",
    facts: [
      { label: "Chapter / region", value: "Chapter 11 – Mount Hiei Zone" },
      { label: "Weakness", value: "Poison (both)" },
      { label: "Shidou", value: "Parries ranged attacks – pressure him in melee" },
      { label: "Nue", value: "Larger health pool, readable claw combo with a pause after it" },
      { label: "Rewards", value: "Black Blossom blade (Poison Storm), Bloom Art Erica: Strangle Lv1, Blade Art: Nue Lv1" },
    ],
    steps: [
      "Shidou: parry each swing of his two-to-four-hit sword combo and both branch swings; perfect-dodge the vertical tree slam, then counter.",
      "Nue: perfect-dodge the pounce landing, parry every strike of the five-to-six-hit claw combo and the tail spin, and keep dodging through Thunder Strikes.",
      "Siphon trick: bring Shidou to about 30% and let him siphon Nue – each siphon lowers Nue’s bar. Repeat until Nue is near 30%, then kill Shidou.",
      "To stop a siphon, close in and knock Shidou down with Koo’s Nushi skills.",
      "Build Entanglement Overdrive with parries and dodges for the knockdowns; Kiku: Bloom Strike, Higanbana: Roots, Blade Art: Sakura and Iado Strike are strong here.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "erymanth",
    name: "Erymanth",
    title: "Beast of Reincarnation Erymanth Boss Guide — Explosive Weakness",
    description:
      "Beat Erymanth in Beast of Reincarnation: Chapter 12 Capital fight at level 47, explosive weakness, the unparryable charge, dust phase and the Kiku rewards.",
    image: "/images/beast-of-reincarnation-forest-hero-wide.webp",
    imageAlt: "A lone figure in a vast golden forest",
    intro:
      "Erymanth is the boar Nushi of Chapter 12 in the Capital, recommended at level 47. Its red-flash charge cannot be parried, and in the second half every attack kicks up dust that hides the arena. Steam lists Erymanth’s End at 24.6%, the least-unlocked Nushi achievement.",
    facts: [
      { label: "Chapter / region", value: "Chapter 12 – The Capital" },
      { label: "Recommended level", value: "47" },
      { label: "Weakness", value: "Explosive – Explosive Bolts or Explosive Arrows" },
      { label: "Phases", value: "Normal, then a dust phase from about half health" },
      { label: "Rewards", value: "Kiku: Bloom Strike II and the Kiku Finisher" },
      { label: "Achievement", value: "Erymanth's End – 24.6% of Steam players" },
    ],
    steps: [
      "Buy Explosive Bolts from the Wandering Merchant south of Mountain Plaza: Forefront, or pick up Explosive Arrows (Manual #6) in the Fuji Frontier Zone, and craft a stack before the fight.",
      "Double Spin, Two-Tusk Swipe and the red-glowing 5-hit tusk combo are all parryable – the 5-hit combo is the best Flow farm.",
      "Tusk Slam and Floral Slam: reposition during the wind-up.",
      "Seed Bullets from its back: dodge sideways.",
      "Charge: the tusks flash red, then it rushes. Never parry it – dodge. A missed charge leaves a two-to-three-second recovery, the biggest damage window in the fight.",
      "In the dust phase, track it by sound and silhouette.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
  {
    slug: "final-boss",
    name: "Beast of Reincarnation (final boss)",
    title: "Beast of Reincarnation Final Boss Guide — Chapter 13",
    description:
      "Beat the final boss of Beast of Reincarnation in Chapter 13: break the Nanite Shield, survive the laser and lightning strings, and the enraged last phase.",
    image: "/images/bor-wide.webp",
    imageAlt: "Emma and Koo stand in a golden forest of giant trees",
    intro:
      "The final fight of Chapter 13 (To Bloom, Then Fall) in the Center of the Blight is a multi-phase test of everything the game has taught. It has no elemental weakness, so preparation is about healing stock, Flow management and parry rhythm rather than gear swaps. Beating it unlocks The End of Reincarnation and, after the epilogue, Life After the End.",
    facts: [
      { label: "Chapter / region", value: "Chapter 13 – Capital Zone, Center of the Blight" },
      { label: "Weakness", value: "None known" },
      { label: "Phase 1", value: "Regenerating Nanite Shield – drain it to the 50% mark to remove it permanently" },
      { label: "Phase 2", value: "Familiar attack patterns against the main health bar" },
      { label: "Phase 3", value: "Enraged: more damage; Emma receives automatic power upgrades" },
      { label: "Achievements", value: "The End of Reincarnation; Life After the End; Reincarnated (clear NG+)" },
    ],
    steps: [
      "Restock the strongest healing items from the hub merchants before entering Chapter 13.",
      "Ignore the main bar until the Nanite Shield is down – damage before that is wasted.",
      "A laser beam follows immediately after the shield breaks – dodge it.",
      "Parry the six-plus slash string rhythmically; respect projectile volleys, energy sweeps and especially the lightning moves.",
      "Do not commit to long recovery animations until a string has clearly ended, and keep stamina for emergency dodges in phase three.",
    ],
    evidence:
      "Encounter levels, weaknesses and move lists compiled from released-game player walkthroughs; achievement rates from Steam (App 2001760). Checked 15 October 2026 against patch v1.1.01.",
  },
];

export type CollectibleDetail = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  facts: SectionFact[];
  steps: string[];
  evidence: string;
  guideHref: string;
};

export const COLLECTIBLE_DETAILS: CollectibleDetail[] = [
  {
    slug: 'valuables',
    name: 'Valuables',
    title: 'Beast of Reincarnation Valuables Guide',
    description:
      'Beast of Reincarnation valuables: Steam map filter names Facility Modules, Electronic Brains, Generator Devices, Fertilized Eggs and Walker decorations.',
    image: '/images/beast-of-reincarnation-waterfall-grotto.webp',
    imageAlt: 'Emma exploring a grotto in Beast of Reincarnation',
    intro:
      'Valuable is its own filter on the Steam Community interactive map. The map FAQ names objects that matter to completion or the Cleanse Walker, including Facility Modules, Electronic Brains, Generator Devices, Fertilized Eggs and Walker decorations.',
    facts: [
      { label: 'Map filter', value: 'Valuable' },
      { label: 'Named examples', value: 'Facility Modules, Electronic Brains, Generator Devices, Fertilized Eggs, Walker decorations' },
      { label: 'Region count example', value: '21 valuables reported in the Ancient Civilization Zone — a dated community count' },
      { label: 'Official total', value: 'Not published' },
    ],
    steps: [
      'Turn on Valuable only, one region at a time.',
      'Record the landmark when you pick something up so a map pin is not counted twice.',
      'Use the dedicated valuables guide for the filter workflow; this page is the named-category entry.',
    ],
    evidence: 'Steam Community interactive map filter names and FAQ, checked with the site valuables guide.',
    guideHref: '/guides/valuables-collectibles-guide/',
  },
  {
    slug: 'locked-treasures',
    name: 'Locked Treasures',
    title: 'Beast of Reincarnation Locked Treasures Guide',
    description:
      'Beast of Reincarnation Locked Treasure is a separate Steam map filter from Treasure Box, Bulkhead and Control Panel.',
    image: '/images/beast-of-reincarnation-waterfall-grotto.webp',
    imageAlt: 'Emma on a rocky ledge above a waterfall grotto',
    intro:
      'Locked Treasure is its own filter. Ordinary Treasure Box, Bulkhead and Control Panel are separate layers. The official store page does not publish a locked-treasure count or reward table.',
    facts: [
      { label: 'Map filter', value: 'Locked Treasure' },
      { label: 'Related filters', value: 'Treasure Box, Bulkhead, Control Panel' },
      { label: 'Official count', value: 'Not published' },
    ],
    steps: [
      'Select one region, enable Locked Treasure only, then add Bulkhead and Control Panel if a marker sits behind a gate.',
      'For cave or vertical markers, use Lift and Extend before assuming the container is inaccessible.',
      'Mark complete only after the in-game object is gone, not when the map pin is clicked.',
    ],
    evidence: 'Steam Community interactive map filter names, checked with the site locked-treasures guide.',
    guideHref: '/guides/locked-treasures-guide/',
  },
  {
    slug: 'spirit-stones',
    name: 'Spirit Stones',
    title: 'Beast of Reincarnation Spirit Stones Guide',
    description:
      'Beast of Reincarnation Spirit Stones: build customization around parry/counter, ranged/control, or stealth/exploration. Effect wording is version-sensitive.',
    image: '/images/beast-of-reincarnation-key-art.webp',
    imageAlt: 'Emma and Koo walking through the blighted forest',
    intro:
      'Spirit Stones sit alongside skill trees, gear and weapons as build customization. This site tracks three tested directions: parry and counter, ranged and control, stealth and exploration. Exact percentages are not published.',
    facts: [
      { label: 'Role', value: 'Build customization, not a collect-them-all achievement by itself' },
      { label: 'Tested directions', value: 'Parry/counter, ranged/control, stealth/exploration' },
      { label: 'Version note', value: 'Patch notes can change effect wording and costs' },
    ],
    steps: [
      'Change one stone at a time and keep the enemy, difficulty and attack input constant.',
      'Record whether the result changed damage, stagger, FP, entanglement recovery or survivability.',
      'Save the patch number with every comparison.',
    ],
    evidence: 'Site Spirit Stones guide based on the released combat loop; no official stone list is published.',
    guideHref: '/guides/beast-of-reincarnation-spirit-stones/',
  },
  {
    slug: 'seedlings',
    name: 'Seedlings',
    title: 'Beast of Reincarnation Seedlings and Crops Guide',
    description:
      'Beast of Reincarnation seedlings use their own Steam map filter and feed the Green Thumb achievement at 26.7% global unlock.',
    image: '/images/beast-of-reincarnation-forest-hero-wide.webp',
    imageAlt: 'Beast of Reincarnation forest environment',
    intro:
      'Seedlings are not valuables and not locked treasures. They have their own map filter and feed Green Thumb — Obtain every type of seedling — at 26.7% of owners.',
    facts: [
      { label: 'Map filter', value: 'Seedling' },
      { label: 'Achievement', value: 'Green Thumb — 26.7% global unlock' },
      { label: 'Official type count', value: 'Not published as a number on the store page' },
    ],
    steps: [
      'Keep seedling progress separate from treasure counts.',
      'Use the seedlings and crops guide for the checklist workflow.',
    ],
    evidence: 'Green Thumb unlock rate from Steam achievements, App 2001760, snapshot used on the achievements guide. Filter name from the Steam map.',
    guideHref: '/guides/seedlings-crops-guide/',
  },
  {
    slug: 'cleanse-walker',
    name: 'Cleanse Walker materials',
    title: 'Beast of Reincarnation Cleanse Walker Materials Guide',
    description:
      'Beast of Reincarnation Cleanse Walker upgrades use Generator Device, Electronic Brain and Memory Chip map notes as three named material categories.',
    image: '/images/beast-of-reincarnation-amber-farm-map.webp',
    imageAlt: 'Map image used for a Beast of Reincarnation upgrade route',
    intro:
      'The Steam map tracks Generator Device, Electronic Brain and Memory Chip notes for the Cleanse Walker upgrade route. Those three named categories are the ones this site uses; it does not invent a full parts list.',
    facts: [
      { label: 'Named categories', value: 'Generator Device, Electronic Brain, Memory Chip' },
      { label: 'Official complete list', value: 'Not published' },
    ],
    steps: [
      'Run the three material filters separately from Valuable so Walker parts are not mixed into lore pickups.',
      'Use the Cleanse Walker materials guide for the upgrade route.',
    ],
    evidence: 'Steam map filter names and the site Cleanse Walker upgrade materials guide.',
    guideHref: '/guides/cleanse-walker-upgrade-materials-guide/',
  },
];
