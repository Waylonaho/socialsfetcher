const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'app', 'blog');
const outDir = path.join(process.cwd(), 'data');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const slugs = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
  : [];

const relatedMap = {};

slugs.forEach((slug) => {
  const keywords = slug.split('-').filter((w) => w.length > 3);
  const matches = slugs
    .filter((other) => other !== slug)
    .map((other) => {
      const score = keywords.filter((kw) => other.includes(kw)).length;
      return { slug: other, score };
    })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((m) => ({
      href: `/blog/${m.slug}`,
      title: m.slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
    }));

  relatedMap[slug] = matches;
});

fs.writeFileSync(
  path.join(outDir, 'related-links.json'),
  JSON.stringify(relatedMap, null, 2)
);

console.log(`✅ Generated contextual internal link map for ${slugs.length} articles.`);
