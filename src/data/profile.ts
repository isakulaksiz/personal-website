import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

/**
 * Kişisel bilgiler tek yerden yönetilir.
 * Metinleri, eğitim bilgilerini, teknolojileri ve bağlantıları buradan güncelleyebilirsiniz.
 */
export const profile = {
  name: 'İsa Kulaksız',
  orcid: '0009-0000-1138-7130',
  role: {
    tr: 'Yapay Zeka Mühendisi',
    en: 'AI Engineer',
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
    tr: "Halkbank'ta yapay zeka mühendisi olarak çalışıyorum. Büyük dil modelleri, ajan tabanlı sistemler, RAG ve doğal dil işleme üzerine çalışıyor; Türkçe sahte haber tespiti üzerine araştırma yapıyorum. Bu sitede akademik çalışmalarımı ve yazılarımı paylaşıyorum.",
    en: 'I work as an AI engineer at Halkbank, building systems around large language models: agentic workflows, RAG and natural language processing. My research is on fake news detection in Turkish. This site collects my academic work and writing.',
  } satisfies Localized,

  /** Hakkımda sayfasındaki paragraflar. */
  about: {
    tr: [
      "Merhaba, ben İsa. İstanbul'da yaşıyorum ve Halkbank'ta yapay zeka mühendisi olarak çalışıyorum. Günlük işimde büyük dil modelleri (LLM) üzerine kurulu sistemler geliştiriyorum: kurum içi veriyle beslenen RAG mimarileri, ajan tabanlı (agentic AI) iş akışları ve bu modellerin üretim ortamında güvenilir biçimde çalışmasını sağlayan altyapı.",
      "Teknik tarafta LoRA ile ince ayar, vLLM ile yüksek verimli model servisleme, Milvus ve Chroma gibi vektör veritabanları ve MCP (Model Context Protocol) ile araç entegrasyonu üzerinde çalışıyorum. Farklı vektör veritabanlarını yük altında karşılaştırdığım bir çalışmayı Medium'da yazdım.",
      'Lisans eğitimimi Karabük Üniversitesi Bilgisayar Mühendisliği bölümünde, yüksek lisans eğitimimi ise Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünde tamamladım. Yüksek lisans çalışmalarımda Türkçe haber metinlerinde sahte haber tespiti üzerine odaklandım; klasik makine öğrenmesi sınıflandırıcılarını ve LSTM tabanlı derin öğrenme modellerini karşılaştırdım.',
      "Öğrendiklerimi yazıya dökmeyi seviyorum. Yazılarımı Medium'da yayınlıyorum; lisans yıllarımda C programlama örneklerini paylaşmak için hazırladığım C Örneklerim sitesi de hâlâ yayında.",
    ],
    en: [
      'Hi, I am İsa. I live in Istanbul and work as an AI engineer at Halkbank, where I build systems around large language models (LLMs): RAG architectures over internal data, agentic AI workflows, and the infrastructure that keeps these models running reliably in production.',
      'On the technical side I work with LoRA fine-tuning, high-throughput model serving with vLLM, vector databases such as Milvus and Chroma, and tool integration through MCP (the Model Context Protocol). I wrote about load-testing several vector databases on Medium.',
      'I received my B.Sc. in Computer Engineering from Karabük University and my M.Sc. in Computer Engineering from Atatürk University. My graduate research focused on fake news detection in Turkish news texts, comparing classical machine learning classifiers with LSTM-based deep learning models.',
      'I like writing about what I learn. My articles are published on Medium, and the C Examples site I built as an undergraduate to share C programming exercises is still online.',
    ],
  } satisfies Record<Lang, string[]>,

  education: [
    {
      degree: { tr: 'Yüksek Lisans', en: 'M.Sc.' } satisfies Localized,
      field: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' } satisfies Localized,
      school: { tr: 'Atatürk Üniversitesi', en: 'Atatürk University' } satisfies Localized,
      url: 'https://atauni.edu.tr',
      years: '2025',
      advisor: { tr: 'Dr. Öğr. Üyesi Ahmet Coşkunçay', en: 'Asst. Prof. Ahmet Coşkunçay' } satisfies Localized,
      /** Araştırma sayfasındaki tez kaydının id'si (publications.ts) */
      thesisId: 'kulaksiz2025thesis',
    },
    {
      degree: { tr: 'Lisans', en: 'B.Sc.' } satisfies Localized,
      field: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' } satisfies Localized,
      school: { tr: 'Karabük Üniversitesi', en: 'Karabük University' } satisfies Localized,
      url: 'https://www.karabuk.edu.tr',
      years: '',
      advisor: undefined,
      thesisId: undefined,
    },
  ],

  interests: {
    tr: ['Büyük Dil Modelleri', 'Ajan Tabanlı Yapay Zeka', 'RAG', 'Doğal Dil İşleme', 'Metin Sınıflandırma', 'Sahte Haber Tespiti'],
    en: ['Large Language Models', 'Agentic AI', 'RAG', 'Natural Language Processing', 'Text Classification', 'Fake News Detection'],
  } satisfies Record<Lang, string[]>,

  /** Hakkımda sayfasındaki "Teknolojiler" bölümü; gruplar ve etiketler serbestçe düzenlenebilir. */
  skills: [
    {
      name: { tr: 'LLM ve ajan tabanlı sistemler', en: 'LLMs and agentic systems' } satisfies Localized,
      items: ['LLM', 'Agentic AI', 'RAG', 'MCP (Model Context Protocol)', 'LoRA / fine-tuning', 'vLLM'],
    },
    {
      name: { tr: 'Vektör veritabanları', en: 'Vector databases' } satisfies Localized,
      items: ['Milvus', 'Chroma', 'pgvector', 'Oracle 23ai'],
    },
    {
      name: { tr: 'NLP ve makine öğrenmesi', en: 'NLP and machine learning' } satisfies Localized,
      items: ['Python', 'PyTorch', 'Hugging Face Transformers', 'scikit-learn', 'LSTM'],
    },
  ],

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
    { key: 'huggingface', label: 'Hugging Face', url: 'https://huggingface.co/isakulaksiz' },
    { key: 'medium', label: 'Medium', url: 'https://medium.com/@isakulaksiz.ce' },
  ] as { key: string; label: string | Localized; url: string }[],

  /** Lisans yıllarından kalan C örnekleri sitesi; blog sayfasında arşiv olarak gösterilir. */
  cExamples: {
    url: 'https://corneklerim.blogspot.com',
    label: { tr: 'C Örneklerim', en: 'C Examples' } satisfies Localized,
  },
};
