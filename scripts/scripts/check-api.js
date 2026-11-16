const https = require('https');

const payload = JSON.stringify({
  videoUrl: 'https://www.tiktok.com/@tiktok/video/7106594312292453675'
});

const options = {
  hostname: 'www.socialsfetcher.com',
  port: 443,
  path: '/api/fetch-video',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log('🩺 Testing live /api/fetch-video endpoint...');

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    console.log(`API HTTP Status: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log('✅ Video extraction API is online and responding!');
    } else {
      console.error(`❌ API health check failed (${res.statusCode}): ${body}`);
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ Connection error: ${e.message}`);
  process.exit(1);
});

req.write(payload);
req.end();
