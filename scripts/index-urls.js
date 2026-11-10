const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Array of URLs you want Google to immediately crawl/index
const urlsToIndex = [
  'https://www.socialsfetcher.com/why-cross-posted-video-looks-blurry-fix',
  'https://www.socialsfetcher.com/format-vertical-video-tiktok-reels-shorts-no-black-bars',
  'https://www.socialsfetcher.com/how-to-fix-tiktok-audio-sync-lag-after-download',
  'https://www.socialsfetcher.com/tools/studio-gear-configurator',
];

async function runIndexing() {
  try {
    const serviceAccountKey = process.env.GCP_INDEXING_KEY
      ? JSON.parse(process.env.GCP_INDEXING_KEY)
      : JSON.parse(fs.readFileSync(path.join(__dirname, '../gcp-key.json'), 'utf8'));

    const jwtClient = new google.auth.JWT(
      serviceAccountKey.client_email,
      null,
      serviceAccountKey.private_key,
      ['https://www.googleapis.com/auth/indexing'],
      null
    );

    await jwtClient.authorize();

    const indexing = google.indexing({ version: 'v3', auth: jwtClient });

    for (const url of urlsToIndex) {
      console.log(`Requesting Google indexing for: ${url}`);
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`Success [${res.status}]: ${url}`);
    }
  } catch (error) {
    console.error('Indexing failed:', error.message);
    process.exit(1);
  }
}

runIndexing();
