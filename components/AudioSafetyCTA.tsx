import React from 'react';

export default function AudioSafetyCTA() {
  const EPIDEMIC_LINK = "https://share.epidemicsound.com/mvog5c";

  return (
    <aside className="my-8 p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 shadow-xl text-left space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 border border-indigo-800 px-2.5 py-0.5 rounded-full">
          Copyright &amp; Monetization Protection
        </span>
        <span className="text-[11px] text-slate-400">Partner Recommendation</span>
      </div>

      <h3 className="text-lg font-bold text-white">
        Avoid Muted Videos &amp; Copyright Strikes When Reposting
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Extracted trending audio from TikTok or Instagram Reels is only licensed for in-app use—re-uploading it to YouTube Shorts or monetized channels often triggers instant muting or Content ID claims. Soundtrack your edits with <strong>55,000+ royalty-free tracks and 250,000+ sound effects</strong> cleared forever across every platform.
      </p>

      <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href={EPIDEMIC_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center transition shadow-md"
        >
          Try Epidemic Sound Free for 30 Days →
        </a>
        <span className="text-[11px] text-slate-400">
          Includes full stem downloads &amp; commercial clearance.
        </span>
      </div>
    </aside>
  );
}
