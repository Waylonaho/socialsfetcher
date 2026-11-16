const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const { getUrlsToIndex } = require('./discover-urls');

async function runIndexing() {
  try {
    const urlsToIndex = getUrlsToIndex();
    console.log(`Discovered ${urlsToIndex.length} URLs for Google Indexing API...`);

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
      try {
        console.log(`Requesting Google indexing for: ${url}`);
        const res = await indexing.urlNotifications.publish({
          requestBody: { url, type: 'URL_UPDATED' },
        });
        console.log(`✅ Success [${res.status}]: ${url}`);
      } catch (err) {
        const status = err?.code || err?.response?.status;
        if (status === 429) {
          console.warn('⚠️ Google Indexing API daily quota (200/day) reached. Resets at midnight Pacific Time. Skipping remaining Google calls.');
          break; // Stop hitting Google for today without crashing the workflow
        }
        console.warn(`⚠️ Skipped ${url}: ${err.message}`);
      }
    }
  } catch (error) {
    console.error('⚠️ Google Indexing setup warning:', error.message);
    // Do not exit(1) so IndexNow still runs cleanly
  }
}

runIndexing();
