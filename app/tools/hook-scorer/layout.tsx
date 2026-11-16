import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viral Video Hook Scorer & 3-Second Retention Analyzer (TikTok, Reels, Shorts)',
  description: 'Test your opening video hook before filming. Analyze 3-second scroll-stop power, reading speed, curiosity triggers, and get instant high-retention hook rewrites.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/hook-scorer',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Viral Video Hook Scorer & Retention Analyzer',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Client-side retention scoring tool for short-form video creators. Evaluates opening spoken and text hooks for scroll-stop engagement.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: 'Viral Hook Scorer', item: 'https://www.socialsfetcher.com/tools/hook-scorer' },
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
