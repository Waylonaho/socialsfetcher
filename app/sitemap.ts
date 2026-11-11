import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.socialsfetcher.com';

  const coreRoutes = [
    '',
    '/blog',
    '/privacy',
    '/download/hd-4k',
    '/tiktok/download/no-watermark',
    '/instagram/reels/downloader',
    '/youtube/shorts/saver',
    '/twitter/video/mp4',
    '/tools/studio-gear-configurator',
    '/tools/safe-zone-canvas',
    '/tools/bitrate-calculator',
  ];

  const blogSlugs = [
    'why-cross-posted-video-looks-blurry-fix',
    'format-vertical-video-tiktok-reels-shorts-no-black-bars',
    'how-to-fix-tiktok-audio-sync-lag-after-download',
    'how-to-organize-backup-social-videos-creator-vault',
    'social-video-bitrate-file-size-calculator',
    'how-to-lower-saas-tool-costs',
    'creator-video-file-name-generator-handoff-checklist',
    'capcut-vs-descript-short-form-video',
    'how-to-download-youtube-shorts-mp4-1080p-no-watermark',
    'how-to-download-instagram-reels-1080p-high-quality',
    'how-to-save-tiktok-video-before-posting',
    'how-to-save-tiktok-draft-to-camera-roll',
    'tiktok-save-button-missing-on-own-video',
    'tiktok-video-saved-not-showing-in-gallery',
    'repurpose-youtube-short-to-reels-and-tiktok',
    'how-to-extract-audio-from-tiktok-video-mp3',
    'how-to-extract-audio-from-instagram-reels-mp3',
    'how-to-download-audio-from-youtube-shorts-iphone',
    'how-to-extract-audio-from-youtube-shorts-safely',
    'how-to-extract-audio-from-x-twitter-video-mp3',
    'how-to-save-x-twitter-video-with-audio-iphone',
    'how-to-save-your-own-video-from-x-to-phone',
    'how-to-save-an-x-video-with-permission',
    'why-cant-i-download-a-video-from-x',
    'why-saved-instagram-reel-has-no-music-fix',
    'how-to-automatically-save-instagram-stories-camera-roll-archive',
    'how-to-save-instagram-story-after-24-hours-archive',
    'how-to-extract-youtube-shorts-thumbnail-hd',
    'how-to-backup-youtube-shorts-google-takeout',
    '50-viral-hook-ideas-swipe-file',
    'ai-podcast-video-repurposing-workflow',
    'best-group-buy-tools-alternative-safe',
    'best-social-media-scheduling-tools-solo-creators',
    'best-subtitle-caption-generators-short-videos',
    'best-teleprompter-app-vertical-video-iphone-android',
    'boomers-guide-to-smartphone-sanity',
    'build-passive-digital-income-stream-for-beginners',
    'cheapest-way-to-get-canva-pro-safe',
    'cheapest-way-to-get-kalodata',
    'cheapest-way-to-get-pipiads',
    'faceless-channel-tools-stack-budget',
    'get-paid-clipping-videos-on-whop',
    'get-paid-managing-social-media-accounts-from-home',
    'how-to-get-chatgpt-plus-cheaper',
    'start-tiktok-ad-agency-tools-budget',
    'tiktok-shadowban-survival-guide',
    'tiktok-shop-beginner-tools-budget',
    'turn-livestreams-into-vertical-clips',
    'turn-plain-video-into-ai-doodle-explainer',
  ];

  const platforms = ['tiktok', 'instagram', 'youtube', 'twitter'];
  const actions = ['download', 'reels', 'shorts', 'video'];
  const modifiers = ['no-watermark', 'downloader', 'saver', 'mp4'];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  const addEntry = (url: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly', lastModified = new Date('2026-11-05')) => {
    if (!seenUrls.has(url)) {
      seenUrls.add(url);
      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency,
        priority,
      });
    }
  };

  // Add Core Routes
  coreRoutes.forEach((route) => {
    addEntry(`${baseUrl}${route}`, route === '' ? 1.0 : 0.8, 'daily');
  });

  // Add Blog Routes
  blogSlugs.forEach((slug) => {
    addEntry(`${baseUrl}/blog/${slug}`, 0.7, 'weekly');
  });

  // Add Dynamic Platform Routes safely without duplicates
  platforms.forEach((platform) => {
    actions.forEach((action) => {
      modifiers.forEach((modifier) => {
        addEntry(`${baseUrl}/${platform}/${action}/${modifier}`, 0.6, 'weekly');
      });
    });
  });

  return sitemapEntries;
}
