import Link from 'next/link';

export default function WorkflowBar({ activeStep }: { activeStep?: 1 | 2 | 3 }) {
  const steps = [
    { step: 1, label: '1. Score Your Hook', href: '/tools/hook-scorer', desc: 'Optimize first 3s' },
    { step: 2, label: '2. Film with Teleprompter', href: '/tools/creator-teleprompter', desc: 'Mirror mode + WPM' },
    { step: 3, label: '3. Check Safe Zones & Bitrate', href: '/tools/safe-zone-canvas', desc: '9:16 UI overlay' },
  ];

  return (
    <section className="my-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-3">
        Creator Pre-Flight Workflow
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((s) => (
          <Link
            key={s.step}
            href={s.href}
            className={`p-3.5 rounded-xl border transition ${
              activeStep === s.step
                ? 'bg-indigo-950/60 border-indigo-500 text-white'
                : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
            }`}
          >
            <strong className="text-xs block text-white">{s.label}</strong>
            <span className="text-[11px] text-slate-400">{s.desc} →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
