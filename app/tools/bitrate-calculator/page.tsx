'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BitrateCalculatorPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const [duration, setDuration] = useState<number>(30); // Seconds
  const [resolution, setResolution] = useState<'1080p' | '4k'>('1080p');
  const [frameRate, setFrameRate] = useState<'30fps' | '60fps'>('60fps');
  const [platform, setPlatform] = useState<'tiktok' | 'reels' | 'shorts'>('tiktok');

  // Bitrate Calculation Formula (Mbps)
  const getRecommendedBitrate = (): number => {
    if (resolution === '1080p') {
      return frameRate === '60fps' ? 12 : 8;
    } else {
      return frameRate === '60fps' ? 45 : 30;
    }
  };

  const targetBitrate = getRecommendedBitrate();
  // File size in Megabytes (MB) = (Bitrate in Mbps * duration in seconds) / 8 + Audio Overhead
  const estimatedSizeMB = Math.round(((targetBitrate * duration) / 8) * 1.05);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      {/* FTC Disclosure */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links.</span>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
            <Link href="/tools/studio-gear-configurator" className="hover:text-indigo-400 transition">Gear Picker</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10 text-left">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Bitrate &amp; File Size Calculator</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Video Optimization Engine
          </span>
          <span className="text-slate-500">• Prevents Blur &amp; Compression Drops</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Social Video Bitrate &amp; File Size Calculator
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl">
          Find the ideal export bitrate (Mbps) and estimated file size (MB) for your video edits before rendering in Premiere, CapCut, or DaVinci Resolve.
        </p>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Controls Panel (Left Side - 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            
            {/* Step 1: Target Platform */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Publishing Platform
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlatform('tiktok')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'tiktok'
                      ? 'bg-indigo-600 border-indigo-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  TikTok 🎵
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('reels')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'reels'
                      ? 'bg-purple-600 border-purple-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Reels 📸
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('shorts')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                    platform === 'shorts'
                      ? 'bg-red-600 border-red-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Shorts ▶️
                </button>
              </div>
            </div>

            {/* Step 2: Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Video Duration (Seconds)
                </label>
                <span className="text-xs font-mono text-indigo-400 font-bold">{duration} Seconds</span>
              </div>
              <input
                type="range"
                min="5"
                max="180"
                step="5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Step 3: Resolution & Frame Rate Selectors */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Resolution
                </label>
                <select
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value as '1080p' | '4k')}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-indigo-500"
                >
                  <option value="1080p">1080p (1080x1920)</option>
                  <option value="4k">4K (2160x3840)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Frame Rate
                </label>
                <select
                  value={frameRate}
                  onChange={(e) => setFrameRate(e.target.value as '30fps' | '60fps')}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-indigo-500"
                >
                  <option value="60fps">60 FPS (Recommended)</option>
                  <option value="30fps">30 FPS</option>
                </select>
              </div>
            </div>

          </div>

          {/* Results Summary Box (Right Side - 5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-indigo-500/40 shadow-xl space-y-6">
            <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Calculated Render Specs
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Target Export Bitrate:</span>
                <span className="text-lg font-extrabold text-emerald-400 font-mono">{targetBitrate} Mbps</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Estimated File Size:</span>
                <span className="text-lg font-extrabold text-indigo-400 font-mono">~{estimatedSizeMB} MB</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 space-y-2">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                Software Recommendation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                OpusClip automatically encodes master-quality 1080p clips at optimized platform bitrates without manual render export tweaking.
              </p>
              <a
                href={OPUSCLIP_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-md mt-2"
              >
                Auto-Export with OpusClip →
              </a>
            </div>

          </div>

        </div>

        {/* Amazon Storage & Vault Hardware Recommendations */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Creator Backup Vaults
            </span>
            <span className="text-xs text-slate-400">Amazon Hardware Recommendations</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            High-Bitrate Video Vault Storage Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            High-bitrate 60fps vertical footage fills phone and laptop storage quickly. Store raw master footage on high-speed rugged SSDs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">1. Portable 1TB / 2TB Rugged USB-C SSDs</span>
                <p className="text-slate-400 mb-3">1050MB/s read speeds for direct editing off the drive in CapCut and Premiere Pro.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=portable+ssd+1tb+2tb+rugged+usb+c&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block text-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Portable SSDs on Amazon →
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">2. Desktop Master Vault Hard Drives (8TB - 12TB)</span>
                <p className="text-slate-400 mb-3">Archive years of high-resolution creator footage for long-term channel backup protection.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=external+desktop+hard+drive+8tb+12tb&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block text-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Desktop Drives on Amazon →
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
