import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface RelatedItem {
  href: string;
  title: string;
}

export default function RelatedContentGrid({ currentSlug }: { currentSlug: string }) {
  let related: RelatedItem[] = [];

  try {
    const mapPath = path.join(process.cwd(), 'data', 'related-links.json');
    if (fs.existsSync(mapPath)) {
      const raw = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
      related = raw[currentSlug] || [];
    }
  } catch {
    related = [];
  }

  if (related.length === 0) return null;

  return (
    <section className="my-10 pt-8 border-t border-slate-800 text-left space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base sm:text-lg font-bold text-white">
          Continue Optimizing Your Workflow
        </h2>
        <Link href="/blog" className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold">
          View All Guides →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {related.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 transition flex flex-col justify-between group"
          >
            <span className="text-xs font-bold text-slate-100 group-hover:text-indigo-300 transition leading-snug mb-3">
              {item.title}
            </span>
            <span className="text-[11px] font-semibold text-indigo-400">
              Read Walkthrough →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
