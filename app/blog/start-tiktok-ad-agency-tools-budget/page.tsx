'use client';

export default function AgencyBudgetToolsPage() {
  // Your ToolSuite Affiliate Links
  const TOOLSUITE_VIP_LINK = "https://whop.com/toolsuite/buy-vip?a=aptdiocese";
  const TOOLSUITE_365_LINK = "https://whop.com/toolsuite/365-days-access-e9?a=aptdiocese";

  // Navigation Links from Main Site
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. Sticky Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border-b border-emerald-500/30 py-2.5 px-4 text-center text-xs text-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[10px] uppercase">
            Agency Tech Stack
          </span>
          <span>Launch & service media buying clients with 50+ tools for under $30/month.</span>
          <a 
            href={TOOLSUITE_VIP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-emerald-400 hover:underline underline-offset-2 ml-1"
          >
            Claim Agency Suite →
          </a>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <a href="/" className="hover:text-indigo-400 transition">Video Downloader</a>
            <a href="/tiktok/download/no-watermark" className="hover:text-indigo-400 transition">TikTok</a>
            <a href="/instagram/reels/downloader" className="hover:text-indigo-400 transition">Instagram</a>
            <a href={OPUSCLIP_LINK} target="_blank" rel="noopener noreferrer" className="text-purple-400 font-bold hover:text-purple-300 transition flex items-center gap-1">
              ✨ OpusClip AI
            </a>
            <a 
              href={TOOLSUITE_VIP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition"
            >
              Get ToolSuite ⚡
            </a>
          </nav>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left">
        
        {/* Breadcrumb / Tag */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold">
          <span className="bg-emerald-950 border border-emerald-700/60 text-emerald-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            SMMA & Agency Blueprint
          </span>
          <span className="text-slate-500">• 6 min read • Updated for 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl sm:leading-tight font-extrabold mb-4 tracking-tight text-white">
          How to Launch a TikTok Ad Agency on a Budget: The Complete Tech Stack for Under $30/Month
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Starting a boutique media buying agency or creative studio usually comes with heavy software overhead. Here is how solo founders access enterprise ad spy data, product analytics, and AI creative tools without burning their initial retainer fees.
        </p>

        {/* Quick Answer Summary Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-emerald-400 font-semibold">The Cost Breakdown:</strong> An agency-grade tool setup featuring PiPiADS, Kalodata, ChatGPT Plus, and Canva Pro normally runs $300–$500/month. By leveraging <a href={TOOLSUITE_VIP_LINK} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline font-bold">ToolSuite on Whop</a>, agency operators access 50+ enterprise-grade marketing and spy tools through a secure 1-click browser portal for less than $30/month.
          </p>
        </div>

        {/* Section 1: The Agency Overhead Trap */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The High Cost of Software for Freelancers & Agency Starters
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            When you sign your first 1 to 3 clients for short-form ad management, your revenue needs to stay liquid. Committing to recurring corporate software costs eats up your initial margins:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 my-6">
            <table className="w-full text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 text-left">Deliverable</th>
                  <th className="py-3 px-4 text-left">Primary Platform</th>
                  <th className="py-3 px-4 text-left">Direct Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Competitor Ad Intelligence</td>
                  <td className="py-3 px-4">PiPiADS VIP</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">$155/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">E-Com & TikTok Shop Data</td>
                  <td className="py-3 px-4">Kalodata Pro</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">$60/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Ad Copy & Hook Generation</td>
                  <td className="py-3 px-4">ChatGPT Plus (GPT-4)</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">$20/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Creatives & Client Assets</td>
                  <td className="py-3 px-4">Canva Pro</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">$15/mo</td>
                </tr>
                <tr className="bg-emerald-950/40 font-bold border-t-2 border-emerald-500/40">
                  <td className="py-3 px-4 text-emerald-400">Total Traditional Cost</td>
                  <td className="py-3 px-4 text-emerald-300">Standalone Subscriptions</td>
                  <td className="py-3 px-4 text-red-400 font-extrabold">$250 – $400+/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: How ToolSuite Simplifies Agency Delivery */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Delivering Client Results Using a Unified Workspace
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            <strong>ToolSuite</strong> aggregates industry-standard marketing tools inside a single, high-speed portal browser. Rather than managing 10 separate company logins and individual monthly invoices, you operate your entire fulfillment process from one screen:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">🎯 Client Competitor Audits</h3>
              <p className="text-xs text-slate-400">Use PiPiADS to show prospective clients exactly what their top 3 competitors are spending and testing right now.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">📊 Market Demand Validation</h3>
              <p className="text-xs text-slate-400">Use Kalodata to demonstrate proven product demand, market size, and affiliate commission structures.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">✍️ Batch UGC Scripting</h3>
              <p className="text-xs text-slate-400">Produce 20 high-converting video scripts in one sitting with custom ChatGPT Plus ad-copy workflows.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">⚡ Rapid Creative Turnaround</h3>
              <p className="text-xs text-slate-400">Deliver polished ad variations, thumbnails, and hook cards with full Canva Pro asset access.</p>
            </div>
          </div>
        </section>

        {/* Section 3: High Converting CTA Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 my-8 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-full uppercase">
              Agency Starter Suite
            </span>
            <span className="text-xs text-slate-400">Over 50+ Premium Tools</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Run Your Marketing Operations for Under $30/Month
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            Eliminate costly tool subscriptions. Unlock PiPiADS, Kalodata, ChatGPT Plus, and Canva Pro with 1-click access inside ToolSuite on Whop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={TOOLSUITE_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Get Monthly VIP Pass →
            </a>
            <a
              href={TOOLSUITE_365_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-bold text-xs sm:text-sm transition"
            >
              Get 365-Day Access (Best ROI) ⚡
            </a>
          </div>
        </div>

        {/* Section 4: 3-Step Client Acquisition Angle */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The "$0 Pitch" Strategy Using ToolSuite
          </h2>
          <ol className="space-y-3 text-sm text-slate-300 list-decimal pl-5 leading-relaxed">
            <li>
              <strong>Audit the Competition:</strong> Find an active e-commerce store in your target niche. Open <em>PiPiADS</em> and locate the competitor ads scaling most aggressively.
            </li>
            <li>
              <strong>Record a 2-Minute Breakdown:</strong> Record a quick screen share demonstrating what the brand's direct competitor is doing right and identify 3 obvious creative angles they are missing.
            </li>
            <li>
              <strong>Close the Retainer:</strong> Send the audit to the founder or marketing director. When they hire you, execute the entire campaign using your ToolSuite portal.
            </li>
          </ol>
        </section>

        {/* Section 5: Agency FAQ */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Agency Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Can I manage multiple client accounts with this?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Yes. You can perform unlimited market research, download competitor ad assets, and generate creative copy across any number of client niches.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">How are session lockouts avoided?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                ToolSuite uses an isolated portable browser environment with dynamic cookie injection, avoiding the password friction found in typical group buys.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Can I write off this subscription as a business expense?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Yes. Whop provides standard commercial invoices and receipts suitable for tracking software operating expenses.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Scale Your Marketing Stack Today</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
            Protect your agency cash flow by keeping fixed operating software expenses low.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href={TOOLSUITE_VIP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs sm:text-sm text-white transition"
            >
              Join ToolSuite VIP
            </a>
            <a 
              href={TOOLSUITE_365_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 font-bold text-xs sm:text-sm text-slate-950 transition"
            >
              Get 365-Day All-Access Pass
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — Free Online Media Utility.</p>
      </footer>
    </div>
  );
}
