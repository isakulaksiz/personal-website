import snapshot from '../data/medium.json';
import { fetchMediumPosts } from './medium-feed.mjs';

export interface MediumPost {
  title: string;
  url: string;
  /** ISO 8601 */
  date: string;
  tags: string[];
  excerpt: string;
}

let cached: Promise<MediumPost[]> | undefined;

/**
 * Build sırasında Medium beslemesini çeker; erişilemezse depodaki
 * src/data/medium.json anlık kopyasını kullanır (npm run sync:medium ile yenilenir).
 */
export function getMediumPosts(): Promise<MediumPost[]> {
  cached ??= (async () => {
    try {
      return (await fetchMediumPosts()) as MediumPost[];
    } catch (error) {
      console.warn(`[medium] Besleme alınamadı, src/data/medium.json kullanılıyor: ${(error as Error).message}`);
      return snapshot.posts as MediumPost[];
    }
  })();
  return cached;
}
