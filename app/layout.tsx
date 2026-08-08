import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://socialsfetcher.com'),
  title: {
    default: 'SocialsFetcher - Free Social Media Video & Audio Downloader',
    template: '%s | SocialsFetcher',
  },
  description:
    'Download high-quality videos, reels, shorts, and audio from TikTok, Instagram, YouTube, X (Twitter), and Pinterest for free with no watermarks.',
  keywords: [
    'social media downloader',
    'tiktok downloader no watermark',
    'instagram reels downloader hd',
    'youtube shorts saver',
    'twitter video converter mp4',
    'extract audio from tiktok',
  ],
  authors: [{ name: 'SocialsFetcher Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://socialsfetcher.com',
    siteName: 'SocialsFetcher',
    title: 'SocialsFetcher - Free Social Media Downloader (HD / No Watermark)',
    description:
      'Fast, free, 1080p video downloader for TikTok, Instagram Reels, YouTube Shorts, and X.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialsFetcher - Free HD Video Downloader',
    description: 'Download social media videos without watermarks instantly.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name='impact-site-verification' value='115cdc62-82e4-4468-a688-28646152be09'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'SocialsFetcher',
              url: 'https://socialsfetcher.com',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description:
                'Free online tool to fetch and download HD videos without watermarks from TikTok, Instagram, YouTube, and X.',
            }),
          }}
        /> 
        <script type="text/javascript">(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7587239-ac42-4fbf-824d-9db66b0a7c051.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');</script>
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
