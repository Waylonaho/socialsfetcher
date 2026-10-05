import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Subtitle and Caption Generators for Short Social Videos (2026)',
  description: 'Compare top AI subtitle and caption tools for TikTok, Reels, and Shorts. Discover which software delivers accurate sync, kinetic typography, and fastest export times.',
};

export default function SubtitleGeneratorsPage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      
      {/* FTC Affiliate Disclosure */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: Some links on this page are affiliate links. If you purchase through them, we may receive a commission at no extra cost to you.</span>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <a href="/" className="hover:text-indigo-400 transition">Video Downloader</a>
            <a href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok</a>
            <a href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Instagram</a>
            <a 
              href={OPUSCLIP_LINK} 
              target="_blank" 
              rel="noopener noreferrer sponsored" 
              className="text-purple-400 font-bold hover:text-purple-300 transition flex items-center gap-1"
            >
              ✨ Try OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-sky-950 border border-sky-700/60 text-sky-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Video Production & Editing
          </span>
          <span className="text-slate-500">• 6 min read • 2026 Comparison</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Best Subtitle and Caption Generators for Short Social Videos
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Adding dynamic, kinetic subtitles is no longer optional—silent browsing accounts for a huge share of mobile impressions. Here is an objective comparison of the top automated captioning tools based on transcription precision, styling presets, and overall workflow speed.
        </p>

        {/* Quick Answer Summary */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-sky-400 font-semibold">Key Recommendation:</strong> If you are starting with raw speaking clips or long recordings, <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-indigo-400 underline font-bold">OpusClip</a> provides the best balance of AI highlight selection combined with automated, customizable kinetic subtitles that match modern TikTok and YouTube Shorts styles without manual keyframing.
          </p>
        </div>

        {/* Section 1: Comparison Matrix */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Comparing Subtitle & Caption Workflows
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Platform</th>
                  <th className="py-3 px-4 text-left">Best Use Case</th>
                  <th className="py-3 px-4 text-left">Highlighting Style</th>
                  <th className="py-3 px-4 text-left">Export Flexibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">OpusClip</td>
                  <td className="py-3 px-4">Auto-Clipping + Captions</td>
                  <td className="py-3 px-4 text-emerald-400">Dynamic Karaoke & Emoji</td>
                  <td className="py-3 px-4">Direct 1080p MP4 / Pro XML</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">CapCut</td>
                  <td className="py-3 px-4">Manual Mobile Timeline</td>
                  <td className="py-3 px-4 text-slate-300">Basic Glow & Word Jump</td>
                  <td className="py-3 px-4">Direct Mobile Render</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Descript</td>
                  <td className="py-3 px-4">Text-Based Studio Editing</td>
                  <td className="py-3 px-4 text-slate-300">Standard Word Highlighting</td>
                  <td className="py-3 px-4">SRT, VTT, Final Cut XML</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: What Makes a High-Converting Subtitle */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The 3 Pillars of Retention-Boosting Captions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xl mb-2">⚡</div>
              <h3 className="font-bold text-white text-sm mb-1">One-to-Three Word Pacing</h3>
              <p className="text-xs text-slate-400">Avoid blocks of text. Fast 1-3 word bursts keep the eye continually engaged on the screen.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xl mb-2">🎨</div>
              <h3 className="font-bold text-white text-sm mb-1">Dual-Tone Color Sync</h3>
              <p className="text-xs text-slate-400">Using contrasting colors (e.g., lime green on white text) guides the reader's focus as words are spoken.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xl mb-2">🔍</div>
              <h3 className="font-bold text-white text-sm mb-1">Contextual Emojis</h3>
              <p className="text-xs text-slate-400">Auto-injecting visual markers on key nouns elevates emotional impact and retention metrics.</p>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 border border-sky-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 px-2.5 py-0.5 rounded-full uppercase">
              Automate Your Captions
            </span>
            <span className="text-xs text-slate-400">AI Transcription</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Generate Word-by-Word Animated Captions with OpusClip
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Eliminate manual subtitle timing. Auto-generate high-retention animated captions, auto-correct errors, and style with trending templates in one click.
          </p>
          <a
            href={OPUSCLIP_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block w-full sm:w-auto text-center py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
          >
            Start Captioning with OpusClip →
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility.</p>
      </footer>
    </div>
  );
}
