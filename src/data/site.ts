// 站点级配置与常量，供 layout / 组件复用
// 事实来源：Steam App 2001760 API / store page（抓取日期 2026-07-25）
export const SITE = {
  name: 'Beast of Reincarnation Wiki',
  shortName: 'BoR Wiki',
  // 与 astro.config.mjs 中 site 保持一致（末尾不带斜杠）
  url: 'https://beastreincarnationwiki.com',
  tagline: 'Out now — guides, combat systems & confirmed info for the one-person, one-dog action RPG',
  description:
    'Beast of Reincarnation wiki: out now on PC, PS5 & Xbox and day one on Game Pass. Parry, FP and bloom arts explained, plus the Rangifer Nushi fight and confirmed game info.',
  locale: 'en_US',
  twitter: '@borwiki',
  email: 'nmlkareem161@gmail.com',
} as const;

export type Category = 'boss' | 'enemies' | 'exploration' | 'combat' | 'beginner';

export const CATEGORIES: Record<
  Category,
  { label: string; blurb: string; accent: string }
> = {
  beginner: {
    label: 'Beginner',
    blurb: 'Start here - the systems the shipped game actually runs on, and what to do first.',
    accent: 'moss',
  },
  boss: {
    label: 'Boss Guides',
    blurb: 'Nushi and Malefect encounters - verified fight details, positioning and build choices.',
    accent: 'ember',
  },
  enemies: {
    label: 'Enemies',
    blurb: 'Wasteland fauna, target weakness cues, stagger and crowd-control decisions.',
    accent: 'ember',
  },
  combat: {
    label: 'Combat',
    blurb: 'Parrying, florescence points, bloom arts, blade arts and entanglement overdrive.',
    accent: 'ember',
  },
  exploration: {
    label: 'Exploration',
    blurb: 'Traversal with Emma\'s hair, region sweeps, and Cleanse Walker upgrade materials.',
    accent: 'moss',
  },
};

// 专题入口故意不放进顶部 NAV。Guides 首页、正文相关链接和页脚共同承担发现路径，
// 既方便 Google 抓取，也避免把每个内容集群都塞进主导航。
export const WIKI_SECTIONS = [
  {
    label: 'Weapons',
    href: '/weapons/',
    title: 'Beast of Reincarnation Weapons',
    description: 'Swords, the Spring Thunder Crossbow, arrows, bolts, names, stats and source-checked locations.',
  },
  {
    label: 'Walkthrough',
    href: '/walkthrough/',
    title: 'Beast of Reincarnation Walkthrough',
    description: 'The 13 main chapters, the epilogue, story order and a roadmap for deeper chapter guides.',
  },
  {
    label: 'Skills & Builds',
    href: '/skills/',
    title: 'Beast of Reincarnation Skills & Builds',
    description: 'Emma and Koo skill trees, progression priorities, Bloom Arts and build references.',
  },
  {
    label: 'Characters',
    href: '/characters/',
    title: 'Beast of Reincarnation Characters',
    description: 'Emma and Koo character pages, combat roles, abilities and links to practical guides.',
  },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Game Info', href: '/game-info/' },
  { label: 'Release Date', href: '/release-date/' },
  { label: 'Download', href: '/download/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Bosses', href: '/guides/category/boss/' },
  { label: 'Combat', href: '/guides/category/combat/' },
] as const;

// 官方已确认事实（Steam App 2001760）。发售信息以 Steam 为准。
export const GAME_FACTS = {
  name: 'Beast of Reincarnation',
  steamAppId: 2001760,
  // 发售日：Steam 商店显示 "Aug 3, 2026"（区域时间），但官方公告与各平台商店均为
  // "August 4th, 2026 (00:00 UTC in all regions)"，IGN 结构化平台数据同为 2026-08-04。以官方公告为准。
  releaseDate: 'August 4, 2026',
  releaseDateShort: 'August 4, 2026',
  releaseDateISO: '2026-08-04',
  // 全球同步解锁时刻（官方公告：00:00 UTC in all regions）。IS_RELEASED 由此推导，
  // 因此「发售前 / 发售后」的措辞与 schema 库存状态只依赖这一个值。
  releaseAtUtc: '2026-08-04T00:00:00Z',
  developer: 'GAME FREAK inc.',
  publisher: 'Fictions',
  // 三平台同步发售（PC 在 Steam；PS5 / Xbox 在各自商店）。Steam 页面只列 PC 是因为
  // 只上架 PC 版，其页面出现的 PS5/Xbox 字样是手柄兼容性，非平台。来源：官方公告 + IGN。
  platform: 'PC (Steam), PlayStation 5, Xbox Series X|S',
  platformsDetail: ['PC (Steam)', 'PlayStation 5', 'Xbox Series X|S'] as const,
  // Xbox Game Pass / Play Anywhere / Handheld。来源逐条核实（2026-07-30）：
  // 1) Xbox Wire 2026-01-22 原文："Beast of Reincarnation comes to Xbox Series X|S, Xbox on PC,
  //    and Xbox Cloud this Summer. It will be available with Xbox Game Pass Ultimate on day one,
  //    and is an Xbox Play Anywhere and Handheld Optimized title."（文中"this Summer"发布于定档前）
  // 2) xbox.com 游戏页："Play day one with Game Pass · Available August 4, 2026"
  // 3) 微软商店 displaycatalog（产品 9NXWSWBM4H6T）EligibilityProperties.Affirmations 列出
  //    CFQ7TTC0K6L8 = Xbox Game Pass for Console、CFQ7TTC0KGQ8 = PC Game Pass
  // 注意：Steam / PlayStation 侧没有任何订阅制入口，Game Pass 只覆盖 Xbox 与 Windows。
  gamePass: {
    included: true,
    dayOne: true,
    tiers: ['Xbox Game Pass Ultimate', 'PC Game Pass'] as const,
    summary:
      'Included with Xbox Game Pass Ultimate and PC Game Pass on day one — 4 August 2026, the same day the game goes on sale.',
    playAnywhere: true,
    handheldOptimized: true,
    cloudGaming: true,
    // Xbox 商店能力标签（displaycatalog Attributes / 商店页 capabilities）
    xboxCapabilities: [
      'Optimized for Xbox Series X|S',
      '4K Ultra HD',
      'Xbox Play Anywhere',
      'Handheld optimized',
      'Xbox achievements',
      'Xbox cloud saves',
    ] as const,
    productId: '9NXWSWBM4H6T',
    storeUrl: 'https://www.xbox.com/en-US/games/beast-of-reincarnation',
    wireUrl:
      'https://news.xbox.com/en-us/2026/01/22/beast-of-reincarnation-game-freak-developer-direct/',
  },
  genre: 'Action RPG',
  genres: ['Action', 'Adventure', 'RPG'] as const,
  source: 'https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/',
  sourceApi: 'https://store.steampowered.com/api/appdetails?appids=2001760',
  tagline: 'A one-person, one-dog action RPG',
  shortDescription:
    'Game Freak\'s brand-new title: Beast of Reincarnation is an action RPG with a fusion of real-time and turn-based combat. Experience the innovative "one-person, one-dog action RPG" in the beautiful yet harsh world of Beast of Reincarnation.',
  priceUsd: '$59.99',
  deluxePriceUsd: '$69.99',
  // 发售后核实（2026-08-04，Steam appdetails）：本体 $59.99，Deluxe 以「升级 DLC」形式单卖
  // （App 4146830，$9.99），两者相加即 Deluxe 版 $69.99。
  deluxeDlc: {
    appId: 4146830,
    priceUsd: '$9.99',
    contents:
      'Black and Brown Shiba skins for Koo, the "Oni\'s Hat" for Emma, Emma\'s sword "Big Dipper", 100,000 Amber, and a number of vegetable seedlings.',
    upgradeNote:
      'Released alongside the game as a standalone upgrade, so standard-edition buyers can add the Deluxe content afterwards.',
  },
  // 官方发售公告（2026-08-04）："it should now show version 1.0.6"
  launchVersion: '1.0.6',
  launchTrailerYouTubeId: 'zPAv3JEvtCs',
  // Steam 分类里的 "Adjustable Difficulty" 对应的三档。名称来自发售后实机报道
  // （ScreenRant 2026-08-03：Normal 为默认，另有 Story 与 Hard，可随时切换）。
  difficulties: ['Story', 'Normal', 'Hard'] as const,
  controllerSupport: 'Full controller support',
  features: [
    'Single-player',
    'Full controller support',
    'Steam Achievements',
    'Steam Cloud',
    'Adjustable Difficulty',
    'Family Sharing',
  ] as const,
  languages:
    'English and Japanese (full audio), plus French, German, Spanish (Spain), Korean, Portuguese (Brazil), Simplified Chinese, Traditional Chinese, Italian, and Spanish (Latin America)',
  setting: 'Post-apocalyptic Japan, year 4026',
  protagonists: ['Emma', 'Koo'] as const,
  combatSummary:
    'Hybrid combat that combines real-time action with turn-based RPG elements: fight as a unit using Emma\'s sword abilities while commanding Koo to unleash techniques.',
  buildSummary:
    'Customize playstyle with skill trees, gear, and spirit stones - including ranged, stealthy, and aggressive loadouts.',
  storySummary:
    'Emma, an outcast shunned for her affliction, and Koo, a blighted dog, travel a blighted world, battle Bosses, capture their powers, and aim to defeat the Beast of Reincarnation.',
  tags: [
    'Action RPG',
    'Hybrid combat',
    'One-person, one-dog',
    'Post-apocalyptic',
    'Story Rich',
    'Single-player',
    'Controller support',
  ] as const,
  systemRequirements: {
    minimum: {
      os: 'Windows 10/11 (64-bit)',
      cpu: 'Intel Core i5-8400 or AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1070 (8 GB) or AMD Radeon RX 580 (8 GB)',
      directx: 'Version 12',
      storage: '45 GB available space',
      notes: 'Low 1080p @ 40fps w/ DLSS or FSR1 (Performance). SSD required.',
    },
    recommended: {
      os: 'Windows 11 (64-bit)',
      cpu: 'Intel Core i7-12700K or AMD Ryzen 7 5800X',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce RTX 3060 (12 GB) or AMD Radeon RX 6700 XT (12 GB)',
      directx: 'Version 12',
      storage: '45 GB available space',
      notes: 'Med 1080p @ 60fps w/ DLSS or FSR3 (Performance). SSD required.',
    },
  },
  lastVerified: '2026-08-17',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 发售状态：全站唯一开关。构建时按 releaseAtUtc 判定，发售当天重新构建即自动翻转，
// 不需要手改任何页面文案或 schema。
//
// 为什么用构建时间而非运行时：站点是 output: 'static'，页面在构建时定型；
// 用运行时判断会让已生成的 HTML 永远停在构建那一刻的状态，反而更容易出错。
// 代价是发售当天必须触发一次重新构建 —— 这本来就要做（要发上线内容）。
// ─────────────────────────────────────────────────────────────────────────────
export const IS_RELEASED = Date.now() >= Date.parse(GAME_FACTS.releaseAtUtc);

// schema.org 库存状态：发售前 PreOrder，发售后 InStock。
// 硬编码 'PreOrder' 会在 2026-08-04 变成错误的结构化数据（Google 会拿它做富媒体展示）。
export const OFFER_AVAILABILITY = IS_RELEASED
  ? 'https://schema.org/InStock'
  : 'https://schema.org/PreOrder';

// schema.org 的 price 要求裸数字字符串（不带货币符号），currency 单独用 priceCurrency 表示。
// 从 GAME_FACTS.priceUsd 派生，改价格只需改一处。
const stripCurrency = (v: string) => v.replace(/[^0-9.]/g, '');
export const PRICE_NUMERIC = stripCurrency(GAME_FACTS.priceUsd);
export const DELUXE_PRICE_NUMERIC = stripCurrency(GAME_FACTS.deluxePriceUsd);

// 发售前后措辞。散落在 6+ 个文件里的「pre-purchase is live / 尚未发售」由此统一。
export const LAUNCH_COPY = IS_RELEASED
  ? {
      status: 'Out now · released ' + GAME_FACTS.releaseDateShort,
      buyVerb: 'Buy',
      purchaseNoun: 'purchase',
      // 一句话状态，用于 hero / 页首
      availabilitySentence: `Out now on ${GAME_FACTS.platform}.`,
      notOutYetNote: '',
      // 商店状态：Steam 上「能不能立刻买到并下载」
      storeStatusSentence: 'It is on sale now on the official Steam store.',
      steamListingNote: `Steam lists it as released on ${GAME_FACTS.releaseDateShort}.`,
      preloadNote:
        'The game is released, so buying it on Steam starts the download immediately.',
      // 攻略页说明：发售后内容按页面证据等级展示，避免把历史资料当作当前版本结论。
      guidesCaveat:
        'Guides on this site are organized by the evidence available for the released game; current combat and route pages identify the version and coverage behind their practical details.',
    }
  : {
      status: 'Coming soon · pre-purchase live',
      buyVerb: 'Pre-purchase',
      purchaseNoun: 'pre-purchase',
      availabilitySentence: `Releases ${GAME_FACTS.releaseDate} on ${GAME_FACTS.platform}.`,
      notOutYetNote: 'Pre-purchase is live; the game is not out yet.',
      storeStatusSentence: 'Pre-purchase is already live on the official Steam store.',
      steamListingNote: `Steam shows coming soon with date ${GAME_FACTS.releaseDateShort}.`,
      preloadNote:
        'Steam may enable a preload shortly before launch so files are on disk in advance.',
      guidesCaveat:
        'Because the game is not out yet, every strategy guide on this site is marked as a pre-release preview — built from official information and community expectations, not hands-on play.',
    };

// 来源可信度标签：标注每条内容的证据等级，支撑 E-E-A-T 与发售前内容诚信。
export type SourceKey =
  | 'official'
  | 'handson'
  | 'third-party-tested'
  | 'community'
  | 'reviews'
  | 'trailer'
  | 'analysis'
  | 'lore'
  | 'speculation';

export const SOURCES: Record<
  SourceKey,
  { label: string; icon: string; tone: 'green' | 'violet' | 'sky' | 'amber' | 'ash'; blurb: string }
> = {
  official: {
    label: 'Official',
    icon: '✅',
    tone: 'green',
    blurb: 'Confirmed by the developer, publisher, or official Steam listing.',
  },
  handson: {
    label: 'Hands-on',
    icon: '🎮',
    tone: 'green',
    blurb:
      'Reserved for original playtest notes recorded by this site, including the build, platform and reproducible steps.',
  },
  'third-party-tested': {
    // Keep the provenance key for editorial tracking, but use the visitor-facing
    // wording requested for shipped-game guide pages.
    label: 'Hands-on',
    icon: '🎮',
    tone: 'green',
    blurb:
      'Hands-on coverage from cited post-launch gameplay sources; the source list identifies the coverage behind each detail.',
  },
  community: {
    label: 'Player reports',
    icon: '💬',
    tone: 'sky',
    blurb:
      'Fixes and impressions from players of the shipped game, drawn from the official Steam forums and attributed to the threads they come from.',
  },
  reviews: {
    label: 'Review data',
    icon: 'R',
    tone: 'amber',
    blurb: 'Dated critic and player-score aggregates from the published review services cited on the page.',
  },
  trailer: {
    label: 'Trailer',
    icon: '👁️',
    tone: 'violet',
    blurb: 'Visible in an official trailer or gameplay footage.',
  },
  analysis: {
    label: 'Analysis',
    icon: '🔬',
    tone: 'sky',
    blurb: 'Reasoned inference from confirmed information - not yet verified in-game.',
  },
  lore: {
    label: 'Lore',
    icon: '📖',
    tone: 'amber',
    blurb: 'Drawn from the official story and world description.',
  },
  speculation: {
    label: 'Speculation',
    icon: '❓',
    tone: 'ash',
    blurb: 'Pre-release prediction. Not confirmed and not yet tested in-game.',
  },
};

// 页脚附加链接（信任类页面）
export const FOOTER_LINKS = [
  { label: 'About Us', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
] as const;
