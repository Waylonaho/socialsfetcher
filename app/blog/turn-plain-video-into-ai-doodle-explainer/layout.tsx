import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Turn Plain Video into AI Doodle Explainer Animations',
  description: 'Transform basic voice recordings and talking-head videos into engaging whiteboard animation sketches to improve retention.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/turn-plain-video-into-ai-doodle-explainer',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
