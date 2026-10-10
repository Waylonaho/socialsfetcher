import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Guides, Workflows & Tool Reviews | SocialsFetcher',
  description: 'Explore in-depth guides on video repurposing, viral growth frameworks, software comparisons, and creator monetization workflows.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog',
  },
};

const articles = [
  {
    slug: '50-viral-hook-ideas-swipe-file',
    title: '50 Viral Hook Ideas & Frameworks Swipe File',
    category: 'Growth & Strategy',
    description: 'High-performing hooks and psychological opening frameworks to boost audience retention on TikTok, Shorts, and Reels.',
  },
  {
    slug: 'cheapest-way-to-get-canva-pro-safe',
    title: 'Cheapest Way to Get Canva Pro (Legitimate & Safe Options)',
    category: 'Software & Budget',
    description: 'Comparison of plans, team splits, legitimate student/nonprofit paths, and safe SaaS bundles.',
  },
  {
    slug: 'how-to-get-chatgpt-plus-cheaper',
    title: 'How to Get ChatGPT Plus Cheaper: Official vs Group Bundles',
    category: 'Software & Budget',
    description: 'Reviewing budget-friendly options, shared API playgrounds, and bundle discounts for GPT-4 capabilities.',
  },
  {
    slug: 'best-group-buy-tools-alternative-safe',
    title: 'Best Group Buy Tools Alternatives: Safe & Reliable Access',
    category: 'Software & Budget',
    description: 'Why traditional group buys fail security checks and what compliant options exist for budget creators.',
  },
  {
    slug: 'cheapest-way-to-get-kalodata',
    title: 'Cheapest Way to Get Kalodata for TikTok Shop Analytics',
    category: 'Monetization',
    description: 'Track trending affiliate products and top creator storefronts without overpaying on tier fees.',
  },
  {
    slug: 'cheapest-way-to-get-pipiads',
    title: 'Cheapest Way to Get PiPiADS: Ad Spy Tool Comparison',
    category: 'Monetization',
    description: 'Discounts, trial pricing, and legitimate bundle options for competitor TikTok ad tracking.',
  },
  {
    slug: 'opusclip-review-cheapest-pricing',
    title: 'OpusClip Review & Guide: Repurposing Long Videos to Shorts',
    category: 'Creator Workflows',
    description: 'Automated AI clipping, dynamic captioning, b-roll generation, and plan comparisons.',
  },
  {
    slug: 'best-faceless-youtube-channel-tools',
    title: 'Best AI Tools for Running a Faceless YouTube Channel',
    category: 'Creator Workflows',
    description: 'The end-to-end tech stack for automated scripts, voice generation, b-roll sourcing, and rendering.',
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8">
          <Link href="/" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 mb-4 inline-block">
            ← Back to Downloader
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Creator Workflows & Resource Hub
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Actionable guides, cost comparisons, and tech stacks for short-form video creators and digital publishers.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700"
            >
              <div>
                <span className="inline-block rounded bg-emerald-950/80 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-800/50 mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-white mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  Read guide <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
