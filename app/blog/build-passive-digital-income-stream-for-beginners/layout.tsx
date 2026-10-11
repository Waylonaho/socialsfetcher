import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build a Passive Digital Income Stream: Beginner Guide (2026)',
  description: 'How to build and monetize digital assets, simple micro-tools, and curated templates using organic search traffic.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/build-passive-digital-income-stream-for-beginners',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
