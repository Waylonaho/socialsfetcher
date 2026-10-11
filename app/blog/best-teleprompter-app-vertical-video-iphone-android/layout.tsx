import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Teleprompter Apps for Vertical Video (iPhone & Android)',
  description: 'Top teleprompter apps with auto-scrolling voice tracking that keep your eyes focused on the smartphone lens.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/best-teleprompter-app-vertical-video-iphone-android',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
