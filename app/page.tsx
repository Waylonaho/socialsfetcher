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
  const WRITING_JOBS_BANNER_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=homepage_top_bar";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=site_result_card";
  const WRITING_JOBS_ERROR_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=downloader_failure_recommendation";
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
        throw new Error('Downloader service timed out or video is private/unsupported.');
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
      // Honest failure: No dummy sample video fallback
      const msg = err instanceof Error ? err.message : 'Failed to retrieve media. Please check the URL and try again.';
      setError(msg);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string) => {
    // Pure download action without misleading popups or redirects
    window.location.href = downloadUrl;
  };

  const triggerCPAGripLocker = () => {
    window.open(CPAGRIP_LOCKER_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border-b border-indigo-500/30 py-2.5 px-4 text-center text-xs text-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase">Hiring</span>
          <span>Earn $25–$50/Hr reviewing social media apps & organizing video clips from home.</span>
          <a 
            href={WRITING_JOBS_BANNER_LINK} 
            target="_blank" 
            rel="noopener noreferrer sponsored" 
            className="font-bold text-amber-400 hover:underline underline-offset-2 ml-1"
          >
            Apply Now →
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
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Paste your TikTok, Instagram Reel, YouTube Short, or X video link below to extract clean HD media instantly.
        </p>

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
              
