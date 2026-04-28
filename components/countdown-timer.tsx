"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  startDate: string;
  endDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type EventStatus = "loading" | "upcoming" | "live" | "ended";

interface EventState {
  status: EventStatus;
  timeLeft?: TimeLeft;
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

function getEventState(startDate: string, endDate: string): EventState {
  const now = Date.now();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  if (now >= end) return { status: "ended" };
  if (now >= start) return { status: "live" };

  const timeLeft = calculateTimeLeft(startDate);
  return timeLeft ? { status: "upcoming", timeLeft } : { status: "live" };
}

const UNITS = [
  { key: "days",    label: "days" },
  { key: "hours",   label: "hours" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
] as const;

function CountdownUnits({ timeLeft }: { timeLeft: TimeLeft | Record<string, number> }) {
  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto",
        rowGap: "6px",
        columnGap: "8px",
        alignItems: "center",
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid var(--color-border)",
        padding: "12px 16px",
        marginBottom: "var(--space-lg)",
        maxWidth: "100%",
      }}
    >
      {/* Label row */}
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

      {/* Numbers row */}
      {UNITS.map(({ key }, i) => (
        <React.Fragment key={key}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(24px, 6.5vw, 80px)",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontVariantNumeric: "tabular-nums",
            gridRow: 2,
          }}>
            {String(timeLeft[key]).padStart(2, "0")}
          </span>
          {i < UNITS.length - 1 && (
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(16px, 3.5vw, 48px)",
              color: "var(--color-border-strong)",
              lineHeight: 1,
              textAlign: "center",
              gridRow: 2,
            }}>
              :
            </span>
          )}
        </React.Fragment>
      ))}
      {/* Labels row */}
      {UNITS.map(({ key, label }, i) => (
        <React.Fragment key={`label-${key}`}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--color-fg-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            gridRow: 3,
          }}>
            {label}
          </span>
          {i < UNITS.length - 1 && <span style={{ gridRow: 3 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export function CountdownTimer({ startDate, endDate }: CountdownTimerProps) {
  const [state, setState] = useState<EventState>({ status: "loading" });

  useEffect(() => {
    const tick = () => setState(getEventState(startDate, endDate));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startDate, endDate]);

  if (state.status === "loading") {
    return <CountdownUnits timeLeft={{ days: 0, hours: 0, minutes: 0, seconds: 0 }} />;
  }

  if (state.status === "upcoming" && state.timeLeft) {
    return <CountdownUnits timeLeft={state.timeLeft} />;
  }

  if (state.status === "live") {
    return (
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "#22c55e", marginBottom: "var(--space-lg)", letterSpacing: "0.05em" }}>
        <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#22c55e", marginRight: 8, verticalAlign: "middle" }} />
        Event is live
      </p>
    );
  }

  return (
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--color-fg-muted)", marginBottom: "var(--space-lg)" }}>
      Event ended — see you next year.
    </p>
  );
}
