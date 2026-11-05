'use client';

import { useState } from 'react';
import Link from 'next/link';

interface GearItem {
  category: string;
  name: string;
  why: string;
  amazonQuery: string;
}

export default function StudioGearConfiguratorPage() {
  const AMAZON_TAG = "socialsfetcher-20";

  const [format, setFormat] = useState<'tiktok' | 'youtube' | 'faceless'>('tiktok');
  const [environment, setEnvironment] = useState<'bedroom' | 'office' | 'mobile'>('bedroom');
  const [budget, setBudget] = useState<'budget' | 'mid' | 'pro'>('budget');

  const getRecommendedGear = (): GearItem[] => {
    const items: GearItem[] = [];

    // 1. Lighting Selection
    if (environment === 'bedroom' || environment === 'office') {
      if (budget === 'budget') {
        items.push({
          category: 'Lighting',
          name: 'Clip-On Bi-Color LED Ring / Panel Light',
          why: 'Eliminates digital noise on phone sensors without taking up floor space.',
          amazonQuery: 'clip+on+led+video+light+for+phone',
        });
      } else {
        items.push({
          category: 'Lighting',
          name: 'Softbox Key Light & Desktop Arm Stand',
          why: 'Provides diffuse, professional facial lighting to stop platform ingest compression penalties.',
          amazonQuery: 'softbox+key+light+kit+desktop',
        });
      }
    } else {
      items.push({
        category: 'Lighting',
        name: 'MagSafe Mountable On-Camera Fill Light',
        why: 'Compact handheld fill light for outdoor walking A-Roll and vlog clips.',
        amazonQuery: 'magsafe+portable+led+video+light',
      });
    }

    // 2. Audio Selection
    if (budget === 'budget') {
      items.push({
        category: 'Audio',
        name: 'Dual Plug-and-Play Wireless Lavalier Mics (USB-C / iOS)',
        why: 'Delivers isolated 320kbps dialogue without wires or setup delays.',
        amazonQuery: 'wireless+lavalier+microphone+for+phone+usb+c',
      });
    } else if (budget === 'mid') {
      items.push({
        category: 'Audio',
        name: 'Compact Dual Wireless Mic System (DJI Mic 2 / Hollyland)',
        why: 'Includes internal 32-bit float backup recording to prevent clipped audio.',
        amazonQuery: 'dji+mic+2+wireless+lavalier+microphone',
      });
    } else {
      items.push({
        category: 'Audio',
        name: 'XLR Dynamic Podcast Mic & USB Interface Kit',
        why: 'Broadcast-quality voice clarity with background noise rejection.',
        amazonQuery: 'xlr+dynamic+microphone+audio+interface+bundle',
      });
    }

    // 3. Stabilization / Rig Selection
    if (environment === 'mobile') {
      items.push({
        category: 'Stabilization',
        name: '3-Axis Smartphone Tracking Gimbal (DJI / Insta360)',
        why: 'Keeps face framing locked in 9:16 vertical safe zones while walking.',
        amazonQuery: 'smartphone+gimbal+stabilizer+tracking',
      });
    } else {
      items.push({
        category: 'Stabilization',
        name: '360-Degree Rotating 60-Inch Phone Tripod Stand',
        why: 'Allows instant switching between 9:16 vertical and 16:9 horizontal framing.',
        amazonQuery: 'rotating+vertical+phone+tripod+stand',
      });
    }

    // 4. Storage Selection
    if (budget === 'budget') {
      items.push({
        category: 'Storage',
        name: '1TB USB-C NVMe Portable SSD (SanDisk / Samsung)',
        why: 'Edit 4K footage directly off external storage without clogging internal phone RAM.',
        amazonQuery: 'sandisk+extreme+1tb+portable+ssd',
      });
    } else {
      items.push({
        category: 'Storage',
        name: '2TB Rugged Portable SSD + 8TB Desktop Cold Archive Drive',
        why: 'Complete 3-2-1 backup strategy for long-term master footage preservation.',
        amazonQuery: 'external+desktop+hard+drive+8tb',
      });
    }

    return items;
  };

  const gearList = getRecommendedGear();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] text-slate-400">
        <span>Disclosure: As an Amazon Associate I earn from qualifying purchases.</span>
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

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-left">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Interactive Studio Gear Configurator</span>
        </nav>

        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-amber-950 border border-amber-700/60 text-amber-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Interactive Hardware Picker
          </span>
          <span className="text-slate-500">• Amazon Associates Integrated</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
          Interactive Creator Studio Gear Configurator
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Configure your filming format, environment, and budget below to build an itemized camera, lighting, audio, and storage rig tailored to your exact workflow.
        </p>

        {/* Configurator Controls */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-10 shadow-xl space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              1. Primary Content Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setFormat('tiktok')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${format === 'tiktok' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                TikTok / Reels / Shorts (9:16)
              </button>
              <button
                type="button"
                onClick={() => setFormat('youtube')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${format === 'youtube' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                YouTube Long-Form / Podcast
              </button>
              <button
                type="button"
                onClick={() => setFormat('faceless')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${format === 'faceless' ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Faceless / Voiceover Channel
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Filming Environment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setEnvironment('bedroom')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${environment === 'bedroom' ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Small Bedroom Setup
              </button>
              <button
                type="button"
                onClick={() => setEnvironment('office')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${environment === 'office' ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Dedicated Studio / Office
              </button>
              <button
                type="button"
                onClick={() => setEnvironment('mobile')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${environment === 'mobile' ? 'bg-emerald-600 border-emerald-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                On-the-Go / Outdoor Mobile
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Budget Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setBudget('budget')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${budget === 'budget' ? 'bg-amber-600 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Starter Kit (~$50 - $150)
              </button>
              <button
                type="button"
                onClick={() => setBudget('mid')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${budget === 'mid' ? 'bg-amber-600 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Creator Pro (~$150 - $400)
              </button>
              <button
                type="button"
                onClick={() => setBudget('pro')}
                className={`p-3 rounded-xl border text-xs font-bold transition text-left ${budget === 'pro' ? 'bg-amber-600 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
              >
                Studio Master ($500+)
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Itemized Recommendations */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Your Custom Itemized Creator Rig:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearList.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 inline-block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{item.why}</p>
                </div>

                <a
                  href={`https://www.amazon.com/s?k=${item.amazonQuery}&tag=${AMAZON_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition shadow-md"
                >
                  Check Price on Amazon →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Link Hub */}
        <section className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-base font-bold text-slate-200 mb-3">Related Guides &amp; Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/blog/why-cross-posted-video-looks-blurry-fix" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <strong className="text-white block mb-0.5">Blurry Upload Fix</strong>
              <span className="text-slate-400">Bitrates, color spaces, and camera settings.</span>
            </Link>
            <Link href="/blog/format-vertical-video-tiktok-reels-shorts-no-black-bars" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <strong className="text-white block mb-0.5">Vertical Safe Zones</strong>
              <span className="text-slate-400">Interactive caption readability checker.</span>
            </Link>
            <Link href="/blog/how-to-organize-backup-social-videos-creator-vault" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition">
              <strong className="text-white block mb-0.5">Creator Vault</strong>
              <span className="text-slate-400">3-2-1 backup storage workflows.</span>
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
