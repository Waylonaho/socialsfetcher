import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — SocialsFetcher',
  description: 'Privacy policy, cookies disclosure, and affiliate disclosures for SocialsFetcher.com.',
  alternates: {
    canonical: 'https://www.socialsfetcher.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-400">
            Socials<span className="text-white">Fetcher</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12 text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy &amp; Affiliate Disclosures
        </h1>
        <p className="text-xs text-slate-400">Last Updated: November 5, 2026</p>

        <section className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
          <p>
            SocialsFetcher (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a web utility and educational content provider. We do not require account registration to access our media utilities or blog guides. We do not store, host, or track personal media files uploaded or processed through our client-side web tools.
          </p>
        </section>

        <section className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white">2. Cookies &amp; Third-Party Analytics</h2>
          <p>
            We may use privacy-conscious analytics tools to measure aggregate website performance, server uptime, and traffic sources (such as pageviews and browser device types). Third-party vendors and partner links may place or read cookies on your browser to collect information when you click on referral links.
          </p>
        </section>

        <section className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white">3. Amazon Associates &amp; Affiliate Disclosure</h2>
          <p>
            SocialsFetcher is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-emerald-400">
            &quot;As an Amazon Associate I earn from qualifying purchases.&quot;
          </p>
          <p>
            We also participate in referral programs for software platforms (such as OpusClip and ToolSuite). When you click on an affiliate link and make a purchase, we may receive a small commission at no additional cost to you.
          </p>
        </section>

        <section className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white">4. External Web Links</h2>
          <p>
            Our website contains links to external websites, software platforms, and web services. We are not responsible for the content, security practices, or privacy policies of third-party external domains.
          </p>
        </section>

        <section className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or website practices, please reach out via our official website routes or developer contact channels.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© 2026 SocialsFetcher.com — As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
