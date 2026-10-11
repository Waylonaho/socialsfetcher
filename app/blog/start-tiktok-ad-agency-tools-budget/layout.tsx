import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a TikTok Ad Agency: Software Stack & Budget Guide',
  description: 'The exact low-cost tools and software workflow required to launch a short-form TikTok advertising and UGC agency.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/start-tiktok-ad-agency-tools-budget',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
