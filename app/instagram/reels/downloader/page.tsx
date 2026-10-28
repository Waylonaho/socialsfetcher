'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InstagramReelsDownloaderPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; downloadUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=ig_result_card";
  const WRITING_JOBS_ERROR_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=ig_error_card";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url.trim())}`);
      if (!response.ok) {
        throw new Error('Instagram stream is private, restricted, or the retrieval service timed out.');
      }
      const data = await response.json();
      if (!data || !data.downloadUrl || !data.downloadUrl.startsWith('https://')) {
        throw new Error('Could not extract a direct HTTPS MP4 stream for this Instagram URL.');
      }
      setResult({
        title: data.title || 'Instagram Reel Video',
        downloadUrl: data.downloadUrl,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unable to retrieve media. Please verify the link is public and authorized.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string) => {
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
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition hidden sm:inline">TikTok</Link>
            <Link href="/youtube/shorts/saver" className="hover:text-indigo-400 transition hidden sm:inline">YouTube</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-3 flex items-center justify-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Instagram Reels Downloader</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Instagram Reels Downloader <span className="text-pink-500">in Full HD</span>
        </h1>
        <p className="text-slate-400 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          Back up and download your own or creator-authorized Instagram Reels in clean 1080p MP4 format.
        </p>

        <div className="max-w-xl mx-auto mb-8 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
          🛡️ Authorized Use Only: Only download content you own or have explicit permission from the rights holder to reuse.
        </div>

        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste Instagram Reel URL (e.g. https://www.instagram.com/reel/...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 transition text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 font-bold text-white transition disabled:opacity-50 shrink-0 text-sm shadow-lg"
          >
            {loading ? 'Checking Stream...' : 'Fetch Reel'}
          </button>
        </form>

        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-2">✓ Stream Ready</span>
            <h2 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h2>
            <button
              onClick={() => handleDownload(result.downloadUrl)}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center shadow-lg mb-6"
            >
              Download MP4 File
            </button>

            <div className="pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Remote Creator Opportunity
                </span>
                <span className="text-[10px] text-slate-400">Sponsored</span>
              </div>
              <h3 className="font-bold text-white text-sm">
                Earn Income Managing Social Media Accounts &amp; Scheduling Reels
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Brands hire remote assistants to organize short-form clips, write captions, and schedule posts.
              </p>
              <a
                href={WRITING_JOBS_CARD_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
              >
                Check Remote Qualification →
              </a>
              <span className="text-[10px] text-slate-400 block text-center mt-2">
                Commission Disclosure: We may earn a commission if you sign up or qualify through this link.
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto my-6 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-900 border border-red-500/40 shadow-xl">
              <h2 className="font-bold text-red-400 text-sm mb-1">⚠️ Unable to Retrieve Instagram Reel</h2>
              <p className="text-xs text-slate-300 mb-3">{error}</p>
              <p className="text-xs text-slate-400 mb-4">
                <strong>What you can try:</strong> If this is your own Reel, open the Instagram app, go to your Reel &gt; tap the three dots (...) &gt; choose <strong>Save to camera roll</strong>, or see our <Link href="/blog/how-to-download-instagram-reels-1080p-high-quality" className="text-indigo-400 underline">1080p Reels backup guide</Link>.
              </p>
              <button
                onClick={() => { setError(null); setUrl(''); }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
              >
                Clear &amp; Try Another URL
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-purple-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Partner Workflow Tool
                </span>
                <span className="text-[10px] text-slate-400">Sponsored</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                Repurpose Long Videos into 9:16 Reels with OpusClip
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Automatically extract viral hooks, add animated captions, and export clean 1080p masters.
              </p>
              <a
                href={OPUSCLIP_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block text-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
              >
                Try OpusClip Free →
              </a>
              <span className="text-[10px] text-slate-400 block mt-2">
                Disclosure: We may earn a commission if you sign up through this link, at no extra cost to you.
              </span>
            </div>
          </div>
        )}

        {/* Contextual Help & Sibling Tools Hub */}
        <section className="py-10 mt-12 bg-slate-900/40 border-t border-slate-800/80 rounded-2xl text-left px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-200">Help with Instagram Reels &amp; Stories</h2>
            <Link href="/blog" className="text-xs text-indigo-400 hover:underline font-semibold">All Guides →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-6">
            <Link href="/blog/why-saved-instagram-reel-has-no-music-fix" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition">
              <h3 className="font-bold text-white mb-1">Saved Reel Has No Music?</h3>
              <p className="text-slate-400">Why Instagram mutes licensed audio on export and how to keep original sound.</p>
            </Link>
            <Link href="/blog/how-to-automatically-save-instagram-stories-camera-roll-archive" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition">
              <h3 className="font-bold text-white mb-1">Auto-Save Stories to Gallery</h3>
              <p className="text-slate-400">Set up automatic camera roll backups and cloud Story Archiving.</p>
            </Link>
            <Link href="/blog/how-to-save-instagram-story-after-24-hours-archive" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition">
              <h3 className="font-bold text-white mb-1">Recover Expired Stories</h3>
              <p className="text-slate-400">Download your past Stories after 24 hours directly from Meta Archive.</p>
            </Link>
          </div>
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Other Platform Utilities:</span>
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 underline">TikTok Downloader</Link>
            <Link href="/youtube/shorts/saver" className="hover:text-indigo-400 underline">YouTube Shorts Saver</Link>
            <Link href="/twitter/video/mp4" className="hover:text-indigo-400 underline">X / Twitter Video Saver</Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility. Please only download content you own or have permission to use.</p>
      </footer>
    </div>
  );
}
