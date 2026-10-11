import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faceless YouTube & TikTok Channel Tool Stack on a Budget',
  description: 'Affordable AI tools for voiceovers, script generation, b-roll footage, and video rendering for faceless automated channels.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/faceless-channel-tools-stack-budget',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
