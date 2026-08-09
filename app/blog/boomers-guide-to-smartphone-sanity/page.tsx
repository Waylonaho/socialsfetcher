'use client';

import { useState, FormEvent } from 'react';

export default function BoomerSmartphoneGuidePage() {
  const CPAGRIP_LOCKER_LINK = "https://singingfiles.com/1908433";
  const SHEETDB_URL = "https://sheetdb.io/api/v1/x17qtgz5hdeg4";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              name: name,
              email: email,
              date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              }),
            }
          ]
        }),
      });
    } catch (error) {
      console.error('Error logging lead to SheetDB:', error);
    } finally {
      setIsSubmitting(false);
      window.location.href = CPAGRIP_LOCKER_LINK;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-between">
      {/* High-Contrast Accessible Header */}
      <header className="border-b border-slate-700 bg-slate-950 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-black text-amber-400 tracking-wide">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <a href="/" className="text-sm bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/40 font-bold px-4 py-2 rounded-lg transition">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="flex-grow max-w-3xl mx-auto px-6 py-10 text-left">
        <div className="inline-block bg-amber-500/20 border border-amber-400 text-amber-300 text-sm px-4 py-1.5 rounded-full font-bold mb-6">
          📖 Free Large-Print PDF Guide
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-snug text-white">
          The Boomer's Simple Guide to Smartphone Sanity
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
          Frustrated by tiny text, accidental screen touches, or unwanted spam messages? This step-by-step guide explains modern phones in plain, simple English—no technical jargon required.
        </p>

        {/* SENIOR FRIENDLY FORM & DOWNLOAD BOX */}
        <div className="my-8 p-6 sm:p-10 rounded-2xl bg-slate-950 border-2 border-amber-400 shadow-2xl relative">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-amber-400 text-slate-950 text-xs sm:text-sm font-black px-3 py-1 rounded uppercase tracking-wider">
              100% Free Instant Download
            </span>
            <span className="text-xs sm:text-sm text-amber-200 font-bold">Large Print Edition</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-6">
            {/* Visual Book Cover Graphic */}
            <div className="bg-gradient-to-tr from-amber-600 to-amber-800 p-6 rounded-xl border-2 border-amber-300 text-center shadow-xl">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-extrabold text-white text-lg leading-tight">SMARTPHONE SANITY</h4>
              <p className="text-xs text-amber-100 mt-2 font-bold uppercase tracking-wider">Easy Senior Guide</p>
            </div>

            {/* Lead Form */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-bold text-white">Where Should We Send Your Free Copy?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Enter your name and email below to download the complete guide immediately.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-amber-300 uppercase mb-1">Your First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Margaret or John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border-2 border-slate-600 text-white text-base px-4 py-3.5 rounded-lg focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-amber-300 uppercase mb-1">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border-2 border-slate-600 text-white text-base px-4 py-3.5 rounded-lg focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base py-4 rounded-xl transition shadow-2xl disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? 'Opening Your Guide...' : '🔓 Click Here to Download Free PDF'}
                </button>
              </form>
              <p className="text-xs text-slate-400 text-center">🔒 We respect your privacy. No spam ever.</p>
            </div>
          </div>
        </div>

        {/* SEO Content Body */}
        <article className="prose prose-invert max-w-none text-slate-200 text-base sm:text-lg leading-relaxed space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">What You Will Learn Inside This Free Guide:</h2>
          
          <div className="space-y-6 my-8">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-lg font-bold text-amber-300">1. How to Make Font Bigger on iPhone for Seniors</h3>
              <p className="text-sm text-slate-300 mt-2">
                Stop straining your eyes to read text messages! Learn the exact 3-click setting adjustment to enlarge text across all your favorite iPhone apps and text conversations without breaking page layouts.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-lg font-bold text-amber-300">2. How to Stop Accidental Touches on Touch Screen Phones</h3>
              <p className="text-sm text-slate-300 mt-2">
                Ever open apps by accident just by holding your phone? Discover how to turn down touch sensitivity and turn on touch-accommodation features on both Apple and Android devices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-lg font-bold text-amber-300">3. How to Clear Open Apps on Motorola & Android Phones</h3>
              <p className="text-sm text-slate-300 mt-2">
                Is your Motorola or Android phone running slow or losing battery quickly? Follow our visual guide to swipe away unused background apps and free up phone memory in seconds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-lg font-bold text-amber-300">4. How to Block Spam Texts on Samsung Flip Phones & Smartphones</h3>
              <p className="text-sm text-slate-300 mt-2">
                Tired of scam messages filling up your phone? Learn how to turn on automatic spam protection settings on Samsung flip phones and modern Galaxy smartphones.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400 bg-slate-950">
        © 2026 SocialsFetcher.com — Easy Technology Guides & Free Online Resources.
      </footer>
    </div>
  );
}
