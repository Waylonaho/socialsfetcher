'use client';

export default function ViralHooksEbookPage() {
  // Your Verified CPAGrip File Locker Link
  const CPAGRIP_LOCKER_LINK = "https://singingfiles.com/1908386";

  const handleDownload = () => {
    window.open(CPAGRIP_LOCKER_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <a href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg transition">
            Main Downloader
          </a>
        </div>
      </header>

      {/* Main Article & Landing Page */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full font-bold mb-4">
          🔥 Free Creator Resource
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">
          50 Viral Hook Ideas That Stop the Scroll (Free Creator Swipe File)
        </h1>
        <p className="text-slate-400 text-sm mb-8">Published in Social Media Growth • Free Download • 4 min read</p>

        {/* HERO EBOOK CONTENT LOCKER BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-indigo-950 border border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
              Free eBook Download
            </span>
            <span className="text-xs text-amber-300 font-medium">Instant Access</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-4">
            {/* Visual Book Cover Graphic */}
            <div className="bg-gradient-to-tr from-amber-600 to-indigo-600 p-6 rounded-xl border border-amber-400/30 shadow-2xl text-center transform -rotate-1 hover:rotate-0 transition">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-extrabold text-white text-base sm:text-lg leading-tight">50 VIRAL HOOK IDEAS</h4>
              <p className="text-[10px] text-amber-200 mt-2 uppercase tracking-widest font-bold">Swipe File Edition</p>
            </div>

            {/* Quick Specs */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-lg font-bold text-white">Stop Losing Views in the First 3 Seconds</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Get the exact psychological hook formulas used by top creators on TikTok, Instagram Reels, and YouTube Shorts to lock in viewer attention immediately.
              </p>
              <ul className="text-xs text-amber-300 space-y-1 font-medium">
                <li>✓ 50 Plug-and-Play Hook Templates</li>
                <li>✓ Tested across Curiosity, Challenge & Fear triggers</li>
                <li>✓ Formatted for 100% Free Instant Download</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="w-full mt-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-4 rounded-xl transition shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            🔓 Unlock & Download "50 Viral Hook Ideas" PDF Free
          </button>
        </div>

        {/* SEO Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            In short-form video creation, <strong>the hook is 80% of the equation</strong>. If your video doesn't hook the viewer within the first 3 seconds, the algorithm registers a quick drop-off and stops promoting your clip—no matter how great the rest of your video is.
          </p>
          <p>
            To help creators bypass writer's block and consistently beat the scroll, we compiled <strong>50 Viral Hook Ideas</strong> into a ready-to-use reference guide.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Sneak Peek: 3 Hook Formulas Inside the eBook</h2>
          
          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">1. The "Negative Result" Hook</span>
              <p className="text-sm font-semibold text-white mt-1">"Stop doing [Common Habit] if you want to get [Desired Outcome]..."</p>
              <p className="text-xs text-slate-400 mt-1">Why it works: Triggers fear of missing out and challenges established routines.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">2. The "Hidden Secret" Hook</span>
              <p className="text-sm font-semibold text-white mt-1">"The secret feature on [Platform/Tool] that nobody is talking about..."</p>
              <p className="text-xs text-slate-400 mt-1">Why it works: Creates an immediate information gap that forces the user to watch.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">3. The "Contrarian Statement" Hook</span>
              <p className="text-sm font-semibold text-white mt-1">"Why everyone is completely wrong about [Topic]..."</p>
              <p className="text-xs text-slate-400 mt-1">Why it works: Sparks curiosity and invites healthy debate in the comment section.</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Why You Need a Hook Swipe File</h2>
          <p>
            Top short-form video creators don't invent new hook structures from scratch every day. Instead, they rely on proven psychological frameworks, tweaking the variables to fit their specific niche.
          </p>
          <p>
            Whether you run a faceless account, educational channel, or personal brand, having a swipe file of tested hooks lets you script high-performing content in minutes.
          </p>
        </article>

        {/* BOTTOM LOCKER CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 border border-amber-500/40 text-center shadow-2xl">
          <h3 className="text-xl font-extrabold text-white mb-2">Get Full Access to All 50 Hooks</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
            Complete a quick offer below to instantly unlock the full "50 Viral Hook Ideas" PDF eBook.
          </p>
          <button
            onClick={handleDownload}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-8 py-3.5 rounded-xl transition shadow-lg cursor-pointer"
          >
            Unlock PDF eBook Now →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 SocialsFetcher.com — Free Media Utilities & Creator Resources.
      </footer>
    </div>
  );
}
