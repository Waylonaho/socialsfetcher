import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SocialsFetcher — Free Social Media Video Downloader',
  description: <meta name='impact-site-verification' value='115cdc62-82e4-4468-a688-28646152be09'> 'Download clean, watermark-free videos from TikTok, Instagram Reels, YouTube Shorts, and X in HD.',
  keywords: ['video downloader', 'tiktok downloader', 'instagram reels downloader', 'youtube shorts saver'],
  authors: [{ name: 'SocialsFetcher' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
