const fs = require('fs');
const path = require('path');

const EXPECTED_AMAZON_TAG = 'socialsfetcher-20';
const EXPECTED_EPIDEMIC_URL = 'https://share.epidemicsound.com/mvog5c';
let errorsFound = 0;

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // 1. Verify Amazon Associates tag
      const amazonMatches = content.match(/https:\/\/(www\.)?amazon\.com\/[^\s"'`)]+/g) || [];
      for (const link of amazonMatches) {
        if (!link.includes(EXPECTED_AMAZON_TAG) && !link.includes('${AMAZON_TAG}')) {
          console.error(`❌ Untracked Amazon link in ${fullPath}: ${link}`);
          errorsFound++;
        }
      }

      // 2. Verify Epidemic Sound referral link
      const epidemicMatches = content.match(/https:\/\/(www\.|share\.)?epidemicsound\.com[^\s"'`)]*/g) || [];
      for (const link of epidemicMatches) {
        if (link !== EXPECTED_EPIDEMIC_URL) {
          console.error(`❌ Untracked Epidemic Sound link in ${fullPath}: ${link}`);
          errorsFound++;
        }
      }
    }
  }
}

console.log('🔍 Auditing all pages for Amazon & Epidemic Sound affiliate compliance...');
scanDirectory(path.join(process.cwd(), 'app'));
if (fs.existsSync(path.join(process.cwd(), 'components'))) {
  scanDirectory(path.join(process.cwd(), 'components'));
}

if (errorsFound > 0) {
  console.error(`⚠️ Audit failed with ${errorsFound} untracked link(s).`);
  process.exit(1);
} else {
  console.log('✅ All Amazon & Epidemic Sound affiliate links verified!');
}
