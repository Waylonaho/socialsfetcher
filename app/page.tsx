'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    title: string;
    downloadUrl: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Live Partner & Affiliate Links
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=homepage_result_card";
  const WRITING_JOBS_ERROR_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=homepage_error_recommendation";
  const CPAGRIP_LOCKER_LINK = "https://singingfiles.com/1908352";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url.trim())}`);
      
      if (!response.ok) {
        throw new Error('Downloader service timed out or video stream is private/unsupported.');
      }

      const data = await response.json();
      
      if (!data || !data.downloadUrl) {
        throw new Error('Could not extract a verified video stream from this link.');
      }

      setResult({
        title: data.title || 'Social Media Video',
        downloadUrl: data.downloadUrl
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to retrieve media. Please verify the URL and try again.';
      setError(msg);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string) => {
    window.location.href = downloadUrl;
  };

  const triggerCPAGripLocker = () => {
    window.open(CPAGRIP_LOCKER_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. Compliant Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border-b border-purple-500/30 py-2.5 px-4 text-center text-xs text-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-purple-600 text-white font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
            Creator Workflow
          </span>
          <span>Turn long YouTube videos and livestreams into viral Shorts with 1 click.</span>
          <a 
            href={OPUSCLIP_LINK} 
            target="_blank" 
            rel="noopener noreferrer sponsored" 
            className="font-bold text-purple-400 hover:underline underline-offset-2 ml-1"
          >
            Try OpusClip Free →
          </a>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok</Link>
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Instagram</Link>
            <Link href="/youtube/shorts/saver" className="hover:text-indigo-400 transition">YouTube</Link>
            <Link href="/twitter/video/mp4" className="hover:text-indigo-400 transition">X / Twitter</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition text-slate-300">
              Blog & Guides
            </Link>
            <a 
              href={OPUSCLIP_LINK} 
              target="_blank" 
              rel="noopener noreferrer sponsored" 
              className="text-purple-400 font-bold hover:text-purple-300 transition flex items-center gap-1"
            >
              ✨ OpusClip AI
            </a>
            <Link href="/download/hd-4k" className="text-amber-400 font-bold hover:text-amber-300 transition flex items-center gap-1">
              ⚡ 4K PRO
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero & Downloader Tool */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Download Social Media Videos <span className="text-indigo-500">Without Watermarks</span>
        </h1>
        <p className="text-slate-400 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          Paste your TikTok, Instagram Reel, YouTube Short, or X video link below to extract clean HD media instantly.
        </p>

        {/* Authorized Use & Terms Notice */}
        <div className="max-w-xl mx-auto mb-8 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
          🛡️ Please only download or archive content you own or have explicit creator permission to repurpose.
        </div>

        {/* Input Form */}
        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste video URL here (e.g. https://www.tiktok.com/@user/video/...)"
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
            {loading ? 'Processing...' : 'Fetch Media'}
          </button>
        </form>

        {/* Loading Indicator */}
        {loading && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin h-5 w-5 border-2 border-indigo-500 border-t-transparent rounded-full"></div>
              <p className="font-semibold text-sm text-indigo-400">Verifying video source & extracting MP4 stream...</p>
            </div>
            
            <a 
              href={OPUSCLIP_LINK} 
              target="_blank" 
              rel="noopener noreferrer sponsored" 
              className="block p-4 rounded-xl bg-slate-800/90 border border-purple-500/40 hover:border-purple-400 transition group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="bg-purple-600 text-[10px] font-bold text-white px-2 py-0.5 rounded uppercase tracking-wider">
                  Featured AI Repurposer
                </span>
                <span className="text-xs text-purple-400 group-hover:underline">Try OpusClip →</span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Turn long YouTube videos into 10 viral Shorts with 1 click
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                OpusClip automatically extracts high-virality clips, adds animated captions, and generates AI B-roll.
              </p>
            </a>
          </div>
        )}

        {/* 1. Verified Download Result */}
        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-2">
              <span>✓ Media Stream Verified</span>
            </div>
            <h3 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h3>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleDownload(result.downloadUrl)}
                className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center shadow-lg"
              >
                Download MP4 Video (Free HD)
              </button>

              <button
                onClick={triggerCPAGripLocker}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold border border-amber-500/30 transition text-sm text-center flex items-center justify-center gap-2"
              >
                🔒 Unlock 4K Ultra-HD & Bulk Batch Download
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Remote Work Opportunity
                </span>
                <span className="text-[10px] text-slate-500">Sponsored</span>
              </div>
              <h4 className="font-bold text-white text-sm">
                Get Paid $25–$50/Hr to Manage Social Accounts & Edit Clips
              </h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Top companies are hiring remote workers to write social posts, organize video content, and manage accounts online.
              </p>
              <a
                href={WRITING_JOBS_CARD_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
              >
                Take 1-Minute Qualification Quiz →
              </a>
            </div>
          </div>
        )}

        {/* 2. Honest Error Box + Disclosed Sponsor Unit */}
        {error && (
          <div className="max-w-xl mx-auto my-6 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-900 border border-red-500/40 shadow-xl">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-1">
                <span>⚠️ Unable to Download Video</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{error}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleFetch}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
                >
                  🔄 Retry Request
                </button>
                <button
                  onClick={() => { setError(null); setUrl(''); }}
                  className="text-xs text-slate-400 hover:text-slate-200 transition"
                >
                  Clear URL
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Sponsored Partner
                </span>
                <span className="text-[10px] text-slate-400">Remote Media Roles</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Looking to earn income managing and organizing social media videos?
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Companies hire remote assistants to review, schedule, and moderate video clips across TikTok and Instagram.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800">
                <a
                  href={WRITING_JOBS_ERROR_LINK}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block text-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
                >
                  Check Remote Job Openings →
                </a>
                <span className="text-[10px] text-slate-400">
                  Advertisement: We receive a commission if you qualify.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 3. OpusClip Promo Showcase Banner */}
        <section className="my-10 max-w-2xl mx-auto">
          <a
            href={OPUSCLIP_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 border border-purple-500/40 hover:border-purple-400 text-left transition shadow-2xl group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                AI Repurposing Engine
              </span>
              <span className="text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                Try OpusClip Free ⚡
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Turn Any Long Video into Viral Shorts, Reels & TikToks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              OpusClip uses AI to curate viral moments from long footage, automatically adding dynamic animated captions, AI B-roll, and auto-framing for 9:16 layout.
            </p>
            <div className="inline-block text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition">
              Repurpose Videos with AI Free →
            </div>
          </a>
        </section>

        {/* Internal Linking Hub */}
        <section className="py-12 bg-slate-900/40 border-t border-slate-800/80 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-center text-slate-200">Supported Media Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4">
            <Link href="/tiktok/download/no-watermark" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition text-left">
              <div className="text-xl mb-1">🎵</div>
              <h3 className="font-bold text-sm text-white">TikTok Downloader</h3>
              <p className="text-xs text-slate-400 mt-1">Clean MP4 downloads without watermarks.</p>
            </Link>
            <Link href="/instagram/reels/downloader" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition text-left">
              <div className="text-xl mb-1">📸</div>
              <h3 className="font-bold text-sm text-white">Instagram Reels Saver</h3>
              <p className="text-xs text-slate-400 mt-1">Download original resolution Reels & Stories.</p>
            </Link>
            <Link href="/youtube/shorts/saver" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition text-left">
              <div className="text-xl mb-1">▶️</div>
              <h3 className="font-bold text-sm text-white">YouTube Shorts Saver</h3>
              <p className="text-xs text-slate-400 mt-1">Convert Shorts to 1080p MP4 or audio.</p>
            </Link>
            <Link href="/twitter/video/mp4" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition text-left">
              <div className="text-xl mb-1">🐦</div>
              <h3 className="font-bold text-sm text-white">X / Twitter Saver</h3>
              <p className="text-xs text-slate-400 mt-1">Save embedded video files from posts.</p>
            </Link>
            <Link href="/download/hd-4k" className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 hover:border-amber-400 transition text-left bg-amber-500/5">
              <div className="text-xl mb-1">⚡</div>
              <h3 className="font-bold text-sm text-amber-400">4K PRO Downloader</h3>
              <p className="text-xs text-slate-400 mt-1">Unlock high-bitrate 4K & batch downloads.</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility. Please only download content you own or have permission to use.</p>
      </footer>
    </div>
  );
}
