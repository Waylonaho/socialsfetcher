const fs = require('fs');
const path = require('path');

const EXPECTED_AMAZON_TAG = 'socialsfetcher-20';
let errorsFound = 0;

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Check for raw amazon.com links missing the affiliate tag
      const amazonMatches = content.match(/https:\/\/(www\.)?amazon\.com\/[^\s"'`)]+/g) || [];
      for (const link of amazonMatches) {
        if (!link.includes(EXPECTED_AMAZON_TAG) && !link.includes('${AMAZON_TAG}')) {
          console.error(`❌ Untracked Amazon link in ${fullPath}: ${link}`);
          errorsFound++;
        }
      }
    }
  }
}

console.log('🔍 Auditing all pages for affiliate tag compliance...');
scanDirectory(path.join(process.cwd(), 'app'));

if (errorsFound > 0) {
  console.error(`⚠️ Audit failed with ${errorsFound} untracked link(s).`);
  process.exit(1);
} else {
  console.log('✅ All Amazon affiliate tags verified!');
}
