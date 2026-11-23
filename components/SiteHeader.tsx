'use client';

import { useState } from 'react';
import Link from 'next/link';

const QUICK_ITEMS = [
  { title: 'Video Downloader (No Watermark)', href: '/', tag: 'Tool' },
  { title: '2026 Video Specs & Safe-Zone Cheat Sheet', href: '/specs', tag: 'Reference' },
  { title: '2026 Short-Form RPM & Payout Calculator', href: '/tools/rpm-calculator', tag: 'Tool' },
  { title: 'Copyright & Demonetization Risk Checker', href: '/tools/copyright-checklist', tag: 'Tool' },
  { title: 'Creator Teleprompter & Script Timer', href: '/tools/creator-teleprompter', tag: 'Tool' },
  { title: 'Viral Video Hook Scorer', href: '/tools/hook-scorer', tag: 'Tool' },
  { title: '9:16 Visual Safe-Zone Overlay Canvas', href: '/tools/safe-zone-canvas', tag: 'Tool' },
  { title: 'Bitrate & Target File Size Calculator', href: '/tools/bitrate-calculator', tag: 'Tool' },
  { title: 'Studio Gear Configurator', href: '/tools/studio-gear-configurator', tag: 'Tool' },
  { title: 'TikTok No-Watermark Saver', href: '/tiktok/download/no-watermark', tag: 'Extractor' },
  { title: 'Instagram Reels Downloader', href: '/instagram/reels/downloader', tag: 'Extractor' },
  { title: 'YouTube Shorts Saver', href: '/youtube/shorts/saver', tag: 'Extractor' },
  { title: 'X / Twitter MP4 Downloader', href: '/twitter/video/mp4', tag: 'Extractor' },
  { title: 'Why Cross-Posted Video Looks Blurry (Fix)', href: '/blog/why-cross-posted-video-looks-blurry-fix', tag: 'Guide' },
  { title: 'Format Vertical Video Without Black Bars', href: '/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars', tag: 'Guide' },
  { title: 'Get Paid Clipping Videos on Whop', href: '/blog/get-paid-clipping-videos-on-whop', tag: 'Guide' },
  { title: 'About SocialsFetcher & Testing Methodology', href: '/about', tag: 'Info' },
];

export default function SiteHeader() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = query.trim()
    ? QUICK_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-extrabold text-indigo-400 shrink-0">
          Socials<span className="text-white">Fetcher</span>
        </Link>

        {/* Instant Search Input */}
        <div className="relative flex-grow max-w-xs sm:max-w-sm">
          <input
            type="search"
            value={query}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 180)}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            placeholder="Search tools, specs & guides..."
            className="w-full px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          {open && query.trim().length > 0 && (
            <div className="absolute left-0 right-0 mt-1.5 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-50 text-left">
              {filtered.length === 0 ? (
                <div className="p-3 text-xs text-slate-400">
                  No matches. <Link href="/blog" className="text-indigo-400 underline">Browse all guides →</Link>
                </div>
              ) : (
                filtered.slice(0, 6).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3.5 py-2.5 text-xs hover:bg-slate-800 border-b border-slate-800/60 last:border-none transition"
                  >
                    <span className="text-slate-100 font-medium truncate pr-2">{item.title}</span>
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-400 shrink-0">
                      {item.tag}
                    </span>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        <nav className="hidden lg:flex items-center space-x-4 text-xs font-medium text-slate-400 shrink-0">
          <Link href="/specs" className="hover:text-indigo-400 transition">2026 Specs</Link>
          <Link href="/tools/rpm-calculator" className="hover:text-indigo-400 transition">RPM Calc</Link>
          <Link href="/tools/copyright-checklist" className="hover:text-indigo-400 transition">Copyright</Link>
          <Link href="/tools/creator-teleprompter" className="hover:text-indigo-400 transition">Teleprompter</Link>
          <Link href="/tools/safe-zone-canvas" className="hover:text-indigo-400 transition">Safe-Zone</Link>
          <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
        </nav>
      </div>
    </header>
  );
}
