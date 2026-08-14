import type { CollectionEntry } from 'astro:content';

export type GuideEntry = CollectionEntry<'guides'>;

export const GUIDE_PAGE_SIZE = 9;

/** Sort guide cards by the date users see on the card: updated first, then published. */
export function sortGuides(guides: GuideEntry[]) {
  return [...guides].sort((a, b) => {
    const aDate = a.data.updateDate ?? a.data.publishDate;
    const bDate = b.data.updateDate ?? b.data.publishDate;
    if (aDate.getTime() !== bDate.getTime()) return bDate.getTime() - aDate.getTime();
    return a.id.localeCompare(b.id);
  });
}

export function pageCount(totalItems: number, pageSize = GUIDE_PAGE_SIZE) {
  return Math.max(1, Math.ceil(totalItems / pageSize));
}

export function pageItems<T>(items: T[], page: number, pageSize = GUIDE_PAGE_SIZE) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
