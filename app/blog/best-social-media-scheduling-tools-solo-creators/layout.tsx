import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Social Media Scheduling Tools for Solo Creators (2026)',
  description: 'Compare auto-posting tools for TikTok, Reels, and YouTube Shorts that support original audio, safe zones, and scheduling.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/best-social-media-scheduling-tools-solo-creators',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
