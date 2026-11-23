'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import WorkflowBar from '@/components/WorkflowBar';

type AudioSource = 'tiktok_library' | 'commercial_song' | 'epidemic_licensed' | 'original_voice';
type VisualSource = 'original_camera' | 'reposted_clip' | 'transformative_commentary';
type AccountType = 'personal_organic' | 'monetized_creator' | 'brand_sponsored';

export default function CopyrightChecklistPage() {
  const AMAZON_TAG = "socialsfetcher-20";
  const EPIDEMIC_LINK = "https://share.epidemicsound.com/mvog5c";
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const [audioSource, setAudioSource] = useState<AudioSource>('tiktok_library');
  const [visualSource, setVisualSource] = useState<VisualSource>('original_camera');
  const [accountType, setAccountType] = useState<AccountType>('monetized_creator');
  const [crossPosting, setCrossPosting] = useState<boolean>(true);

  const evaluateRisk = () => {
    let riskScore = 0;
    const flags: { level: 'high' | 'warn' | 'safe'; title: string; detail: string }[] = [];

    if (audioSource === 'commercial_song') {
      riskScore += 55;
      flags.push({
        level: 'high',
        title: 'Commercial / Unlicensed Music Detected',
        detail: 'Uploading mainstream songs directly inside your video file triggers automated Content ID muting, blocked monetization, and potential copyright strikes across YouTube Shorts, Reels, and TikTok.',
      });
    } else if (audioSource === 'tiktok_library') {
      if (crossPosting) {
        riskScore += 45;
        flags.push({
          level: 'high',
          title: 'Cross-Platform Audio License Violation',
          detail: 'TikTok in-app sounds are only cleared inside TikTok. Downloading and reposting that video to YouTube Shorts or Instagram Reels frequently causes muted audio or demonetization.',
        });
      }
      if (accountType === 'brand_sponsored' || accountType === 'monetized_creator') {
        riskScore += 30;
        flags.push({
          level: 'warn',
          title: 'Commercial / Monetization Library Restriction',
          detail: 'Standard in-app trending tracks cannot be used in sponsored brand deals, boosted posts, or business accounts without a direct commercial license.',
        });
      }
      if (!crossPosting && accountType === 'personal_organic') {
        flags.push({
          level: 'safe',
          title: 'Cleared for Single-Platform Organic Post',
          detail: 'Safe for organic personal posts on that single platform, provided you do not export and cross-post the audio elsewhere.',
        });
      }
    } else if (audioSource === 'epidemic_licensed') {
      flags.push({
        level: 'safe',
        title: 'Direct Cross-Platform Commercial Clearance',
        detail: 'Tracks licensed through Epidemic Sound (with safelisted channels) are cleared forever across YouTube, TikTok, Instagram, podcasts, and sponsored brand content.',
      });
    } else {
      flags.push({
        level: 'safe',
        title: '100% Original Audio / Voiceover',
        detail: 'Original voiceovers and self-produced audio carry zero third-party music claim risk and qualify for full creator fund monetization.',
      });
    }

    if (visualSource === 'reposted_clip') {
      riskScore += 45;
      flags.push({
        level: 'high',
        title: 'Unoriginal / Re-Uploaded Visual Content Flag',
        detail: 'TikTok Creator Rewards and YouTube Shorts Partner Program disqualify unedited re-uploads. Add spoken commentary, face-cam reaction, or dynamic captions to make it transformative.',
      });
    } else if (visualSource === 'transformative_commentary') {
      riskScore += 10;
      flags.push({
        level: 'warn',
        title: 'Transformative Fair-Use Editing Required',
        detail: 'Ensure your voiceover, on-screen analysis, and visual cuts add clear educational or commentary value beyond the source clip.',
      });
    } else {
      flags.push({
        level: 'safe',
        title: 'Original Camera / Screen-Recorded Footage',
        detail: 'Original visuals pass platform originality checks cleanly.',
      });
    }

    const finalRisk = Math.min(100, riskScore);
    const status =
      finalRisk >= 45 ? 'HIGH RISK' : finalRisk >= 20 ? 'MODERATE CAUTION' : 'CLEARED TO PUBLISH';

    return { finalRisk, status, flags };
  };

  const audit = evaluateRisk();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases. We may earn commissions on software &amp; music licensing partner links.</span>
      </div>

      <SiteHeader />

      <main className="flex-grow max-w-5xl mx-auto px-4 py-10 text-left w-full">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Copyright &amp; Demonetization Risk Checker</span>
        </nav>

        <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
          <span className="bg-indigo-950 border border-indigo-700/60 text-indigo-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Pre-Upload Compliance Audit
          </span>
          <span className="text-slate-500">• TikTok Creator Rewards, Shorts &amp; Reels</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Short-Form Copyright &amp; Demonetization Risk Checker
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
          Verify whether your background music, extracted audio, and video clips are safe from muting, Content ID claims, and originality strikes before you hit publish.
        </p>

        {/* Interactive Audit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-7 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Where did your background music / audio come from?
              </label>
              <select
                value={audioSource}
                onChange={(e) => setAudioSource(e.target.value as AudioSource)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="tiktok_library">In-App TikTok / Reels Trending Sound</option>
                <option value="commercial_song">Commercial Song / Extracted MP3 from Another Video</option>
                <option value="epidemic_licensed">Epidemic Sound / Direct Royalty-Free License</option>
                <option value="original_voice">100% Original Voiceover / No Music</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. What type of video footage are you publishing?
              </label>
              <select
                value={visualSource}
                onChange={(e) => setVisualSource(e.target.value as VisualSource)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="original_camera">Original Camera / Phone Recording</option>
                <option value="transformative_commentary">Transformative Reaction / Commentary / Podcast Clip</option>
                <option value="reposted_clip">Unedited Repost / Compilation Clip</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Account &amp; Monetization Goal
              </label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value as AccountType)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="monetized_creator">Monetized Creator (YouTube Shorts / TikTok Rewards)</option>
                <option value="brand_sponsored">Brand Deal / Sponsored Post / Business Account</option>
                <option value="personal_organic">Personal Account (Non-Monetized Organic)</option>
              </select>
            </div>

            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={crossPosting}
                onChange={(e) => setCrossPosting(e.target.checked)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-xs text-slate-200 font-medium">
                I plan to cross-post this exact video file to multiple platforms (TikTok + Reels + Shorts)
              </span>
            </label>
          </div>

          <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-indigo-500/40 shadow-xl space-y-5">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Pre-Upload Clearance Status
              </span>
              <div
                className={`text-2xl font-extrabold tracking-tight ${
                  audit.finalRisk >= 45
                    ? 'text-red-400'
                    : audit.finalRisk >= 20
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}
              >
                {audit.status}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">
                Estimated Claim / Mute Risk: <strong className="text-white">{audit.finalRisk}%</strong>
              </span>
            </div>

            <div className="space-y-3">
              {audit.flags.map((flag, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                    flag.level === 'high'
                      ? 'bg-red-950/30 border-red-800/60 text-red-200'
                      : flag.level === 'warn'
                      ? 'bg-amber-950/30 border-amber-800/60 text-amber-200'
                      : 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                  }`}
                >
                  <strong className="block">
                    {flag.level === 'high' ? '🚨 ' : flag.level === 'warn' ? '⚠️ ' : '✅ '}
                    {flag.title}
                  </strong>
                  <p className="leading-relaxed opacity-90">{flag.detail}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40 space-y-2">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">
                100% Copyright-Safe Audio Solution
              </span>
              <h3 className="text-xs font-bold text-white">
                Eliminate Muted Reels &amp; Demonetization Forever
              </h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Get unlimited access to 55,000+ studio tracks and 250,000+ sound effects cleared forever across YouTube, TikTok, Reels, and brand deals.
              </p>
              <a
                href={EPIDEMIC_LINK}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-md mt-2"
              >
                Start Free 30-Day Epidemic Sound Trial →
              </a>
            </div>
          </div>
        </div>

        {/* Transformative Editing Bridge (OpusClip) */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
              Originality &amp; Repurposing AI
            </span>
            <h2 className="text-base font-bold text-white">
              Make Repurposed Clips Transformative with Dynamic Captions &amp; AI B-Roll
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automatically reframe horizontal podcasts, highlight active speakers, and layer animated captions so your clips pass platform originality checks.
            </p>
          </div>
          <a
            href={OPUSCLIP_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shrink-0 shadow-md"
          >
            Repurpose Safely in OpusClip →
          </a>
        </section>

        {/* Amazon Associates Original Voiceover & Audio Hardware */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              100% Original Audio Gear
            </span>
            <span className="text-xs text-slate-400">Amazon Studio Gear</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Record Transformative Voiceovers That Pass Originality Checks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Adding your own studio-quality voiceover commentary is the single most reliable way to transform reaction or news clips into original, monetizable content:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">1. USB Podcast &amp; Voiceover Microphone Bundles</span>
                <p className="text-slate-400 mb-3">Plug-and-play cardioid mics with boom arms for broadcast-grade commentary tracks without background hiss.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=usb+podcast+microphone+boom+arm+kit&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Voiceover Mics on Amazon →
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-indigo-400 font-bold block mb-1">2. Closed-Back Studio Monitoring Headphones</span>
                <p className="text-slate-400 mb-3">Verify voice-to-music balance and catch background audio bleed before publishing to Shorts or Reels.</p>
              </div>
              <a
                href={`https://www.amazon.com/s?k=closed+back+studio+monitoring+headphones&tag=${AMAZON_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
              >
                Check Studio Headphones on Amazon →
              </a>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 text-center pt-1">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </section>

        <WorkflowBar />
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
