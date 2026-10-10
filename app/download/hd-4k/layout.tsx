import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '4K Ultra HD Social Video Downloader | SocialsFetcher',
  description: 'Save social media clips in uncompressed 4K and 1080p high-bitrate quality without watermarks.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/download/hd-4k',
  },
};

export default function HD4KLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
