import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 站点最终域名（方案首选 beastreincarnationwiki.com，注册后可替换）
const SITE = 'https://beastreincarnationwiki.com';

// 发售前预测攻略（preview: true / source: speculation） -  - 已 noindex，
// 同步从 sitemap 剔除，避免向 Google 提交不希望收录的编造内容。
// 发售后逐篇改写为真实攻略时，把对应 slug 从此处移除即可。
const PREVIEW_SLUGS = [
  'nushi-boss-fight',
  'wasteland-colossal-boss',
  'blighted-boar-enemies',
  'emma-parry-flower-beast',
  'malefact-horde-combat',
  'emma-koo-river-exploration',
  'waterfall-grotto',
];

const isPreviewUrl = (url) =>
  PREVIEW_SLUGS.some((slug) => url.endsWith(`/guides/${slug}/`));

// 分类页当前仅聚合发售前 preview 攻略（全空壳），一并从 sitemap 剔除，
// 与分类页内 allPreview → noindex 的逻辑保持一致。
const PREVIEW_CATEGORIES = ['boss', 'combat', 'enemies', 'exploration'];

const isPreviewCategoryUrl = (url) =>
  PREVIEW_CATEGORIES.some((cat) => url.endsWith(`/guides/category/${cat}/`));

// 可收录核心页的 lastmod（内容重大更新时同步）
const LASTMOD_BY_PATH = {
  '/': '2026-07-25',
  '/about/': '2026-07-25',
  '/contact/': '2026-07-25',
  '/disclaimer/': '2026-07-25',
  '/game-info/': '2026-07-25',
  '/guides/': '2026-07-25',
};

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !isPreviewUrl(page) && !isPreviewCategoryUrl(page),
      serialize(item) {
        try {
          const path = new URL(item.url).pathname;
          const lastmod = LASTMOD_BY_PATH[path];
          if (lastmod) {
            item.lastmod = new Date(`${lastmod}T00:00:00.000Z`);
          }
          // 首页与 Game Info 权重略高
          if (path === '/') item.priority = 1.0;
          if (path === '/game-info/') item.priority = 0.9;
        } catch {
          // keep defaults
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
