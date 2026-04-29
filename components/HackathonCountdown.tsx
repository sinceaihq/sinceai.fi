"use client";

import React from "react";
import dynamic from "next/dynamic";

interface HackathonCountdownProps {
  startDate: string;
  endDate: string;
}

const TIME_UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function CountdownPlaceholder() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto",
      rowGap: "6px",
      columnGap: "8px",
      alignItems: "center",
      background: "rgba(255,255,255,0.04)",
      border: "0.5px solid var(--color-border)",
      padding: "12px 16px",
      marginBottom: "var(--space-lg)",
      maxWidth: "100%",
    }}>
      <span style={{
        gridColumn: "1 / -1",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        color: "var(--color-fg-muted)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        paddingBottom: "8px",
        borderBottom: "0.5px solid var(--color-border)",
        marginBottom: "4px",
      }}>
        until Since AI Hackathon 2026 begins
      </span>

      {TIME_UNITS.map((label, i) => (
        <React.Fragment key={label}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(24px, 6.5vw, 80px)", fontWeight: 500, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em", gridRow: 2 }}>00</span>
          {i < TIME_UNITS.length - 1 && <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(16px, 3.5vw, 48px)", color: "var(--color-border-strong)", lineHeight: 1, textAlign: "center", gridRow: 2 }}>:</span>}
        </React.Fragment>
      ))}
      {TIME_UNITS.map((label, i) => (
        <React.Fragment key={`label-${label}`}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-fg-muted)", letterSpacing: "0.08em", textTransform: "uppercase", gridRow: 3 }}>{label.toLowerCase()}</span>
          {i < TIME_UNITS.length - 1 && <span style={{ gridRow: 3 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

const ClientCountdownTimer = dynamic(
  () => import("@/components/countdown-timer").then((mod) => mod.CountdownTimer),
  {
    ssr: false,
    loading: CountdownPlaceholder,
  }
);

export function HackathonCountdown({
  startDate,
  endDate,
}: HackathonCountdownProps) {
  return <ClientCountdownTimer startDate={startDate} endDate={endDate} />;
}
