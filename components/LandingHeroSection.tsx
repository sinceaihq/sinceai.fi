"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Hls from "hls.js";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface HLSVideoProps {
  src: string;
}

// ─── BlurIn ───────────────────────────────────────────────────────────────────

function BlurIn({ children, delay = 0, duration = 0.6, className = "" }: BlurInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── HLS Video ────────────────────────────────────────────────────────────────

function HLSVideo({ src }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari supports HLS natively
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {
        // Auto-play was prevented, that's okay
      });
      return;
    }

    // All other browsers: use hls.js
    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      hls.on(Hls.Events.MANIFEST_PARSED as any, () => {
        video.play().catch(() => {
          // Auto-play was prevented, that's okay
        });
      });
    } else {
      // Fallback: try direct video source
      video.src = src;
      video.play().catch(() => {});
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      style={{
        transform: "scale(1.2)",
        transformOrigin: "center center",
        zIndex: 0,
      }}
    />
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const WORD_DELAY = 0.08;
const DURATION = 0.6;
const BASE_DELAY = 0;

const line1Words = ["Build", "AI.", "Ship", "Products."] as const;
const line2Words = ["Europe's", "AI"] as const;
const line3Words = ["Builder", "Community."] as const;

export default function LandingHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#070612" }}
    >
      {/* Background HLS Video */}
      <HLSVideo src="https://stream.mux.com/qkbnLW01PSjE5XNji3OEHzbaCxBLqmjmfNFPm01bNvnPE.m3u8" />

      {/* Bottom fade gradient — z-10 */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #070612, transparent)",
          zIndex: 10,
        }}
      />

      {/* Content — z-20 */}
      <div
        className="relative flex items-center h-full w-full"
        style={{ zIndex: 20 }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Outer gap-12: badge+heading+subtitle group vs CTA buttons */}
          <div className="flex flex-col gap-12">

            {/* Top group — gap-6 between badge / heading / subtitle */}
            <div className="flex flex-col gap-6">

      {/* Badge */}
      <BlurIn delay={0} duration={0.6}>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-3.5 py-1.5">
          <Sparkles className="w-3 h-3 text-white/80" />
          <span className="text-sm font-medium text-white/80">
            Since AI Hackathon 2026 — Nov 6-8, Turku
          </span>
        </div>
      </BlurIn>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.2] text-white m-0">
                {/* Line 1 — block */}
                <span className="block">
                  {line1Words.map((word, i) => (
                    <motion.span
                      key={`l1-${i}`}
                      className="inline-block mr-[0.3em]"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: DURATION,
                        delay: BASE_DELAY + i * WORD_DELAY,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>

                {/* Line 2 + 3 — inline */}
                <span>
                  {line2Words.map((word, i) => (
                    <motion.span
                      key={`l2-${i}`}
                      className="inline-block mr-[0.3em]"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: DURATION,
                        delay: BASE_DELAY + (line1Words.length + i) * WORD_DELAY,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}

                  {line3Words.map((word, i) => (
                    <motion.span
                      key={`l3-${i}`}
                      className="inline-block mr-[0.3em] italic"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: DURATION,
                        delay:
                          BASE_DELAY +
                          (line1Words.length + line2Words.length + i) * WORD_DELAY,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>

      {/* Subtitle */}
      <BlurIn delay={0.4} duration={0.6}>
        <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl m-0">
          Join 500+ AI builders in Europe&apos;s most active developer community. 
          Hackathons, real projects, and a network that ships.
        </p>
      </BlurIn>
            </div>

      {/* CTA Buttons */}
      <BlurIn delay={0.6} duration={0.6}>
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary — white solid */}
          <Link
            href="/hackathon"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold
              bg-white text-[#070612] transition-opacity hover:opacity-90 no-underline"
          >
            Join Hackathon 2026
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary — frosted glass */}
          <a
            href="https://discord.gg/6PC74zW68v"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-[0.95rem] font-medium
              bg-white/20 backdrop-blur-sm text-white border-0 cursor-pointer
              transition-colors hover:bg-white/[0.28]"
          >
            Join Discord
          </a>
        </div>
      </BlurIn>

          </div>
        </div>
      </div>
    </section>
  );
}