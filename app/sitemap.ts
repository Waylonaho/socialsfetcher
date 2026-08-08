import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://socialsfetcher.com';

  const routes = [
    '',
    '/tiktok/download/no-watermark',
    '/instagram/reels/downloader',
    '/youtube/shorts/saver',
    '/twitter/video/mp4',
    '/download/hd-4k',
    '/blog/turn-plain-video-into-ai-doodle-explainer',
    '/blog/get-paid-managing-social-media-accounts-from-home',
    '/blog/build-passive-digital-income-stream-for-beginners',
    '/blog/get-paid-clipping-videos-on-whop',
    '/blog/tiktok-shadowban-survival-guide',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.startsWith('/blog') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.7 : 0.8,
  }));
}
