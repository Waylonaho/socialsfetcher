'use client';

import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    // Scraper API call logic executes here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <nav className="hidden md:flex space-x-6 text-sm text-slate-400 font-medium">
            <a href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok</a>
            <a href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Instagram</a>
            <a href="/youtube/shorts/saver" className="hover:text-indigo-400 transition">YouTube</a>
            <a href="/twitter/video/mp4" className="hover:text-indigo-400 transition">X / Twitter</a>
          </nav>
        </div>
      </header>

      {/* Hero Section & Main Downloader Tool */}
      <main className="flex-grow">
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Download Any Social Media Video <span className="text-indigo-500">Without Watermark</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Paste your TikTok, Instagram Reel, YouTube Short, or X video link below to fetch fast 1080p MP4 or MP3 files instantly.
          </p>

          {/* Input Downloader Form */}
          <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-12">
            <input
              type="url"
              placeholder="Paste social video URL here (e.g. https://www.tiktok.com/@user/video/...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white transition disabled:opacity-50"
            >
              {loading ? 'Fetching...' : 'Fetch Media'}
            </button>
          </form>
        </section>

        {/* Planned Tools & pSEO Internal Links Grid */}
        <section className="py-16 bg-slate-900/40 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center sm:text-left">
              Supported Fetcher Tools & Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Tool Card 1 */}
              <a href="/tiktok/download/no-watermark" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group">
                <div className="text-2xl mb-2">🎵</div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-indigo-400">TikTok Downloader</h3>
                <p className="text-sm text-slate-400">Extract high-definition TikTok videos without watermarks or grab direct MP3 audio files.</p>
              </a>

              {/* Tool Card 2 */}
              <a href="/instagram/reels/downloader" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group">
                <div className="text-2xl mb-2">📸</div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-indigo-400">Instagram Reel Saver</h3>
                <p className="text-sm text-slate-400">Download Reels, Carousel post photos, and Stories anonymously in original resolution.</p>
              </a>

              {/* Tool Card 3 */}
              <a href="/youtube/shorts/saver" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group">
                <div className="text-2xl mb-2">▶️</div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-indigo-400">YouTube Shorts Downloader</h3>
                <p className="text-sm text-slate-400">Convert YouTube Shorts to high-bitrate 1080p MP4 or instant audio downloads.</p>
              </a>

              {/* Tool Card 4 */}
              <a href="/twitter/video/mp4" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group">
                <div className="text-2xl mb-2">🐦</div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-indigo-400">X (Twitter) Saver</h3>
                <p className="text-sm text-slate-400">Save clips and embedded video content from X posts to your phone or desktop in 1-click.</p>
              </a>

            </div>
          </div>
        </section>

        {/* SEO FAQ Section (Google Rich Snippet Target) */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-lg mb-2">Is SocialsFetcher completely free to use?</h3>
              <p className="text-slate-400 text-sm">Yes! SocialsFetcher is 100% free with no account creation or software installation required.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-lg mb-2">How do I download TikTok videos without the watermark?</h3>
              <p className="text-slate-400 text-sm">Simply copy the share link from TikTok, paste it into the search box above, and click Fetch Media to download the clean MP4 file.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility.</p>
      </footer>
    </div>
  );
}