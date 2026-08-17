import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 站点最终域名（方案首选 beastreincarnationwiki.com，注册后可替换）
const SITE = 'https://beastreincarnationwiki.com';

const ROOT = dirname(fileURLToPath(import.meta.url));
function frontmatterDate(file) {
  const source = readFileSync(join(ROOT, file), 'utf8');
  for (const field of ['updatedAt', 'updateDate', 'publishDate']) {
    const match = source.match(new RegExp(`^${field}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
    if (match) return match[1];
  }
  return undefined;
}

// Sitemap dates are content metadata, never the deployment timestamp.
const STATIC_LASTMOD = {
  '/weapons/': '2026-08-17',
  '/walkthrough/': '2026-08-17',
  '/skills/': '2026-08-17',
  '/characters/': '2026-08-17',
  '/characters/emma/': '2026-08-17',
  '/characters/koo/': '2026-08-17',
};

function lastmodFor(url) {
  const pathname = new URL(url).pathname;
  if (STATIC_LASTMOD[pathname]) return STATIC_LASTMOD[pathname];
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates = [`src/content/${slug}.md`, `src/content/${slug}.mdx`];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  return file ? frontmatterDate(file) : undefined;
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodFor(item.url);
        return {
          ...item,
          ...(lastmod ? { lastmod } : {}),
          ...(path === '/' ? { priority: 1.0 } : {}),
          ...(path === '/game-info/' ? { priority: 0.9 } : {}),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
