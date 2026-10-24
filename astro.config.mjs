// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://isakulaksiz.github.io/personal-website/
// Depoyu "isakulaksiz.github.io" olarak yeniden adlandırırsanız base'i '/' yapın.
export default defineConfig({
  site: 'https://isakulaksiz.github.io',
  base: '/personal-website',
  compressHTML: true,
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR', en: 'en-US' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
