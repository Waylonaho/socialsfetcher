'use client';

import { useState } from 'react';

interface CopyItem {
  label: string;
  value: string;
}

export default function QuickCopyBar({
  title = 'Quick-Copy Creator Presets',
  items,
}: {
  title?: string;
  items: CopyItem[];
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <div className="my-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-3">
      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">
        {title}
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {items.map((item, idx) => (
          <button
            key={item.label}
            type="button"
            onClick={() => handleCopy(item.value, idx)}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 transition flex items-center justify-between gap-2 text-left group"
          >
            <div className="truncate">
              <span className="text-[11px] text-slate-400 block">{item.label}</span>
              <code className="text-xs text-slate-100 font-mono truncate block">
                {item.value}
              </code>
            </div>
            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg shrink-0 transition ${
                copiedIndex === idx
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'
              }`}
            >
              {copiedIndex === idx ? '✓ Copied' : 'Copy'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
