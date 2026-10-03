import React from 'react';

export function AffiliateDisclosure() {
  return (
    <div className="my-6 rounded-lg border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-400">
      <p>
        <span className="font-semibold text-slate-300">Affiliate Disclosure:</span> Some links on this page are affiliate links. If you purchase through these links, SocialsFetcher may earn a commission at no additional cost to you. We only recommend tools that deliver tangible workflow value.
      </p>
    </div>
  );
}

interface SponsoredLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function SponsoredLink({ href, children, className, ...props }: SponsoredLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className || "font-medium text-emerald-400 underline hover:text-emerald-300"}
      {...props}
    >
      {children}
    </a>
  );
}
