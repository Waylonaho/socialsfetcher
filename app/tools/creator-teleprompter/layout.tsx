import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Teleprompter & Video Script Timer (Mirror Mode + WPM)',
  description: 'Paste your video script to calculate exact speaking duration and launch a full-screen, adjustable-speed teleprompter with mirror mode for TikTok, Reels, and YouTube.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/creator-teleprompter',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Creator Teleprompter & Script Timer',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Browser-based scrolling teleprompter with real-time WPM script timing, font scaling, and horizontal mirror mode for beam-splitter glass rigs.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: 'Creator Teleprompter', item: 'https://www.socialsfetcher.com/tools/creator-teleprompter' },
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
