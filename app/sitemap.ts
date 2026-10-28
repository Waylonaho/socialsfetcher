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
    { slug: 'why-cross-posted-video-looks-blurry-fix', lastModified: '2026-10-13' },
    { slug: 'repurpose-youtube-short-to-reels-and-tiktok', lastModified: '2026-10-07' },
    { slug: 'how-to-save-tiktok-video-before-posting', lastModified: '2026-10-08' },
    { slug: 'format-vertical-video-tiktok-reels-shorts-no-black-bars', lastModified: '2026-10-08' },
    { slug: 'how-to-save-an-x-video-with-permission', lastModified: '2026-10-09' },
    { slug: 'how-to-extract-audio-from-youtube-shorts-safely', lastModified: '2026-10-09' },
    { slug: 'how-to-save-tiktok-draft-to-camera-roll', lastModified: '2026-10-10' },
    { slug: 'how-to-extract-audio-from-instagram-reels-mp3', lastModified: '2026-10-10' },
    { slug: 'how-to-automatically-save-instagram-stories-camera-roll-archive', lastModified: '2026-10-11' },
    { slug: 'how-to-extract-audio-from-tiktok-video-mp3', lastModified: '2026-10-11' },
    { slug: 'tiktok-video-saved-not-showing-in-gallery', lastModified: '2026-10-12' },
    { slug: 'how-to-save-x-twitter-video-with-audio-iphone', lastModified: '2026-10-12' },
    { slug: 'how-to-fix-tiktok-audio-sync-lag-after-download', lastModified: '2026-10-13' },
    { slug: 'why-saved-instagram-reel-has-no-music-fix', lastModified: '2026-10-13' },
    { slug: 'how-to-backup-youtube-shorts-google-takeout', lastModified: '2026-10-14' },
    { slug: 'how-to-extract-youtube-shorts-thumbnail-hd', lastModified: '2026-10-14' },
    { slug: 'why-cant-i-download-a-video-from-x', lastModified: '2026-10-15' },
    { slug: 'how-to-extract-audio-from-x-twitter-video-mp3', lastModified: '2026-10-15' },
    { slug: 'how-to-save-instagram-story-after-24-hours-archive', lastModified: '2026-10-16' },
    { slug: 'how-to-download-youtube-shorts-mp4-1080p-no-watermark', lastModified: '2026-10-16' },
    { slug: 'how-to-save-your-own-video-from-x-to-phone', lastModified: '2026-10-17' },
    { slug: 'how-to-download-instagram-reels-1080p-high-quality', lastModified: '2026-10-17' },
    { slug: 'tiktok-save-button-missing-on-own-video', lastModified: '2026-10-18' },
    { slug: 'how-to-download-audio-from-youtube-shorts-iphone', lastModified: '2026-10-18' },
    { slug: 'capcut-vs-descript-short-form-video', lastModified: '2026-10-26' },
    { slug: 'how-to-organize-backup-social-videos-creator-vault', lastModified: '2026-10-26' },
    { slug: 'social-video-bitrate-file-size-calculator', lastModified: '2026-10-28' },
    { slug: 'creator-video-file-name-generator-handoff-checklist', lastModified: '2026-10-28' },
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
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok/download/no-watermark`,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/instagram/reels/downloader`,
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/youtube/shorts/saver`,
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/twitter/video/mp4`,
      lastModified: new Date('2026-10-28'),
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
