import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.socialsfetcher.com'),
  title: {
    default: 'SocialsFetcher - Free Social Media Video Downloader',
    template: '%s | SocialsFetcher',
  },
  description: 'Download social media videos from TikTok, Instagram, YouTube Shorts, and X without watermarks in high quality.',
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
