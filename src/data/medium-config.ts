/**
 * Medium yazılarının sitede nasıl gösterileceği.
 * Her kayıt, yazı adresinin ayırt edici bir parçasıdır (ör. slug); besleme yenilense de geçerli kalır.
 */

/**
 * Öne çıkan yazılar, sıralı.
 * Ana sayfada yalnızca bunlar gösterilir; blog sayfasında listenin en üstünde yer alır.
 * Liste boşsa ana sayfada en yeni 3 yazı görünür.
 */
export const featuredMediumPosts: string[] = [
  'vector-database-loadtest-comparison-milvus-oracle-23ai-and-pgvector',
];

/** Hiçbir yerde gösterilmeyecek yazılar. */
export const hiddenMediumPosts: string[] = [];
