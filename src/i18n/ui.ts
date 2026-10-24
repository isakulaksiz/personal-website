export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'tr';

export const localeTags: Record<Lang, string> = {
  tr: 'tr-TR',
  en: 'en-US',
};

export const ui = {
  tr: {
    'site.title': 'İsa Kulaksız',
    'site.description':
      'Makine öğrenmesi mühendisi. Doğal dil işleme, metin sınıflandırma ve sahte haber tespiti üzerine çalışıyorum.',
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.research': 'Araştırma',
    'nav.blog': 'Blog',
    'lang.label': 'Dil',
    'a11y.skip': 'İçeriğe atla',
    'footer.rss': 'RSS',
    'footer.rights': 'Tüm hakları saklıdır.',
    'notfound.title': 'Sayfa bulunamadı',
    'notfound.text': 'Aradığınız sayfa yok ya da taşınmış olabilir.',
    'notfound.home': 'Ana sayfaya dön',
    'home.links': 'Profiller',
    'home.more': 'Hakkımda daha fazlası',
    'about.title': 'Hakkımda',
    'about.education': 'Eğitim',
    'about.interests': 'Araştırma alanları',
    'about.service': 'Akademik hizmet',
    'about.links': 'Bağlantılar',
  },
  en: {
    'site.title': 'İsa Kulaksız',
    'site.description':
      'Machine learning engineer working on natural language processing, text classification and fake news detection.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.blog': 'Blog',
    'lang.label': 'Language',
    'a11y.skip': 'Skip to content',
    'footer.rss': 'RSS',
    'footer.rights': 'All rights reserved.',
    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has moved.',
    'notfound.home': 'Back to home',
    'home.links': 'Profiles',
    'home.more': 'More about me',
    'about.title': 'About',
    'about.education': 'Education',
    'about.interests': 'Research interests',
    'about.service': 'Academic service',
    'about.links': 'Links',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
