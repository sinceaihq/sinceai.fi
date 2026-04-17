"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const COOKIE_CONSENT_KEY = "cookie_consent";
const GA_ID = "G-1WG6MNLS9M";

type ConsentState = "granted" | "denied" | null;

interface State {
  consent: ConsentState;
  visible: boolean;
}

export function CookieConsent() {
  const [{ consent, visible }, setState] = useState<State>({
    consent: null,
    visible: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentState | null;
    const hasDecided = stored === "granted" || stored === "denied";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ consent: stored, visible: !hasDecided });
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "granted");
    setState({ consent: "granted", visible: false });
  }

  function decline() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "denied");
    setState({ consent: "denied", visible: false });
  }

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={GA_ID} />}

      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{ padding: "var(--space-sm, 1rem) var(--space-lg)" }}
        >
          <div
            className="mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              maxWidth: "1200px",
              padding: "12px var(--space-lg)",
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "0.5px solid rgba(255,255,255,0.25)",
            }}
          >
            <p
              className="flex-1 leading-relaxed"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-fg-muted)",
              }}
            >
              We use analytics cookies to understand how visitors use our site.
              Your data stays anonymous.{" "}
              <a
                href="/privacy"
                style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Privacy policy
              </a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--color-fg-muted)",
                  background: "transparent",
                  border: "0.5px solid var(--color-border-strong)",
                  padding: "8px 16px",
                  borderRadius: 0,
                  cursor: "pointer",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--color-fg-muted)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border-strong)";
                }}
              >
                Decline
              </button>
              <button
                onClick={accept}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#000",
                  background: "#fff",
                  border: "0.5px solid #fff",
                  padding: "8px 16px",
                  borderRadius: 0,
                  cursor: "pointer",
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
