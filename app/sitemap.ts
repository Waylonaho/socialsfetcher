import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getDirectories(srcPath: string): string[] {
  if (!fs.existsSync(srcPath)) return [];
  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.socialsfetcher.com';
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const addEntry = (
    routePath: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly'
  ) => {
    const fullUrl = `${baseUrl}${routePath}`;
    if (!seen.has(fullUrl)) {
      seen.add(fullUrl);
      entries.push({ url: fullUrl, lastModified, changeFrequency, priority });
    }
  };

  // 1. Core & Programmatic Platform Routes
  const staticRoutes = [
    '',
    '/blog',
    '/privacy',
    '/download/hd-4k',
    '/tiktok/download/no-watermark',
    '/instagram/reels/downloader',
    '/youtube/shorts/saver',
    '/twitter/video/mp4',
  ];
  staticRoutes.forEach((route) => addEntry(route, route === '' ? 1.0 : 0.9, 'daily'));

  // 2. Auto-discover all Tool folders inside app/tools/*
  const toolsDir = path.join(process.cwd(), 'app', 'tools');
  getDirectories(toolsDir).forEach((slug) => {
    addEntry(`/tools/${slug}`, 0.9, 'weekly');
  });

  // 3. Auto-discover all Blog folders inside app/blog/*
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  getDirectories(blogDir).forEach((slug) => {
    addEntry(`/blog/${slug}`, 0.8, 'weekly');
  });

  return entries;
}
