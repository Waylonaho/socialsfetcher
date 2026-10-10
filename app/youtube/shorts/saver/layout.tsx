import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Shorts Saver & Audio Downloader | SocialsFetcher',
  description: 'Convert and save your YouTube Shorts in 1080p MP4 or audio format directly to your device.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/youtube/shorts/saver',
  },
};

export default function YouTubeShortsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
