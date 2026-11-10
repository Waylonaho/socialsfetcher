import type { Metadata } from 'next';
import Link from 'next/link';
import ToolClient from './ToolClient';

interface PageProps {
  params: Promise<{
    platform: string;
    action: string;
    modifier: string;
  }>;
}

export async function generateStaticParams() {
  const platforms = ['tiktok', 'instagram', 'youtube', 'twitter'];
  const actions = ['download', 'reels', 'shorts', 'video'];
  const modifiers = [
    'no-watermark',
    'downloader',
    'saver',
    'mp4',
    'high-quality',
    '1080p-hd',
    'without-watermark',
    'audio-extract',
    'mp3'
  ];

  const paths = [];
  for (const platform of platforms) {
    for (const action of actions) {
      for (const modifier of modifiers) {
        paths.push({ platform, action, modifier });
      }
    }
  }
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { platform, action, modifier } = await params;
  const pName = platform.charAt(0).toUpperCase() + platform.slice(1);
  const mName = modifier.replace(/-/g, ' ');

  return {
    title: `Free ${pName} ${action.toUpperCase()} (${mName.toUpperCase()}) — SocialsFetcher`,
    description: `Extract, convert, and save public ${pName} ${action} clips in high definition (${mName}). Free online media utility for vertical video editors.`,
    alternates: {
      canonical: `https://www.socialsfetcher.com/${platform}/${action}/${modifier}`,
    },
  };
}

export default async function DynamicToolPage({ params }: PageProps) {
  const { platform, action, modifier } = await params;
  const pName = platform.charAt(0).toUpperCase() + platform.slice(1);
  const cleanMod = modifier.replace(/-/g, ' ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${pName} ${action} ${cleanMod} Utility`,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
            <Link href="/tools/studio-gear-configurator" className="hover:text-indigo-400 transition hidden sm:inline">Gear Picker</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex justify-center items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="capitalize text-slate-200">{platform} {action} {cleanMod}</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white capitalize tracking-tight">
          {pName} {action} Extractor <span className="text-indigo-400">({cleanMod})</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Paste any public {pName} video link below to analyze, convert, and extract master-quality media files without watermarks.
        </p>

        {/* Client Interactivity Component */}
        <ToolClient platform={platform} action={action} modifier={modifier} />

        {/* Educational Content Section for Googlebot Crawling */}
        <section className="mt-16 text-left space-y-6 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white">How to Process &amp; Convert {pName} Video Masters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-indigo-400 block mb-1">1. Copy Video URL</strong>
              <p className="text-slate-400">Open {pName}, tap the Share button on your target video, and select &quot;Copy Link&quot;.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-indigo-400 block mb-1">2. Extract Uncompressed Stream</strong>
              <p className="text-slate-400">Paste the URL above to isolate clean 1080p MP4 containers or 320kbps audio stems.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-indigo-400 block mb-1">3. Repurpose Across Platforms</strong>
              <p className="text-slate-400">Use our safe-zone and bitrate calculators before cross-posting to prevent compression blur.</p>
            </div>
          </div>
        </section>

        {/* Cross-Link SEO Network */}
        <section className="mt-12 text-left border-t border-slate-800 pt-8 space-y-4">
          <h2 className="text-lg font-bold text-white">Related Creator Media Utilities &amp; Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-1">Why Cross-Posted Video Looks Blurry</strong>
              <span className="text-slate-400">Fix resolution drop and color-space shifts across Reels and TikTok.</span>
            </Link>
            <Link href="/tools/studio-gear-configurator" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-1">Interactive Studio Gear Configurator</strong>
              <span className="text-slate-400">Build an itemized studio lighting, audio, and camera setup.</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
