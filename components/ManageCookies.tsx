"use client";

import { COOKIE_CONSENT_KEY } from "@/components/CookieConsent";

export function ManageCookies() {
  function resetConsent() {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.location.reload();
  }

  return (
    <button
      onClick={resetConsent}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        fontWeight: 500,
        color: "var(--color-fg-muted)",
        background: "transparent",
        border: "0.5px solid var(--color-border-strong)",
        padding: "12px 20px",
        borderRadius: 0,
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s",
        marginTop: "0.5rem",
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
      Manage cookie preferences
    </button>
  );
}
