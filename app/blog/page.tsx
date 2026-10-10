import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creator Guides & Video Workflows | SocialsFetcher',
  description: 'In-depth tutorials on video formatting, audio extraction, permission-aware saving, and creator tool stacks.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/blog',
  },
};

const guideCategories = [
  {
    category: 'Troubleshooting & Saving Your Own Media',
    guides: [
      {
        title: 'How to Save Your Own TikTok Video to Camera Roll Before Posting',
        slug: 'how-to-save-tiktok-video-before-posting',
        desc: 'Save unwatermarked 1080p master files to your iPhone or Android gallery.',
      },
      {
        title: 'How to Save a TikTok Draft to Camera Roll (Without Posting Publicly)',
        slug: 'how-to-save-tiktok-draft-to-camera-roll',
        desc: 'Export private drafts directly to device storage safely.',
      },
      {
        title: 'Why Your Cross-Posted Video Looks Blurry (and How to Fix It)',
        slug: 'why-cross-posted-video-looks-blurry-fix',
        desc: 'Recommended master bitrate, resolution, and color profiles to stop platform compression.',
      },
      {
        title: 'How to Format Vertical Video for TikTok, Reels & Shorts Without Black Bars',
        slug: 'format-vertical-video-tiktok-reels-shorts-no-black-bars',
        desc: 'Aspect ratio guides, safe zones, and 9:16 mobile canvas dimensions.',
      },
      {
        title: 'TikTok Shadowban Survival Guide',
        slug: 'tiktok-shadowban-survival-guide',
        desc: 'Diagnose account standing, algorithm blocks, and engagement drops.',
      },
      {
        title: 'Boomer’s Guide to Smartphone Sanity',
        slug: 'boomers-guide-to-smartphone-sanity',
        desc: 'Clear, simple mobile storage and media cleanup advice.',
      },
    ],
  },
  {
    category: 'Audio Extraction & Platform Syndication',
    guides: [
      {
        title: 'How to Save an X Video You Have Permission to Use',
        slug: 'how-to-save-an-x-video-with-permission',
        desc: 'Creator licensing checklist, usage scopes, and clean MP4 downloads.',
      },
      {
        title: 'How to Extract Audio from YouTube Shorts Safely',
        slug: 'how-to-extract-audio-from-youtube-shorts-safely',
        desc: 'Extract clean voiceover dialogue as MP3 or WAV without sketchy converters.',
      },
      {
        title: 'How to Extract Audio from Instagram Reels (Clean MP3)',
        slug: 'how-to-extract-audio-from-instagram-reels-mp3',
        desc: 'Save spoken soundbites and original audio from Reels legally.',
      },
      {
        title: 'How to Repurpose YouTube Shorts to Reels & TikTok Without Copyright Flags',
        slug: 'repurpose-youtube-short-to-reels-and-tiktok',
        desc: 'Avoid muted tracks and match trending commercial audio catalogs.',
      },
      {
        title: 'How to Turn Livestreams & Long VODs into Vertical Clips',
        slug: 'turn-livestreams-into-vertical-clips',
        desc: 'Smart 9:16 speaker reframing and automated highlight clipping.',
      },
      {
        title: 'AI Podcast Video Repurposing Workflow',
        slug: 'ai-podcast-video-repurposing-workflow',
        desc: 'Convert hour-long interviews into dozens of short social assets.',
      },
    ],
  },
  {
    category: 'Creator Tool Stacks, Software & Production',
    guides: [
      {
        title: 'Best Subtitle and Caption Generators for Short Videos',
        slug: 'best-subtitle-caption-generators-short-videos',
        desc: 'Compare kinetic caption engines, word-by-word timing, and presets.',
      },
      {
        title: 'Best Teleprompter Apps for Recording Vertical Video',
        slug: 'best-teleprompter-app-vertical-video-iphone-android',
        desc: 'Voice-following scripts that keep eye line locked onto the camera lens.',
      },
      {
        title: 'Best Social Media Scheduling Tools for Solo Creators',
        slug: 'best-social-media-scheduling-tools-solo-creators',
        desc: 'Direct auto-posting to Reels, TikTok, and Shorts compared.',
      },
      {
        title: '50 Viral Hook Ideas Swipe File',
        slug: '50-viral-hook-ideas-swipe-file',
        desc: 'Tested opening hooks to improve 3-second viewer retention.',
      },
      {
        title: 'Faceless Channel Tools Stack on a Budget',
        slug: 'faceless-channel-tools-stack-budget',
        desc: 'Low-cost toolchain for automated social video channels.',
      },
      {
        title: 'TikTok Shop Beginner Tools on a Budget',
        slug: 'tiktok-shop-beginner-tools-budget',
        desc: 'Affiliate setup tools, product analysis, and video workflows.',
      },
      {
        title: 'Start a TikTok Ad Agency: Tools & Budget',
        slug: 'start-tiktok-ad-agency-tools-budget',
        desc: 'The essential software stack for running paid short-video campaigns.',
      },
      {
        title: 'Turn Plain Video into AI Doodle Explainers',
        slug: 'turn-plain-video-into-ai-doodle-explainer',
        desc: 'Transform simple voice notes into visual animated videos.',
      },
    ],
  },
  {
    category: 'Software Discounts & Remote Work Opportunities',
    guides: [
      {
        title: 'Best Safe Group Buy Tools Alternatives',
        slug: 'best-group-buy-tools-alternative-safe',
        desc: 'How to access premium marketing software bundles legitimately.',
      },
      {
        title: 'How to Lower SaaS Tool Costs',
        slug: 'how-to-lower-saas-tool-costs',
        desc: 'Reduce monthly recurring expenses across editing suites and subscriptions.',
      },
      {
        title: 'Cheapest Way to Get Canva Pro Safely',
        slug: 'cheapest-way-to-get-canva-pro-safe',
        desc: 'Verified ways to access Canva Pro features on a budget.',
      },
      {
        title: 'Cheapest Way to Get ChatGPT Plus',
        slug: 'how-to-get-chatgpt-plus-cheaper',
        desc: 'Methods to access GPT-4 models without paying full subscription costs.',
      },
      {
        title: 'Cheapest Way to Get PiPiADS',
        slug: 'cheapest-way-to-get-pipiads',
        desc: 'Save on TikTok ad spy software for e-commerce research.',
      },
      {
        title: 'Cheapest Way to Get Kalodata',
        slug: 'cheapest-way-to-get-kalodata',
        desc: 'Budget access to TikTok Shop sales analytics.',
      },
      {
        title: 'Get Paid Clipping Videos on Whop',
        slug: 'get-paid-clipping-videos-on-whop',
        desc: 'Earn commissions editing and clipping content for community creators.',
      },
      {
        title: 'Work From Home Social Media Jobs',
        slug: 'get-paid-managing-social-media-accounts-from-home',
        desc: 'Remote entry-level roles moderating, scheduling, and editing video.',
      },
      {
        title: 'Build Passive Digital Income Streams for Beginners',
        slug: 'build-passive-digital-income-stream-for-beginners',
        desc: 'How to launch simple monetized assets and digital guides.',
      },
    ],
  },
];

export default function BlogHubPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Video Downloader</Link>
            <Link href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition hidden sm:inline">TikTok</Link>
            <Link href="/instagram/reels/downloader" className="hover:text-indigo-400 transition hidden sm:inline">Instagram</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 py-12 text-left">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Creator Resource Library & Workflows
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical guides covering vertical video optimization, troubleshooting platform saving bugs, audio extraction, and creator software.
          </p>
        </div>

        <div className="space-y-12">
          {guideCategories.map((cat, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl font-bold text-indigo-300 border-b border-slate-800 pb-2">
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.guides.map((item, gIdx) => (
                  <Link
                    key={gIdx}
                    href={`/blog/${item.slug}`}
                    className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold mt-3 block">
                      Read Guide →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility.</p>
      </footer>
    </div>
  );
}
