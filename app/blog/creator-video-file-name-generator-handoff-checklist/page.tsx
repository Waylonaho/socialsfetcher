'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FileNameGeneratorHandoffPage() {
  const [dateVal, setDateVal] = useState('2026-10-28');
  const [projectRaw, setProjectRaw] = useState('brand-hook-test');
  const [stage, setStage] = useState('MASTER');
  const [aspect, setAspect] = useState('9x16');
  const [audio, setAudio] = useState('VO-Only');
  const [rights, setRights] = useState('OWNED');
  const [version, setVersion] = useState('v01');
  const [copied, setCopied] = useState(false);

  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const cleanSlug = projectRaw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'video-clip';
  const generatedFileName = `${dateVal}_${cleanSlug}_${stage}_${aspect}_${audio}_${rights}_${version}.mp4`;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(generatedFileName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: We may earn a commission if you sign up for partner software links on this page, at no extra cost to you.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Video Downloader</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">All Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-indigo-400 transition">Blog &amp; Guides</Link>
          <span>/</span>
          <span className="text-slate-200">Creator Video File-Name Generator</span>
        </nav>

        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-emerald-950 border border-emerald-700/60 text-emerald-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Free Creator Utility • Operations
          </span>
          <span className="text-slate-500">• Interactive Tool • Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Creator Video File-Name Generator &amp; Client Handoff Checklist
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          When delivering vertical video packages to a client or managing your own multi-platform catalog across TikTok, Instagram Reels, and YouTube Shorts, ambiguous filenames like <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">Edit_Final_v2_NoMusic.mp4</code> cause costly publishing mistakes. Use this generator to build standardized, self-documenting filenames that record the date, aspect ratio, audio state, and usage rights right in the file title.
        </p>

        {/* Interactive React File-Name Builder */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-emerald-500/40 mb-10 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
            Interactive ISO Video File-Name Builder
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="fn-date" className="block text-xs font-bold text-slate-300 mb-1.5">
                Shoot or Publish Date (YYYY-MM-DD)
              </label>
              <input
                id="fn-date"
                type="date"
                value={dateVal}
                onChange={(e) => setDateVal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="fn-project" className="block text-xs font-bold text-slate-300 mb-1.5">
                Project / Hook Topic Slug
              </label>
              <input
                id="fn-project"
                type="text"
                value={projectRaw}
                onChange={(e) => setProjectRaw(e.target.value)}
                placeholder="e.g. mic-comparison-hook1"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="fn-stage" className="block text-xs font-bold text-slate-300 mb-1.5">
                File Stage / Target Platform
              </label>
              <select
                id="fn-stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="RAW">RAW (Uncut Camera Roll File)</option>
                <option value="MASTER">MASTER (Clean Archive — No Watermark)</option>
                <option value="TIKTOK">TIKTOK (TikTok Safe-Zone Export)</option>
                <option value="REELS">REELS (Instagram Reels Export)</option>
                <option value="SHORTS">SHORTS (YouTube Shorts Export)</option>
                <option value="CLIENT-REV">CLIENT-REV (Client Review Proof)</option>
              </select>
            </div>

            <div>
              <label htmlFor="fn-aspect" className="block text-xs font-bold text-slate-300 mb-1.5">
                Aspect Ratio
              </label>
              <select
                id="fn-aspect"
                value={aspect}
                onChange={(e) => setAspect(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="9x16">9x16 (1080x1920 Vertical)</option>
                <option value="4x5">4x5 (1080x1350 Feed Portrait)</option>
                <option value="1x1">1x1 (1080x1080 Square)</option>
                <option value="16x9">16x9 (1920x1080 Horizontal)</option>
              </select>
            </div>

            <div>
              <label htmlFor="fn-audio" className="block text-xs font-bold text-slate-300 mb-1.5">
                Audio Stem State
              </label>
              <select
                id="fn-audio"
                value={audio}
                onChange={(e) => setAudio(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="VO-Only">VO-Only (Voiceover Only — Add Music In-App)</option>
                <option value="RoyaltyFreeMix">RoyaltyFreeMix (Cleared Music Pre-Mixed)</option>
                <option value="CleanNoCaptions">CleanNoCaptions (No Burned Subtitles)</option>
                <option value="BurnedCaptions">BurnedCaptions (Subtitles Burned In)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="fn-rights" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Rights Status
                </label>
                <select
                  id="fn-rights"
                  value={rights}
                  onChange={(e) => setRights(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                >
                  <option value="OWNED">OWNED</option>
                  <option value="UGC-ORGANIC">UGC-ORGANIC</option>
                  <option value="PAID-AD-OK">PAID-AD-OK</option>
                </select>
              </div>
              <div>
                <label htmlFor="fn-version" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Version
                </label>
                <select
                  id="fn-version"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-emerald-500 focus:outline-none"
                >
                  <option value="v01">v01</option>
                  <option value="v02">v02</option>
                  <option value="v03">v03</option>
                  <option value="FINAL">FINAL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="overflow-x-auto">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Generated Standardized Filename:</span>
              <code className="text-xs sm:text-sm font-mono font-bold text-emerald-400 break-all">
                {generatedFileName}
              </code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition"
            >
              {copied ? '✓ Copied!' : 'Copy Filename'}
            </button>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Version Control: Managing 1 Source Clip Across 5 Exports
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            When a single talking-head recording is adapted for multiple platforms or ad variations, never overwrite the master file. Keep all five derivatives in your project export folder with explicit tags:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Export Variant</th>
                  <th className="py-3 px-4 text-left">Filename Suffix</th>
                  <th className="py-3 px-4 text-left">Why You Need It</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">1. Clean Textless Master</td>
                  <td className="py-3 px-4 font-mono text-xs text-emerald-400">_MASTER_9x16_CleanNoCaptions</td>
                  <td className="py-3 px-4">Lets you re-caption or translate the video months later</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">2. Captioned Voice-Only</td>
                  <td className="py-3 px-4 font-mono text-xs text-emerald-400">_MASTER_9x16_VO-Only</td>
                  <td className="py-3 px-4">Ready for native trending audio inside TikTok or Reels</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">3. Paid Ad Cleared Mix</td>
                  <td className="py-3 px-4 font-mono text-xs text-amber-400">_REELS_9x16_RoyaltyFreeMix_PAID-AD-OK</td>
                  <td className="py-3 px-4">Contains commercial-cleared music safe for Meta/TikTok Ads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Client &amp; Agency Video Handoff Checklist
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Before sending a shared folder link to a brand client or social media manager, verify these five items to prevent muted uploads or licensing disputes:
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">☐ 1. Both Captioned and Textless Masters Included</strong>
              <p className="text-slate-400">Always supply one version with burned-in kinetic subtitles and one clean version without text overlays in case the client&apos;s ad team needs to adjust safe zones.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">☐ 2. Audio License Scope Documented (Organic vs. Paid Ads)</strong>
              <p className="text-slate-400">State clearly whether background music comes from a commercial-cleared library or if the client must attach licensed audio inside the platform app (see our <Link href="/blog/why-saved-instagram-reel-has-no-music-fix" className="text-indigo-400 underline">Instagram music licensing guide</Link>).</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">☐ 3. Export Specs Verified (1080x1920, Rec.709, H.264)</strong>
              <p className="text-slate-400">Confirm color space is converted from iPhone HDR to standard Rec.709 SDR so the client&apos;s upload doesn&apos;t look washed out or over-exposed.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">☐ 4. Written Usage Scope &amp; Duration Recorded</strong>
              <p className="text-slate-400">Note the permitted platforms, organic vs. paid whitelisting rights, and license expiration date (note: this checklist is for operational organization, not legal advice; consult qualified counsel for commercial contracts).</p>
            </div>
          </div>
        </section>

        {/* Disclosed Monetization Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
              Agency Clipping Workflow
            </span>
            <span className="text-xs text-slate-400">Sponsored</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Deliver 10x More Client Clips with OpusClip
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Managing client podcasts or livestreams? <strong>OpusClip</strong> automatically extracts high-virality vertical clips, applies brand-consistent caption presets, and exports organized 1080p MP4 files ready for client handoff.
          </p>
          <p className="text-[11px] text-slate-400 mb-5">
            Commission Disclosure: We may earn a commission if you sign up through the links below, at no extra cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Try OpusClip Free →
            </a>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 font-bold text-xs sm:text-sm transition"
            >
              Explore ToolSuite Pro Stack ⚡
            </a>
          </div>
        </div>

        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Related Creator Vault &amp; Operations Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/how-to-organize-backup-social-videos-creator-vault" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Creator Media Vault Folder Structure</h3>
              <p className="text-slate-400">Copyable directory tree and monthly backup routine for short-form creators.</p>
            </Link>
            <Link href="/blog/social-video-bitrate-file-size-calculator" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Social Video Bitrate &amp; File-Size Calculator</h3>
              <p className="text-slate-400">Estimate MP4 export sizes and weekly storage needs across 1080p and 4K clips.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utilities &amp; Guides.</p>
      </footer>
    </div>
  );
}
