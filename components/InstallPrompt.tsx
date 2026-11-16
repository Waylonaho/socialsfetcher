'use client';

import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [platform, setPlatform] = useState<'ios' | 'android' | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Check if already installed or previously dismissed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    const wasDismissed = localStorage.getItem('sf_pwa_dismissed') === 'true';

    if (isStandalone || wasDismissed) return;

    const ua = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIOS) {
      setPlatform('ios');
      setDismissed(false);
    } else if (isAndroid) {
      setPlatform('android');
      setDismissed(false);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setPlatform('android');
      setDismissed(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('sf_pwa_dismissed', 'true');
  };

  const handleAndroidInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDismissed(true);
      }
      setDeferredPrompt(null);
    }
  };

  if (dismissed || !platform) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto p-4 rounded-2xl bg-slate-900/95 backdrop-blur border border-indigo-500/50 shadow-2xl text-left">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-0.5">
            1-Tap Mobile App
          </span>
          <h4 className="text-xs font-bold text-white mb-1">
            Add SocialsFetcher to Home Screen
          </h4>
          {platform === 'ios' ? (
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Tap the <strong className="text-white">Share icon (⍐)</strong> in Safari&apos;s bottom bar, then scroll down and tap <strong className="text-white">&quot;Add to Home Screen&quot;</strong>.
            </p>
          ) : (
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Install our lightweight web app for instant access to video extractors, safe-zone overlays, and teleprompter tools.
            </p>
          )}
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Close install prompt"
          className="text-slate-400 hover:text-white text-sm font-bold px-1.5"
        >
          ✕
        </button>
      </div>

      {platform === 'android' && deferredPrompt && (
        <button
          onClick={handleAndroidInstall}
          className="mt-3 w-full py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
        >
          Install App Now
        </button>
      )}
    </div>
  );
}
