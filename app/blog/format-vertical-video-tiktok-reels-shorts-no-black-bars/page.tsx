import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars (2026 Safe Zones)',
  description: 'Master 9:16 vertical video dimensions (1080x1920), UI safe-zone pixel margins, vertical phone tripod mounts, and test your subtitles with our interactive Caption Checker.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars',
  },
};

export default function FormatVerticalVideoSafeZonesPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars (2026 Safe Zones)',
        datePublished: '2026-10-08',
        dateModified: '2026-11-05',
        author: {
          '@type': 'Organization',
          name: 'SocialsFetcher Editorial Team',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SocialsFetcher',
          url: 'https://www.socialsfetcher.com',
        },
        description: 'Complete 9:16 vertical video canvas guide with exact pixel safe zones for TikTok, Instagram Reels, and YouTube Shorts, interactive caption layout checker, and vertical filming hardware.',
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

      {/* Mandatory FTC & Amazon Associates Disclosure */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may also earn commissions on software partner links on this page.</span>
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
            9:16 Production Standard • Updated Nov 2026
          </span>
          <span className="text-slate-500">• Includes Interactive Caption Checker &amp; Hardware Rigs</span>
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

        {/* Interactive Caption Layout & Readability Checker */}
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

        {/* Amazon Associates Gear Recommendations */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 mb-10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-indigo-400 bg-indigo-950 border border-indigo-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Vertical Filming Hardware Rigs
            </span>
            <span className="text-xs text-slate-400">Amazon Partner Recommendations</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Recommended Tripods &amp; Mounts for Native 9:16 Filming
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Filming horizontally and cropping later reduces video resolution by up to 60%. Mount your smartphone natively in vertical 9:16 orientation using these tested hardware setups:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">1. 360-Degree Rotating Phone Tripods</span>
                <p className="text-slate-400 mb-3">60-inch+ extendable tripod stands with locking ballheads that flip instantly between horizontal and vertical 9:16 modes.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=rotating+vertical+phone+tripod+stand&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block text-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Vertical Tripods on Amazon →
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">2. MagSafe &amp; Smartphone Tracking Gimbals</span>
                <p className="text-slate-400 mb-3">3-axis handheld gimbals with AI face-tracking that keep your head locked inside the 9:16 safe zone while walking.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=magsafe+phone+gimbal+stabilizer+tracking&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block text-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Phone Gimbals on Amazon →
              </a>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 text-center pt-2">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            1. Why Captions Get Hidden Behind Reels, TikTok &amp; Shorts Buttons
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Each vertical platform stacks its interface widgets in slightly different screen regions:
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
                  <td className="py-3 px-4 text-amber-400">Bottom 350 px (Handle, Caption, Audio)</td>
                  <td className="py-3 px-4">Right 140 px (Profile, Like, Comment, Save, Share)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Instagram Reels</td>
                  <td className="py-3 px-4">Top 220 px (Reels header &amp; Camera icon)</td>
                  <td className="py-3 px-4 text-amber-400">Bottom 340 px (Author badge, Caption)</td>
                  <td className="py-3 px-4">Right 130 px (Heart, Comment, Paper plane, 3-dots)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">YouTube Shorts</td>
                  <td className="py-3 px-4">Top 240 px (Search, Subscriptions tab, Menu)</td>
                  <td className="py-3 px-4 text-amber-400">Bottom 360 px (Channel Subscribe pill, Title)</td>
                  <td className="py-3 px-4">Right 140 px (Thumbs up/down, Comments, Share)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclosed Software Monetization Block */}
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
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
