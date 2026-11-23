import React from 'react';

type GearPreset = 'original_audio_capture' | 'mobile_audio_editing' | 'outdoor_wind_audio';

interface PresetData {
  badge: string;
  heading: string;
  intro: string;
  items: { title: string; desc: string; query: string; cta: string }[];
}

const PRESETS: Record<GearPreset, PresetData> = {
  original_audio_capture: {
    badge: 'Original Audio Hardware',
    heading: 'Record 100% Original Audio That Platforms Never Mute',
    intro:
      'When you capture your own audio layers through dedicated hardware, Instagram and TikTok classify the stream as Original Audio—preventing copyright muting on local exports:',
    items: [
      {
        title: '1. Pocket Stereo Field Recorders (WAV / MP3)',
        desc: 'Capture crisp ambient soundscapes, instruments, and live voice directly to an SD card without phone compression.',
        query: 'portable+handheld+digital+voice+field+recorder+wav',
        cta: 'Check Field Recorders on Amazon →',
      },
      {
        title: '2. Compact Creator USB-C Audio Interfaces',
        desc: 'Mix mic audio and royalty-free background tracks cleanly on desktop before rendering your master Reel.',
        query: 'usb+c+audio+interface+for+podcasting+and+streaming',
        cta: 'Check Audio Interfaces on Amazon →',
      },
    ],
  },
  mobile_audio_editing: {
    badge: 'Mobile Audio Editing Kit',
    heading: 'Essential Adapters & Isolation Gear for Clean Audio Sampling',
    intro:
      'Extracting and editing stereo audio on mobile or laptop works best when you can monitor subtle background hum and transfer WAV files instantaneously:',
    items: [
      {
        title: '1. Hi-Res USB-C / Lightning Headphone DAC Adapters',
        desc: 'Hear true stereo separation and catch clipping distortion when trimming extracted audio in CapCut or Audacity.',
        query: 'usb+c+to+3.5mm+hi+res+dac+headphone+adapter',
        cta: 'Check Audio Adapters on Amazon →',
      },
      {
        title: '2. Folding Desktop Microphone Isolation Shields',
        desc: 'Eliminate room reverb when recording voiceovers over extracted audio clips in untreated bedrooms or offices.',
        query: 'folding+microphone+isolation+shield+desk+stand',
        cta: 'Check Isolation Shields on Amazon →',
      },
    ],
  },
  outdoor_wind_audio: {
    badge: 'Outdoor Audio Clarity',
    heading: 'Stop Wind & Street Noise From Ruining Outdoor Clips',
    intro:
      'Outdoor Shorts and Reels often suffer from heavy wind rumble that ruins extracted audio tracks. Protect your raw capture at the source:',
    items: [
      {
        title: '1. Furry Deadcat Windscreens for Phones & Mics',
        desc: 'Cut 90% of outdoor wind buffeting without muffling vocal clarity.',
        query: 'furry+windscreen+deadcat+for+iphone+microphone',
        cta: 'Check Windscreens on Amazon →',
      },
      {
        title: '2. Compact On-Camera Shotgun Microphones',
        desc: 'Reject off-axis traffic noise and focus tightly on the speaker in front of the lens.',
        query: 'compact+shotgun+microphone+for+smartphone+and+camera',
        cta: 'Check Shotgun Mics on Amazon →',
      },
    ],
  },
};

export default function ContextualGearCard({ preset }: { preset: GearPreset }) {
  const AMAZON_TAG = 'socialsfetcher-20';
  const data = PRESETS[preset];

  return (
    <section className="my-8 p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-left space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-0.5 rounded-full">
          {data.badge}
        </span>
        <span className="text-[11px] text-slate-400">Amazon Gear Picks</span>
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-white">{data.heading}</h2>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{data.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs">
        {data.items.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <span className="text-indigo-400 font-bold block mb-1">{item.title}</span>
              <p className="text-slate-400 mb-3 leading-relaxed">{item.desc}</p>
            </div>
            <a
              href={`https://www.amazon.com/s?k=${item.query}&tag=${AMAZON_TAG}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
            >
              {item.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-slate-500 text-center pt-1">
        As an Amazon Associate I earn from qualifying purchases.
      </p>
    </section>
  );
}
