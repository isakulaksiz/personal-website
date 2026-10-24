import snapshot from '../data/medium.json';
import { fetchMediumPosts } from './medium-feed.mjs';
import { featuredMediumPosts, hiddenMediumPosts } from '../data/medium-config';

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
    let posts: MediumPost[];
    try {
      posts = (await fetchMediumPosts()) as MediumPost[];
    } catch (error) {
      console.warn(`[medium] Besleme alınamadı, src/data/medium.json kullanılıyor: ${(error as Error).message}`);
      posts = snapshot.posts as MediumPost[];
    }
    const visible = posts.filter((post) => !hiddenMediumPosts.some((fragment) => post.url.includes(fragment)));
    // Öne çıkanlar verilen sırayla en üste, kalanlar tarih sırasıyla altına
    const featured = featuredMediumPosts
      .map((fragment) => visible.find((post) => post.url.includes(fragment)))
      .filter((post): post is MediumPost => post !== undefined);
    const rest = visible.filter((post) => !featured.includes(post));
    return [...featured, ...rest];
  })();
  return cached;
}

/** Ana sayfa için: öne çıkan yazılar; hiç tanımlı değilse en yeni 3 yazı. */
export async function getFeaturedMediumPosts(): Promise<MediumPost[]> {
  const posts = await getMediumPosts();
  const featured = posts.filter((post) => featuredMediumPosts.some((fragment) => post.url.includes(fragment)));
  return featured.length > 0 ? featured : posts.slice(0, 3);
}
