const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Array of high-priority PLPs & tools for Google indexing
const urlsToIndex = [
  'https://www.socialsfetcher.com/tiktok/download/no-watermark',
  'https://www.socialsfetcher.com/tiktok/download/without-watermark',
  'https://www.socialsfetcher.com/instagram/reels/downloader',
  'https://www.socialsfetcher.com/instagram/reels/1080p-hd',
  'https://www.socialsfetcher.com/youtube/shorts/saver',
  'https://www.socialsfetcher.com/youtube/shorts/audio-extract',
  'https://www.socialsfetcher.com/twitter/video/mp4',
  'https://www.socialsfetcher.com/tools/studio-gear-configurator',
  'https://www.socialsfetcher.com/tools/safe-zone-canvas',
  'https://www.socialsfetcher.com/why-cross-posted-video-looks-blurry-fix',
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
