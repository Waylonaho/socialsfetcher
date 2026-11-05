import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Creator Studio Gear Configurator (2026 Hardware Picker)',
  description: 'Select your video format, filming setup, and budget to get a custom, itemized camera, lighting, audio, and storage kit recommendation.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tools/studio-gear-configurator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Creator Studio Gear Configurator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Interactive gear picker for video creators. Generates itemized lighting, audio, stabilization, and storage setups based on budget and content format.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 3, name: 'Studio Gear Configurator', item: 'https://www.socialsfetcher.com/tools/studio-gear-configurator' },
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
