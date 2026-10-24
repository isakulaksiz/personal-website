import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { isLang } from '../i18n/utils';

export type Post = CollectionEntry<'blog'>;

/** "tr/welcome" → "tr" */
export function postLang(post: Post): Lang {
  const lang = post.id.split('/')[0];
  if (!isLang(lang)) throw new Error(`Blog yazısı bilinmeyen dil klasöründe: ${post.id}`);
  return lang;
}

/** "tr/welcome" → "welcome" */
export function postSlug(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

const visible = (post: Post) => !(import.meta.env.PROD && post.data.draft);

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', visible);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((post) => postLang(post) === lang);
}
