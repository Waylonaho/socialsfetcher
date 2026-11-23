import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import QuickCopyBar from '@/components/QuickCopyBar';
import WorkflowBar from '@/components/WorkflowBar';

export const metadata: Metadata = {
  title: '2026 Social Media Video Specs, Bitrates & Safe-Zone Dimensions (Cheat Sheet)',
  description:
    'Complete 2026 technical reference for TikTok, Instagram Reels, YouTube Shorts, and X video uploads: exact pixel resolutions, safe-zone margins, max file sizes, and target bitrates.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/specs',
  },
};

export default function VideoSpecsReferencePage() {
  const EPIDEMIC_LINK = 'https://share.epidemicsound.com/mvog5c';
  const OPUSCLIP_LINK = 'https://opus.pro/?via=waylon';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '2026 Social Media Video Specs, Bitrates & Safe-Zone Dimensions',
    description:
      'Verified 2026 upload specifications, pixel safe zones, audio sample rates, and bitrate caps for TikTok, Instagram Reels, YouTube Shorts, and X.',
    author: {
      '@type': 'Organization',
      name: 'SocialsFetcher Studio Team',
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>
          Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on partner links on this page.
        </span>
      </div>

      <SiteHeader />

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 text-left w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">2026 Video Specs &amp; Safe-Zone Cheat Sheet</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Verified 2026 Technical Reference
          </span>
          <span className="text-slate-400">• Tested by SocialsFetcher Studio Team</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          2026 Social Media Video Specs, Bitrates &amp; Safe-Zone Cheat Sheet
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
          Bookmarkable engineering specifications for vertical and horizontal video exports across <strong>TikTok, Instagram Reels, YouTube Shorts, and X (Twitter)</strong>. Match these export settings to prevent aggressive server-side re-compression.
        </p>

        {/* Master Spec Comparison Table */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            1. Master Resolution, Frame Rate &amp; Bitrate Matrix (2026)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-300 uppercase">
                <tr>
                  <th className="p-4">Platform</th>
                  <th className="p-4">Ideal Dimensions</th>
                  <th className="p-4">Target Bitrate</th>
                  <th className="p-4">Max File Size</th>
                  <th className="p-4">Audio Codec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white">TikTok</td>
                  <td className="p-4 font-mono">1080 × 1920 (9:16)</td>
                  <td className="p-4 text-emerald-400 font-mono">10–14 Mbps (60fps)</td>
                  <td className="p-4">287 MB (iOS) / 500 MB (Web)</td>
                  <td className="p-4">AAC-LC, 44.1/48 kHz, 192+ kbps</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Instagram Reels</td>
                  <td className="p-4 font-mono">1080 × 1920 (9:16)</td>
                  <td className="p-4 text-emerald-400 font-mono">8–12 Mbps (30/60fps)</td>
                  <td className="p-4">Up to 4 GB (60 mins max)</td>
                  <td className="p-4">AAC, 48 kHz Stereo, 128–256 kbps</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">YouTube Shorts</td>
                  <td className="p-4 font-mono">1080 × 1920 / 2160 × 3840</td>
                  <td className="p-4 text-emerald-400 font-mono">12–15 Mbps (1080p) / 45 Mbps (4K)</td>
                  <td className="p-4">Up to 256 GB (3 mins max)</td>
                  <td className="p-4">AAC-LC, 48 kHz, 320 kbps</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">X (Twitter)</td>
                  <td className="p-4 font-mono">1080 × 1920 or 1920 × 1080</td>
                  <td className="p-4 text-emerald-400 font-mono">8–12 Mbps (60fps)</td>
                  <td className="p-4">512 MB (Free) / 8 GB (Premium)</td>
                  <td className="p-4">AAC-LC, 44.1 kHz, 128+ kbps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safe Zone Pixel Margins Table */}
        <section className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              2. UI Overlay &amp; Caption Safe-Zone Pixel Margins (1080 × 1920 Canvas)
            </h2>
            <Link
              href="/tools/safe-zone-canvas"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300"
            >
              Test Your Frame Live in Safe-Zone Canvas →
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Keep burned-in captions, hooks, and CTAs inside the <strong>Universal Center Safe Box (840 × 1250 px)</strong> so native buttons never block your text:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-300 uppercase">
                <tr>
                  <th className="p-4">Platform</th>
                  <th className="p-4">Top Margin (Search / Tabs)</th>
                  <th className="p-4">Bottom Margin (Captions / Audio)</th>
                  <th className="p-4">Right Margin (Like / Share Stack)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white">TikTok</td>
                  <td className="p-4 font-mono text-amber-400">150 px</td>
                  <td className="p-4 font-mono text-red-400">420 px</td>
                  <td className="p-4 font-mono text-amber-400">140 px</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Instagram Reels</td>
                  <td className="p-4 font-mono text-amber-400">210 px</td>
                  <td className="p-4 font-mono text-red-400">390 px</td>
                  <td className="p-4 font-mono text-amber-400">135 px</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">YouTube Shorts</td>
                  <td className="p-4 font-mono text-amber-400">140 px</td>
                  <td className="p-4 font-mono text-red-400">360 px</td>
                  <td className="p-4 font-mono text-amber-400">150 px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick-Copy Render Presets */}
        <QuickCopyBar
          title="1-Click Export & Naming Presets"
          items={[
            { label: 'Universal 1080p Vertical Export', value: '1080x1920 | H.264 High | 60fps | 12 Mbps CBR | AAC 48kHz' },
            { label: 'Master Archive File Naming Template', value: '2026-11_Platform_HookTopic_1080p60_MASTER.mp4' },
            { label: 'Safe-Zone Center Margin Rule', value: 'Top: 210px | Bottom: 420px | Left: 60px | Right: 150px' },
            { label: 'FTC Affiliate Disclosure Line', value: 'Disclosure: As an Amazon Associate I earn from qualifying purchases.' },
          ]}
        />

        {/* Dual Software Conversion Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                Automated Spec Formatting
              </span>
              <h3 className="text-base font-bold text-white mt-1 mb-1">
                Auto-Crop &amp; Export to Exact 9:16 Specs with OpusClip
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Skip manual sequence setup—OpusClip automatically tracks active speakers, places captions inside safe margins, and renders 1080p MP4 masters.
              </p>
            </div>
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
            >
              Auto-Format Clips in OpusClip →
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                48kHz Commercial Audio
              </span>
              <h3 className="text-base font-bold text-white mt-1 mb-1">
                Download High-Bitrate Stems &amp; SFX on Epidemic Sound
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Export uncompressed WAV and 320kbps tracks cleared for monetization across YouTube Shorts, TikTok Creator Rewards, and brand deals.
              </p>
            </div>
            <a
              href={EPIDEMIC_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
            >
              Start Free 30-Day Epidemic Sound Trial →
            </a>
          </div>
        </section>

        <WorkflowBar />
      </main>
    </div>
  );
}
