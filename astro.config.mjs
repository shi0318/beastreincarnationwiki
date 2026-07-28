import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 站点最终域名（方案首选 beastreincarnationwiki.com，注册后可替换）
const SITE = 'https://beastreincarnationwiki.com';

const ROOT = dirname(fileURLToPath(import.meta.url));
// 构建时刻，作为无 git 记录时的兜底（等同于旧行为，绝不比原来差）
const BUILD_TIME = new Date().toISOString();

// 把一个 sitemap URL 映射到它的源文件，返回该文件「最后一次 git 提交时间」。
// 覆盖三类路由：
//   静态页    /about/            → src/pages/about.astro
//   攻略正文  /guides/<slug>/    → src/content/guides/<slug>.md
//   （分类聚合页 /guides/category/<x>/ 无单一源文件，退回构建时间）
// 好处：只改了某个页面，就只有那个页面的 lastmod 变化 —— 给 Google 可信信号。
// 若源文件找不到或不在 git 历史里（如 CI 浅克隆），退回构建时间。
function lastmodFor(url) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return BUILD_TIME;
  }
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates =
    slug === ''
      ? ['src/pages/index.astro']
      : [
          `src/pages/${slug}.astro`,
          `src/pages/${slug}/index.astro`,
          // /guides/<slug>/ → src/content/guides/<slug>.md（去掉 URL 的 guides/ 前缀）
          `src/content/${slug}.md`,
          `src/content/${slug}.mdx`,
        ];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  if (!file) return BUILD_TIME;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out).toISOString() : BUILD_TIME;
  } catch {
    return BUILD_TIME;
  }
}

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
          item.lastmod = lastmodFor(item.url);
          // 首页与 Game Info 权重略高
          if (path === '/') item.priority = 1.0;
          if (path === '/game-info/') item.priority = 0.9;
        } catch {
          item.lastmod = BUILD_TIME;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
