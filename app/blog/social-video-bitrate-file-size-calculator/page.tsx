import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Video Bitrate & File-Size Calculator for TikTok, Reels & Shorts (2026)',
  description: 'Free interactive calculator to estimate MP4 file size, target video bitrate (Mbps), and weekly phone storage for 1080p and 4K vertical video exports.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/social-video-bitrate-file-size-calculator',
  },
};

export default function BitrateFileSizeCalculatorPage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Social Video Bitrate & File-Size Calculator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Interactive video file-size and bitrate estimator for short-form vertical creators on TikTok, Instagram Reels, and YouTube Shorts.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog & Guides', item: 'https://www.socialsfetcher.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Video Bitrate & File-Size Calculator', item: 'https://www.socialsfetcher.com/blog/social-video-bitrate-file-size-calculator' },
        ],
      },
    ],
  };

  const calcScript = `
    function updateBitrateCalc() {
      var duration = parseFloat(document.getElementById('calc-duration')?.value || '60');
      var vBitrate = parseFloat(document.getElementById('calc-vbitrate')?.value || '16');
      var aBitrate = parseFloat(document.getElementById('calc-abitrate')?.value || '320');
      var weeklyClips = parseFloat(document.getElementById('calc-weekly')?.value || '7');

      if (isNaN(duration) || duration < 1) duration = 1;
      if (isNaN(vBitrate) || vBitrate < 0.5) vBitrate = 0.5;
      if (isNaN(weeklyClips) || weeklyClips < 1) weeklyClips = 1;

      var totalMbps = vBitrate + (aBitrate / 1000);
      var singleFileMB = (totalMbps * duration) / 8;
      var rawCameraMultiplier = 3.2; 
      var weeklyExportGB = (singleFileMB * weeklyClips) / 1024;
      var weeklyTotalWithRawGB = (singleFileMB * (1 + rawCameraMultiplier) * weeklyClips) / 1024;

      var mbEl = document.getElementById('res-single-mb');
      var wkEl = document.getElementById('res-weekly-gb');
      var rawEl = document.getElementById('res-raw-gb');

      if (mbEl) mbEl.textContent = singleFileMB.toFixed(1) + ' MB';
      if (wkEl) wkEl.textContent = weeklyExportGB.toFixed(2) + ' GB / week';
      if (rawEl) rawEl.textContent = (weeklyTotalWithRawGB * 4).toFixed(1) + ' GB / month';
    }
    document.addEventListener('input', function(e) {
      if (e.target && e.target.id && e.target.id.startsWith('calc-')) {
        updateBitrateCalc();
      }
    });
  `;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: calcScript }} />

      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: We may earn a commission if you sign up for partner software links on this page, at no extra cost to you.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Video Downloader</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">All Guides</Link>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer sponsored" className="text-purple-400 font-bold hover:text-purple-300 transition">
              ✨ OpusClip AI
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-indigo-400 transition">Blog &amp; Guides</Link>
          <span>/</span>
          <span className="text-slate-200">Social Video Bitrate &amp; File-Size Calculator</span>
        </nav>

        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Free Creator Utility • Media Lab
          </span>
          <span className="text-slate-500">• Interactive Tool • Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Social Video Bitrate &amp; File-Size Calculator (Plus Weekly Storage Estimator)
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Exporting a 60-second vertical video at an inflated 60 Mbps bitrate won&apos;t make it look sharper on TikTok or Instagram Reels—it just forces platform servers to aggressively re-compress your upload. Use this interactive calculator to estimate your exact MP4 file size, pick a balanced target bitrate, and calculate how much phone or SSD storage your weekly filming schedule requires.
        </p>

        {/* Interactive Calculator Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 mb-10 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
            Interactive Bitrate &amp; Storage Estimator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="calc-duration" className="block text-xs font-bold text-slate-300 mb-1.5">
                Clip Duration (Seconds)
              </label>
              <input
                id="calc-duration"
                type="number"
                defaultValue={60}
                min={1}
                max={3600}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-500">e.g. 30s, 60s, or 90s Reel/Short</span>
            </div>

            <div>
              <label htmlFor="calc-vbitrate" className="block text-xs font-bold text-slate-300 mb-1.5">
                Target Video Bitrate (Mbps)
              </label>
              <select
                id="calc-vbitrate"
                defaultValue="16"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="8">8 Mbps (1080p 30fps Standard HEVC)</option>
                <option value="12">12 Mbps (1080p 30fps Crisp H.264)</option>
                <option value="16">16 Mbps (1080p 30/60fps Master Recommended)</option>
                <option value="20">20 Mbps (1080p 60fps High-Motion H.264)</option>
                <option value="35">35 Mbps (4K 30fps Local Archive Master)</option>
                <option value="50">50 Mbps (4K 60fps Uncompressed Camera Roll)</option>
              </select>
            </div>

            <div>
              <label htmlFor="calc-abitrate" className="block text-xs font-bold text-slate-300 mb-1.5">
                Audio Bitrate (kbps AAC)
              </label>
              <select
                id="calc-abitrate"
                defaultValue="320"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="128">128 kbps (Standard Social Stream)</option>
                <option value="192">192 kbps (Clean Voice &amp; Music)</option>
                <option value="320">320 kbps (Studio Master AAC/MP3)</option>
              </select>
            </div>

            <div>
              <label htmlFor="calc-weekly" className="block text-xs font-bold text-slate-300 mb-1.5">
                Videos Filmed Per Week
              </label>
              <input
                id="calc-weekly"
                type="number"
                defaultValue={7}
                min={1}
                max={100}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-500">Used to estimate weekly/monthly storage</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Estimated Single Export</span>
              <span id="res-single-mb" className="text-2xl font-extrabold text-emerald-400">122.4 MB</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Formula: (Mbps × sec) ÷ 8</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Weekly Clean Masters</span>
              <span id="res-weekly-gb" className="text-2xl font-extrabold text-indigo-400">0.84 GB / week</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Final exported MP4s only</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Monthly Total (+ Raw A-Roll)</span>
              <span id="res-raw-gb" className="text-2xl font-extrabold text-amber-400">14.1 GB / month</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Assumes ~3.2x raw take ratio</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3">
            *Note: These figures are mathematical storage estimates based on constant bitrate (CBR) math: <code className="text-slate-300">File Size (MB) = (Total Bitrate in Mbps × Duration in Seconds) ÷ 8</code>. Variable bitrate (VBR) exports and platform transcoding will vary based on scene complexity and motion.
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            H.264 vs. HEVC (H.265) for TikTok, Reels &amp; Shorts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            When choosing your export preset in CapCut, Premiere Pro, or DaVinci Resolve, codec selection determines both file size and device playback compatibility:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Codec (.mp4)</th>
                  <th className="py-3 px-4 text-left">Recommended 1080p Bitrate</th>
                  <th className="py-3 px-4 text-left">Compatibility &amp; Tradeoffs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">H.264 (AVC)</td>
                  <td className="py-3 px-4 text-emerald-400">15 – 20 Mbps (VBR)</td>
                  <td className="py-3 px-4">Universal compatibility across web browsers, Android, iOS, and all social schedulers.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">HEVC (H.265)</td>
                  <td className="py-3 px-4 text-emerald-400">8 – 12 Mbps (VBR)</td>
                  <td className="py-3 px-4">~40% smaller file size at equal visual quality, but older Windows browsers or third-party schedulers may reject uploads if tagged as HDR/10-bit.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            For deeper troubleshooting on washed-out HDR colors or blurry uploads, read our <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="text-indigo-400 underline font-semibold">Cross-Posted Video Blur &amp; Color Fix Guide</Link>.
          </p>
        </section>

        {/* Disclosed Monetization Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-900 border border-purple-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
              Automated Cloud Rendering
            </span>
            <span className="text-xs text-slate-400">Sponsored</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Keep Running Out of Phone Storage? Clip in the Cloud with OpusClip
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Instead of storing massive 50 GB raw 4K files on your phone, paste your YouTube or cloud link into <strong>OpusClip</strong>. It processes your footage in the cloud, extracts the best vertical hooks, adds animated captions, and exports pre-optimized 1080p MP4 clips.
          </p>
          <p className="text-[11px] text-slate-400 mb-5">
            Commission Disclosure: We may earn a commission if you sign up through the links below, at no extra cost to you.
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
              Explore ToolSuite Creator Bundle ⚡
            </a>
          </div>
        </div>

        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Related Media Lab &amp; Archiving Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/how-to-organize-backup-social-videos-creator-vault" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Creator Media Vault &amp; Folder System</h3>
              <p className="text-slate-400">How to organize raw camera files and clean 1080p masters across drives.</p>
            </Link>
            <Link href="/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">9:16 Safe Zones &amp; Aspect Ratio Guide</h3>
              <p className="text-slate-400">Keep captions and visual hooks clear of TikTok and Reels UI buttons.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utilities &amp; Guides.</p>
      </footer>
    </div>
  );
}
