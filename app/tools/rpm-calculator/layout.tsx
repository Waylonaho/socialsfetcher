import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Do TikTok & YouTube Shorts Pay Per 1,000 Views? (2026 RPM Calculator)',
  description: 'Calculate exact monthly earnings from TikTok Creator Rewards, YouTube Shorts AdSense, and Instagram Reels. Compare 2026 RPM rates by niche and see how many views you need to hit your income goal.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/rpm-calculator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: '2026 Short-Form RPM & Creator Payout Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Interactive creator earnings calculator estimating monthly payouts across TikTok Creator Rewards, YouTube Shorts, and Instagram Reels based on niche RPM and qualified views.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does TikTok pay per 1,000 views in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the TikTok Creator Rewards Program, payouts typically range from $0.40 to $1.20+ RPM (per 1,000 qualified views) for original videos longer than 60 seconds, depending on audience location and niche.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does YouTube Shorts pay per 1,000 views?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'YouTube Shorts AdSense RPM generally averages between $0.06 and $0.25 per 1,000 views, though high-CPM niches like personal finance, software, and B2B can reach $0.30+ RPM.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many views do I need to make $1,000 a month on short-form video?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At an average $0.75 TikTok Creator Rewards RPM, you need roughly 1.33 million qualified monthly views to earn $1,000. On YouTube Shorts at $0.15 RPM, you need approximately 6.67 million monthly views.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: '2026 RPM Calculator', item: 'https://www.socialsfetcher.com/tools/rpm-calculator' },
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
