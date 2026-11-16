'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HookScorerPage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const [hookText, setHookText] = useState<string>(
    "Stop wasting 3 hours editing vertical videos manually when this free workflow cuts it to 4 minutes."
  );
  const [niche, setNiche] = useState<string>('Creator Growth');

  const analyzeHook = (text: string) => {
    const clean = text.trim();
    if (!clean) {
      return { score: 0, spokenSeconds: 0, feedback: [], rewrites: [] };
    }

    const words = clean.split(/\s+/);
    const wordCount = words.length;
    const spokenSeconds = Number(((wordCount / 150) * 60).toFixed(1));
    const lower = clean.toLowerCase();

    let score = 62;
    const feedback: { type: 'good' | 'warn'; msg: string }[] = [];

    // 1. Pacing Check (Ideal hook is 8 to 18 words / under 4.5 seconds)
    if (wordCount >= 7 && wordCount <= 18) {
      score += 14;
      feedback.push({ type: 'good', msg: `Tight pacing (${wordCount} words / ~${spokenSeconds}s spoken). Fits inside the critical 3-second scroll window.` });
    } else if (wordCount > 18) {
      score -= 12;
      feedback.push({ type: 'warn', msg: `Too wordy (${wordCount} words / ~${spokenSeconds}s). Trim to under 16 words so viewers don't swipe before the payoff.` });
    } else {
      score -= 5;
      feedback.push({ type: 'warn', msg: `Very short (${wordCount} words). Pair this with bold on-screen text to establish clear stakes.` });
    }

    // 2. Weak Intro Detector
    const weakOpeners = ['hey guys', 'welcome back', 'today i want to', 'in this video', 'so basically'];
    if (weakOpeners.some((phrase) => lower.startsWith(phrase))) {
      score -= 22;
      feedback.push({ type: 'warn', msg: 'Detected slow throat-clearing intro ("Hey guys / In this video"). Cut the greeting and start directly with the tension or outcome.' });
    } else {
      score += 8;
      feedback.push({ type: 'good', msg: 'Zero filler greeting detected—jumps straight into the core premise.' });
    }

    // 3. Curiosity / Power Trigger Check
    const powerWords = ['stop', 'mistake', 'secret', 'never', 'why', 'how', 'free', 'steal', 'exact', 'without', 'truth', 'nobody'];
    const hits = powerWords.filter((pw) => lower.includes(pw));
    if (hits.length > 0) {
      score += Math.min(16, hits.length * 6);
      feedback.push({ type: 'good', msg: `Strong psychological triggers detected (${hits.join(', ')}).` });
    } else {
      feedback.push({ type: 'warn', msg: 'Missing a strong curiosity or contrast trigger (e.g., "Stop", "Why", "Without", "Mistake").' });
    }

    // 4. Specificity (Numbers / Metrics)
    if (/\d+/.test(clean)) {
      score += 8;
      feedback.push({ type: 'good', msg: 'Includes specific numbers/metrics, which increases perceived credibility.' });
    }

    const finalScore = Math.max(15, Math.min(99, score));
    const topic = niche.trim() || 'your niche';

    const rewrites = [
      `Stop making this #1 ${topic} mistake if you want results without wasting hours.`,
      `I tested 3 ${topic} workflows so you don't have to—here is the only one that actually works:`,
      `If you're still doing ${topic} the old way, watch the next 15 seconds closely.`,
    ];

    return { score: finalScore, spokenSeconds, feedback, rewrites };
  };

  const result = analyzeHook(hookText);

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
            <Link href="/tools/safe-zone-canvas" className="hover:text-indigo-400 transition">Safe-Zone</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10 text-left w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Viral Hook Scorer</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            3-Second Retention Engine
          </span>
          <span className="text-slate-500">• TikTok, Reels &amp; Shorts</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Viral Video Hook Scorer &amp; Retention Analyzer
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
          Test your opening sentence before hitting record. Evaluate scroll-stop power, spoken delivery time, and generate high-retention hook variations.
        </p>

        {/* Input Card */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Your Opening Hook (First 1–2 Sentences)
              </label>
              <textarea
                rows={3}
                value={hookText}
                onChange={(e) => setHookText(e.target.value)}
                placeholder="Type your opening spoken or on-screen text hook..."
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Video Topic / Niche
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., Fitness, AI Tools, Real Estate"
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <Link
                href="/tools/creator-teleprompter"
                className="mt-3 block text-center py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold text-xs transition"
              >
                Load into Teleprompter →
              </Link>
            </div>
          </div>
        </div>

        {/* Diagnostic Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-indigo-500/40 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Retention Score
            </span>
            <div
              className={`text-6xl font-extrabold font-mono mb-2 ${
                result.score >= 80
                  ? 'text-emerald-400'
                  : result.score >= 60
                  ? 'text-amber-400'
                  : 'text-red-400'
              }`}
            >
              {result.score}<span className="text-2xl text-slate-500">/100</span>
            </div>
            <span className="text-xs text-slate-300">
              Spoken Delivery: <strong>~{result.spokenSeconds}s</strong>
            </span>
          </div>

          <div className="lg:col-span-8 bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Diagnostic Breakdown
            </h2>
            {result.feedback.length === 0 ? (
              <p className="text-xs text-slate-500">Enter a hook above to view retention diagnostics.</p>
            ) : (
              <ul className="space-y-2.5 text-xs">
                {result.feedback.map((item, idx) => (
                  <li
                    key={idx}
                    className={`p-3 rounded-xl border ${
                      item.type === 'good'
                        ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200'
                        : 'bg-amber-950/30 border-amber-800/50 text-amber-200'
                    }`}
                  >
                    {item.type === 'good' ? '✓ ' : '⚠ '}
                    {item.msg}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* High-Retention Rewrites */}
        {result.rewrites.length > 0 && (
          <section className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-10 space-y-3">
            <h2 className="text-sm font-bold text-white">High-Retention Hook Variations to A/B Test</h2>
            <div className="space-y-2.5">
              {result.rewrites.map((rw, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-200"
                >
                  <span>&ldquo;{rw}&rdquo;</span>
                  <button
                    type="button"
                    onClick={() => setHookText(rw)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold shrink-0 transition"
                  >
                    Test This
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dual SaaS Monetization Bridge */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                Automated Hook Detection
              </span>
              <h3 className="text-base font-bold text-white mt-1 mb-1">
                Find Viral Hooks Automatically with OpusClip
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                OpusClip&apos;s AI Virality Score analyzes long videos, extracts the strongest hooks, and ranks each clip by predicted retention.
              </p>
            </div>
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
            >
              Score Your Videos with OpusClip →
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                All-In-One Creator Stack
              </span>
              <h3 className="text-base font-bold text-white mt-1 mb-1">
                Research Viral Hooks with ChatGPT Plus &amp; Kalodata
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlock AI scriptwriting, TikTok Shop ad spy data, and pro design tools inside one discounted creator dashboard.
              </p>
            </div>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
            >
              Explore ToolSuite VIP Access →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
