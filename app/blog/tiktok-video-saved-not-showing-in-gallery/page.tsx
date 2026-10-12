import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TikTok Video Saved but Not Showing in Gallery? How to Fix It (2026)',
  description: 'Troubleshoot missing TikTok video saves on Android and iPhone. Fix permission blocks, DCIM directory paths, and hidden local cache folders.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/tiktok-video-saved-not-showing-in-gallery',
  },
};

export default function TikTokSavedNotShowingPage() {
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
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok Saver</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">All Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-emerald-950 border border-emerald-700/60 text-emerald-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            TikTok Storage Diagnostics
          </span>
          <span className="text-slate-500">• 5 min read • 2026 Guide</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          TikTok Says It Saved Your Video, but It’s Not in Your Gallery? Here’s Where It Went
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          You hit &quot;Save video&quot; or toggled &quot;Save to device&quot; on your post, watched the progress circle reach 100%, and saw the green &quot;Saved to album&quot; banner. Yet when you open your camera roll, the file is nowhere to be found. Here is how to locate the missing MP4 and fix the storage permission glitch.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-emerald-400 font-semibold">The Fast Diagnostic:</strong> On modern Android systems, TikTok routes exports to <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">/Movies/TikTok/</code> or <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">/DCIM/Camera/</code> rather than the primary Recents view. On iOS, the Photos app often places the file chronologically by the video&apos;s creation timestamp instead of today&apos;s date, hiding it several weeks back in your grid.
          </p>
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            1. Fix Android Scoped Storage & Hidden Folders
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Android media indexing sometimes fails to register new downloads immediately in Google Photos or Samsung Gallery:
          </p>
          <ol className="space-y-3 text-sm text-slate-300 list-decimal pl-5 leading-relaxed">
            <li>Open your phone&apos;s default <strong>Files</strong> or <strong>My Files</strong> manager app.</li>
            <li>Navigate to <strong>Internal Storage &gt; Movies &gt; TikTok</strong>. Check if the video is located there.</li>
            <li>If not, check <strong>Internal Storage &gt; DCIM &gt; Camera</strong> or <strong>Pictures &gt; TikTok</strong>.</li>
            <li>Verify app permissions: Go to <strong>Settings &gt; Apps &gt; TikTok &gt; Permissions &gt; Photos and Videos</strong> and confirm it is set to <em>&quot;Allow all&quot;</em>.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            2. Fix iPhone Photos Sorting & iCloud Offloading
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            If you are on iOS, check these two specific system settings:
          </p>
          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Check the &quot;TikTok&quot; Dedicated Album</h3>
              <p className="text-xs text-slate-400">
                Open the Photos app, tap the <strong>Albums</strong> tab, scroll down to <strong>Media Types &gt; Videos</strong>, or look for the automatically generated &quot;TikTok&quot; folder under My Albums.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Low Storage iCloud Sync Delay</h3>
              <p className="text-xs text-slate-400">
                If your iPhone has less than 2 GB of internal storage available, the Photos database temporarily holds newly created video files in a pending sandbox until storage frees up.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The Safe Fallback: Extracting the Video Direct
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            If TikTok continuously errors out during local saves, copy the public link of your published or private video and use our clean <Link href="/tiktok/download/no-watermark" className="text-indigo-400 underline font-bold">TikTok Video Downloader</Link> to download the raw MP4 stream directly into your browser’s verified download directory.
          </p>
        </section>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
              Video Workflow
            </span>
            <span className="text-xs text-slate-400">AI Automation</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Auto-Export Clean 1080p Clips Across Every Platform
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Skip device-level saving bugs completely. OpusClip connects to your video sources, reframes them for 9:16 vertical displays, generates animated subtitles, and exports clean masters with one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Try OpusClip Free →
            </a>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 font-bold text-xs sm:text-sm transition"
            >
              Get ToolSuite Pro Stack ⚡
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
