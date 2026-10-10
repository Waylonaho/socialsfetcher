import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Reels Downloader in High Definition | SocialsFetcher',
  description: 'Extract and save Instagram Reels in original MP4 quality without audio sync lag.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/instagram/reels/downloader',
  },
};

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
