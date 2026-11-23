import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Short-Form Copyright & Demonetization Risk Checker (TikTok, Reels, Shorts)',
  description: 'Audit your video audio, B-roll footage, and music licensing before uploading to TikTok Creator Rewards, YouTube Shorts, or Instagram Reels to prevent muting and strikes.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/copyright-checklist',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Short-Form Video Copyright & Demonetization Risk Checker',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Pre-upload compliance diagnostic for short-form video creators. Evaluates background music licensing, cross-platform audio rights, and monetization eligibility.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: 'Copyright Risk Checker', item: 'https://www.socialsfetcher.com/tools/copyright-checklist' },
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
