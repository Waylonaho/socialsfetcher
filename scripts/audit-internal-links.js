const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const allRoutes = new Set();
const allContents = [];

function collectPages(dir, prefix = '') {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip dynamic brackets and api routes
      if (!entry.name.startsWith('[') && entry.name !== 'api') {
        collectPages(fullPath, `${prefix}/${entry.name}`);
      }
    } else if (entry.name.endsWith('.tsx')) {
      allContents.push(fs.readFileSync(fullPath, 'utf8'));
      if (entry.name === 'page.tsx') {
        allRoutes.add(prefix || '/');
      }
    }
  }
}

// Also scan components/ for global navigation links
const compDir = path.join(process.cwd(), 'components');
if (fs.existsSync(compDir)) {
  fs.readdirSync(compDir).forEach((file) => {
    if (file.endsWith('.tsx')) {
      allContents.push(fs.readFileSync(path.join(compDir, file), 'utf8'));
    }
  });
}

collectPages(appDir);

const combinedCode = allContents.join('\n');
const underLinked = [];

allRoutes.forEach((route) => {
  if (route === '/' || route === '/privacy') return;
  const escaped = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`["'\`]${escaped}["'\`]`, 'g');
  const matches = combinedCode.match(regex) || [];
  if (matches.length < 2) {
    underLinked.push({ route, inboundLinks: matches.length });
  }
});

console.log(`📊 Audited ${allRoutes.size} static routes for internal link density.`);
if (underLinked.length === 0) {
  console.log('✅ Zero orphan or under-linked pages found!');
} else {
  console.log(`⚠️ Found ${underLinked.length} page(s) with <2 internal links:`);
  underLinked.forEach((item) => console.log(`   - ${item.route} (${item.inboundLinks} links)`));
}
