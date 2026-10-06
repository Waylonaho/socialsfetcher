'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DynamicDownloaderPage() {
  const params = useParams();
  const platform = (params?.platform as string) || 'social media';
  
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<{
    downloadUrl: string;
    title?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const WRITING_JOBS_LINK =
    'https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=dynamic_page_honest_error';

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setVideoData(null);

    try {
      const res = await fetch(`/api/download?url=${encodeURIComponent(url.trim())}`);
      if (!res.ok) {
        throw new Error(`Unable to fetch this ${platform} video. It may be private or restricted.`);
      }

      const data = await res.json();
      if (!data.downloadUrl) {
        throw new Error('No downloadable video file could be extracted.');
      }

      setVideoData({
        downloadUrl: data.downloadUrl,
        title: data.title || `${platform} Video`,
      });
    } catch (err: unknown) {
      // Honest failure: No placeholder video
      const msg = err instanceof Error ? err.message : 'Network error. Please try again.';
      setError(msg);
      setVideoData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <Link href="/blog" className="text-xs text-slate-400 hover:text-white transition">
            Resources & Guides
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 capitalize text-white">
          Download {platform} Video
        </h1>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
          Paste your public link below to save your clip directly.
        </p>

        <form onSubmit={handleFetch} className="max-w-xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={`Paste ${platform} URL here...`}
              className="flex-grow px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition"
            >
              {loading ? 'Processing...' : 'Download'}
            </button>
          </div>
        </form>

        {videoData && (
          <div className="max-w-xl mx-auto mt-6 p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-left">
            <p className="text-xs font-bold text-emerald-400 uppercase mb-2">✓ Verified File</p>
            <p className="text-sm font-semibold text-white mb-3 truncate">{videoData.title}</p>
            <a
              href={videoData.downloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition"
            >
              Download MP4
            </a>
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto mt-6 space-y-4 text-left">
            <div className="p-4 rounded-xl bg-slate-900 border border-red-500/40">
              <p className="text-xs text-red-400 font-bold mb-1">⚠️ Video Could Not Be Processed</p>
              <p className="text-xs text-slate-300 mb-3">{error}</p>
              <button
                onClick={handleFetch}
                className="px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg border border-slate-700"
              >
                Retry
              </button>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-900 border border-emerald-500/30">
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Sponsored
              </span>
              <h4 className="text-xs font-bold text-white mt-2 mb-1">
                Earn $25–$50/Hr reviewing social media apps & organizing video clips
              </h4>
              <p className="text-[11px] text-slate-300 mb-3">
                Remote entry-level assistance opportunities with flexible hours.
              </p>
              <a
                href={WRITING_JOBS_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-3 py-1.5 bg-emerald-600 text-white font-bold text-xs rounded-lg"
              >
                Take Free Qualification Quiz →
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 SocialsFetcher.com
      </footer>
    </div>
  );
}
