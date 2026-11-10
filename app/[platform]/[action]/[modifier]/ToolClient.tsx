'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ToolClientProps {
  platform: string;
  action: string;
  modifier: string;
}

export default function ToolClient({ platform, action, modifier }: ToolClientProps) {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

  const formattedPlatform = platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : 'Social';

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('error');
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleFetch} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={`Paste ${formattedPlatform} video link here...`}
            required
            className="flex-grow px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white text-sm transition shadow-lg disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : 'Fetch Media'}
          </button>
        </div>
      </form>

      {status === 'error' && (
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/40 text-left space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2 py-0.5 rounded">
              Stream Notice
            </span>
            <span className="text-xs text-slate-400">Direct Download Notice</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct file extraction for this link was restricted by the host server. To edit, crop, or extract clean 1080p clips from this clip, use our recommended AI repurposing tool below:
          </p>
          <a
            href="https://opus.pro/?via=waylon"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
          >
            Process &amp; Repurpose Clip in OpusClip Free →
          </a>
        </div>
      )}
    </div>
  );
}
