'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Link from 'next/link';

export default function SafeZoneCanvasPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activePlatform, setActivePlatform] = useState<'tiktok' | 'reels' | 'shorts'>('tiktok');
  const [opacity, setOpacity] = useState<number>(75);
  const [dragOver, setDragOver] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      {/* FTC Disclosure */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links.</span>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
            <Link href="/tools/studio-gear-configurator" className="hover:text-indigo-400 transition">Gear Picker</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 text-left">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">9:16 Visual Safe-Zone Overlay Canvas</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            9:16 Canvas Inspector
          </span>
          <span className="text-slate-500">• Supports TikTok, Reels &amp; Shorts</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          9:16 Vertical Safe-Zone Overlay Inspector
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl">
          Upload a frame screenshot or video thumbnail to test subtitle positioning against real-time <strong>TikTok, Instagram Reels, and YouTube Shorts UI overlays</strong> before rendering your master video.
        </p>

        {/* Tool Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Controls Panel (Left Side - 5 Columns) */}
          <div className="lg:col-span-5 space-y-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            
            {/* Step 1: Select Platform */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Platform Interface UI
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActivePlatform('tiktok')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition text-center border ${
                    activePlatform === 'tiktok'
                      ? 'bg-indigo-600 border-indigo-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  TikTok 🎵
                </button>
                <button
                  type="button"
                  onClick={() => setActivePlatform('reels')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition text-center border ${
                    activePlatform === 'reels'
                      ? 'bg-purple-600 border-purple-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Reels 📸
                </button>
                <button
                  type="button"
                  onClick={() => setActivePlatform('shorts')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition text-center border ${
                    activePlatform === 'shorts'
                      ? 'bg-red-600 border-red-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  Shorts ▶️
                </button>
              </div>
            </div>

            {/* Step 2: Upload Frame */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                2. Upload Video Screenshot (9:16)
              </label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-6 border-2 border-dashed rounded-xl text-center cursor-pointer transition ${
                  dragOver ? 'border-indigo-500 bg-indigo-950/40' : 'border-slate-700 bg-slate-950 hover:border-slate-600'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <span className="text-2xl block mb-1">📷</span>
                <span className="text-xs font-bold text-slate-200 block mb-1">
                  Click or drag 9:16 frame image here
                </span>
                <span className="text-[10px] text-slate-500 block">Supports PNG, JPG, WEBP (1080x1920 recommended)</span>
              </div>
            </div>

            {/* Step 3: Overlay Opacity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. UI Overlay Opacity
                </label>
                <span className="text-xs font-mono text-indigo-400">{opacity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Platform Danger Zone Key */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <span className="text-slate-200 font-bold block mb-1">UI Collision Checklist:</span>
              <div className="flex items-center justify-between text-slate-400">
                <span>Top Status / Search Bar:</span>
                <span className="text-red-400 font-mono">Top 220px</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Bottom Caption / Sound Bar:</span>
                <span className="text-amber-400 font-mono">Bottom 360px</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Right Action Icon Rail:</span>
                <span className="text-amber-400 font-mono">Right 140px</span>
              </div>
            </div>

            {/* Software Affiliate Bridge Card */}
            <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/40 space-y-2">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                Automated Alignment
              </span>
              <h4 className="text-xs font-bold text-white">Auto-Fit Subtitles inside Safe Zones</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                OpusClip automatically places animated subtitles inside 9:16 safe margins while keyframing faces.
              </p>
              <a
                href={OPUSCLIP_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-md mt-2"
              >
                Try OpusClip Auto-Fit Free →
              </a>
            </div>

          </div>

          {/* Interactive Phone Screen Canvas Preview (Right Side - 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            
            {/* Phone Screen Mockup Wrapper */}
            <div className="relative w-[320px] h-[568px] sm:w-[360px] sm:h-[640px] rounded-[36px] bg-slate-900 border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Uploaded Image Canvas Background */}
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Uploaded video frame preview"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950 z-0">
                  <span className="text-4xl mb-2 opacity-40">📱</span>
                  <span className="text-xs text-slate-500 max-w-[200px]">
                    No image uploaded yet. Select an image on the left to test safe zones.
                  </span>
                </div>
              )}

              {/* Dynamic Simulated UI Overlays */}
              <div
                className="absolute inset-0 pointer-events-none z-10 transition-opacity flex flex-col justify-between p-4"
                style={{ opacity: opacity / 100 }}
              >
                {/* Top Overlay Header */}
                <div className="w-full pt-2 flex justify-between items-center text-[10px] font-bold text-white drop-shadow">
                  <span>LIVE</span>
                  <div className="flex gap-3 bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                    <span className={activePlatform === 'tiktok' ? 'text-white underline' : 'text-slate-400'}>Following</span>
                    <span className="text-white">For You</span>
                  </div>
                  <span>🔍</span>
                </div>

                {/* Center Universal Safe Box Indicator */}
                <div className="absolute top-[12%] bottom-[20%] left-[4%] right-[16%] border-2 border-dashed border-emerald-400/80 rounded-xl flex items-center justify-center pointer-events-none">
                  <span className="bg-emerald-950/80 text-emerald-400 text-[10px] font-mono px-2 py-1 rounded border border-emerald-700/60 shadow">
                    ✓ Clear Safe Zone (Text &amp; Captions Here)
                  </span>
                </div>

                {/* Right Action Bar Icons */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 text-white drop-shadow text-xs">
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-600 flex items-center justify-center font-bold">👤</div>
                  <div className="flex flex-col items-center"><span className="text-base">❤️</span><span className="text-[9px]">142K</span></div>
                  <div className="flex flex-col items-center"><span className="text-base">💬</span><span className="text-[9px]">1.8K</span></div>
                  <div className="flex flex-col items-center"><span className="text-base">🔖</span><span className="text-[9px]">24K</span></div>
                  <div className="flex flex-col items-center"><span className="text-base">🔄</span><span className="text-[9px]">Share</span></div>
                </div>

                {/* Bottom Caption & Audio Bar */}
                <div className="w-[78%] pb-3 space-y-1 text-left drop-shadow text-white">
                  <span className="text-xs font-bold block">@creatorname • 2h ago</span>
                  <p className="text-[10px] text-slate-200 line-clamp-2 leading-tight">
                    Testing burned-in caption overlay bounds for short-form video optimization #creators #editing
                  </p>
                  <div className="flex items-center gap-1.5 text-[9px] text-slate-300 pt-0.5">
                    <span>🎵</span>
                    <span className="truncate">Original Sound - Creator Studio Audio</span>
                  </div>
                </div>

              </div>

            </div>
            
            <span className="text-[11px] text-slate-500 mt-3 text-center">
              Dashed green line indicates the universal 9:16 unobstructed text safe box.
            </span>
          </div>

        </div>

        {/* Amazon Creator Gear Recommendations */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 mb-10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-indigo-400 bg-indigo-950 border border-indigo-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Native 9:16 Filming Gear
            </span>
            <span className="text-xs text-slate-400">Amazon Partner Recommendations</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Shoot Clean 9:16 Vertical Video Without Heavy Cropping
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Avoid resolution drop and dynamic safe-zone distortion by mounting your phone natively in vertical mode:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">1. 360° Rotating Vertical Phone Tripod Mounts</span>
                <p className="text-slate-400 mb-3">Flip instantly between horizontal and native 9:16 vertical modes without unmounting your phone.</p>
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
                <span className="text-indigo-400 font-bold block mb-1">2. MagSafe AI Face-Tracking Gimbals</span>
                <p className="text-slate-400 mb-3">Keep face framing locked inside the 9:16 green safe box automatically while walking outdoor A-Roll.</p>
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

        {/* Cross-Link Editorial Network */}
        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-base font-bold text-white mb-3">Related Video Production Tools &amp; Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-0.5">Vertical Video Safe-Zone Guide</strong>
              <span className="text-slate-400">Complete pixel dimension specs for 1080x1920 canvas.</span>
            </Link>
            <Link href="/tools/studio-gear-configurator" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-0.5">Studio Gear Configurator</strong>
              <span className="text-slate-400">Build an itemized lighting and camera hardware rig.</span>
            </Link>
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition">
              <strong className="text-white block mb-0.5">Blurry Upload Fix</strong>
              <span className="text-slate-400">Target bitrates and color space conversions.</span>
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
