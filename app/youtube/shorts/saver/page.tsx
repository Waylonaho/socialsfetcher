'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YouTubeShortsSaverPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; downloadUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url.trim())}`);
      if (!response.ok) {
        throw new Error('Short stream is unavailable, private, or the retrieval service timed out.');
      }
      const data = await response.json();
      if (!data || !data.downloadUrl || !data.downloadUrl.startsWith('https://')) {
        throw new Error('Could not find a valid HTTPS media stream for this YouTube link.');
      }
      setResult({
        title: data.title || 'YouTube Short Video',
        downloadUrl: data.downloadUrl,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to retrieve Short. Verify the URL or use YouTube Studio / Google Takeout.');
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
            <Link href="/" className="hover:text-indigo-400 transition">Main Downloader</Link>
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition hidden sm:inline">TikTok</Link>
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition hidden sm:inline">Instagram</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-3 flex items-center justify-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-200">YouTube Shorts Saver</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          YouTube Shorts Saver <span className="text-red-500">&amp; Creator Backup</span>
        </h1>
        <p className="text-slate-400 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          Back up your own published YouTube Shorts or Creative Commons licensed clips in clean MP4 format.
        </p>

        <div className="max-w-xl mx-auto mb-8 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
          🛡️ Respect YouTube Terms &amp; Copyright: Only download your own channel uploads or videos with explicit permission.
        </div>

        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste YouTube Shorts link here (e.g. https://www.youtube.com/shorts/...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 font-bold text-white transition disabled:opacity-50 shrink-0 text-sm shadow-lg"
          >
            {loading ? 'Processing...' : 'Fetch Short'}
          </button>
        </form>

        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-2">✓ Stream Ready</span>
            <h2 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h2>
            <button
              onClick={() => handleDownload(result.downloadUrl)}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center shadow-lg"
            >
              Download MP4 Video
            </button>
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto my-6 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-900 border border-red-500/40 shadow-xl">
              <h2 className="font-bold text-red-400 text-sm mb-1">⚠️ Unable to Retrieve YouTube Short</h2>
              <p className="text-xs text-slate-300 mb-3">{error}</p>
              <p className="text-xs text-slate-400 mb-4">
                <strong>Official Creator Backup Route:</strong> You can always export your own channel&apos;s original 1080p master files via <Link href="/blog/how-to-backup-youtube-shorts-google-takeout" className="text-indigo-400 underline">Google Takeout</Link> or YouTube Studio.
              </p>
              <button
                onClick={() => { setError(null); setUrl(''); }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 transition"
              >
                Try Another URL
              </button>
            </div>
          </div>
        )}

        {/* Disclosed Partner Section */}
        <div className="max-w-xl mx-auto my-8 p-5 rounded-2xl bg-slate-900 border border-purple-500/30 text-left shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Creator Repurposing Tool
            </span>
            <span className="text-[10px] text-slate-400">Sponsored</span>
          </div>
          <h2 className="text-sm font-bold text-white mb-1">
            Turn Long YouTube Videos into 10 Vertical Shorts with OpusClip
          </h2>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            OpusClip finds the best moments in your long-form uploads, reframes speakers into 9:16 vertical, and adds animated captions automatically.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block text-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
            >
              Try OpusClip Free →
            </a>
            <span className="text-[10px] text-slate-400">
              We may earn a commission if you sign up, at no extra cost to you.
            </span>
          </div>
        </div>

        {/* Contextual Guides Hub for YouTube Shorts */}
        <section className="py-10 mt-8 bg-slate-900/40 border-t border-slate-800/80 rounded-2xl text-left px-6">
          <h2 className="text-lg font-bold mb-4 text-slate-200">Help &amp; Guides for YouTube Shorts Creators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <Link href="/blog/how-to-backup-youtube-shorts-google-takeout" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 transition">
              <h3 className="font-bold text-white mb-1">Bulk Backup via Google Takeout</h3>
              <p className="text-slate-400">Export your entire Shorts library in original uploaded quality.</p>
            </Link>
            <Link href="/blog/repurpose-youtube-short-to-reels-and-tiktok" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 transition">
              <h3 className="font-bold text-white mb-1">Cross-Post Without Copyright Flags</h3>
              <p className="text-slate-400">How to syndicate Shorts to Reels and TikTok while keeping audio intact.</p>
            </Link>
            <Link href="/blog/how-to-extract-youtube-shorts-thumbnail-hd" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/50 transition">
              <h3 className="font-bold text-white mb-1">Extract HD Shorts Thumbnails</h3>
              <p className="text-slate-400">Grab clean 1080p poster frames without UI buttons or overlays.</p>
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
