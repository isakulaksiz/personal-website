/**
 * Medium RSS beslemesini bağımlılık olmadan ayrıştırır.
 * Hem Astro build'i (src/lib/medium.ts) hem de scripts/sync-medium.mjs kullanır.
 */

export const MEDIUM_FEED_URL = 'https://medium.com/feed/@isakulaksiz.ce';

/**
 * @typedef {{ title: string; url: string; date: string; tags: string[]; excerpt: string }} MediumPost
 */

const stripCdata = (s) => s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '');

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

function tagContent(block, name) {
  const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return match ? decodeEntities(stripCdata(match[1].trim())) : '';
}

function tagContents(block, name) {
  return [...block.matchAll(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'g'))].map((m) =>
    decodeEntities(stripCdata(m[1].trim())),
  );
}

/** HTML'i düz metne çevirir (görseller ve etiketler atılır). */
export function stripHtml(html) {
  return decodeEntities(html.replace(/<figure[\s\S]*?<\/figure>/g, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

/** Yazının ilk cümlelerinden kısa bir özet üretir. */
export function excerpt(html, max = 220) {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 0)).trim()}…`;
}

/**
 * @param {string} xml
 * @returns {MediumPost[]} yeniden eskiye sıralı
 */
export function parseMediumFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .map(([, block]) => ({
      title: tagContent(block, 'title'),
      url: tagContent(block, 'link').replace(/\?source=.*$/, ''),
      date: new Date(tagContent(block, 'pubDate')).toISOString(),
      tags: tagContents(block, 'category'),
      excerpt: excerpt(tagContent(block, 'content:encoded')),
    }))
    .filter((post) => post.title && post.url)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Beslemeyi indirir ve ayrıştırır; hata durumunda fırlatır (çağıran taraf yedeğe düşer).
 * @returns {Promise<MediumPost[]>}
 */
export async function fetchMediumPosts(timeoutMs = 10000) {
  const res = await fetch(MEDIUM_FEED_URL, {
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      'user-agent': 'personal-website-build (+https://isakulaksiz.github.io/personal-website/)',
      accept: 'application/rss+xml, application/xml, text/xml',
    },
  });
  if (!res.ok) throw new Error(`Medium feed HTTP ${res.status}`);
  const posts = parseMediumFeed(await res.text());
  if (posts.length === 0) throw new Error('Medium feed returned no items');
  return posts;
}
