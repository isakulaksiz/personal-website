import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { localeTags, type Lang } from '../../i18n/ui';
import { langPaths, localePath, useTranslations } from '../../i18n/utils';
import { getPosts, postSlug } from '../../lib/blog';

export function getStaticPaths() {
  return langPaths();
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const t = useTranslations(lang);
  const posts = await getPosts(lang);

  return rss({
    title: t('site.title'),
    description: t('site.description'),
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: localePath(lang, `blog/${postSlug(post)}`),
      categories: post.data.tags,
    })),
    customData: `<language>${localeTags[lang]}</language>`,
  });
}
