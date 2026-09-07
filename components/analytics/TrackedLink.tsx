"use client";

import { trackEvent, type AnalyticsEvent } from "@/lib/gtag";

interface TrackedLinkProps {
  href: string;
  analyticsEvent: AnalyticsEvent;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

export function TrackedLink({
  href,
  analyticsEvent,
  className,
  ariaLabel,
  children,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(analyticsEvent)}
    >
      {children}
    </a>
  );
}
