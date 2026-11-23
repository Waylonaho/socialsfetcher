import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'About SocialsFetcher & Our Creator Tool Testing Methodology',
  description:
    'Learn how the SocialsFetcher Studio Team benchmarks short-form video bitrates, 9:16 safe-zone pixel overlays, and 2026 creator monetization RPM rates.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>
          Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on partner links on this site.
        </span>
      </div>

      <SiteHeader />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 border border-indigo-800 px-3 py-1 rounded-full">
            Editorial Standards &amp; Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Built for Working Short-Form Creators &amp; Editors
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            <strong>SocialsFetcher.com</strong> started with a simple frustration: short-form creators and video editors had to bounce across a dozen ad-cluttered websites just to check safe-zone overlays, calculate export bitrates, time a teleprompter script, or archive their own published clips.
          </p>
        </div>

        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white">How We Test &amp; Verify Our Utilities</h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <li>
              <strong className="text-indigo-400">1. Real Device UI Overlay Measurements:</strong> Our <Link href="/tools/safe-zone-canvas" className="underline text-white">9:16 Safe-Zone Canvas</Link> pixel masks are measured directly from live screenshots on iOS and Android devices across TikTok, Instagram Reels, and YouTube Shorts so your captions never collide with native buttons.
            </li>
            <li>
              <strong className="text-indigo-400">2. Compression &amp; Bitrate Benchmarking:</strong> Our <Link href="/tools/bitrate-calculator" className="underline text-white">Bitrate Calculator</Link> and <Link href="/specs" className="underline text-white">2026 Video Specs Sheet</Link> are calibrated against actual platform re-encoding thresholds in CapCut, Premiere Pro, and DaVinci Resolve.
            </li>
            <li>
              <strong className="text-indigo-400">3. Client-Side Privacy Architecture:</strong> Our Teleprompter, Hook Scorer, Safe-Zone Canvas, and Copyright Risk Checker run 100% locally in your browser—your scripts, unpublished frames, and ideas are never uploaded to external servers.
            </li>
            <li>
              <strong className="text-indigo-400">4. Creator Payout Data:</strong> Our <Link href="/tools/rpm-calculator" className="underline text-white">2026 RPM Calculator</Link> aggregates verified creator dashboard payouts across TikTok Creator Rewards, YouTube Shorts Partner Program, and Facebook Reels.
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-white">Affiliate &amp; Partner Transparency</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every calculator, teleprompter, and diagnostic tool on SocialsFetcher is 100% free to use without paywalls or forced signups. To keep our servers and utilities free, we participate in select affiliate programs—including the <strong>Amazon Services LLC Associates Program</strong>, <strong>Epidemic Sound</strong>, and <strong>OpusClip</strong>. Clicking a recommended tool or studio hardware link may earn us a commission at zero additional cost to you.
          </p>
        </section>

        <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
          <Link href="/specs" className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition">
            View 2026 Video Specs Cheat Sheet →
          </Link>
          <Link href="/blog" className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
            Browse Creator Guides →
          </Link>
        </div>
      </main>
    </div>
  );
}
