import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://socialsfetcher.com';

  const blogPosts = [
    { slug: '50-viral-hook-ideas-swipe-file', lastModified: '2026-08-16' },
    { slug: 'best-group-buy-tools-alternative-safe', lastModified: '2026-10-04' },
    { slug: 'cheapest-way-to-get-canva-pro-safe', lastModified: '2026-10-03' },
    { slug: 'how-to-get-chatgpt-plus-cheaper', lastModified: '2026-09-15' },
    { slug: 'cheapest-way-to-get-kalodata', lastModified: '2026-10-03' },
    { slug: 'cheapest-way-to-get-pipiads', lastModified: '2026-10-03' },
    { slug: 'opusclip-review-cheapest-pricing', lastModified: '2026-10-02' },
    { slug: 'best-faceless-youtube-channel-tools', lastModified: '2026-09-28' },
    { slug: 'ai-podcast-repurposing-guide', lastModified: '2026-08-22' },
    { slug: 'tiktok-shop-affiliate-starter-tools', lastModified: '2026-09-30' },
    { slug: 'how-to-start-short-form-ad-agency', lastModified: '2026-08-30' },
    { slug: 'work-from-home-social-media-jobs', lastModified: '2026-09-05' },
    { slug: 'how-to-fix-tiktok-shadowban-views', lastModified: '2026-09-12' },
    { slug: 'best-ai-doodle-video-generators', lastModified: '2026-09-12' },
    { slug: 'toolsuite-group-buy-review', lastModified: '2026-09-18' },
    { slug: 'get-paid-to-clip-videos-online', lastModified: '2026-09-22' },
    { slug: 'the-boomers-simple-guide-to-smartphone-sanity', lastModified: '2026-08-20' },
    { slug: 'passive-digital-income-short-video', lastModified: '2026-09-14' },
    { slug: 'turn-livestreams-into-vertical-clips', lastModified: '2026-10-05' },
    { slug: 'best-subtitle-caption-generators-short-videos', lastModified: '2026-10-05' },
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
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-10-03'),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-downloader`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/instagram-reels-downloader`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/youtube-shorts-downloader`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/x-video-downloader`,
      lastModified: new Date('2026-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return [...coreRoutes, ...blogRoutes];
}
