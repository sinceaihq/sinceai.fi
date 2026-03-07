"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

const TIME_UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetDate));
    tick(); // set immediately on mount
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  // null = not yet mounted (avoids hydration mismatch)
  if (!timeLeft) {
    return (
      <div className="mb-10">
        <div className="inline-block px-8 py-4 rounded-2xl bg-white/10 border border-white/20">
          <span className="text-xl md:text-2xl font-bold text-white">
            {timeLeft === null ? "\u00A0" : "Event Started!"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 mb-10">
      {TIME_UNITS.map((label) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tabular-nums">
              {String(timeLeft[label.toLowerCase() as keyof TimeLeft]).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-neutral-500 mt-2 font-medium uppercase tracking-wider">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}