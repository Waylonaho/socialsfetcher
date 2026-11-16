import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getValidSlugsWithDates(srcPath: string): { slug: string; lastModified: Date }[] {
  if (!fs.existsSync(srcPath)) return [];

  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const pageFile = path.join(srcPath, dirent.name, 'page.tsx');
      if (!fs.existsSync(pageFile)) return null;
      const stats = fs.statSync(pageFile);
      return {
        slug: dirent.name,
        lastModified: stats.mtime,
      };
    })
    .filter((item): item is { slug: string; lastModified: Date } => item !== null);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.socialsfetcher.com';
  const defaultDate = new Date('2026-11-15');
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const addEntry = (
    routePath: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly',
    lastModified: Date = defaultDate
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
  staticRoutes.forEach((route) =>
    addEntry(route, route === '' ? 1.0 : 0.9, 'daily', new Date())
  );

  // 2. Auto-discover all Tool folders inside app/tools/*
  const toolsDir = path.join(process.cwd(), 'app', 'tools');
  getValidSlugsWithDates(toolsDir).forEach(({ slug, lastModified }) => {
    addEntry(`/tools/${slug}`, 0.9, 'weekly', lastModified);
  });

  // 3. Auto-discover all Blog folders inside app/blog/*
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  getValidSlugsWithDates(blogDir).forEach(({ slug, lastModified }) => {
    addEntry(`/blog/${slug}`, 0.8, 'weekly', lastModified);
  });

  return entries;
}
