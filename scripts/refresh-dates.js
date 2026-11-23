const fs = require('fs');
const path = require('path');

const now = new Date();
const monthYear = now.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const year = now.getUTCFullYear();
const isoDate = now.toISOString().split('T')[0];

const outDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const config = {
  currentYear: year,
  currentMonthYear: monthYear,
  lastVerifiedIso: isoDate,
};

fs.writeFileSync(path.join(outDir, 'site-config.json'), JSON.stringify(config, null, 2));
console.log(`✅ Updated data/site-config.json (${monthYear} / ${isoDate})`);
