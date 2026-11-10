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
  const modifiers = ['no-watermark', 'downloader', 'saver', 'mp4'];

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
  const mName = modifier.replace('-', ' ');

  return {
    title: `Free ${pName} Video ${action.toUpperCase()} (${mName.toUpperCase()}) — SocialsFetcher`,
    description: `Download and extract ${pName} clips in high quality. Free online downloader utility for vertical video creators.`,
    alternates: {
      canonical: `https://www.socialsfetcher.com/${platform}/${action}/${modifier}`,
    },
  };
}

export default async function DynamicToolPage({ params }: PageProps) {
  const { platform, action, modifier } = await params;
  const pName = platform.charAt(0).toUpperCase() + platform.slice(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${pName} ${action} ${modifier} Downloader`,
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
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex justify-center items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="capitalize text-slate-200">{platform} {action} {modifier}</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white capitalize">
          {pName} {action} ({modifier.replace('-', ' ')})
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Paste any public {pName} video link below to process and extract your media file.
        </p>

        {/* Client Component for Interactivity */}
        <ToolClient platform={platform} action={action} modifier={modifier} />

        <section className="mt-16 text-left border-t border-slate-800 pt-8 space-y-4">
          <h2 className="text-lg font-bold text-white">Related Creator Media Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-1">Blurry Video Upload Fix</strong>
              <span className="text-slate-400">Target bitrates and color space fixes for 1080p vertical uploads.</span>
            </Link>
            <Link href="/tools/studio-gear-configurator" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-1">Studio Gear Configurator</strong>
              <span className="text-slate-400">Build an itemized lighting, audio, and camera rig.</span>
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
