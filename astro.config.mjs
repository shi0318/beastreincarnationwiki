import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 站点最终域名（方案首选 beastreincarnationwiki.com，注册后可替换）
const SITE = 'https://beastreincarnationwiki.com';

// 发售前预测攻略（preview: true / source: speculation）——已 noindex，
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
// 发售后某分类出现已核实攻略时，把对应 slug 从此处移除即可恢复收录。
const PREVIEW_CATEGORIES = ['boss', 'combat', 'enemies', 'exploration'];

const isPreviewCategoryUrl = (url) =>
  PREVIEW_CATEGORIES.some((cat) => url.endsWith(`/guides/category/${cat}/`));

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // 排除已 noindex 的发售前预测攻略与空壳分类页
      filter: (page) => !isPreviewUrl(page) && !isPreviewCategoryUrl(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
