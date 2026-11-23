import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Creator Production Guides & Short-Form Video Tutorials',
  description: 'Step-by-step guides on vertical video formatting, bitrate optimization, audio extraction, and creator software workflows.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog',
  },
};

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(blogDir, d.name, 'page.tsx')))
    .map((d) => {
      const title = d.name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { slug: d.name, title };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export default function BlogHubPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-5 text-xs sm:text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/tools/creator-teleprompter" className="hover:text-indigo-400 transition">Teleprompter</Link>
            <Link href="/tools/hook-scorer" className="hover:text-indigo-400 transition">Hook Scorer</Link>
            <Link href="/tools/safe-zone-canvas" className="hover:text-indigo-400 transition">Safe-Zone</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-12 text-left w-full">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 border border-indigo-800 px-3 py-1 rounded-full">
            {posts.length} Creator Guides Indexed
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-3 tracking-tight">
            Creator Workflows &amp; Video Optimization Guides
          </h1>
          <p className="text-slate-400 text-base max-w-2xl">
            Actionable playbooks for short-form video formatting, clean media archiving, AI repurposing, and budget creator setups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition flex flex-col justify-between group"
            >
              <h2 className="text-sm font-bold text-white group-hover:text-indigo-300 transition leading-snug mb-3">
                {post.title}
              </h2>
              <span className="text-xs font-semibold text-indigo-400">Read Guide →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
