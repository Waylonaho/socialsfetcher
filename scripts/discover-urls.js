const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const HOST = 'https://www.socialsfetcher.com';

function getSubfolders(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function getUrlsToIndex() {
  const urls = new Set([
    `${HOST}`,
    `${HOST}/tiktok/download/no-watermark`,
    `${HOST}/instagram/reels/downloader`,
    `${HOST}/youtube/shorts/saver`,
    `${HOST}/twitter/video/mp4`,
  ]);

  // Add all tools automatically
  getSubfolders(path.join(process.cwd(), 'app', 'tools')).forEach((slug) => {
    urls.add(`${HOST}/tools/${slug}`);
  });

  // Check git diff for newly added/edited blog posts in the latest push
  try {
    const changedFiles = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean);

    changedFiles.forEach((file) => {
      const blogMatch = file.match(/^app\/blog\/([^/]+)\/page\.tsx$/);
      if (blogMatch) {
        urls.add(`${HOST}/blog/${blogMatch[1]}`);
      }
    });
  } catch (e) {
    // Fallback: include top recent blog posts if git history is shallow
    getSubfolders(path.join(process.cwd(), 'app', 'blog'))
      .slice(0, 10)
      .forEach((slug) => urls.add(`${HOST}/blog/${slug}`));
  }

  return Array.from(urls);
}

module.exports = { getUrlsToIndex };
