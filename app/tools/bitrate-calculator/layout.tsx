import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Video Bitrate & File Size Calculator (TikTok, Reels, Shorts)',
  description: 'Calculate exact target bitrates (Mbps) and estimated file sizes (MB) for 1080p and 4K vertical video exports to prevent platform compression blur.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/bitrate-calculator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Social Video Bitrate & File Size Calculator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Interactive calculator for vertical video creators to optimize export bitrates and storage space for TikTok, Reels, and YouTube Shorts.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: 'Bitrate Calculator', item: 'https://www.socialsfetcher.com/tools/bitrate-calculator' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
