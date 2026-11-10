'use client';

import { useState } from 'react';

interface ToolClientProps {
  platform: string;
  action: string;
  modifier: string;
}

export default function ToolClient({ platform, action, modifier }: ToolClientProps) {
  const OPUSCLIP_LINK = "https://opus.pro/?via=waylon";

  const [url, setUrl] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const formattedPlatform = platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : 'Social';

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus('loading');
    setDownloadUrl('');

    try {
      const res = await fetch('/api/fetch-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl: url }),
      });

      const data = await res.json();

      if (data.success && data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
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
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white text-sm transition shadow-lg disabled:opacity-50 shrink-0"
          >
            {status === 'loading' ? 'Extracting...' : 'Fetch Media'}
          </button>
        </div>
      </form>

      {/* REAL DOWNLOAD + MONETIZATION BRIDGE */}
      {status === 'success' && downloadUrl && (
        <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-left space-y-4 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {formattedPlatform} Stream Extracted
            </span>
            <span className="text-[11px] text-slate-500">1080p MP4 Format</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition text-center shadow-md flex items-center justify-center gap-1"
            >
              ⬇️ Download Real MP4 File
            </a>

            <a
              href={OPUSCLIP_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition text-center shadow-md flex items-center justify-center gap-1"
            >
              ✨ Auto-Crop &amp; Caption in OpusClip →
            </a>
          </div>
        </div>
      )}

      {/* FALLBACK STATE */}
      {status === 'error' && (
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/40 text-left space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-0.5 rounded uppercase">
              Restricted Media Notice
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct server extraction was restricted for this specific link. You can still clip, edit, and reframe this video using our partner AI tool:
          </p>
          <a
            href={OPUSCLIP_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-md"
          >
            Process Clip in OpusClip Free →
          </a>
        </div>
      )}
    </div>
  );
}
