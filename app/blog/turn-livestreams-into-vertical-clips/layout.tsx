import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Turn Livestreams & Long VODs into Vertical Clips (2026)',
  description: 'Repurpose Twitch, Kick, and YouTube gaming livestreams into 9:16 vertical TikToks and Shorts with automated speaker tracking.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/turn-livestreams-into-vertical-clips',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
