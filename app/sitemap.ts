import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://socialsfetcher.com';

  const platforms = ['tiktok', 'instagram', 'youtube', 'twitter', 'pinterest'];
  const actions = ['download', 'reels', 'shorts', 'saver', 'converter'];
  const modifiers = ['no-watermark', '1080p', 'mp4', 'mp3', 'free-hd'];

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/download/hd-4k`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Programmatically generate URL combinations
  platforms.forEach((platform) => {
    actions.forEach((action) => {
      modifiers.forEach((modifier) => {
        routes.push({
          url: `${baseUrl}/${platform}/${action}/${modifier}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    });
  });

  return routes;
}
