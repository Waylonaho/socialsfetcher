const fs = require('fs');
const path = require('path');

let cleanedCount = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name === 'page.tsx') {
      const original = fs.readFileSync(fullPath, 'utf8');
      // Remove legacy standalone <footer>...</footer> blocks
      const updated = original.replace(/\s*<footer[\s\S]*?<\/footer>/g, '');

      if (updated !== original) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`🧹 Removed duplicate footer from: ${path.relative(process.cwd(), fullPath)}`);
        cleanedCount++;
      }
    }
  }
}

console.log('🔍 Scanning app/ pages for duplicate <footer> tags...');
walk(path.join(process.cwd(), 'app'));
console.log(`✅ Footer cleanup complete. Updated ${cleanedCount} file(s).`);
