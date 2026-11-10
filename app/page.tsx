'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus('loading');
    setTimeout(() => {
      // Simulate conversion bridge result
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      {/* Mandatory FTC / Partner Disclosure */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links on this page.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok Saver</Link>
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Reels Downloader</Link>
            <Link href="/tools/studio-gear-configurator" className="hover:text-indigo-400 transition">Gear Picker</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Free Creator Media Utility • 2026 Engine
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Extract Clean 1080p Video Streams <br className="hidden sm:inline" />
          <span className="text-indigo-400">Without Watermarks</span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Paste any public TikTok, Instagram Reel, YouTube Short, or X clip URL below to extract raw video containers or auto-repurpose footage for cross-posting.
        </p>

        {/* Downloader Form Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl mb-10 max-w-2xl mx-auto">
          <form onSubmit={handleFetch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video URL (TikTok, Reels, Shorts, X)..."
                required
                className="flex-grow px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white text-sm transition shadow-lg disabled:opacity-50 shrink-0"
              >
                {status === 'loading' ? 'Analyzing...' : 'Fetch Media'}
              </button>
            </div>
          </form>

          {/* Dual-Funnel Conversion Result Box */}
          {status === 'success' && (
            <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-emerald-500/40 text-left space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Stream Extract Ready
                </span>
                <span className="text-[11px] text-slate-500">1080p MP4 Format</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => alert("Downloading raw MP4 master...")}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700 text-center"
                >
                  ⬇️ Download Raw MP4 File
                </button>

                <a
                  href={OPUSCLIP_LINK}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition text-center shadow-md flex items-center justify-center gap-1"
                >
                  ✨ Auto-Crop &amp; Caption in OpusClip →
                </a>
              </div>

              <p className="text-[10px] text-slate-500 text-center pt-1">
                Sponsored Partner: Use OpusClip to automatically generate 10+ vertical clips with animated captions from long footage.
              </p>
            </div>
          )}
        </div>

        {/* Core Media Utilities Hub */}
        <section className="mt-12 text-left space-y-4">
          <h2 className="text-lg font-bold text-white text-center sm:text-left">Popular Programmatic Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <Link href="/tiktok/download/no-watermark" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">TikTok Saver (No Watermark)</h3>
              <p className="text-slate-400">Extract uncompressed 1080p vertical MP4 streams.</p>
            </Link>
            <Link href="/instagram/reels/downloader" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Instagram Reels Downloader</h3>
              <p className="text-slate-400">Save clean Reels without audio desync or blur.</p>
            </Link>
            <Link href="/youtube/shorts/saver" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">YouTube Shorts Saver</h3>
              <p className="text-slate-400">Extract high-bitrate video &amp; audio stems for archiving.</p>
            </Link>
          </div>
        </section>

        {/* Editorial Troubleshooting Cluster */}
        <section className="mt-12 text-left space-y-4">
          <h2 className="text-lg font-bold text-white text-center sm:text-left">Creator Operations &amp; Troubleshooting Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Why Cross-Posted Video Looks Blurry</h3>
              <p className="text-slate-400">Fix resolution drops, bitrates, and color space settings across platforms.</p>
            </Link>
            <Link href="/tools/studio-gear-configurator" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Interactive Studio Gear Configurator</h3>
              <p className="text-slate-400">Build a custom lighting, mic, and camera rig for your budget.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
