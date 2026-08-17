import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const guidesDir = join(root, 'src', 'content', 'guides');
const imagesDir = join(root, 'public', 'images');
const contentConfigPath = join(root, 'src', 'content.config.ts');
const siteConfigPath = join(root, 'src', 'data', 'site.ts');
const expected = {
  'koo-bloom-arts-qte-guide': {
    category: 'combat',
    source: 'third-party-tested',
    image: 'beast-of-reincarnation-koo-blighted-wolf.webp',
  },
  'parry-guard-dodge-controls-guide': {
    category: 'combat',
    source: 'third-party-tested',
    image: 'beast-of-reincarnation-emma-parry-flower-beast.webp',
  },
  'elements-weakness-stagger-guide': {
    category: 'combat',
    source: 'third-party-tested',
    image: 'beast-of-reincarnation-blighted-boar-enemies.webp',
  },
  'cleanse-walker-upgrade-materials-guide': {
    category: 'beginner',
    source: 'third-party-tested',
    image: 'beast-of-reincarnation-wasteland-colossal-boss.webp',
  },
  'lift-extend-traversal-guide': {
    category: 'exploration',
    source: 'third-party-tested',
    image: 'beast-of-reincarnation-emma-koo-river-exploration.webp',
  },
  'deluxe-dlc-entitlement-fix-guide': {
    category: 'beginner',
    source: 'official',
    image: 'beast-of-reincarnation-deluxe-dlc.webp',
  },
  'amber-technique-points-farm': {
    category: 'beginner',
    source: 'community',
    image: 'beast-of-reincarnation-amber-technique-farm.webp',
    checkedDate: '2026-08-07',
  },
  'launch-support-status': {
    category: 'beginner',
    source: 'official',
    image: 'beast-of-reincarnation-header-banner.webp',
    checkedText: 'Checked August 10, 2026',
    requires: ['v1.0.7', '/guides/patch-notes/'],
  },
  'community-resource-directory': {
    category: 'exploration',
    source: 'community',
    image: 'beast-of-reincarnation-waterfall-grotto.webp',
    checkedDate: '2026-08-08',
  },
  'patch-notes': {
    category: 'beginner',
    source: 'official',
    image: 'beast-of-reincarnation-patch-v1-0-7.png',
    checkedText: 'Checked August 10, 2026',
    requires: [
      'v1.0.7',
      '1840310314349621',
      'Fixed a bug causing upscaling settings to reset',
      '/guides/pc-performance-settings-fixes/',
    ],
  },
  'metacritic-score': {
    category: 'beginner',
    source: 'reviews',
    image: 'beast-of-reincarnation-key-art.webp',
    checkedText: 'Checked August 17, 2026',
    requires: [
      '73/100',
      '6.1/10',
      'metacritic.com/game/beast-of-reincarnation',
      '/guides/steam-reception-and-issues/',
    ],
  },
  'mod-support-status': {
    category: 'beginner',
    source: 'community',
    image: 'beast-of-reincarnation-machine-swarm-combat.webp',
    checkedText: 'Checked August 10, 2026',
    requires: [
      'does not list Steam Workshop',
      'therake620-collab',
      '/guides/pc-performance-settings-fixes/',
      '/guides/patch-notes/',
    ],
  },
  'pc-performance-settings-fixes': {
    category: 'beginner',
    source: 'community',
    image: 'beast-of-reincarnation-machine-swarm-combat.webp',
    checkedText: 'Checked August 10, 2026',
    requires: ['v1.0.7', 'Fixed a bug causing upscaling settings to reset'],
  },
  'steam-reception-and-issues': {
    category: 'beginner',
    source: 'community',
    image: 'beast-of-reincarnation-key-art.webp',
    checkedText: 'Checked August 17, 2026',
    requires: ['5,173', '2,987', '2,186', '/guides/metacritic-score/'],
  },
};

const errors = [];

const contentConfig = readFileSync(contentConfigPath, 'utf8');
if (!contentConfig.includes("'reviews'")) {
  errors.push('content config: reviews source label is missing');
}

const siteConfig = readFileSync(siteConfigPath, 'utf8');
const navBlock = siteConfig.match(/export const NAV = \[([\s\S]*?)\] as const;/)?.[1] ?? '';
for (const label of ['Patch Notes', 'Metacritic', 'Mods']) {
  if (navBlock.includes(label)) errors.push(`site navigation: unexpected ${label} item`);
}

for (const [slug, rules] of Object.entries(expected)) {
  const guidePath = join(guidesDir, `${slug}.md`);
  if (!existsSync(guidePath)) {
    errors.push(`${slug}: guide file is missing`);
    continue;
  }

  const body = readFileSync(guidePath, 'utf8');
  const title = body.match(/^title: "(.*)"$/m)?.[1] ?? '';
  const description = body.match(/^description: "(.*)"$/m)?.[1] ?? '';
  if (title.length > 60) errors.push(`${slug}: title is ${title.length} characters`);
  if (description.length > 160) errors.push(`${slug}: description is ${description.length} characters`);
  const {
    checkedDate = '2026-08-06',
    checkedText = `Checked ${checkedDate}`,
    requires = [],
    ...frontmatterRules
  } = rules;
  for (const [field, value] of Object.entries(frontmatterRules)) {
    const pattern = new RegExp(`^${field}: ["']?${value.replaceAll('.', '\\.')}["']?$`, 'm');
    if (!pattern.test(body)) errors.push(`${slug}: expected ${field}=${value}`);
  }

  if (!/^preview: false$/m.test(body)) errors.push(`${slug}: preview must be false`);
  if (!body.includes('<figure>')) errors.push(`${slug}: local in-body figure is missing`);
  if (!body.includes('src="/images/')) errors.push(`${slug}: figure must use /images/`);
  if (!body.includes('## Sources')) errors.push(`${slug}: Sources section is missing`);
  if (!body.includes(checkedText)) errors.push(`${slug}: checked date is missing`);
  for (const text of requires) {
    if (!body.includes(text)) errors.push(`${slug}: required evidence is missing: ${text}`);
  }
  const internalLinks = body.match(/\]\(\/guides\//g)?.length ?? 0;
  if (internalLinks < 2) errors.push(`${slug}: expected at least two internal guide links`);
  if (!existsSync(join(imagesDir, frontmatterRules.image))) {
    errors.push(`${slug}: ${frontmatterRules.image} is missing`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Verified ${Object.keys(expected).length} source-backed guide entries.`);
