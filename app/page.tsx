"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

import SmoothScroll from "@/components/smoothScroll";
import Preloader from "@/components/utils/Preloader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections";
import { challengeThemes } from "@/lib/projects";

// Lean homepage sections
import { LeanHero } from "@/components/sections/homepage/LeanHero";
import { TrustBar } from "@/components/sections/homepage/TrustBar";
import { ThreePillars } from "@/components/sections/homepage/ThreePillars";
import { ProofStrip } from "@/components/sections/homepage/ProofStrip";
import { ProjectSpotlight } from "@/components/sections/homepage/ProjectSpotlight";
import { DualCTA } from "@/components/sections/homepage/DualCTA";
import { LatestPosts } from "@/components/sections/homepage/LatestPosts";
import { PartnersSection } from "@/components/sections/homepage/PartnersSection";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, []);

  const config = {
    discordUrl: "https://discord.gg/6PC74zW68v",
  };

  // Get top 2 challenge themes for spotlight (Kongsberg and Sandvik)
  const spotlightThemes = challengeThemes.slice(0, 2);

  return (
    <>
      <Navbar />
      <SmoothScroll>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <main className="flex flex-col w-full overflow-hidden">
          {/* A) Hero - Minimal */}
          <LeanHero discordUrl={config.discordUrl} />

          {/* B) Trust Bar - Logos ONCE */}
          <TrustBar />

          {/* C) Three Pillars - Short */}
          <ThreePillars />

          {/* D) Proof Strip - Metrics + 1 Quote */}
          <ProofStrip />

          {/* E) Project Spotlight - 2 Challenge Themes */}
          <ProjectSpotlight themes={spotlightThemes} />

          {/* F) Latest Blog Posts */}
          <LatestPosts />

          {/* G) Dual CTA - Partner + Join */}
          <DualCTA discordUrl={config.discordUrl} />

          {/* H) Partners & Supporters */}
          <PartnersSection />

          {/* Footer */}
          <Footer discordUrl={config.discordUrl} />
        </main>
      </SmoothScroll>
    </>
  );
}
