import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/60 text-slate-400 text-xs mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        <div className="space-y-3">
          <Link href="/" className="text-lg font-extrabold text-indigo-400 block">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Pre-flight creator utilities, 1080p stream extractors, safe-zone overlays, and monetization calculators built for modern short-form video production.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
            Creator Studio Tools
          </h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/tools/rpm-calculator" className="hover:text-indigo-400 transition">2026 RPM &amp; Payout Calculator</Link></li>
            <li><Link href="/tools/copyright-checklist" className="hover:text-indigo-400 transition">Copyright &amp; Mute Risk Checker</Link></li>
            <li><Link href="/tools/creator-teleprompter" className="hover:text-indigo-400 transition">Teleprompter &amp; Script Timer</Link></li>
            <li><Link href="/tools/hook-scorer" className="hover:text-indigo-400 transition">Viral Hook Retention Scorer</Link></li>
            <li><Link href="/tools/safe-zone-canvas" className="hover:text-indigo-400 transition">9:16 Safe-Zone Overlay Canvas</Link></li>
            <li><Link href="/tools/bitrate-calculator" className="hover:text-indigo-400 transition">Bitrate &amp; File Size Calculator</Link></li>
            <li><Link href="/tools/studio-gear-configurator" className="hover:text-indigo-400 transition">Studio Gear Configurator</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
            Stream Extractors
          </h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok No-Watermark Saver</Link></li>
            <li><Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Instagram Reels 1080p Downloader</Link></li>
            <li><Link href="/youtube/shorts/saver" className="hover:text-indigo-400 transition">YouTube Shorts MP4 Saver</Link></li>
            <li><Link href="/twitter/video/mp4" className="hover:text-indigo-400 transition">X / Twitter Video Extractor</Link></li>
            <li><Link href="/download/hd-4k" className="hover:text-indigo-400 transition">Universal HD/4K Media Fetcher</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
            Resources &amp; Compliance
          </h3>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/specs" className="hover:text-indigo-400 transition">2026 Video Specs &amp; Safe Zones</Link></li>
            <li><Link href="/about" className="hover:text-indigo-400 transition">About &amp; Testing Methodology</Link></li>
            <li><Link href="/blog" className="hover:text-indigo-400 transition">All Creator Production Guides</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy &amp; Terms</Link></li>
          </ul>
          <p className="text-[10px] text-slate-500 pt-2 leading-relaxed">
            Disclosure: As an Amazon Associate I earn from qualifying purchases. Partner links may generate commissions at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-4 px-4 text-center text-[11px] text-slate-500">
        © 2026 SocialsFetcher.com — Built for Short-Form Creators.
      </div>
    </footer>
  );
}
