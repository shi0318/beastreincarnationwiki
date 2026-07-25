// 站点级配置与常量，供 layout / 组件复用
export const SITE = {
  name: 'Beast of Reincarnation Wiki',
  shortName: 'BoR Wiki',
  // 与 astro.config.mjs 中 site 保持一致（末尾不带斜杠）
  url: 'https://beastreincarnationwiki.com',
  tagline: 'Release date, story & guides for the one-person, one-dog action RPG',
  description:
    'Your wiki for Beast of Reincarnation, Game Freak\'s post-apocalyptic action RPG. Release date, the Emma and Koo story, combat system, and pre-release guides.',
  locale: 'en_US',
  twitter: '@borwiki',
  // 联系邮箱：域名确定后同步更新
  email: 'hello@beastreincarnationwiki.com',
} as const;

export type Category = 'boss' | 'enemies' | 'exploration' | 'combat' | 'beginner';

export const CATEGORIES: Record<
  Category,
  { label: string; blurb: string; accent: string }
> = {
  beginner: {
    label: 'Beginner',
    blurb: 'Start here — controls, systems and early-game survival.',
    accent: 'moss',
  },
  boss: {
    label: 'Boss Guides',
    blurb: 'Phase-by-phase strategies for every major encounter.',
    accent: 'ember',
  },
  enemies: {
    label: 'Enemies',
    blurb: 'Weaknesses, drops and how to fight the wasteland fauna.',
    accent: 'ember',
  },
  combat: {
    label: 'Combat',
    blurb: 'Parry windows, Koo bonds and offensive tech.',
    accent: 'ember',
  },
  exploration: {
    label: 'Exploration',
    blurb: 'Region routes, secrets and collectibles.',
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

// 官方已确认事实（来源：Steam 商店页 App 2001760）。发售后如有变动同步更新。
export const GAME_FACTS = {
  releaseDate: '4 August 2026',
  releaseDateISO: '2026-08-04',
  developer: 'GAME FREAK inc.',
  publisher: 'Fictions',
  platform: 'PC (Steam), PlayStation 5, Xbox Series X|S',
  genre: 'Action RPG',
  source: 'https://store.steampowered.com/app/2001760/',
  tagline: 'A one-person, one-dog action RPG',
  tags: [
    'Action RPG',
    'Souls-like',
    'Dark Fantasy',
    'Post-apocalyptic',
    'Open World',
    'Story Rich',
    'Swordplay',
    'Third Person',
  ],
} as const;

// 来源可信度标签：标注每条内容的证据等级，支撑 E-E-A-T 与发售前内容诚信。
// 游戏 2026-08-04 才发售，多数策略仍是预测，如实标注比假装权威更可信。
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
    blurb: 'Confirmed by the developer, publisher, or official store listing.',
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
    blurb: 'Reasoned inference from confirmed information — not yet verified.',
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
] as const;
