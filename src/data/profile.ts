import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

/**
 * Kişisel bilgiler tek yerden yönetilir.
 * Metinleri, eğitim bilgilerini ve bağlantıları buradan güncelleyebilirsiniz.
 */
export const profile = {
  name: 'İsa Kulaksız',
  orcid: '0009-0000-1138-7130',
  role: {
    tr: 'Makine Öğrenmesi Mühendisi',
    en: 'Machine Learning Engineer',
  } satisfies Localized,
  affiliation: {
    name: 'Halkbank',
    url: 'https://www.halkbank.com.tr',
  },
  location: {
    tr: 'İstanbul, Türkiye',
    en: 'Istanbul, Türkiye',
  } satisfies Localized,

  /** Ana sayfadaki kısa tanıtım. */
  bio: {
    tr: "Halkbank'ta makine öğrenmesi mühendisi olarak çalışıyorum. Doğal dil işleme, metin sınıflandırma ve Türkçe sahte haber tespiti üzerine araştırmalar yapıyorum. Bu sitede akademik çalışmalarımı ve blog yazılarımı paylaşıyorum.",
    en: 'I work as a machine learning engineer at Halkbank. My research focuses on natural language processing, text classification and fake news detection in Turkish. This site collects my academic work and blog posts.',
  } satisfies Localized,

  /** Hakkımda sayfasındaki paragraflar. */
  about: {
    tr: [
      "Merhaba, ben İsa. İstanbul'da yaşıyorum ve Halkbank'ta makine öğrenmesi mühendisi olarak çalışıyorum. Günlük işimde finans alanındaki veri problemlerine makine öğrenmesi ve doğal dil işleme yöntemleriyle çözüm üretiyorum.",
      'Lisans eğitimimi Karabük Üniversitesi Bilgisayar Mühendisliği bölümünde, yüksek lisans eğitimimi ise Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünde tamamladım. Yüksek lisans çalışmalarımda Türkçe haber metinlerinde sahte haber tespiti üzerine odaklandım; klasik makine öğrenmesi sınıflandırıcılarını ve LSTM tabanlı derin öğrenme modellerini karşılaştırdım.',
      'Boş zamanlarımda öğrendiklerimi yazıya dökmeyi seviyorum. Teknik notlarımı bu blogda, daha eski C örneklerimi ise Blogspot sayfamda bulabilirsiniz.',
    ],
    en: [
      'Hi, I am İsa. I live in Istanbul and work as a machine learning engineer at Halkbank, where I apply machine learning and natural language processing to data problems in finance.',
      'I received my B.Sc. in Computer Engineering from Karabük University and my M.Sc. in Computer Engineering from Atatürk University. My graduate research focused on fake news detection in Turkish news texts, comparing classical machine learning classifiers with LSTM-based deep learning models.',
      'In my spare time I like writing about what I learn. You can find my technical notes on this blog and my older C programming examples on my Blogspot page.',
    ],
  } satisfies Record<Lang, string[]>,

  education: [
    {
      degree: { tr: 'Yüksek Lisans', en: 'M.Sc.' } satisfies Localized,
      field: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' } satisfies Localized,
      school: { tr: 'Atatürk Üniversitesi', en: 'Atatürk University' } satisfies Localized,
      url: 'https://atauni.edu.tr',
      years: '',
    },
    {
      degree: { tr: 'Lisans', en: 'B.Sc.' } satisfies Localized,
      field: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' } satisfies Localized,
      school: { tr: 'Karabük Üniversitesi', en: 'Karabük University' } satisfies Localized,
      url: 'https://www.karabuk.edu.tr',
      years: '',
    },
  ],

  interests: {
    tr: ['Doğal Dil İşleme', 'Makine Öğrenmesi', 'Derin Öğrenme', 'Metin Sınıflandırma', 'Sahte Haber Tespiti'],
    en: ['Natural Language Processing', 'Machine Learning', 'Deep Learning', 'Text Classification', 'Fake News Detection'],
  } satisfies Record<Lang, string[]>,

  service: {
    tr: ['Hakem — Sakarya University Journal of Computer and Information Sciences'],
    en: ['Reviewer — Sakarya University Journal of Computer and Information Sciences'],
  } satisfies Record<Lang, string[]>,

  links: [
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/isakulaksiz/' },
    { key: 'scholar', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=HOx2HgMAAAAJ' },
    { key: 'orcid', label: 'ORCID', url: 'https://orcid.org/0009-0000-1138-7130' },
    { key: 'researchgate', label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Isa-Kulaksiz' },
    { key: 'dergipark', label: 'DergiPark', url: 'https://dergipark.org.tr/en/pub/@isa-kulaksiz' },
    { key: 'github', label: 'GitHub', url: 'https://github.com/isakulaksiz' },
    { key: 'medium', label: 'Medium', url: 'https://medium.com/@isakulaksiz.ce' },
    { key: 'blogspot', label: { tr: 'C Örneklerim (Blogspot)', en: 'C Examples (Blogspot)' }, url: 'https://corneklerim.blogspot.com' },
  ] as { key: string; label: string | Localized; url: string }[],
};
