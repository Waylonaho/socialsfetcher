import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive 9:16 Safe-Zone Overlay Canvas (TikTok, Reels, Shorts UI Checker)',
  description: 'Upload your 9:16 vertical video frame or image to instantly preview TikTok, Instagram Reels, and YouTube Shorts button overlays before posting.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/safe-zone-canvas',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: '9:16 Vertical Safe-Zone Overlay Canvas',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Interactive preview tool for vertical video creators. Check subtitle positioning against TikTok, Reels, and YouTube Shorts UI overlays.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: '9:16 Safe-Zone Canvas', item: 'https://www.socialsfetcher.com/tools/safe-zone-canvas' },
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
