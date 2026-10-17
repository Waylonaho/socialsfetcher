'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TikTokDownloaderPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; downloadUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Verified Affiliate Links
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=tiktok_result_card";
  const WRITING_JOBS_ERROR_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=tiktok_error_card";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url.trim())}`);
      if (!response.ok) {
        throw new Error('Video stream is private, deleted, or the API timed out.');
      }
      const data = await response.json();
      if (!data || !data.downloadUrl) {
        throw new Error('Could not find an unwatermarked stream for this link.');
      }
      setResult({
        title: data.title || 'TikTok Video (No Watermark)',
        downloadUrl: data.downloadUrl,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to retrieve media. Please verify the URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string) => {
    // Direct file trigger without unrequested redirects
    window.location.href = downloadUrl;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Main Downloader</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-xs text-slate-400 mb-2 flex items-center justify-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-200">TikTok Downloader</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Download TikTok Videos <span className="text-indigo-500">Without Watermarks</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Save clean, full HD TikTok videos directly to your device without logos or username tags.
        </p>

        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste TikTok link here (e.g. https://www.tiktok.com/@user/video/...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white transition disabled:opacity-50 shrink-0 text-sm shadow-lg"
          >
            {loading ? 'Processing...' : 'Fetch TikTok'}
          </button>
        </form>

        {/* 1. Verified Download Result + Contextual ClickBank Offer Card */}
        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-2">✓ Verified Media Stream</span>
            <h3 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h3>
            
            <button
              onClick={() => handleDownload(result.downloadUrl)}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center shadow-lg mb-6"
            >
              Download Clean MP4 Video
            </button>

            {/* ClickBank Offer Native Card */}
            <div className="pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Remote Creator Opportunity
                </span>
                <span className="text-[10px] text-slate-500">Sponsored</span>
              </div>
              <h4 className="font-bold text-white text-sm">
                Get Paid $25–$50/Hr to Manage Social Accounts &amp; Clip Videos
              </h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Top brands hire remote workers to review social posts, organize video content, and manage TikTok accounts from home.
              </p>
              <a
                href={WRITING_JOBS_CARD_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
              >
                Take 1-Minute Qualification Quiz →
              </a>
              <span className="text-[10px] text-slate-500 block text-center mt-2">
                Advertisement: We may earn a commission if you qualify.
              </span>
            </div>
          </div>
        )}

        {/* 2. Honest Error Box + Disclosed Sponsor Card */}
        {error && (
          <div className="max-w-xl mx-auto my-6 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-900 border border-red-500/40 shadow-xl">
              <h3 className="font-bold text-red-400 text-sm mb-1">⚠️ Video Could Not Be Fetched</h3>
              <p className="text-xs text-slate-300 mb-4">{error}</p>
              <button
                onClick={() => { setError(null); setUrl(''); }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
              >
                Try Another Link
              </button>
            </div>

            {/* ClickBank Monetization on Error State */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Sponsored Partner
                </span>
                <span className="text-[10px] text-slate-400">Remote Media Roles</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Want to earn income managing and scheduling TikTok videos?
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Companies hire remote assistants to review, organize, and moderate short video clips online.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800">
                <a
                  href={WRITING_JOBS_ERROR_LINK}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block text-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
                >
                  Check Open Positions →
                </a>
                <span className="text-[10px] text-slate-400">
                  Advertisement: We receive a commission if you qualify.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Helpful Guides Contextual Hub */}
        <section className="py-10 mt-12 bg-slate-900/40 border-t border-slate-800/80 rounded-2xl text-left px-6">
          <h2 className="text-lg font-bold mb-4 text-slate-200">Help &amp; Troubleshooting for TikTok Creators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <Link href="/blog/how-to-save-tiktok-video-before-posting" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Save Before Posting</h3>
              <p className="text-slate-400">Export clean unwatermarked masters directly from the TikTok editor.</p>
            </Link>
            <Link href="/blog/tiktok-video-saved-not-showing-in-gallery" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Saved Video Missing?</h3>
              <p className="text-slate-400">Fix Android scoped storage paths and iOS photo album indexing.</p>
            </Link>
            <Link href="/blog/how-to-fix-tiktok-audio-sync-lag-after-download" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Audio Sync Lag Fix</h3>
              <p className="text-slate-400">Fix variable frame rate audio drift in CapCut or Premiere Pro.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility. Download only content you own or have permission to use.</p>
      </footer>
    </div>
  );
}
