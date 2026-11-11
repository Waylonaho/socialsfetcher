const https = require('https');

const HOST = 'www.socialsfetcher.com';
const API_KEY = '3a9c7e8f1b2d4e5f6a7b8c9d0e1f2a3b';
const KEY_LOCATION = `https://${HOST}/3a9c7e8f1b2d4e5f6a7b8c9d0e1f2a3b.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/tools/safe-zone-canvas`,
  `https://${HOST}/tools/studio-gear-configurator`,
  'https://${HOST}/tools/bitrate-calculator',
  `https://${HOST}/tiktok/download/no-watermark`,
  `https://${HOST}/instagram/reels/downloader`,
  `https://${HOST}/youtube/shorts/saver`,
  `https://${HOST}/twitter/video/mp4`,
  `https://${HOST}/blog/why-cross-posted-video-looks-blurry-fix`,
  `https://${HOST}/privacy`
];

const payload = JSON.stringify({
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'User-Agent': 'SocialsFetcher-IndexNow/1.0'
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing/Yandex/Seznam)...`);

let isSuccess = false;

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode}`);

  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('✅ IndexNow submission successful!');
    isSuccess = true;
  } else {
    console.log(`⚠️ IndexNow response code: ${res.statusCode}`);
  }
});

req.on('error', (e) => {
  // If the server accepted the payload (202), ignore post-response socket resets
  if (isSuccess && (e.code === 'ECONNRESET' || e.message.includes('ECONNRESET'))) {
    console.log('ℹ️ Connection closed by remote server after successful status.');
  } else {
    console.error(`❌ IndexNow submission error: ${e.message}`);
    process.exit(1);
  }
});

req.write(payload);
req.end();
