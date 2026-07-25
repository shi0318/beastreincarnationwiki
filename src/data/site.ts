// 站点级配置与常量，供 layout / 组件复用
// 事实来源：Steam App 2001760 API / store page（抓取日期 2026-07-25）
export const SITE = {
  name: 'Beast of Reincarnation Wiki',
  shortName: 'BoR Wiki',
  // 与 astro.config.mjs 中 site 保持一致（末尾不带斜杠）
  url: 'https://beastreincarnationwiki.com',
  tagline: 'Release date, story & guides for the one-person, one-dog action RPG',
  description:
    'Beast of Reincarnation wiki: confirmed Steam release date (Aug 3, 2026), Game Freak\'s Emma & Koo story, hybrid combat system, PC specs, and clearly labeled pre-release previews.',
  locale: 'en_US',
  twitter: '@borwiki',
  email: 'hello@beastreincarnationwiki.com',
} as const;

export type Category = 'boss' | 'enemies' | 'exploration' | 'combat' | 'beginner';

export const CATEGORIES: Record<
  Category,
  { label: string; blurb: string; accent: string }
> = {
  beginner: {
    label: 'Beginner',
    blurb: 'Start here - systems overview and what is confirmed before launch.',
    accent: 'moss',
  },
  boss: {
    label: 'Boss Guides',
    blurb: 'Pre-release boss outlines based on official materials - not hands-on clears.',
    accent: 'ember',
  },
  enemies: {
    label: 'Enemies',
    blurb: 'What trailers and official copy suggest about wasteland fauna.',
    accent: 'ember',
  },
  combat: {
    label: 'Combat',
    blurb: 'Official hybrid combat pillars and provisional technique notes.',
    accent: 'ember',
  },
  exploration: {
    label: 'Exploration',
    blurb: 'World themes from official copy - routes remain provisional until launch.',
    accent: 'moss',
  },
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Game Info', href: '/game-info/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Bosses', href: '/guides/category/boss/' },
  { label: 'Combat', href: '/guides/category/combat/' },
] as const;

// 官方已确认事实（Steam App 2001760）。发售信息以 Steam 为准。
export const GAME_FACTS = {
  name: 'Beast of Reincarnation',
  steamAppId: 2001760,
  // Steam API: release_date.date = "Aug 3, 2026", coming_soon = true
  releaseDate: '3 August 2026',
  releaseDateShort: 'Aug 3, 2026',
  releaseDateISO: '2026-08-03',
  comingSoon: true,
  developer: 'GAME FREAK inc.',
  publisher: 'Fictions',
  // Steam platforms currently list Windows only
  platform: 'PC (Steam / Windows)',
  platformsDetail: ['PC (Windows via Steam)'] as const,
  genre: 'Action RPG',
  genres: ['Action', 'Adventure', 'RPG'] as const,
  source: 'https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/',
  sourceApi: 'https://store.steampowered.com/api/appdetails?appids=2001760',
  tagline: 'A one-person, one-dog action RPG',
  shortDescription:
    'Game Freak\'s brand-new title: Beast of Reincarnation is an action RPG with a fusion of real-time and turn-based combat. Experience the innovative "one-person, one-dog action RPG" in the beautiful yet harsh world of Beast of Reincarnation.',
  priceUsd: '$59.99',
  deluxePriceUsd: '$69.99',
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
  lastVerified: '2026-07-25',
} as const;

// 来源可信度标签：标注每条内容的证据等级，支撑 E-E-A-T 与发售前内容诚信。
export type SourceKey =
  | 'official'
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
