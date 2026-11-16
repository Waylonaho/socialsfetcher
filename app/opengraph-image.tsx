import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SocialsFetcher — Creator Video Tools & Utilities';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#818cf8', fontWeight: 700, marginBottom: 16 }}>
          SOCIALSFETCHER.COM
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
          Creator Video Tools, Safe-Zone Overlays &amp; 1080p Extractors
        </div>
        <div style={{ fontSize: 28, color: '#cbd5e1' }}>
          Teleprompter • Hook Scorer • Bitrate Calculator • No-Watermark Streams
        </div>
      </div>
    ),
    { ...size }
  );
}
