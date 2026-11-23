'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import WorkflowBar from '@/components/WorkflowBar';

type PlatformKey = 'tiktok_rewards' | 'youtube_shorts' | 'facebook_reels';
type NicheKey = 'finance_tech' | 'education_how_to' | 'lifestyle_fitness' | 'entertainment_memes';

const BASE_RPM: Record<PlatformKey, number> = {
  tiktok_rewards: 0.75,
  youtube_shorts: 0.14,
  facebook_reels: 0.35,
};

const NICHE_MULTIPLIER: Record<NicheKey, { label: string; mult: number }> = {
  finance_tech: { label: 'Finance, AI & Business Software (High CPM)', mult: 1.45 },
  education_how_to: { label: 'Tutorials, Creator Tips & Tech Reviews', mult: 1.15 },
  lifestyle_fitness: { label: 'Fitness, Health & Daily Vlogs', mult: 0.95 },
  entertainment_memes: { label: 'Entertainment, Gaming & Clips', mult: 0.65 },
};

export default function RpmCalculatorPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const EPIDEMIC_LINK = "https://share.epidemicsound.com/mvog5c";
  const TOOLSUITE_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const [platform, setPlatform] = useState<PlatformKey>('tiktok_rewards');
  const [niche, setNiche] = useState<NicheKey>('education_how_to');
  const [monthlyViews, setMonthlyViews] = useState<number>(500000);
  const [qualifiedRate, setQualifiedRate] = useState<number>(65);
  const [incomeGoal, setIncomeGoal] = useState<number>(3000);

  const effectiveRpm = Number(
    (BASE_RPM[platform] * NICHE_MULTIPLIER[niche].mult).toFixed(2)
  );

  const qualifiedViews = Math.round(monthlyViews * (qualifiedRate / 100));
  const estimatedMonthlyEarnings = ((qualifiedViews / 1000) * effectiveRpm).toFixed(2);
  const estimatedYearlyEarnings = Math.round(Number(estimatedMonthlyEarnings) * 12);

  const requiredQualifiedViews = (incomeGoal / effectiveRpm) * 1000;
  const requiredTotalViews = Math.round(requiredQualifiedViews / (qualifiedRate / 100));

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software &amp; creator partner links.</span>
      </div>

      <SiteHeader />

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 text-left w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">2026 Short-Form RPM &amp; Payout Calculator</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-emerald-950 border border-emerald-700/60 text-emerald-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            2026 Creator Monetization Engine
          </span>
          <span className="text-slate-500">• TikTok Rewards, Shorts &amp; Reels</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          How Much Do TikTok &amp; YouTube Shorts Pay Per 1,000 Views?
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
          Estimate your monthly ad-share payouts across <strong>TikTok Creator Rewards, YouTube Shorts, and Facebook Reels</strong>—and calculate the exact monthly view count required to hit your target income.
        </p>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Inputs (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Monetization Program
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlatform('tiktok_rewards')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'tiktok_rewards'
                      ? 'bg-indigo-600 border-indigo-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  TikTok Rewards
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('youtube_shorts')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'youtube_shorts'
                      ? 'bg-red-600 border-red-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  YouTube Shorts
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('facebook_reels')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'facebook_reels'
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  FB / IG Reels
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Content Niche (Impacts Advertiser CPM)
              </label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value as NicheKey)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
              >
                {Object.entries(NICHE_MULTIPLIER).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Total Monthly Views
                </label>
                <span className="text-sm font-mono font-extrabold text-indigo-400">
                  {monthlyViews.toLocaleString()} views
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={monthlyViews}
                onChange={(e) => setMonthlyViews(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>50K</span>
                <span>2.5M</span>
                <span>5M</span>
                <span>10M+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  4. Qualified Views Rate (Watched 5s+ / Eligible)
                </label>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  {qualifiedRate}% ({qualifiedViews.toLocaleString()} paid views)
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="95"
                step="5"
                value={qualifiedRate}
                onChange={(e) => setQualifiedRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  5. Your Monthly Income Target ($)
                </label>
                <span className="text-xs font-mono font-bold text-amber-400">
                  ${incomeGoal.toLocaleString()}/mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={incomeGoal}
                onChange={(e) => setIncomeGoal(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Payout Results Card (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-emerald-500/40 shadow-xl space-y-5">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Estimated Monthly Creator Payout
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono">
                ${Number(estimatedMonthlyEarnings).toLocaleString()}
              </div>
              <span className="text-xs text-slate-400 mt-1.5 block">
                ~${estimatedYearlyEarnings.toLocaleString()}/yr at <strong className="text-white">${effectiveRpm} RPM</strong>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-1 text-xs">
              <span className="text-amber-400 font-bold uppercase text-[10px] tracking-wider block">
                Reverse Goal Target (${incomeGoal.toLocaleString()}/mo)
              </span>
              <p className="text-slate-200 leading-relaxed">
                You need approximately <strong className="text-white">{requiredTotalViews.toLocaleString()} total monthly views</strong> at your current RPM to clear ${incomeGoal.toLocaleString()}/month.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 space-y-2">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                  Scale Output 5x Faster
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Hit multi-million monthly views by turning 1 long video into 10+ captioned 60-second clips automatically.
                </p>
                <a
                  href={OPUSCLIP_LINK}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block text-center py-2.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
                >
                  Generate 60s Clips in OpusClip →
                </a>
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 space-y-2">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">
                  Protect Your Ad Revenue
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Never lose Creator Rewards payouts to copyright claims—use cleared commercial tracks from Epidemic Sound.
                </p>
                <a
                  href={EPIDEMIC_LINK}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block text-center py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
                >
                  Try Epidemic Sound Free (30 Days) →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Amazon Associates 60s Retention Gear Section */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 mb-12 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950 border border-indigo-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              60+ Second Retention Hardware
            </span>
            <span className="text-xs text-slate-400">Amazon Creator Picks</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Boost Your Qualified View Rate with Studio Audio &amp; Lighting
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            TikTok Creator Rewards only pays on <strong>qualified views (5+ seconds watched on 60s+ videos)</strong>. Crisp vocal audio and clean key lighting are the fastest upgrades to stop early scroll-offs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">1. Wireless Clip-On Lavalier Mics (USB-C / Lightning)</span>
                <p className="text-slate-400 mb-3">Eliminate room echo and background noise so talking-head hooks hold attention past the 5-second mark.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=wireless+lavalier+microphone+for+iphone+usb+c&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Wireless Mics on Amazon →
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">2. Bi-Color LED Key Light &amp; Desk Stand Kits</span>
                <p className="text-slate-400 mb-3">Batch-film a week of high-RPM 60-second videos in one sitting with consistent studio lighting.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=bi+color+led+video+light+desk+mount+kit&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Studio Lights on Amazon →
              </a>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 text-center pt-1">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </section>

        {/* SEO FAQ & Benchmark Table */}
        <section className="space-y-6 mb-10">
          <h2 className="text-2xl font-bold text-white">
            2026 Short-Form Video RPM Benchmarks by Platform
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong>RPM (Revenue Per Mille)</strong> measures how much you earn per 1,000 qualified views after platform revenue splits. Unlike 15-second clips, videos over 60 seconds with high 5-second retention earn substantially higher payouts:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-300 uppercase">
                <tr>
                  <th className="p-4">Platform Program</th>
                  <th className="p-4">Average 2026 RPM</th>
                  <th className="p-4">Minimum Length</th>
                  <th className="p-4">Views Needed for $1,000</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white">TikTok Creator Rewards</td>
                  <td className="p-4 text-emerald-400 font-mono">$0.40 – $1.20+</td>
                  <td className="p-4">60+ Seconds</td>
                  <td className="p-4">~1.3M Qualified Views</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">YouTube Shorts Partner</td>
                  <td className="p-4 text-indigo-400 font-mono">$0.06 – $0.25</td>
                  <td className="p-4">Up to 3 Minutes</td>
                  <td className="p-4">~6.6M Views</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Facebook Reels Bonus</td>
                  <td className="p-4 text-blue-400 font-mono">$0.15 – $0.60</td>
                  <td className="p-4">3–90 Seconds</td>
                  <td className="p-4">~2.8M Views</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs space-y-1">
              <strong className="text-white text-sm block">Want to Earn Without Waiting for 10K Followers?</strong>
              <span className="text-slate-400">Read our breakdown on getting paid per view for clipping creator podcasts, or research winning products with <a href={TOOLSUITE_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-400 underline">ToolSuite VIP</a>.</span>
            </div>
            <Link
              href="/blog/get-paid-clipping-videos-on-whop"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shrink-0 transition"
            >
              Read Whop Clipping Guide →
            </Link>
          </div>
        </section>

        <WorkflowBar />
      </main>
    </div>
  );
}
