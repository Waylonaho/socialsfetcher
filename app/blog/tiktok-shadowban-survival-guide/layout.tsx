import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Shadowban Survival Guide: Signs, Tests & Fixes (2026)',
  description: 'Learn how to detect if your TikTok account is shadowbanned, test FYP visibility, and restore zero-view videos safely.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/tiktok-shadowban-survival-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
