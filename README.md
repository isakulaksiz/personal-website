# İsa Kulaksız — kişisel site

Kişisel blog ve akademik sayfa. [Astro](https://astro.build) ile üretilir, GitHub Pages üzerinde ücretsiz yayınlanır. Türkçe ve İngilizce iki dilde sunulur.

Canlı adres: **https://isakulaksiz.github.io/personal-website/**

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321/personal-website/
npm run build    # üretim çıktısı dist/ klasörüne
npm run preview  # build çıktısını yerelde dene
```

Node.js 22.23.4 veya üzeri gerekir (GitHub Actions üzerinde Node 24 kullanılır).

## İçerik güncelleme

| Ne | Nerede |
| --- | --- |
| Kişisel bilgiler, eğitim, bağlantılar | `src/data/profile.ts` |
| Yayınlar (BibTeX otomatik üretilir) | `src/data/publications.ts` |
| Blog yazıları | `src/content/blog/tr/*.md` ve `src/content/blog/en/*.md` |
| Arayüz metinleri (menü, başlıklar) | `src/i18n/ui.ts` |
| Tema renkleri ve ölçüler | `src/styles/global.css` |

### Blog yazısı eklemek

`src/content/blog/tr/` (veya `en/`) altına bir Markdown dosyası ekleyin:

```md
---
title: "Yazı başlığı"
description: "Listede görünecek kısa açıklama."
pubDate: 2026-11-01
tags: ["nlp", "python"]
draft: false
---

Yazının içeriği…
```

- Aynı dosya adı iki dil klasöründe de varsa birbirinin çevirisi sayılır; dil değiştirici doğrudan o yazıya gider.
- `draft: true` olan yazılar yalnızca `npm run dev` ile görünür, yayına çıkmaz.
- Yazı adresi dosya adından üretilir: `tr/welcome.md` → `/tr/blog/welcome/`.

## Medium yazıları

Blog sayfası ve ana sayfadaki "Son yazılar" bölümü, Medium beslemesinden (`https://medium.com/feed/@isakulaksiz.ce`) gelir:

- Her build'de besleme çekilir; erişilemezse depodaki anlık kopya `src/data/medium.json` kullanılır.
- Anlık kopyayı yenilemek için: `npm run sync:medium` (sonucu commit edin).
- Bir yazıyı sitede göstermemek için adresinin bir parçasını `src/data/medium-hidden.ts` listesine ekleyin.
- Deploy akışı her pazartesi otomatik olarak yeniden derlenir; yeni Medium yazıları en geç bir hafta içinde siteye düşer. Hemen yansıtmak için GitHub'da **Actions → Deploy to GitHub Pages → Run workflow** butonunu kullanın.

## Yayınlama

`main` dalına yapılan her push'ta `.github/workflows/deploy.yml` çalışır, siteyi derler ve GitHub Pages'e yükler. Depo ayarlarında **Settings → Pages → Source** değeri **GitHub Actions** olmalıdır.

## Adresi kök dizine taşımak

Depoyu `isakulaksiz.github.io` olarak yeniden adlandırırsanız site `https://isakulaksiz.github.io/` adresinden yayınlanır. Bunun için `astro.config.mjs` içinde `base: '/'` yapmanız yeterlidir.

## Yapı

```
src/
  components/   Header, Footer, LanguageSwitcher, SocialLinks
  content/blog/ Markdown yazılar (tr/, en/)
  data/         profile.ts, publications.ts
  i18n/         ui.ts (metinler), utils.ts (yardımcılar)
  layouts/      BaseLayout.astro (head, hreflang, RSS)
  lib/          blog.ts (yazı sorguları)
  pages/        index.astro (dil yönlendirme), 404.astro, [lang]/…
  styles/       global.css
```
