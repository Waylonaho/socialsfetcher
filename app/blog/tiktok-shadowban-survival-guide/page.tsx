'use client';

import { useState, FormEvent } from 'react';

export default function TikTokShadowbanPage() {
  // Your exact CPAGrip Locker Link
  const CPAGRIP_LOCKER_LINK = "https://singingfiles.com/1908394";
  
  // Your Sheet Best connection URL
  const SHEET_BEST_URL = "https://api.sheetbest.com/sheets/f5d9845b-4151-401b-8607-30322035d1c2";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save lead info to your Google Sheet via Sheet Best
      await fetch(SHEET_BEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          guide: "TikTok Shadowban Survival Guide",
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
        }),
      });
    } catch (error) {
      console.error('Error logging lead to Google Sheet:', error);
    } finally {
      setIsSubmitting(false);
      // 2. Redirect user directly to CPAGrip locker
      window.location.href = CPAGRIP_LOCKER_LINK;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <a href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg transition">
            Main Downloader
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="inline-block bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs px-3 py-1 rounded-full font-bold mb-4">
          🚨 Creator Emergency Protocol
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">
          TikTok Shadowban Reset Manual: How to Escape 0 Views & 200 View Jail (2026)
        </h1>
        <p className="text-slate-400 text-sm mb-8">Published in Algorithm Recovery • Free Download • 5 min read</p>

        {/* HERO EBOOK FORM & LOCKER BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-950/80 via-slate-900 to-indigo-950 border border-rose-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-rose-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
              Free Guide PDF
            </span>
            <span className="text-xs text-rose-300 font-medium">Instant Access</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-4">
            {/* Visual Graphic */}
            <div className="bg-gradient-to-tr from-rose-600 to-indigo-600 p-6 rounded-xl border border-rose-400/30 shadow-2xl text-center transform -rotate-1 hover:rotate-0 transition">
              <div className="text-3xl mb-2">🔓</div>
              <h4 className="font-extrabold text-white text-base sm:text-lg leading-tight">SHADOWBAN RESET</h4>
              <p className="text-[10px] text-rose-200 mt-2 uppercase tracking-widest font-bold">2026 Edition</p>
            </div>

            {/* Lead Form */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-lg font-bold text-white">Get Your For You Page Reach Back</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enter your details to unlock the step-by-step diagnostic test and 72-hour algorithm reset protocol.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white text-xs px-4 py-3 rounded-lg focus:outline-none focus:border-rose-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-white text-xs px-4 py-3 rounded-lg focus:outline-none focus:border-rose-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-500 hover:bg-rose-400 text-slate-950 font-black text-xs py-3.5 rounded-lg transition shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving & Redirecting...' : '🔓 Unlock & Download Free PDF Guide'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SEO Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            Getting capped at 0 views or getting trapped in the <strong>200 view jail</strong> is the most common algorithmic penalty facing short-form creators in 2026. Most creators make the mistake of deleting their account or mass-deleting videos—which actually triggers harsher spam flags.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">What's Inside the 2026 Shadowban Reset Guide:</h2>
          
          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Module 1: The 60-Second Diagnostic Test</span>
              <p className="text-sm font-semibold text-white mt-1">How to prove whether you are shadowbanned or just producing low-retention clips.</p>
              <p className="text-xs text-slate-400 mt-1">Check your FYP traffic percentage and run the isolated search test across secondary profiles.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Module 2: The 72-Hour Cooldown Sequence</span>
              <p className="text-sm font-semibold text-white mt-1">The exact steps to clear cache, remove unlisted guideline strikes, and pause activity.</p>
              <p className="text-xs text-slate-400 mt-1">Stopping automated bot patterns and resetting your device trust score.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Module 3: The FYP Warm-Up Posting Framework</span>
              <p className="text-sm font-semibold text-white mt-1">How to post native, unedited high-retention clips to force re-indexing.</p>
              <p className="text-xs text-slate-400 mt-1">Re-establishing account authority with native audio and zero copyright claims.</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Why Accounts Get Suppressed (And How to Fix It)</h2>
          <p>
            In 2026, TikTok uses automated AI safety scanners that cross-reference audio tracks, on-screen text, metadata, and device fingerprints. Using watermarked videos from other platforms, over-using banned hashtags, or rapid posting from VPN addresses often causes soft reach caps.
          </p>
          <p>
            This blueprint lays out the exact protocol top theme page operators use to restore reach without starting over.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 SocialsFetcher.com — Free Media Utilities & Creator Resources.
      </footer>
    </div>
  );
}
