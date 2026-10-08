import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Format Vertical Video for TikTok, Reels & Shorts Without Black Bars (2026)',
  description: 'How to resize and export vertical videos for TikTok, Instagram Reels, and YouTube Shorts without ugly black pillarbox bars or cropped subtitles.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars',
  },
};

export default function FormatVerticalVideoNoBlackBarsPage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: Some outbound links on this page are affiliate links. If you purchase through them, we may receive a commission at no additional cost to you.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Downloader</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-sky-950 border border-sky-700/60 text-sky-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Aspect Ratio & Formatting
          </span>
          <span className="text-slate-500">• 6 min read • 2026 Production Standard</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Nothing kills a vertical video’s hook faster than thick black letterbox bars at the top and bottom or horizontal pillarboxes on the sides. Here is the technical guide to ensuring edge-to-edge 9:16 mobile immersion across every platform.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-sky-400 font-semibold">The Core Rule:</strong> Black bars appear whenever your canvas aspect ratio deviates from <strong className="text-white">9:16 (exact resolution: 1080 x 1920 pixels)</strong>. Videos recorded in 4:3 (iPad or default camera mode) or 16:9 widescreen will automatically receive black letterboxing unless properly reframed using background blur fill or AI subject tracking.
          </p>
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Comparing Aspect Ratios Across Major Platforms
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Platform</th>
                  <th className="py-3 px-4 text-left">Native Aspect Ratio</th>
                  <th className="py-3 px-4 text-left">Ideal Export Pixel Dimensions</th>
                  <th className="py-3 px-4 text-left">Feed Preview Safe Zone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">TikTok</td>
                  <td className="py-3 px-4 text-emerald-400">9:16 Full Screen</td>
                  <td className="py-3 px-4">1080 x 1920 px</td>
                  <td className="py-3 px-4 text-slate-400">Top 150px, Bottom 280px blocked</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Instagram Reels</td>
                  <td className="py-3 px-4 text-emerald-400">9:16 (4:5 profile grid)</td>
                  <td className="py-3 px-4">1080 x 1920 px</td>
                  <td className="py-3 px-4 text-slate-400">Center 1080 x 1350 px for profile grid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">YouTube Shorts</td>
                  <td className="py-3 px-4 text-emerald-400">9:16 Full Screen</td>
                  <td className="py-3 px-4">1080 x 1920 px</td>
                  <td className="py-3 px-4 text-slate-400">Bottom 220px covered by title</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            3 Ways to Eliminate Black Bars on Horizontal Clips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">1. Smart Dynamic Crop</h3>
              <p className="text-xs text-slate-400">Zoom in to 1080x1920 and use keyframe tracking or AI to follow the speaker across the horizontal frame.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">2. Blurred Background Duplicate</h3>
              <p className="text-xs text-slate-400">Place your original 16:9 clip in the middle and duplicate the footage in the background at 250% scale with a Gaussian blur.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">3. Split-Screen Layout</h3>
              <p className="text-xs text-slate-400">Stack camera reaction footage on the top half and screen captures or gameplay on the bottom half to fill the 9:16 canvas.</p>
            </div>
          </div>
        </section>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 px-2.5 py-0.5 rounded-full uppercase">
              Production Workflow
            </span>
            <span className="text-xs text-slate-400">AI Reframing</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Auto-Reframe Horizontal Video to Edge-to-Edge 9:16
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Don’t manually keyframe widescreen footage. OpusClip uses AI speaker detection to track moving subjects, auto-fills the background seamlessly, and renders clean 1080x1920 vertical video without black bars.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Reframe with OpusClip AI →
            </a>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-bold text-xs sm:text-sm transition"
            >
              Access ToolSuite Editor Hub ⚡
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utilities & Guides.</p>
      </footer>
    </div>
  );
}
