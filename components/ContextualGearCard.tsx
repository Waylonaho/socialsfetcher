import React from 'react';

export type GearPreset =
  | 'original_audio_capture'
  | 'mobile_audio_editing'
  | 'outdoor_wind_audio'
  | 'laptop_editing_dock'
  | 'smartphone_cooling_battery'
  | 'green_screen_backdrop'
  | 'faceless_desk_setup';

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
  laptop_editing_dock: {
    badge: 'Post-Production Workstation',
    heading: 'Speed Up Multi-Clip Exports & High-Bitrate Transfers',
    intro:
      'Batch-rendering 60fps 1080p/4K videos and moving large MP4 archives off your phone requires high-bandwidth I/O and color-accurate monitoring:',
    items: [
      {
        title: '1. 10Gbps USB-C Hub & UHS-II SD Card Readers',
        desc: 'Offload gigabytes of raw camera roll footage in seconds without saturating single-port laptop adapters.',
        query: '10gbps+usb+c+hub+sd+card+reader+4k+60hz',
        cta: 'Check USB-C Hubs on Amazon →',
      },
      {
        title: '2. Ergonomic Vertical & Multi-Angle Laptop Stands',
        desc: 'Keep laptop thermals cool during heavy Premiere, CapCut Desktop, and DaVinci Resolve export queues.',
        query: 'aluminum+ergonomic+ventilated+laptop+stand+desk',
        cta: 'Check Laptop Stands on Amazon →',
      },
    ],
  },
  smartphone_cooling_battery: {
    badge: 'Mobile Filming Endurance',
    heading: 'Prevent Phone Overheating & Battery Throttling During Long Takes',
    intro:
      'Recording 4K 60fps vertical video or running live teleprompter sessions heats up smartphone processors fast—causing frame drops and screen dimming:',
    items: [
      {
        title: '1. MagSafe Semiconductor Phone Coolers',
        desc: 'Actively pull heat off the back of your iPhone or Android during 30+ minute batch filming sessions.',
        query: 'magsafe+semiconductor+phone+cooler+for+video+recording',
        cta: 'Check Phone Coolers on Amazon →',
      },
      {
        title: '2. Slim 10,000mAh Magnetic Wireless Power Banks',
        desc: 'Snap onto your rig for cable-free power while filming on-location Reels and TikToks.',
        query: 'slim+magsafe+10000mah+portable+charger+power+bank',
        cta: 'Check MagSafe Power Banks on Amazon →',
      },
    ],
  },
  green_screen_backdrop: {
    badge: 'Studio Background & Framing',
    heading: 'Clean Backgrounds & Pro Separation Without Expensive Remodels',
    intro:
      'Stand out in crowded vertical feeds with crisp subject separation, collapsible backdrops, or subtle RGB rim lighting:',
    items: [
      {
        title: '1. Collapsible Pop-Up Green / Grey Studio Backdrops',
        desc: 'Set up a clean, distraction-free background in 10 seconds and fold it flat behind a door when finished.',
        query: 'collapsible+pop+up+green+screen+backdrop+stand',
        cta: 'Check Pop-Up Backdrops on Amazon →',
      },
      {
        title: '2. Rechargeable Mini RGB Magnetic Accent Lights',
        desc: 'Add subtle color contrast behind your shoulders to make 1080p compressed uploads pop on mobile screens.',
        query: 'mini+rgb+led+video+light+magnetic+rechargeable',
        cta: 'Check RGB Accent Lights on Amazon →',
      },
    ],
  },
  faceless_desk_setup: {
    badge: 'Faceless Channel Rig',
    heading: 'Overhead & Screen-First Hardware for Faceless Channels',
    intro:
      'Running a faceless tutorial, product review, or voiceover channel relies on steady overhead framing and tactile desk controls:',
    items: [
      {
        title: '1. Articulating Overhead Desk Mount Arms',
        desc: 'Capture rock-steady top-down unboxings, whiteboard notes, or phone demos without tripods in your way.',
        query: 'overhead+camera+desk+mount+articulating+arm+phone',
        cta: 'Check Overhead Arms on Amazon →',
      },
      {
        title: '2. Programmable Macro Keypads for Video Editing',
        desc: 'Map split, ripple-delete, and zoom shortcuts to physical dials to cut editing time in half.',
        query: 'programmable+macro+keypad+knob+for+video+editing',
        cta: 'Check Editing Keypads on Amazon →',
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
