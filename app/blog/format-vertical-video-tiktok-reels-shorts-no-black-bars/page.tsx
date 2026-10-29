import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars (2026 Safe Zones)',
  description: 'Master 9:16 vertical video dimensions (1080x1920), UI safe-zone pixel margins, and test your subtitle lines with our interactive Caption Readability Checker.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars',
  },
};

export default function FormatVerticalVideoSafeZonesPage() {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars (2026 Safe Zones)',
        datePublished: '2026-10-08',
        dateModified: '2026-10-29',
        author: {
          '@type': 'Organization',
          name: 'SocialsFetcher Editorial Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SocialsFetcher',
          url: 'https://www.socialsfetcher.com',
        },
        description: 'Complete 9:16 vertical video canvas guide with exact pixel safe zones for TikTok, Instagram Reels, and YouTube Shorts plus an interactive caption layout checker.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.socialsfetcher.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog & Guides', item: 'https://www.socialsfetcher.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Vertical Video Formatting & Safe Zones', item: 'https://www.socialsfetcher.com/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars' },
        ],
      },
    ],
  };

  const captionCheckerScript = `
    document.addEventListener('DOMContentLoaded', function() {
      function evaluateCaptions() {
        var textEl = document.getElementById('cap-text');
        var posEl = document.getElementById('cap-pos');
        var sizeEl = document.getElementById('cap-size');

        var rawText = (textEl && textEl.value) ? textEl.value.trim() : 'Stop making this editing mistake on vertical video';
        var posVal = (posEl && posEl.value) ? parseInt(posEl.value, 10) : 380;
        var fontSize = (sizeEl && sizeEl.value) ? parseInt(sizeEl.value, 10) : 56;

        var charCount = rawText.length;
        var words = rawText ? rawText.split(/\\s+/).length : 0;

        var charOut = document.getElementById('cap-char-out');
        var zoneOut = document.getElementById('cap-zone-out');
        var readOut = document.getElementById('cap-read-out');

        if (charOut) {
          charOut.textContent = charCount + ' chars (' + words + ' words)';
          charOut.className = charCount <= 42 ? 'text-lg font-extrabold text-emerald-400' : (charCount <= 65 ? 'text-lg font-extrabold text-amber-400' : 'text-lg font-extrabold text-red-400');
        }

        if (zoneOut) {
          if (posVal >= 360 && posVal <= 1450) {
            zoneOut.textContent = '✓ Clear of UI Buttons';
            zoneOut.className = 'text-lg font-extrabold text-emerald-400';
          } else if (posVal < 360) {
            zoneOut.textContent = '⚠️ Covered by Bottom Caption/Audio UI';
            zoneOut.className = 'text-lg font-extrabold text-red-400';
          } else {
            zoneOut.textContent = '⚠️ Covered by Top Search/Status Bar';
            zoneOut.className = 'text-lg font-extrabold text-amber-400';
          }
        }

        if (readOut) {
          if (fontSize >= 48 && charCount <= 42) {
            readOut.textContent = 'Optimal Mobile Legibility';
            readOut.className = 'text-lg font-extrabold text-emerald-400';
          } else if (fontSize < 42) {
            readOut.textContent = 'Font Too Small for 6-Inch Screens';
            readOut.className = 'text-lg font-extrabold text-amber-400';
          } else {
            readOut.textContent = 'Split Into 2 Shorter Caption Lines';
            readOut.className = 'text-lg font-extrabold text-amber-400';
          }
        }
      }

      document.addEventListener('input', function(e) {
        if (e.target && e.target.id && e.target.id.indexOf('cap-') === 0) {
          evaluateCaptions();
        }
      });
    });
  `;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: captionCheckerScript }} />

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
          <span className="text-slate-200">Vertical Video Safe Zones &amp; Formatting</span>
        </nav>

        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            9:16 Production Standard • Updated Oct 2026
          </span>
          <span className="text-slate-500">• Includes Interactive Caption Checker</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          How to Format Vertical Video for TikTok, Reels &amp; Shorts Without Black Bars (2026 Safe-Zone Guide)
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Nothing ruins a high-effort short video faster than letterboxed black bars or burned-in subtitles that get buried behind the TikTok username, Instagram audio ticker, or right-hand engagement buttons. Here are the exact 1080x1920 pixel coordinates, aspect ratio conversions, and an interactive readability checker to keep every frame clean across all three platforms.
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-indigo-400 font-semibold">The Universal 9:16 Safe Box:</strong> On a standard <strong>1080 × 1920 px</strong> vertical canvas, keep all burned-in subtitles, lower-thirds, and key visual graphics at least <strong>250 px below the top edge</strong>, <strong>360 px above the bottom edge</strong>, and <strong>140 px clear of the right-hand border</strong>. This central <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">820 × 1310 px</code> zone remains unobstructed across TikTok, Instagram Reels, and YouTube Shorts simultaneously.
          </p>
        </div>

        {/* Interactive Caption Layout & Readability Checker (#19) */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 mb-10 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            Interactive Short-Video Caption Readability &amp; Safe-Zone Checker
          </h2>
          <p className="text-xs text-slate-400 mb-5">
            Test a single subtitle line against 1080x1920 UI overlays and mobile screen legibility rules before burning captions into your master video:
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="cap-text" className="block text-xs font-bold text-slate-300 mb-1.5">
                Sample Subtitle Line (What Appears on Screen at One Time)
              </label>
              <input
                id="cap-text"
                type="text"
                defaultValue="Stop making this editing mistake on vertical video"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-500">Aim for 3 to 7 words (under 42 characters) per 2-line caption block.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cap-pos" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Vertical Y-Offset from Bottom Edge (px on 1920p Canvas)
                </label>
                <select
                  id="cap-pos"
                  defaultValue="380"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
                >
                  <option value="180">180 px from bottom (Default Editor Bottom — DANGER)</option>
                  <option value="280">280 px from bottom (Low — Overlaps Long Descriptions)</option>
                  <option value="380">380 px from bottom (Recommended Lower-Middle Safe Zone)</option>
                  <option value="860">860 px from bottom (Center Frame — Speaker Chin Level)</option>
                  <option value="1600">1600 px from bottom (Top 320px — Overlaps Search/Status UI)</option>
                </select>
              </div>

              <div>
                <label htmlFor="cap-size" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Caption Font Size (px on 1080x1920 Canvas)
                </label>
                <select
                  id="cap-size"
                  defaultValue="56"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:border-indigo-500 focus:outline-none"
                >
                  <option value="34">34 px (Small — Hard to Read on Mobile Feed)</option>
                  <option value="48">48 px (Medium — Standard Clean Subtitle)</option>
                  <option value="56">56 px (Optimal High-Retention Kinetic Size)</option>
                  <option value="72">72 px (Large — Best for 1–3 Word Punchlines)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Line Length Check</span>
              <span id="cap-char-out" className="text-lg font-extrabold text-amber-400">50 chars (8 words)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">UI Overlay Collision</span>
              <span id="cap-zone-out" className="text-lg font-extrabold text-emerald-400">✓ Clear of UI Buttons</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Readability Verdict</span>
              <span id="cap-read-out" className="text-lg font-extrabold text-amber-400">Split Into 2 Shorter Caption Lines</span>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            1. Why Captions Get Hidden Behind Reels, TikTok &amp; Shorts Buttons
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Each vertical platform stacks its interface widgets in slightly different screen regions, and taller phones (like 19.5:9 iPhones) dynamically crop the left and right edges of a 9:16 video to fill the screen:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-800 my-4">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Platform (1080×1920 Canvas)</th>
                  <th className="py-3 px-4 text-left">Top Danger Zone</th>
                  <th className="py-3 px-4 text-left">Bottom Danger Zone</th>
                  <th className="py-3 px-4 text-left">Right-Side Icon Rail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">TikTok</td>
                  <td className="py-3 px-4">Top 210 px (Following/For You + Search)</td>
                  <td className="py-3 px-4 text-amber-400">Bottom 350 px (Handle, Caption, Shop tag, Audio)</td>
                  <td className="py-3 px-4">Right 140 px (Profile, Like, Comment, Save, Share)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Instagram Reels</td>
                  <td className="py-3 px-4">Top 220 px (Reels header &amp; Camera icon)</td>
                  <td className="py-3 px-4 text-amber-400">Bottom 340 px (Author badge, Caption, Audio pill)</td>
                  <td className="py-3 px-4">Right 130 px (Heart, Comment, Paper plane, 3-dots)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">YouTube Shorts</td>
                  <td className="py-3 px-4">Top 240 px (Search, Subscriptions tab, Menu)</td>
                  <td className="py-3 px-4 text-amber-400">Bottom 360 px (Channel Subscribe pill, Title, Remix bar)</td>
                  <td className="py-3 px-4">Right 140 px (Thumbs up/down, Comments, Share, Audio)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            2. Reframing 16:9 Horizontal Footage to 9:16 Without Black Bars
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            When converting a horizontal 1920×1080 YouTube video or livestream into a 1080×1920 vertical clip, avoid leaving empty black bars above and below the frame. Use one of these three layouts instead:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-indigo-400 mb-1">Layout A: Full 9:16 Center Crop</h3>
              <p className="text-slate-300 leading-relaxed">Scale a 1080p clip to ~178% (or ~89% on a 4K source) so it fills the entire 1080×1920 frame. Keyframe X-position to follow the active speaker.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-emerald-400 mb-1">Layout B: 50/50 Split Screen</h3>
              <p className="text-slate-300 leading-relaxed">Best for two-person podcasts or screen tutorials. Place the screen recording in the top 1080×960 half and the speaker facecam in the bottom 1080×960 half.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-purple-400 mb-1">Layout C: 4:5 Portrait Pillar</h3>
              <p className="text-slate-300 leading-relaxed">Crop the video to 4:5 (1080×1350) in the center of a 9:16 canvas over a subtle darkened background, placing your hook title above and captions below.</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Want to make sure your exported file doesn&apos;t get compressed into a blurry mess after reframing? Check your target Mbps in our <Link href="/blog/social-video-bitrate-file-size-calculator" className="text-indigo-400 underline font-semibold">Social Video Bitrate &amp; File-Size Calculator</Link> and review our <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="text-indigo-400 underline font-semibold">Cross-Post Blur Fix Guide</Link>.
          </p>
        </section>

        {/* Disclosed Monetization Block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-900 border border-purple-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
              Automated AI Reframing
            </span>
            <span className="text-xs text-slate-400">Sponsored</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Auto-Crop to 9:16 &amp; Align Safe Zones with OpusClip
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Keyframing speaker faces manually across a 30-minute video takes hours. <strong>OpusClip</strong> uses AI active-speaker detection to automatically reframe horizontal 16:9 videos into full-screen 9:16 vertical clips or split-screen layouts—while keeping animated captions inside platform safe zones.
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
              Try OpusClip Auto-Reframe Free →
            </a>
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-1 text-center py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30 font-bold text-xs sm:text-sm transition"
            >
              Explore ToolSuite Pro Stack ⚡
            </a>
          </div>
        </div>

        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white mb-4">Related Video Production &amp; Caption Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/best-subtitle-caption-generators-short-videos" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">Best Subtitle &amp; Caption Generators</h3>
              <p className="text-slate-400">Compare word-by-word kinetic caption tools and accuracy benchmarks.</p>
            </Link>
            <Link href="/blog/capcut-vs-descript-short-form-video" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <h3 className="font-bold text-white mb-1">CapCut vs Descript Workflow Test</h3>
              <p className="text-slate-400">Which editor handles 9:16 reframing and filler-word cuts faster?</p>
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
