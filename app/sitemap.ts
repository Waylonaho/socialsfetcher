import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.socialsfetcher.com';

  const blogPosts = [
    { slug: '50-viral-hook-ideas-swipe-file', lastModified: '2026-08-16' },
    { slug: 'ai-podcast-video-repurposing-workflow', lastModified: '2026-08-22' },
    { slug: 'best-group-buy-tools-alternative-safe', lastModified: '2026-10-04' },
    { slug: 'best-social-media-scheduling-tools-solo-creators', lastModified: '2026-10-06' },
    { slug: 'best-subtitle-caption-generators-short-videos', lastModified: '2026-10-05' },
    { slug: 'best-teleprompter-app-vertical-video-iphone-android', lastModified: '2026-10-06' },
    { slug: 'boomers-guide-to-smartphone-sanity', lastModified: '2026-08-20' },
    { slug: 'build-passive-digital-income-stream-for-beginners', lastModified: '2026-09-14' },
    { slug: 'cheapest-way-to-get-canva-pro-safe', lastModified: '2026-10-03' },
    { slug: 'cheapest-way-to-get-kalodata', lastModified: '2026-10-03' },
    { slug: 'cheapest-way-to-get-pipiads', lastModified: '2026-10-03' },
    { slug: 'faceless-channel-tools-stack-budget', lastModified: '2026-10-04' },
    { slug: 'get-paid-clipping-videos-on-whop', lastModified: '2026-09-22' },
    { slug: 'get-paid-managing-social-media-accounts-from-home', lastModified: '2026-09-05' },
    { slug: 'how-to-get-chatgpt-plus-cheaper', lastModified: '2026-09-15' },
    { slug: 'how-to-lower-saas-tool-costs', lastModified: '2026-09-18' },
    { slug: 'start-tiktok-ad-agency-tools-budget', lastModified: '2026-10-04' },
    { slug: 'tiktok-shadowban-survival-guide', lastModified: '2026-09-12' },
    { slug: 'tiktok-shop-beginner-tools-budget', lastModified: '2026-10-04' },
    { slug: 'turn-livestreams-into-vertical-clips', lastModified: '2026-10-05' },
    { slug: 'turn-plain-video-into-ai-doodle-explainer', lastModified: '2026-09-12' },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const coreRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-10-06'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-10-06'),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok/download/no-watermark`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/instagram/reels/downloader`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/youtube/shorts/saver`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/twitter/video/mp4`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/download/hd-4k`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...coreRoutes, ...blogRoutes];
}
