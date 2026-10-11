import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work from Home: Get Paid Managing Social Media Accounts',
  description: 'Realistic pathways, software requirements, and client acquisition methods for remote social media management.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/get-paid-managing-social-media-accounts-from-home',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
