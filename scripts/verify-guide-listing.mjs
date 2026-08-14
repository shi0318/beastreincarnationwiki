import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const indexPath = join(process.cwd(), 'src', 'pages', 'guides', 'index.astro');
const page = readFileSync(indexPath, 'utf8');
const categoryPath = join(process.cwd(), 'src', 'pages', 'guides', 'category', '[category].astro');
const categoryPage = readFileSync(categoryPath, 'utf8');
const utilityPath = join(process.cwd(), 'src', 'lib', 'guides.ts');
const utility = readFileSync(utilityPath, 'utf8');
const paginationPath = join(process.cwd(), 'src', 'components', 'Pagination.astro');
const pagination = readFileSync(paginationPath, 'utf8');
const pageRoute = join(process.cwd(), 'src', 'pages', 'guides', 'page', '[page].astro');
const categoryPageRoute = join(
  process.cwd(),
  'src',
  'pages',
  'guides',
  'category',
  '[category]',
  'page',
  '[page].astro',
);
const errors = [];

if (!page.includes('Latest Beast of Reincarnation Guides')) {
  errors.push('guides index: missing a visible latest-guides section');
}

if (!page.includes('const latest = sortGuides(guides);')) {
  errors.push('guides index: missing a dedicated newest-first guide sort');
}

if (!utility.includes('const aDate = a.data.updateDate ?? a.data.publishDate;')) {
  errors.push('guide sort utility: newest-first sort must prefer updateDate');
}

if (!utility.includes('return bDate.getTime() - aDate.getTime();')) {
  errors.push('guide sort utility: newest-first sort must be descending');
}

if (!categoryPage.includes('const items = sortGuides(guides.filter((g) => g.data.category === cat));')) {
  errors.push('category listing: missing newest-first guide sort');
}

if (categoryPage.includes('items.map((guide)')) {
  errors.push('category listing: must render only the current page items');
}

if (!page.includes('GUIDE_PAGE_SIZE') || !page.includes('<Pagination')) {
  errors.push('guides index: missing nine-item pagination configuration');
}

if (!pagination.includes('Previous') || !pagination.includes('Next') || !pagination.includes('page/${page}/')) {
  errors.push('pagination component: missing accessible page navigation links');
}

if (!readFileSync(pageRoute, 'utf8').includes('export async function getStaticPaths()')) {
  errors.push('guides pagination route: missing static paths');
}

if (!readFileSync(categoryPageRoute, 'utf8').includes('export async function getStaticPaths()')) {
  errors.push('category pagination route: missing static paths');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified newest-first guides listing contract.');
