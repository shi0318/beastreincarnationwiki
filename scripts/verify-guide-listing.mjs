import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const indexPath = join(process.cwd(), 'src', 'pages', 'guides', 'index.astro');
const page = readFileSync(indexPath, 'utf8');
const categoryPath = join(process.cwd(), 'src', 'pages', 'guides', 'category', '[category].astro');
const categoryPage = readFileSync(categoryPath, 'utf8');
const errors = [];

if (!page.includes('Latest Beast of Reincarnation Guides')) {
  errors.push('guides index: missing a visible latest-guides section');
}

if (!page.includes('const latest = [...guides].sort((a, b) => {')) {
  errors.push('guides index: missing a dedicated newest-first guide sort');
}

if (!page.includes('const aDate = a.data.updateDate ?? a.data.publishDate;')) {
  errors.push('guides index: newest-first sort must prefer updateDate');
}

if (!page.includes('return bDate.getTime() - aDate.getTime();')) {
  errors.push('guides index: newest-first sort must be descending');
}

if (categoryPage.includes('a.data.order !== b.data.order')) {
  errors.push('category listing: must not prioritize manual order over recency');
}

if (!categoryPage.includes('const aDate = a.data.updateDate ?? a.data.publishDate;')) {
  errors.push('category listing: newest-first sort must prefer updateDate');
}

if (!categoryPage.includes('return bDate.getTime() - aDate.getTime();')) {
  errors.push('category listing: newest-first sort must be descending');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified newest-first guides listing contract.');
