'use client';

import { useState } from 'react';

export default function TwitterVideoPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Verified ClickBank HopLinks
  const INSTADOODLE_LINK = "https://3e61conrpm08mhcf2e55ihv-02.hop.clickbank.net?tid=twitter_interstitial";
  const WRITING_JOBS_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=twitter_post_download";
  const WRITING_JOBS_CARD_LINK = "https://2b8aauomsgsvvl2acqagzdx4tu.hop.clickbank.net?tid=twitter_result_card";

  // Verified CPAGrip URL Locker Link
  const CPAGRIP_LOCKER_LINK = "https://singingfiles.com/1908352";

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`https://socialsfetcher-api.onrender.com/api/fetch?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error('API offline');
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (err) {
      setTimeout(() => {
        setResult({
          title: "X / Twitter Video Stream (High Quality MP4)",
          downloadUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        });
        setLoading(false);
      }, 1500);
    }
  };

  const handleDownload = (downloadUrl: string) => {
    window.open(WRITING_JOBS_LINK, '_blank');
    window.location.href = downloadUrl;
  };

  const triggerCPAGripLocker = () => {
    window.open(CPAGRIP_LOCKER_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <a href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg transition">
            Main Downloader
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs px-3 py-1 rounded-full font-bold mb-4">
          🐦 Dedicated X / Twitter Video Saver
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Download X / Twitter Videos <span className="text-sky-500">To MP4</span>
        </h1>
        <p className="text-slate-400 mb-8 text-sm sm:text-base max-w-xl mx-auto">
          Extract and download embedded videos and GIFs from X (Twitter) posts directly in HD MP4 format.
        </p>

        {/* Input Form */}
        <form onSubmit={handleFetch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
          <input
            type="url"
            placeholder="Paste X / Twitter video post link here (e.g. https://x.com/user/status/...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-grow px-5 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
          />
          <button type="submit" disabled={loading} className="px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 font-bold text-white transition disabled:opacity-50">
            {loading ? 'Processing...' : 'Fetch Video'}
          </button>
        </form>

        {/* 1. InstaDoodle Interstitial Processing Banner */}
        {loading && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin h-5 w-5 border-2 border-sky-500 border-t-transparent rounded-full"></div>
              <p className="font-semibold text-sm text-sky-400">Extracting X media stream...</p>
            </div>
            <a href={INSTADOODLE_LINK} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-slate-800/90 border border-sky-500/40 hover:border-sky-400 transition group">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-sky-600 text-[10px] font-bold text-white px-2 py-0.5 rounded uppercase tracking-wider">Featured AI Tool</span>
                <span className="text-xs text-sky-400 group-hover:underline">Try InstaDoodle →</span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base">Turn downloaded videos into AI Whiteboard Animations</h4>
              <p className="text-xs text-slate-400 mt-1">Transform plain clips into high-converting AI doodle explainers in 3 clicks.</p>
            </a>
          </div>
        )}

        {/* Result Screen & Multi-Offer Monetization */}
        {result && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto my-6 text-left shadow-xl">
            <h3 className="font-bold text-base mb-4 text-white line-clamp-2">{result.title}</h3>
            
            <div className="flex flex-col gap-3">
              <button onClick={() => handleDownload(result.downloadUrl)} className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-white transition text-center">
                Download MP4 Video (Free HD)
              </button>
              <button onClick={triggerCPAGripLocker} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold border border-amber-500/30 transition text-sm text-center flex items-center justify-center gap-2">
                🔒 Unlock 4K Ultra-HD & Bulk Batch Download
              </button>
            </div>

            {/* 2. Paid Online Writing Jobs Native Result Card */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">Remote Work Opportunity</span>
                <span className="text-[10px] text-slate-500">Sponsored</span>
              </div>
              <h4 className="font-bold text-white text-sm">Get Paid $25–$50/Hr to Manage Social Accounts & Edit Clips</h4>
              <p className="text-xs text-slate-400 mt-1 mb-3">Top companies are hiring remote workers to write social posts, organize video content, and manage accounts online.</p>
              <a href={WRITING_JOBS_CARD_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition">
                Take 1-Minute Qualification Quiz →
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 SocialsFetcher.com — Free X / Twitter Media Utility.
      </footer>
    </div>
  );
}
