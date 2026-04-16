"use client";
import React, { useState } from "react";
import { InView } from "@/components/motion-primitives/in-view";
import { Loader2 } from "lucide-react";

interface NewsletterCTAProps {
  discordUrl?: string;
}

export const NewsletterCTA: React.FC<NewsletterCTAProps> = ({
  discordUrl = "https://discord.com/invite/YkqJswRGSW",
}) => {
  const [loading] = useState(false);

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Stay connected.
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto mb-12">
                Get updates on events, job opportunities, and community
                highlights.
              </p>

              <button
                type="button"
                onClick={() => window.open(discordUrl, "_blank")}
                disabled={loading}
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full transition-all duration-500 hover:bg-neutral-100 hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Join Community"
                )}
              </button>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default NewsletterCTA;
