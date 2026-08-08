import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'SocialsFetcher — Free Social Media Video Downloader',
  description: 'Download clean, watermark-free videos from TikTok, Instagram Reels, YouTube Shorts, and X in HD.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* InVideo / Impact Site Verification Meta Tag */}
        <meta name="impact-site-verification" value="115cdc62-82e4-4468-a688-28646152be09" />

        {/* Impact Tracking Script */}
        <Script id="impact-tracking-script" strategy="afterInteractive">
          {`(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7587239-ac42-4fbf-824d-9db66b0a7c051.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
