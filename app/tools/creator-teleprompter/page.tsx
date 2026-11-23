'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CreatorTeleprompterPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const [script, setScript] = useState<string>(
    "Stop scrolling if your short-form videos are getting stuck at 200 views.\n\nMost creators lose 70% of their audience in the first 2.5 seconds because their opening line takes too long to get to the point.\n\nInstead of starting with 'Hey guys, welcome back,' open with the exact result or mistake your viewer wants to avoid.\n\nSave this script timer and test it on your next upload."
  );
  const [wpm, setWpm] = useState<number>(145);
  const [fontSize, setFontSize] = useState<number>(36);
  const [isMirrored, setIsMirrored] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const wordCount = script.trim() ? script.trim().split(/\s+/).length : 0;
  const estimatedSeconds = Math.round((wordCount / wpm) * 60);

  useEffect(() => {
    if (!isScrolling) return;

    const pixelsPerSecond = (wpm / 60) * (fontSize * 0.65);
    let lastTime = performance.now();
    let animationFrameId: number;

    const step = (now: number) => {
      const deltaSeconds = (now - lastTime) / 1000;
      lastTime = now;

      if (scrollerRef.current) {
        scrollerRef.current.scrollTop += pixelsPerSecond * deltaSeconds;
        const { scrollTop, scrollHeight, clientHeight } = scrollerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 2) {
          setIsScrolling(false);
          return;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isScrolling, wpm, fontSize]);

  const handleReset = () => {
    setIsScrolling(false);
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software partner links.</span>
      </div>

      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-5 text-xs sm:text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">All Tools</Link>
            <Link href="/tools/hook-scorer" className="hover:text-indigo-400 transition">Hook Scorer</Link>
            <Link href="/tools/safe-zone-canvas" className="hover:text-indigo-400 transition">Safe-Zone</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 text-left w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Creator Teleprompter &amp; Script Timer</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            On-Camera Studio Tool
          </span>
          <span className="text-slate-500">• Supports Mirror Mode &amp; WPM Timing</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Creator Teleprompter &amp; Script Timer
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
          Maintain direct eye contact with your camera lens while hitting exact short-form pacing targets. Paste your script below, verify your runtime, and hit Play.
        </p>

        {/* Live Stats Strip */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">Word Count</span>
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">{wordCount} words</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">Est. Video Length</span>
            <span className={`text-xl sm:text-2xl font-extrabold font-mono ${estimatedSeconds <= 60 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {estimatedSeconds}s
            </span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">Pacing Target</span>
            <span className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-mono">{wpm} WPM</span>
          </div>
        </div>

        {/* Teleprompter Reader Viewport */}
        <div
          className={`${
            isFullscreen
              ? 'fixed inset-0 z-50 bg-black flex flex-col justify-between p-4 sm:p-8'
              : 'rounded-2xl bg-black border-2 border-slate-800 shadow-2xl overflow-hidden mb-8'
          }`}
        >
          {/* Control Bar */}
          <div className="bg-slate-900 border-b border-slate-800 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsScrolling(!isScrolling)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                  isScrolling
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isScrolling ? '⏸ Pause' : '▶ Start Scroll'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
              >
                ↺ Reset
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <label className="flex items-center gap-2 text-slate-300">
                <span>Speed:</span>
                <input
                  type="range"
                  min="90"
                  max="220"
                  step="5"
                  value={wpm}
                  onChange={(e) => setWpm(Number(e.target.value))}
                  className="w-20 accent-indigo-500"
                />
              </label>

              <label className="flex items-center gap-2 text-slate-300">
                <span>Size:</span>
                <input
                  type="range"
                  min="22"
                  max="64"
                  step="2"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-20 accent-indigo-500"
                />
              </label>

              <button
                type="button"
                onClick={() => setIsMirrored(!isMirrored)}
                className={`px-3 py-1.5 rounded-lg font-bold border transition ${
                  isMirrored
                    ? 'bg-indigo-600 border-indigo-400 text-white'
                    : 'bg-slate-950 border-slate-700 text-slate-400'
                }`}
              >
                🪞 Mirror
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
              >
                {isFullscreen ? '✕ Exit Fullscreen' : '⛶ Fullscreen'}
              </button>
            </div>
          </div>

          {/* Scrolling Text Area with Eye-Line Marker */}
          <div className="relative">
            <div className="absolute top-1/3 left-0 right-0 border-y border-indigo-500/40 bg-indigo-500/5 h-16 pointer-events-none flex items-center justify-between px-3">
              <span className="text-[10px] font-mono text-indigo-400 uppercase">▶ Eye Line</span>
              <span className="text-[10px] font-mono text-indigo-400 uppercase">◀</span>
            </div>

            <div
              ref={scrollerRef}
              style={{
                fontSize: `${fontSize}px`,
                transform: isMirrored ? 'scaleX(-1)' : 'none',
              }}
              className={`${
                isFullscreen ? 'h-[75vh]' : 'h-[360px]'
              } overflow-y-auto px-6 sm:px-14 py-28 text-center font-bold leading-snug text-white whitespace-pre-wrap select-none`}
            >
              {script || 'Paste your script in the editor below to begin...'}
            </div>
          </div>
        </div>

        {/* Script Editor Box */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-10 space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="script-editor" className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Edit Your Script
            </label>
            <button
              type="button"
              onClick={() => setScript('')}
              className="text-xs text-slate-400 hover:text-red-400 transition"
            >
              Clear Script
            </button>
          </div>
          <textarea
            id="script-editor"
            rows={7}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="Paste or type your video script here..."
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm leading-relaxed focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Monetization Grid: Amazon Teleprompter Gear + OpusClip */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950 border border-indigo-800 px-2.5 py-0.5 rounded-full uppercase">
                Studio Hardware Upgrade
              </span>
              <h2 className="text-lg font-bold text-white mt-2 mb-1">
                Beam-Splitter Teleprompter Rigs &amp; Remotes
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Use our <strong>Mirror Mode</strong> above with a physical glass teleprompter hood so you can read directly over your camera lens without eye-darting.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href={`https://www.amazon.com/s?k=portable+teleprompter+for+iphone+and+dslr+camera&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
              >
                Shop Teleprompter Rigs on Amazon →
              </a>
              <a
                href={`https://www.amazon.com/s?k=bluetooth+scrolling+ring+remote+teleprompter&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
              >
                Shop Bluetooth Scroll Remotes →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full uppercase">
                Post-Production AI
              </span>
              <h2 className="text-lg font-bold text-white mt-2 mb-1">
                Turn Raw Teleprompter Takes into Viral Clips
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recorded a long talking-head take? Upload your raw file to OpusClip to automatically remove pauses, add dynamic captions, and reframe to 9:16.
              </p>
            </div>
            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-md"
            >
              Auto-Edit &amp; Caption in OpusClip Free →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
