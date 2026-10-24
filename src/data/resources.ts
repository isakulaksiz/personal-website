import type { Localized } from './profile';

export type ResourceKind = 'model' | 'dataset';

export interface Resource {
  kind: ResourceKind;
  name: string;
  /** Hugging Face kimliği, ör. isakulaksiz/turkish-pii-detection */
  id: string;
  url: string;
  description: Localized;
  tags: string[];
}

/** Araştırma sayfasındaki "Açık kaynaklar" bölümü: Hugging Face modelleri ve veri setleri */
export const resources: Resource[] = [
  {
    kind: 'dataset',
    name: 'TR-FakeNews',
    id: 'isakulaksiz/turkish-fake-news-detection',
    url: 'https://huggingface.co/datasets/isakulaksiz/turkish-fake-news-detection',
    description: {
      tr: 'Türkçe ana akım medya haberlerinden derlenmiş sahte haber veri seti: 2015–2023 arasına ait 5.325 haber başlığı ve özeti (TRT ve Teyit.org kaynaklı), gerçek / sahte etiketli. Makaledeki deneylerin veri kaynağı.',
      en: 'Turkish fake news dataset built from mainstream media: 5,325 news titles and summaries from 2015–2023 (sourced from TRT and Teyit.org), labelled real / fake. The data behind the journal article.',
    },
    tags: ['Hugging Face', 'Türkçe', 'MIT'],
  },
  {
    kind: 'model',
    name: 'turkish-pii-detection',
    id: 'isakulaksiz/turkish-pii-detection',
    url: 'https://huggingface.co/isakulaksiz/turkish-pii-detection',
    description: {
      tr: 'Türkçe metinlerde kişisel verileri (isim, yer, kurum) tespit edip maskelemek için BERTurk üzerine ince ayarlanmış token sınıflandırma modeli; KVKK / GDPR uyumu ve metin anonimleştirme için.',
      en: 'Token classification model fine-tuned from BERTurk to detect and mask personal data (names, locations, organizations) in Turkish text, for KVKK / GDPR compliance and text anonymization.',
    },
    tags: ['Hugging Face', 'BERTurk', 'NER', 'MIT'],
  },
];
