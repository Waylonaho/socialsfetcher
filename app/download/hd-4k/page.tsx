'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HD4KDownloaderPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; downloadUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=hd4k_result_card";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url.trim())}`);
      if (!response.ok) {
        throw new Error('Server timed out or high-bitrate media stream is private/unsupported.');
      }
      const data = await response.json();
      if (!data || !data.downloadUrl || !data.downloadUrl.startsWith('https://')) {
        throw new Error('Could not extract an uncompressed master stream for this URL.');
      }
      setResult({
        title: data.title || 'High-Definition Video Stream',
        downloadUrl: data.downloadUrl,
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unable to retrieve high-resolution stream. Verify link visibility.');
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
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition hidden sm:inline">Instagram</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-3 flex items-center justify-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-200">4K Ultra-HD Downloader</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          4K &amp; 1080p Ultra-HD <span className="text-amber-400">Media Extractor</span>
        </h1>
        <p className="text-slate-400 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
          Extract the highest available bitrate MP4 video containers without platform-induced downsampling or watermarks.
        </p>

        <div className="max-w-xl mx-auto mb-8 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
          🛡️ Authorized Use Only: Only download high-resolution masters you created or have explicit written licensing to archive.
        </div>

        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste video URL (YouTube, TikTok, Instagram, or X)..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 font-bold text-white transition disabled:opacity-50 shrink-0 text-sm shadow-lg"
          >
            {loading ? 'Analyzing Bitrate...' : 'Fetch HD Master'}
          </button>
        </form>

        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-2">✓ High-Bitrate Master Available</span>
            <h2 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h2>
            <button
              onClick={() => handleDownload(result.downloadUrl)}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center shadow-lg mb-6"
            >
              Download Full-Resolution MP4
            </button>

            <div className="pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                  Remote Creator Opportunity
                </span>
                <span className="text-[10px] text-slate-400">Sponsored</span>
              </div>
              <h3 className="font-bold text-white text-sm">
                Get Paid to Manage &amp; Organize High-Definition Video Assets
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-3">
                Production studios and agencies hire remote assistants to catalog footage, export variations, and schedule vertical video.
              </p>
              <a
                href={WRITING_JOBS_CARD_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
              >
                Check Remote Qualifications →
              </a>
              <span className="text-[10px] text-slate-400 block text-center mt-2">
                Commission Disclosure: We may receive a commission if you sign up through this link.
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto my-6 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-900 border border-red-500/40 shadow-xl">
              <h2 className="font-bold text-red-400 text-sm mb-1">⚠️ Stream Analysis Failed</h2>
              <p className="text-xs text-slate-300 mb-3">{error}</p>
              <p className="text-xs text-slate-400 mb-4">
                <strong>Resolution Note:</strong> Most short-form platforms (TikTok and Instagram) clamp native mobile uploads to 1080x1920. If you need exact master calculations, use our <Link href="/blog/social-video-bitrate-file-size-calculator" className="text-indigo-400 underline">Bitrate &amp; File Size Calculator</Link>.
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
                  AI Video Repurposer
                </span>
                <span className="text-[10px] text-slate-400">Sponsored</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                Auto-Reframe High-Res Videos with OpusClip
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Convert long horizontal 4K footage into 1080p vertical clips with AI active-speaker tracking and animated captions.
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

        {/* Technical Specs & Calculator Hub */}
        <section className="py-10 mt-12 bg-slate-900/40 border-t border-slate-800/80 rounded-2xl text-left px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-200">High-Resolution Video Guides &amp; Tools</h2>
            <Link href="/blog" className="text-xs text-indigo-400 hover:underline font-semibold">All Resources →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-6">
            <Link href="/blog/social-video-bitrate-file-size-calculator" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <h3 className="font-bold text-white mb-1">Bitrate &amp; Size Calculator</h3>
              <p className="text-slate-400">Calculate exact MB file size and target Mbps bitrates for 1080p vs 4K exports.</p>
            </Link>
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <h3 className="font-bold text-white mb-1">Blurry Video Upload Fix</h3>
              <p className="text-slate-400">Why uploading 4K to Reels or TikTok causes server compression penalties.</p>
            </Link>
            <Link href="/blog/how-to-organize-backup-social-videos-creator-vault" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <h3 className="font-bold text-white mb-1">Creator Media Vault</h3>
              <p className="text-slate-400">Storage folder structure and ISO naming conventions for multi-drive backups.</p>
            </Link>
          </div>
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Dedicated Platform Tools:</span>
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 underline">TikTok Downloader</Link>
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 underline">Instagram Reels Saver</Link>
            <Link href="/youtube/shorts/saver" className="hover:text-indigo-400 underline">YouTube Shorts Saver</Link>
            <Link href="/twitter/video/mp4" className="hover:text-indigo-400 underline">X / Twitter Saver</Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility. Please only download content you own or have permission to use.</p>
      </footer>
    </div>
  );
}
