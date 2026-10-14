import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Back Up All YouTube Shorts with Google Takeout (2026 Archive Guide)',
  description: 'Step-by-step guide to downloading all your YouTube Shorts in bulk using Google Takeout vs. YouTube Studio. Preserve your clean original MP4 files.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/how-to-backup-youtube-shorts-google-takeout',
  },
};

export default function BackupYouTubeShortsPage() {
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
            <Link href="/youtube/shorts/saver" className="hover:text-indigo-400 transition">Shorts Saver</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">All Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-red-950 border border-red-700/60 text-red-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            YouTube Creator Archive
          </span>
          <span className="text-slate-500">• 6 min read • 2026 Archive Standard</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          How to Back Up All Your YouTube Shorts with Google Takeout (Bulk Creator Archive)
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Relying exclusively on YouTube servers to store your short-form video catalog is an existential risk for creators. Platform policy updates, accidental account terminations, or copyright strikes can erase years of work overnight. Here is how to bulk export every YouTube Short you own using Google Takeout.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-red-400 font-semibold">Takeout vs. Studio:</strong> While YouTube Studio allows you to download videos individually (limited to 720p with heavy compression), <strong className="text-white">Google Takeout</strong> exports the highest-quality master containers you uploaded in bulk zip archives, preserving your original audio streams and metadata.
          </p>
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Step-by-Step: Bulk Exporting Shorts via Google Takeout
          </h2>
          <ol className="space-y-4 text-sm text-slate-300 list-decimal pl-5 leading-relaxed">
            <li>
              <strong>Open Google Takeout:</strong> Navigate to <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">takeout.google.com</code> while logged into the Google account that manages your YouTube channel.
            </li>
            <li>
              <strong>Deselect All Services:</strong> Click <strong>Deselect all</strong> at the top right to avoid exporting your entire Google Drive, Gmail, and browsing history.
            </li>
            <li>
              <strong>Select YouTube and YouTube Music:</strong> Scroll down and check the box next to <strong>YouTube and YouTube Music</strong>.
            </li>
            <li>
              <strong>Filter for Videos Only:</strong> Click <strong>All YouTube data included</strong>, uncheck everything except <strong>videos</strong>, and click OK.
            </li>
            <li>
              <strong>Set Archive Frequency & Split Sizes:</strong> Click <strong>Next step</strong>. Select <em>&quot;Export once&quot;</em>, choose <strong>.zip</strong> format, and set file size to <strong>10 GB or 50 GB</strong> to prevent receiving dozens of fragmented small downloads.
            </li>
            <li>
              <strong>Download Archive:</strong> Google will process your request (taking between 20 minutes to several hours depending on your channel size) and email you direct download links.
            </li>
          </ol>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Single Video vs. Bulk Takeout Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Feature</th>
                  <th className="py-3 px-4 text-left">YouTube Studio Save</th>
                  <th className="py-3 px-4 text-left">Google Takeout Bulk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Max Resolution</td>
                  <td className="py-3 px-4 text-amber-400">Often capped at 720p</td>
                  <td className="py-3 px-4 text-emerald-400">Original uploaded master (1080p+)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Execution Speed</td>
                  <td className="py-3 px-4">Manual one-by-one</td>
                  <td className="py-3 px-4 text-emerald-400">Automated batch packaging</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Metadata Included</td>
                  <td className="py-3 px-4">None (raw video only)</td>
                  <td className="py-3 px-4 text-emerald-400">Includes JSON descriptions & tags</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Need to grab just a single Short immediately without waiting for Takeout to generate a multi-gigabyte archive? Use our fast <Link href="/youtube/shorts/saver" className="text-indigo-400 underline font-bold">YouTube Shorts Saver</Link> to fetch the direct MP4 stream in seconds.
          </p>
        </section>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950 via-slate-900 to-slate-900 border border-red-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-red-400 bg-red-950 border border-red-800 px-2.5 py-0.5 rounded-full uppercase">
              Creator syndication
            </span>
            <span className="text-xs text-slate-400">AI Cross-Posting</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Repurpose Your Backed-Up Shorts to TikTok & Reels
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Now that you have your clean master files, syndicate them across other networks. OpusClip automatically formats vertical videos, re-aligns safe zones, and adds dynamic kinetic captions to maximize reach on Instagram and TikTok.
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
        <p>© 2026 SocialsFetcher.com — Free Online Media Utilities & Guides.</p>
      </footer>
    </div>
  );
}
