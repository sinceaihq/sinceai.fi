"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface LeanHeroProps {
  discordUrl: string;
}

export function LeanHero({ discordUrl }: LeanHeroProps) {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center px-6 py-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center space-y-10 text-center max-w-5xl mx-auto">
        {/* H1 - Single line */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Europe&apos;s AI builders community.
        </motion.h1>

        {/* Sub - Full lifecycle positioning */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-400 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          From challenge ideation to production deployment. Hackathons, real AI
          projects, and a global developer network. Based in Turku, Finland.
        </motion.p>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm font-medium text-neutral-500"
        >
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            Challenge Ideation
          </span>
          <span className="text-neutral-600 self-center">→</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            72h Hackathon
          </span>
          <span className="text-neutral-600 self-center">→</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            Production Support
          </span>
          <span className="text-neutral-600 self-center">→</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            Commercialization
          </span>
        </motion.div>

        {/* Proof line - Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-neutral-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            1000+ members
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            260+ builders
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            30+ shipped projects
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            15+ partners
          </span>
        </motion.div>

        {/* CTAs - Two buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white rounded-full transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02]"
          >
            Join the Discord
          </a>
          
          <Link
            href="/partners"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-full transition-all duration-300 hover:bg-white/15 backdrop-blur-xl border border-white/20 hover:border-white/30 hover:scale-[1.02]"
          >
            Partner with Since AI
          </Link>
        </motion.div>

        {/* Optional micro-line */}
        <motion.p
          className="text-sm text-neutral-600 font-medium tracking-wide pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Open to top builders worldwide.
        </motion.p>
      </div>
    </section>
  );
}
