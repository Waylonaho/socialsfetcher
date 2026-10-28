import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Video File-Name Generator & Client Handoff Checklist (2026)',
  description: 'Free interactive file-name generator for video editors and UGC creators. Generate consistent ISO filenames for raw footage, clean masters, and client deliverables.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/creator-video-file-name-generator-handoff-checklist',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Creator Video File-Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Generate standardized, chronologically sorted filenames for short-form video masters, client revisions, and multi-platform exports.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog & Guides', item: 'https://www.socialsfetcher.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Video File-Name Generator & Handoff Checklist', item: 'https://www.socialsfetcher.com/blog/creator-video-file-name-generator-handoff-checklist' },
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
