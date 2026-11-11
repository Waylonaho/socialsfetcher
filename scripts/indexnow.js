const https = require('https');

const HOST = 'www.socialsfetcher.com';
const API_KEY = '3a9c7e8f1b2d4e5f6a7b8c9d0e1f2a3b';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

// Clean array of exact URLs to submit
const urlList = [
  `https://${HOST}`,
  `https://${HOST}/tools/safe-zone-canvas`,
  `https://${HOST}/tools/studio-gear-configurator`,
  `https://${HOST}/tools/bitrate-calculator`,
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
  hostname: 'www.bing.com',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing/Multi-Engine)...`);

const req = https.request(options, (res) => {
  let responseBody = '';

  res.on('data', (chunk) => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log(`IndexNow Response Status: ${res.statusCode}`);
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ IndexNow submission successful!');
    } else {
      console.error(`⚠️ IndexNow returned code ${res.statusCode}. Details: ${responseBody}`);
      // Only fail process on client error (4xx) or server error (5xx)
      if (res.statusCode >= 400) {
        process.exit(1);
      }
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ Request Error: ${e.message}`);
  process.exit(1);
});

req.write(payload);
req.end();
