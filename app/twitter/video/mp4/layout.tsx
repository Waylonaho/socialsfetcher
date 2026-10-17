import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X Twitter Video Downloader to MP4',
  description: 'Extract high-bitrate MP4 video files from public X (Twitter) posts with creator permission.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/twitter/video/mp4',
  },
};

export default function TwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
