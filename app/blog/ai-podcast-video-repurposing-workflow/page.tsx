'use client';

import React, { useState, FormEvent } from 'react';

export default function AIPodcastVideoRepurposingWorkflowPage() {
  const AFFILIATE_LINK = "https://opus.pro/?via=waylon";
  const SHEET_BEST_URL = "https://api.sheetbest.com/sheets/f5d9845b-4151-401b-8607-30322035d1c2";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please enter both your name and a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await fetch(SHEET_BEST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            name: name.trim(),
            email: email.trim(),
            date: new Date().toISOString(),
            source: 'ai-podcast-video-repurposing-workflow',
          },
        ]),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error logging lead to Sheet Best:', error);
    } finally {
      setIsSubmitting(false);
      // Immediately redirect user to OpusClip with tracked affiliate link
      window.location.href = AFFILIATE_LINK;
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does OpusClip automatically identify the most viral moments in a podcast?",
      answer: "OpusClip uses its proprietary ClipGenius™ AI engine to analyze audio tone, speech tempo, audience retention cues, emotional emphasis, and narrative structure. It scans the entire transcript to find coherent stories, actionable punchlines, debate climaxes, and strong opening hooks, assigning each excerpt a Virality Score from 1 to 99 along with an explanation of why that segment is projected to perform well."
    },
    {
      question: "Can OpusClip handle multi-speaker podcasts with dynamic camera switching?",
      answer: "Yes. OpusClip's AI Auto-Reframe feature detects multiple faces and active voice frequencies in real time. For co-hosted podcasts and guest interviews, it automatically switches between split-screen layouts (e.g., placing host on top and guest on bottom) or dynamically pans and zooms to frame whoever is currently speaking without manual keyframing."
    },
    {
      question: "How are the animated captions and AI B-roll generated?",
      answer: "OpusClip automatically transcribes spoken audio with 98%+ accuracy, highlighting key trigger words in viral color presets (like Alex Hormozi style, yellow/green highlights, or minimal modern). Furthermore, its AI dynamic B-roll engine scans contextual keywords in speech and overlays relevant contextual footage and sound effects to elevate viewer retention during slower storytelling moments."
    },
    {
      question: "Can I directly paste YouTube video links or do I need to upload raw files?",
      answer: "You can simply paste a public or unlisted YouTube video URL, Google Drive link, Zoom recording URL, or upload local MP4/MOV files up to several hours long. OpusClip fetches the media directly in the cloud, eliminating the need to download massive video files to your local hard drive."
    },
    {
      question: "Is there a free trial to test the AI podcast repurposing workflow?",
      answer: "Yes! OpusClip offers a robust free tier with free monthly processing credits that allow you to generate up to dozens of watermark-free short clips, test the AI auto-reframing, customize subtitle templates, and experience the complete workflow before upgrading to Pro."
    },
    {
      question: "What vertical aspect ratios and social platforms does this workflow support?",
      answer: "The workflow exports 9:16 vertical video optimized natively for TikTok, YouTube Shorts, Instagram Reels, Facebook Reels, and LinkedIn vertical feeds. You can also export 1:1 square or 16:9 widescreen crops with auto-reframe if needed."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-black text-indigo-400 tracking-tight flex items-center gap-2">
            <span className="bg-indigo-600 text-white px-2.5 py-1 rounded-xl text-lg font-black shadow-lg shadow-indigo-600/30">SF</span>
            Socials<span className="text-white">Fetcher</span>
          </a>
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="text-xs sm:text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-semibold px-4 py-2 rounded-xl transition"
            >
              ← Back to Tools
            </a>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hidden sm:inline-flex text-xs sm:text-sm bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-indigo-500/25"
            >
              Try OpusClip Free →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex-1">
        {/* Article Breadcrumb & Metadata Badge */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
          <span className="bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Creator SOP & Automation
          </span>
          <span>•</span>
          <span>Updated August 2026</span>
          <span>•</span>
          <span>11 Min Read</span>
        </div>

        {/* Hero Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          AI Podcast Video Repurposing Workflow: <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Turn 1-Hour Episodes into 15 Viral Shorts in Minutes</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
          Stop spending 12+ grueling hours scrubbing timelines, cutting dead air, and manually keyframing speaker angles. Learn the exact automated system top podcasters and agency editors use to extract high-scoring viral clips, apply animated captions, and generate dynamic B-roll with zero editing fatigue.
        </p>

        {/* Quick Highlights / Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl mb-12 shadow-xl shadow-black/40">
          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-none pr-2">
            <div className="text-2xl sm:text-3xl font-black text-indigo-400">10x</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Faster Production Time</div>
          </div>
          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-none pr-2">
            <div className="text-2xl sm:text-3xl font-black text-violet-400">90+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">AI Virality Score Accuracy</div>
          </div>
          <div className="text-center sm:text-left border-r border-slate-800/60 last:border-none pr-2">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">1-Click</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Multi-Speaker Split Framing</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Cloud-Based URL Ingestion</div>
          </div>
        </div>

        {/* Lead Capture Magnet Box */}
        <div className="bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 border-2 border-indigo-500/40 rounded-3xl p-8 sm:p-10 mb-14 shadow-2xl shadow-indigo-950/50">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-500/30 mb-4">
              Free Download & Quick-Start Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Get the 2026 Viral Podcast Clipping SOP & Hook Swipe File
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              Enter your details below to unlock our master step-by-step PDF cheat sheet with 50 high-retention hook structures and instantly access the official OpusClip AI engine with free starter credits.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                  Best Work / Creator Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@creatorstudio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs rounded-xl">
                  {errorMessage}
                </div>
              )}

              {submitted && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs rounded-xl text-center">
                  Success! Redirecting you to OpusClip workspace...
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-extrabold text-base py-4 rounded-xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Generating Your Instant Access...</span>
                ) : (
                  <span>Claim Swipe File & Launch OpusClip AI Free →</span>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400">
                🔒 We respect your privacy. No spam. You will be redirected to activate your OpusClip account.
              </p>
            </form>
          </div>
        </div>

        {/* Comprehensive Table of Contents */}
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl mb-12">
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="text-indigo-400">📋</span> Table of Contents
          </h3>
          <ul className="space-y-2 text-sm text-indigo-300/90 font-medium">
            <li><a href="#bottleneck" className="hover:text-indigo-200 transition">1. The Long-Form Content Bottleneck: Why Manual Clipping Is Broken</a></li>
            <li><a href="#what-is-opusclip" className="hover:text-indigo-200 transition">2. The Technology Behind OpusClip: How ClipGenius™ Automates Virality</a></li>
            <li><a href="#step-by-step-workflow" className="hover:text-indigo-200 transition">3. The 5-Step Automated Podcast Repurposing Workflow (SOP)</a></li>
            <li><a href="#comparison-matrix" className="hover:text-indigo-200 transition">4. Manual Premiere/DaVinci Editing vs. OpusClip AI (Time & ROI Analysis)</a></li>
            <li><a href="#hook-formulas" className="hover:text-indigo-200 transition">5. 4 High-Retention Hook Archetypes for 3-Second Retention</a></li>
            <li><a href="#monetization-playbook" className="hover:text-indigo-200 transition">6. Monetization Playbook: How to Turn Short Clips into $3k-$10k/Month</a></li>
            <li><a href="#faq-section" className="hover:text-indigo-200 transition">7. Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="bottleneck" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">1</span>
            The Long-Form Content Bottleneck: Why Manual Clipping Is Broken
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Every serious content creator knows that recording a 60-minute podcast, deep-dive interview, or educational webinar is only half the battle. The true engine of audience growth in 2026 lives on short-form discovery platforms—TikTok, YouTube Shorts, Instagram Reels, and LinkedIn vertical video feeds.
          </p>
          <p className="text-slate-300 leading-relaxed">
            However, traditional video editing workflows create a punishing operational bottleneck:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-2">
                <span>❌</span> 8-12 Hours of Manual Timeline Scrubbing
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Listening to full-length audio tracks repeatedly just to identify 45-second compelling soundbites wastes valuable creative energy that should be spent on guest outreach or high-level strategy.
              </p>
            </div>
            <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-2">
                <span>❌</span> Tedious Keyframing & Re-Framing
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Converting horizontal (16:9) camera feeds into vertical (9:16) frames requires constant manual pan-and-scan keyframes whenever speakers alternate remarks or banter back and forth.
              </p>
            </div>
            <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-2">
                <span>❌</span> Slow Subtitle Styling & Caption Alignment
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manual captioning tools frequently desync syllables, miss emphasis cues, and force editors to color-code each word individually to mimic high-retention creator aesthetics.
              </p>
            </div>
            <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
              <div className="font-bold text-rose-400 flex items-center gap-2">
                <span>❌</span> Prohibitive Freelancer Retainers
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hiring junior video editors on Upwork or Fiverr to cut 30 short-form clips per month easily costs between $1,200 and $3,500 monthly, with zero guarantees on viral timing or hook retention.
              </p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            This imbalance causes thousands of promising podcasts to stall out after 10 episodes. Without an automated short-form distribution flywheel, long-form content sits undiscovered on YouTube and Spotify with low organic reach.
          </p>
        </section>

        {/* Section 2 */}
        <section id="what-is-opusclip" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">2</span>
            The Technology Behind OpusClip: How ClipGenius™ Automates Virality
          </h2>
          <p className="text-slate-300 leading-relaxed">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="text-indigo-400 font-bold underline hover:text-indigo-300 transition">OpusClip (Opus.pro)</a> was purpose-built by machine learning engineers and video retention scientists to replace the entire manual clipping assembly line with a single automated algorithm.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Instead of simply cutting videos at arbitrary silence markers, OpusClip utilizes a suite of neural models that analyze context, sentiment, audience psychology, and visual hierarchy:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="p-6 bg-slate-900/70 border border-indigo-500/20 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
              <div className="p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 text-2xl font-bold">
                🧠
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-lg font-bold text-white">ClipGenius™ Hook & Storyline Extraction</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Scans long-form transcripts for clear opening hooks, emotional peaks, data disclosures, and narrative resolutions. It curates standalone 30-to-60-second micro-stories that make sense independently without requiring the viewer to know the whole episode.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-indigo-500/20 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
              <div className="p-3 bg-violet-600/20 border border-violet-500/30 rounded-xl text-violet-400 text-2xl font-bold">
                🎯
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-lg font-bold text-white">AI Virality Score & Actionable Diagnostics</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every generated clip is graded on a predictive score from 1 to 99 based on thousands of analyzed viral videos. OpusClip displays detailed rationales (e.g., strong hook impact, high engagement topic, strong emotional resonance) so you know exactly which clips to prioritize.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-indigo-500/20 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
              <div className="p-3 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-400 text-2xl font-bold">
                🎥
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-lg font-bold text-white">AI Active Speaker Detection & Dynamic Framing</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Detects active faces and voice registers to center the active speaker automatically. For multi-person conversations, it automatically generates dynamic split-screen displays, picture-in-picture reactions, and smooth camera switches.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-indigo-500/20 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
              <div className="p-3 bg-emerald-600/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-2xl font-bold">
                ✨
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-lg font-bold text-white">Animated Kinetic Subtitles & Contextual B-Roll</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Transcribes audio with karaoke-style animated word tracking, emojis, and keyword color accents. It automatically places relevant royalty-free B-roll clips over spoken keywords to prevent audience drop-off.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl text-center space-y-4 my-8">
            <p className="text-indigo-200 font-semibold text-base sm:text-lg">
              Want to see your podcast transformed into 15+ ready-to-post short clips in under 3 minutes?
            </p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-500/30"
            >
              Test Your First Episode Free on OpusClip →
            </a>
          </div>
        </section>

        {/* Section 3 */}
        <section id="step-by-step-workflow" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">3</span>
            The 5-Step Automated Podcast Repurposing Workflow (SOP)
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Follow this streamlined 5-step Standard Operating Procedure (SOP) to transform any long-form video or audio file into a 30-day vertical content calendar:
          </p>

          <div className="space-y-6 my-8">
            {/* Step 1 */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-md border border-indigo-500/30">
                  Step 1
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Time: 30 Seconds</span>
              </div>
              <h3 className="text-xl font-bold text-white">Import Your Long-Form Video via URL or File Upload</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Log into <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="text-indigo-400 font-semibold underline">OpusClip</a>. Paste your YouTube link, Zoom cloud URL, Rumble link, or upload an MP4/MOV file directly. You do not need to download multi-gigabyte video files to your local device.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono">
                💡 Pro Tip: You can set a custom processing time window (e.g. 15:00 - 45:00) if you know your most insightful conversation occurred during the second half of the interview.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-violet-400 bg-violet-950/80 px-3 py-1 rounded-md border border-violet-500/30">
                  Step 2
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Time: 2 Minutes (Automated)</span>
              </div>
              <h3 className="text-xl font-bold text-white">Analyze ClipGenius™ Results & Filter by Virality Score</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Once the AI completes processing, you are presented with a gallery of 10 to 20 individual vertical video clips. Sort the results by Virality Score (80-99). Review the generated headlines and the AI-curated summary of why each clip is optimized for engagement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-purple-400 bg-purple-950/80 px-3 py-1 rounded-md border border-purple-500/30">
                  Step 3
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Time: 1 Minute</span>
              </div>
              <h3 className="text-xl font-bold text-white">Fine-Tune Layouts & Multi-Speaker Framing</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Click into the OpusClip visual editor to review the automatic speaker framing. If you have two co-hosts or an in-studio guest, choose between:
              </p>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 ml-2">
                <li><strong className="text-white">Auto Dynamic Switch:</strong> The camera pans to whoever is talking in real time.</li>
                <li><strong className="text-white">Vertical Split Screen:</strong> Places the host on top and the guest on the bottom for continuous reaction context.</li>
                <li><strong className="text-white">Solo Focus:</strong> Keeps fixed attention on one primary presenter for solo monologues.</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-500/30">
                  Step 4
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Time: 1 Minute</span>
              </div>
              <h3 className="text-xl font-bold text-white">Customize Kinetic Captions & Activate AI B-Roll</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Select your preferred brand typography and subtitle template (such as high-contrast yellow-green text, drop shadow outlines, or minimalist modern subtitles). Toggle on <strong className="text-white">AI B-Roll</strong> to automatically insert engaging stock visuals over key soundbites, maintaining high visual pacing.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 rounded-md border border-amber-500/30">
                  Step 5
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Time: Instant</span>
              </div>
              <h3 className="text-xl font-bold text-white">Batch Export in 1080p & Direct Social Scheduling</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Export your finished clips in full crisp 1080x1920 HD resolution or schedule them directly to connected TikTok, YouTube Shorts, Instagram, and LinkedIn accounts right from the OpusClip dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Comparison Table */}
        <section id="comparison-matrix" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">4</span>
            Manual Premiere/DaVinci Editing vs. OpusClip AI (Time & Cost Comparison)
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Let&apos;s break down the tangible economics of producing 20 monthly vertical clips using traditional manual editing software versus the OpusClip AI workflow:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl shadow-xl">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 font-bold">
                  <th className="p-4">Workflow Metric</th>
                  <th className="p-4 text-rose-300 bg-rose-950/30">Manual Premiere / FCPX</th>
                  <th className="p-4 text-amber-300 bg-amber-950/30">Outsourced Freelancers</th>
                  <th className="p-4 text-indigo-300 bg-indigo-950/50">OpusClip AI Workflow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-950">
                <tr>
                  <td className="p-4 font-semibold text-white">Turnaround Time (20 Clips)</td>
                  <td className="p-4 text-rose-300">18 - 25 Hours</td>
                  <td className="p-4 text-amber-300">4 - 7 Business Days</td>
                  <td className="p-4 text-indigo-300 font-bold">12 - 15 Minutes</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Monthly Cost</td>
                  <td className="p-4 text-rose-300">$54/mo (Adobe Cloud) + Time</td>
                  <td className="p-4 text-amber-300">$1,200 - $3,000 / month</td>
                  <td className="p-4 text-indigo-300 font-bold">Free to Low Pro Plan</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Hook & Virality Detection</td>
                  <td className="p-4 text-rose-300">Manual Guesswork</td>
                  <td className="p-4 text-amber-300">Editor Dependent</td>
                  <td className="p-4 text-indigo-300 font-bold">ClipGenius™ AI Scoring (1-99)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Speaker Tracking & Split-Screen</td>
                  <td className="p-4 text-rose-300">Manual Keyframing</td>
                  <td className="p-4 text-amber-300">Manual Layering</td>
                  <td className="p-4 text-indigo-300 font-bold">1-Click Auto Face Centering</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Animated Captions & B-Roll</td>
                  <td className="p-4 text-rose-300">Manual Transcription + Sync</td>
                  <td className="p-4 text-amber-300">Template Based</td>
                  <td className="p-4 text-indigo-300 font-bold">AI Auto-Synced + Keyword B-Roll</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Hook Formulas */}
        <section id="hook-formulas" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">5</span>
            4 High-Retention Hook Archetypes for 3-Second Retention
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The first 3 seconds of a short-form video determine over 80% of its algorithmic distribution on TikTok and YouTube Shorts. When selecting clips inside OpusClip, keep an eye out for these 4 proven hook archetypes:
          </p>

          <div className="grid sm:grid-cols-2 gap-5 my-6">
            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Hook Archetype 1</span>
              <h4 className="text-lg font-bold text-white">The Contrarian Truth</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Directly challenges a widely held belief or common industry myth.
              </p>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-indigo-200 italic">
                &ldquo;Everything you were told about hiring a full-time video editor in 2026 is completely backwards...&rdquo;
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase text-violet-400 tracking-wider">Hook Archetype 2</span>
              <h4 className="text-lg font-bold text-white">The Curiosity Gap</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Opens an unresolved narrative loop that forces the viewer to stay until the punchline.
              </p>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-violet-200 italic">
                &ldquo;This single AI setting generated 4.2 million views on our podcast, and nobody noticed what changed...&rdquo;
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase text-purple-400 tracking-wider">Hook Archetype 3</span>
              <h4 className="text-lg font-bold text-white">The Shocking Metric</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Anchors the listener with an undeniable number, financial result, or conversion benchmark.
              </p>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-purple-200 italic">
                &ldquo;We cut our content production budget from $3,500 to $29 a month while increasing output by 400%...&rdquo;
              </div>
            </div>

            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">Hook Archetype 4</span>
              <h4 className="text-lg font-bold text-white">The Instant Value Promise</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Offers a tactical step or framework that solves an urgent frustration immediately.
              </p>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-emerald-200 italic">
                &ldquo;If you host a podcast on YouTube, here is the exact 3-minute workflow to repurpose every episode...&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Monetization Playbook */}
        <section id="monetization-playbook" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">6</span>
            Monetization Playbook: How to Turn Short Clips into $3k-$10k/Month
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Repurposing podcast video isn&apos;t just about building social vanity metrics; it is one of the highest ROI commercial assets on the internet. Here are three primary revenue models creators and agencies leverage with this exact workflow:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-indigo-400 font-black">A.</span> Productized Short-Form Repurposing Agency (SOP Retainers)
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Offer busy YouTubers, CEOs, and B2B podcasters a &ldquo;Done-For-You Content Repurposing Engine.&rdquo; Charge $1,500 - $3,000/month per client to ingest their weekly long-form episodes, generate 20-30 styled viral shorts using OpusClip, and manage their social scheduling. With OpusClip doing the heavy lifting, a single solo operator can manage 8 to 12 high-paying retainers without hiring junior editors.
              </p>
            </div>

            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-violet-400 font-black">B.</span> High-Ticket Funnel & Lead Generation
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Use top-scoring short clips as top-of-funnel traffic hooks that drive viewers to your email list, community (Whop / Skool), or digital software tools. By maintaining high posting frequency across 4 platforms simultaneously, your cost per lead drops to zero organic spend.
              </p>
            </div>

            <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-black">C.</span> Creator Monetization Programs & Platform Rewards
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Eligible vertical videos over 60 seconds generate ongoing revenue through the TikTok Creator Rewards Program and YouTube Shorts revenue sharing. Channels producing 3-5 clips daily frequently generate supplemental passive income streams ranging from $500 to $4,000+ monthly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ Section */}
        <section id="faq-section" className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 text-lg border border-indigo-500/30">7</span>
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Common questions regarding AI video clipping, hardware requirements, and workflow setup:
          </p>

          <div className="space-y-4 my-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4 hover:text-indigo-300 transition"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className="text-indigo-400 text-xl font-black">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final Conversion CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-2xl shadow-indigo-950/80 border border-indigo-500/40 my-12">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
            Ready to Automate Your Podcast Repurposing Workflow Today?
          </h3>
          <p className="text-indigo-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop letting valuable long-form recordings gather digital dust. Turn your next episode into 15 high-scoring viral vertical clips in just 3 minutes with OpusClip AI.
          </p>
          <div className="pt-2">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-indigo-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5"
            >
              Start Repurposing Free on OpusClip →
            </a>
          </div>
          <p className="text-xs text-indigo-200/80 font-medium">
            ⚡ No credit card required to start • Free monthly credits included
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-slate-400 space-y-4">
          <div className="flex justify-center items-center gap-6">
            <a href="/" className="hover:text-slate-300 transition">Home</a>
            <a href="/tiktok/download/no-watermark" className="hover:text-slate-300 transition">TikTok Downloader</a>
            <a href="/instagram/reels/downloader" className="hover:text-slate-300 transition">Instagram Saver</a>
            <a href="/youtube/shorts/saver" className="hover:text-slate-300 transition">Shorts Saver</a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} SocialsFetcher.com. All rights reserved. Empowering creator workflows and automated social media growth.
          </p>
          <p className="text-[11px] text-slate-400 max-w-xl mx-auto">
            Disclosure: SocialsFetcher provides unbiased creator tutorials. Some outbound links on this page are affiliate referral links that may earn us a small commission at zero additional cost to you.
          </p>
        </div>
      </footer>
    </div>
  );
}
