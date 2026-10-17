import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Lower SaaS Costs: A Creator Tool Audit (2026)',
  description: 'Audit your creative software subscriptions, cut unused monthly seats, and consolidate video tools to save money.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/how-to-lower-saas-tool-costs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
