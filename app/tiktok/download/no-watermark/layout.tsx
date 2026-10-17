import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark',
  description: 'Download clean TikTok videos in MP4 format without watermarks directly to your camera roll.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/tiktok/download/no-watermark',
  },
};

export default function TikTokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
