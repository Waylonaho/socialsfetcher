import type { Metadata, Viewport } from 'next';
import './globals.css';
import InstallPrompt from '@/components/InstallPrompt';
import SiteFooter from '@/components/SiteFooter';

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.socialsfetcher.com'),
  title: {
    default: 'SocialsFetcher — Free Creator Video Tools, Safe-Zone & Bitrate Utilities',
    template: '%s | SocialsFetcher',
  },
  description:
    'Extract clean 1080p video streams, check 9:16 safe-zone overlays, calculate export bitrates, and streamline short-form video production.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'SocialsFetcher',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SocialsFetcher',
    url: 'https://www.socialsfetcher.com',
    description:
      'Creator production utilities, 1080p stream extractors, 9:16 safe-zone overlays, and monetization calculators.',
  };

  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="flex-grow">{children}</div>
        <SiteFooter />
        <InstallPrompt />
      </body>
    </html>
  );
}
