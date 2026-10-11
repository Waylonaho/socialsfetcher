import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boomer Guide to Smartphone Sanity: Managing Photos & Media',
  description: 'A straightforward guide to clearing smartphone storage, backing up family media, and organizing gallery clutter.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/boomers-guide-to-smartphone-sanity',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
