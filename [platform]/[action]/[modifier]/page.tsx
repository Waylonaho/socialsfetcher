import type { Metadata } from 'next';

type Props = {
  params: Promise<{ platform: string; action: string; modifier: string }>;
};

// Generates dynamic Google SEO Meta Tags for every single keyword combination
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { platform, action, modifier } = await params;
  const cleanPlatform = platform.toUpperCase();
  const cleanAction = action.replace(/-/g, ' ');
  const cleanModifier = modifier.replace(/-/g, ' ');

  const title = `Download ${cleanPlatform} Videos ${cleanModifier} (${cleanAction})`;
  const description = `Free online tool to ${cleanAction} ${cleanPlatform} videos ${cleanModifier}. Fast, no watermark, high quality MP4 & MP3.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function DynamicPSEOPage({ params }: Props) {
  const { platform, action, modifier } = await params;
  const cleanPlatform = platform.charAt(0).toUpperCase() + platform.slice(1);
  const cleanAction = action.replace(/-/g, ' ');
  const cleanModifier = modifier.replace(/-/g, ' ');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </a>
          <a href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg transition">
            Main Downloader
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs px-3 py-1 rounded-full font-bold mb-4">
          Dedicated {cleanPlatform} Utility Page
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 capitalize">
          {cleanPlatform} Video Downloader <span className="text-indigo-500">{cleanModifier}</span>
        </h1>
        <p className="text-slate-400 mb-8 text-sm sm:text-base max-w-xl mx-auto">
          Fastest tool to {cleanAction} from {cleanPlatform} with zero quality loss or watermarks.
        </p>

        {/* Redirect Box to Homepage Fetcher */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto my-6 shadow-xl">
          <p className="text-sm text-slate-300 mb-6">
            Paste your {cleanPlatform} link into our main fetcher tool to process your file in {cleanModifier} quality.
          </p>
          <a 
            href="/" 
            className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-white transition shadow-lg"
          >
            Go to Main {cleanPlatform} Fetcher Tool →
          </a>
        </div>

        {/* Programmatic FAQ Section for Rich Snippets */}
        <section className="mt-16 text-left max-w-2xl mx-auto border-t border-slate-800 pt-8">
          <h2 className="text-xl font-bold mb-4 text-white capitalize">How to {cleanAction} {cleanPlatform} videos?</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-slate-400">
            <li>Copy the direct media link from the {cleanPlatform} app or website.</li>
            <li>Paste the URL into the search box on the SocialsFetcher home page.</li>
            <li>Click Fetch Media to extract the clean MP4 file without watermarks.</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 SocialsFetcher.com — Dedicated {cleanPlatform} Tool.
      </footer>
    </div>
  );
}
