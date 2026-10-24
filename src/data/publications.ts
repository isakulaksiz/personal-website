import type { Lang } from '../i18n/ui';
import type { Localized } from './profile';

export type PublicationType = 'article' | 'conference' | 'thesis' | 'preprint';

export interface Author {
  given: string;
  family: string;
}

export interface Publication {
  /** Sayfa içi bağlantı (#id) ve BibTeX anahtarı için */
  id: string;
  type: PublicationType;
  /** Özgün başlık (çevrilmez) */
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  pdf?: string;
  /** Tezler için şehir / ülke (BibTeX address) */
  address?: string;
  /** Tezler için BibTeX type alanı, ör. "Yüksek Lisans Tezi" */
  bibType?: string;
  /** Sayfada gösterilecek ek bilgi: danışman, dil vb. */
  note?: Localized;
  keywords: Record<Lang, string[]>;
  summary: Localized;
  /** Ana sayfada gösterilsin mi */
  selected?: boolean;
}

/** Araştırma sayfasının giriş paragrafı */
export const researchIntro: Localized = {
  tr: 'Araştırmalarım doğal dil işleme ve makine öğrenmesi üzerine; özellikle Türkçe metinlerde sahte haber tespiti, metin sınıflandırma ve derin öğrenme modellerinin klasik yöntemlerle karşılaştırılması konularına odaklanıyor.',
  en: 'My research is in natural language processing and machine learning, with a focus on fake news detection in Turkish, text classification and comparing deep learning models with classical methods.',
};

/**
 * Yeni bir yayın eklemek için bu listeye bir nesne ekleyin.
 * Sıralama sayfada yıla göre (yeniden eskiye) otomatik yapılır.
 */
export const publications: Publication[] = [
  {
    id: 'kulaksiz2025fakenews',
    type: 'article',
    title: 'Fake News Detection on Mainstream Media Using Natural Language Processing',
    authors: [
      { given: 'İsa', family: 'Kulaksız' },
      { given: 'Ahmet', family: 'Coşkunçay' },
    ],
    venue: 'Black Sea Journal of Engineering and Science',
    year: 2025,
    volume: '8',
    issue: '1',
    pages: '214–224',
    doi: '10.34248/bsengineering.1527551',
    keywords: {
      tr: ['Sahte haber tespiti', 'Makine öğrenmesi', 'Sınıflandırma', 'LSTM', 'Doğal dil işleme'],
      en: ['Fake news detection', 'Machine learning', 'Classification', 'LSTM', 'NLP'],
    },
    summary: {
      tr: "Çalışma, Türkçe haber metinlerinde sahte haber tespiti için dilbilimsel özelliklere dayalı bir model önermektedir. 2015–2023 dönemine ait, TRT RSS servisi ve Teyit.org doğrulama platformundan derlenen haber başlık ve özetleri üzerinde altı klasik sınıflandırıcı (SVM, lojistik regresyon, rastgele orman, k-NN, karar ağacı, Naive Bayes) ile bir LSTM ağı karşılaştırılmış; TF-IDF ve CountVectorizer temsilleri ile hiperparametre ayarının etkisi incelenmiştir. En iyi sonuç, TF-IDF ve hiperparametre ayarı ile SVM'de %93,12 doğruluk olarak elde edilmiştir.",
      en: 'The study proposes a linguistics-based model for detecting fake news in Turkish. On a dataset of news titles and summaries from 2015–2023, collected from the TRT RSS service and the Teyit.org fact-checking platform, six classical classifiers (SVM, logistic regression, random forest, k-NN, decision tree, Naive Bayes) are compared with an LSTM network, together with TF-IDF versus CountVectorizer representations and the effect of hyperparameter tuning. The best result, 93.12% accuracy, was obtained with an SVM using TF-IDF and tuning.',
    },
    selected: true,
  },
  {
    id: 'kulaksiz2025thesis',
    type: 'thesis',
    title: 'Doğal Dil İşleme Kullanılarak Ana Akım Medyada Türkçe Sahte Haber Tespiti',
    authors: [{ given: 'İsa', family: 'Kulaksız' }],
    venue: 'Atatürk Üniversitesi, Fen Bilimleri Enstitüsü, Bilgisayar Mühendisliği Anabilim Dalı',
    year: 2025,
    address: 'Erzurum, Türkiye',
    bibType: 'Yüksek Lisans Tezi',
    url: 'https://tez.yok.gov.tr/UlusalTezMerkezi/',
    note: {
      tr: 'Yüksek lisans tezi · Danışman: Dr. Öğr. Üyesi Ahmet Coşkunçay · Dil: Türkçe · YÖK Ulusal Tez Merkezi',
      en: 'M.Sc. thesis · Advisor: Asst. Prof. Ahmet Coşkunçay · Language: Turkish · YÖK National Thesis Center',
    },
    keywords: {
      tr: ['Sahte haber tespiti', 'Doğal dil işleme', 'Makine öğrenmesi', 'LSTM', 'BERTurk'],
      en: ['Fake news detection', 'NLP', 'Machine learning', 'LSTM', 'BERTurk'],
    },
    summary: {
      tr: 'Tezde Türkçe ana akım medyadaki haberlerin sahte mi gerçek mi olduğunu tespit eden bir sistem geliştirilmiştir. TRT Gündem ve Teyit.org kaynaklarından toplanan haberler ön işleme adımlarından geçirilerek etiketlenmiş; TF-IDF, CountVectorizer ve Word2Vec ile özellik çıkarımı yapılmış; SVM, lojistik regresyon, Naive Bayes, k-NN, karar ağacı, rastgele orman, LSTM ve BERTurk modelleri karşılaştırılmıştır. Tezin veri seti Hugging Face üzerinde TR-FakeNews adıyla paylaşılmıştır.',
      en: 'The thesis develops a system that classifies news from Turkish mainstream media as fake or real. News collected from TRT Gündem and Teyit.org is preprocessed and labelled; features are extracted with TF-IDF, CountVectorizer and Word2Vec; SVM, logistic regression, Naive Bayes, k-NN, decision tree, random forest, LSTM and BERTurk models are compared. The dataset is shared on Hugging Face as TR-FakeNews.',
    },
  },
];

export function formatAuthors(authors: Author[]): string {
  return authors.map((a) => `${a.given} ${a.family}`).join(', ');
}

/** "Dergi, 8(1), 214–224" biçiminde kaynak satırı */
export function formatVenue(p: Publication): string {
  const volume = p.volume ? `${p.volume}${p.issue ? `(${p.issue})` : ''}` : '';
  return [p.venue, volume, p.pages ?? ''].filter(Boolean).join(', ');
}

export function toBibtex(p: Publication): string {
  const entryType =
    p.type === 'article' ? 'article' : p.type === 'conference' ? 'inproceedings' : p.type === 'thesis' ? 'mastersthesis' : 'misc';
  const venueField = p.type === 'conference' ? 'booktitle' : p.type === 'thesis' ? 'school' : 'journal';
  const fields: string[] = [
    `  title = {${p.title}}`,
    `  author = {${p.authors.map((a) => `${a.family}, ${a.given}`).join(' and ')}}`,
    `  ${venueField} = {${p.venue}}`,
    `  year = {${p.year}}`,
  ];
  if (p.volume) fields.push(`  volume = {${p.volume}}`);
  if (p.issue) fields.push(`  number = {${p.issue}}`);
  if (p.pages) fields.push(`  pages = {${p.pages.replace(/[–—]/g, '--')}}`);
  if (p.address) fields.push(`  address = {${p.address}}`);
  if (p.bibType) fields.push(`  type = {${p.bibType}}`);
  if (p.doi) fields.push(`  doi = {${p.doi}}`);
  if (p.url && !p.doi) fields.push(`  url = {${p.url}}`);
  return `@${entryType}{${p.id},\n${fields.join(',\n')}\n}`;
}
