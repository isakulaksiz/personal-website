// Medium beslemesini indirip src/data/medium.json anlık kopyasını günceller.
// Kullanım: npm run sync:medium
import { writeFile } from 'node:fs/promises';
import { fetchMediumPosts } from '../src/lib/medium-feed.mjs';

const posts = await fetchMediumPosts();
const target = new URL('../src/data/medium.json', import.meta.url);
await writeFile(target, `${JSON.stringify({ syncedAt: new Date().toISOString(), posts }, null, 2)}\n`);
console.log(`Medium: ${posts.length} yazı kaydedildi → src/data/medium.json`);
