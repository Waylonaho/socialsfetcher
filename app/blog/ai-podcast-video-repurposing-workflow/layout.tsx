import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Podcast Video Repurposing: From Long Audio to Viral Clips',
  description: 'Step-by-step pipeline for transcribing, clipping, reframing, and captioning 60-minute podcast episodes into viral Shorts.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/ai-podcast-video-repurposing-workflow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
