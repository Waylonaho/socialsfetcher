import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Save Your Own Video from X to Your Phone (2026 Guide)',
  description: 'Learn how to save your own posted videos from X (Twitter) directly to your iPhone or Android camera roll. Covers native buttons, post settings, and backup tools.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/how-to-save-your-own-video-from-x-to-phone',
  },
};

export default function SaveOwnXVideoToPhonePage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: Some outbound links on this page are partner or affiliate links. If you purchase through them, we may receive a commission at no extra cost to you.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/twitter/video/mp4" className="hover:text-indigo-400 transition">X Downloader</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">All Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-blue-950 border border-blue-700/60 text-blue-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            X / Twitter Backups
          </span>
          <span className="text-slate-500">• 5 min read • 2026 Walkthrough</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          How to Save Your Own Video from X to Your Phone (iPhone &amp; Android)
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          If you deleted the original video file from your phone after posting or switched devices, you might need to recover your own content from X (formerly Twitter). Depending on your account status and post settings, X offers native download options, but external fallbacks are often required.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-blue-400 font-semibold">Native Controls First:</strong> If you are subscribed to X Premium and kept download permissions active on the post, you can tap the three dots (<code className="text-slate-200 bg-slate-800 px-1 py-0.5 rounded">...</code>) on your post and choose <strong className="text-white">&quot;Download video&quot;</strong>. If this option is missing or you use a standard free account, an authorized web downloader bridges the gap.
          </p>
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            1. Using X Native Download Controls (Premium Accounts)
          </h2>
          <ol className="space-y-3 text-sm text-slate-300 list-decimal pl-5 leading-relaxed">
            <li>Open the X app and navigate to your profile tab.</li>
            <li>Find the video post you want to save.</li>
            <li>Tap the three dots in the upper-right corner of the post card.</li>
            <li>Select <strong>Download video</strong>. The video saves directly to your iPhone Photos or Android Gallery in standard streaming resolution.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            2. When the Native Download Button Is Missing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The native download option may not appear on your own post if:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-400">
            <li>You are using a standard (non-Premium) X account.</li>
            <li>The post was created before X added the native download feature.</li>
            <li>You unchecked &quot;Allow download of this video&quot; during composer setup.</li>
          </ul>
          <p className="text-slate-300 text-sm mt-3">
            In these cases, copy your post link and use our free <Link href="/twitter/video/mp4" className="text-indigo-400 underline font-bold">X Video Downloader</Link> utility to extract the direct MP4 master without quality loss.
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Native Save vs. Direct MP4 Stream
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Method</th>
                  <th className="py-3 px-4 text-left">Account Requirement</th>
                  <th className="py-3 px-4 text-left">Max Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">X In-App Button</td>
                  <td className="py-3 px-4 text-amber-400">X Premium Subscription</td>
                  <td className="py-3 px-4">720p / 1080p</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">SocialsFetcher Utility</td>
                  <td className="py-3 px-4 text-emerald-400">Free / Public Post</td>
                  <td className="py-3 px-4 text-emerald-400">Highest Available Master (1080p)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
              Creator Pipeline
            </span>
            <span className="text-xs text-slate-400">Repurpose Video</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Turn Saved X Videos into TikToks &amp; Reels with OpusClip
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Repurpose your horizontal X video clips for vertical feeds. OpusClip automatically tracks active speakers, crops to 9:16 vertical, and generates animated captions in one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Repurpose with OpusClip →
            </a>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 font-bold text-xs sm:text-sm transition"
            >
              Get ToolSuite Pro Pass ⚡
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utilities &amp; Guides.</p>
      </footer>
    </div>
  );
}
