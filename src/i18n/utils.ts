import { ui, defaultLang, languages, localeTags, type Lang, type UiKey } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** getStaticPaths için: her dil için bir rota üretir. */
export function langPaths() {
  return (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

function base(): string {
  return import.meta.env.BASE_URL.replace(/\/+$/, '');
}

/** Dil önekli, base'e göre düzeltilmiş site içi yol: localePath('en', 'blog') → /personal-website/en/blog/ */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${base()}/${lang}/${clean}/` : `${base()}/${lang}/`;
}

/** public/ altındaki dosyalar için base'e göre düzeltilmiş yol. */
export function assetPath(path: string): string {
  return `${base()}/${path.replace(/^\/+/, '')}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(localeTags[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
