import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const guidesDir = join(root, 'src', 'content', 'guides');
const imagesDir = join(root, 'public', 'images');
const expected = {
  'koo-bloom-arts-qte-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-koo-blighted-wolf.webp',
  },
  'parry-guard-dodge-controls-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-emma-parry-flower-beast.webp',
  },
  'elements-weakness-stagger-guide': {
    category: 'combat',
    source: 'handson',
    image: 'beast-of-reincarnation-blighted-boar-enemies.webp',
  },
  'cleanse-walker-upgrade-materials-guide': {
    category: 'beginner',
    source: 'handson',
    image: 'beast-of-reincarnation-wasteland-colossal-boss.webp',
  },
  'lift-extend-traversal-guide': {
    category: 'exploration',
    source: 'handson',
    image: 'beast-of-reincarnation-emma-koo-river-exploration.webp',
  },
  'deluxe-dlc-entitlement-fix-guide': {
    category: 'beginner',
    source: 'official',
    image: 'beast-of-reincarnation-deluxe-dlc.webp',
  },
};

const errors = [];

for (const [slug, rules] of Object.entries(expected)) {
  const guidePath = join(guidesDir, `${slug}.md`);
  if (!existsSync(guidePath)) {
    errors.push(`${slug}: guide file is missing`);
    continue;
  }

  const body = readFileSync(guidePath, 'utf8');
  for (const [field, value] of Object.entries(rules)) {
    const pattern = new RegExp(`^${field}: ["']?${value.replaceAll('.', '\\.')}["']?$`, 'm');
    if (!pattern.test(body)) errors.push(`${slug}: expected ${field}=${value}`);
  }

  if (!/^preview: false$/m.test(body)) errors.push(`${slug}: preview must be false`);
  if (!body.includes('<figure>')) errors.push(`${slug}: local in-body figure is missing`);
  if (!body.includes('src="/images/')) errors.push(`${slug}: figure must use /images/`);
  if (!body.includes('## Sources')) errors.push(`${slug}: Sources section is missing`);
  if (!body.includes('Checked 2026-08-06')) errors.push(`${slug}: checked date is missing`);
  const internalLinks = body.match(/\]\(\/guides\//g)?.length ?? 0;
  if (internalLinks < 2) errors.push(`${slug}: expected at least two internal guide links`);
  if (!existsSync(join(imagesDir, rules.image))) errors.push(`${slug}: ${rules.image} is missing`);
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified 6 source-backed guide entries.');
