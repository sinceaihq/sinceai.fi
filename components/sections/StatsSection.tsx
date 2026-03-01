"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { Users, Briefcase, FolderGit2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsSectionProps {
  participants?: string;
  projects?: string;
  companies?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  participants = "200+",
  projects = "30+",
  companies = "15+",
}) => {
  const stats: StatItem[] = [
    {
      icon: <Users className="w-8 h-8 text-white/50 group-hover:text-blue-500 transition-all duration-300" />,
      value: participants,
      label: "Participants",
    },
    {
      icon: <FolderGit2 className="w-8 h-8 text-white/50 group-hover:text-purple-500 transition-all duration-300" />,
      value: projects,
      label: "Projects Completed",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white/50 group-hover:text-green-500 transition-all duration-300  " />,
      value: companies,
      label: "Partnered Companies",
    },
  ];

  const sponsors = [
    { name: "Antler", logo: "/assets/sponsors/antler.png" },
    { name: "Apelago", logo: "/assets/sponsors/apelago.png" },
    { name: "Business Turku", logo: "/assets/sponsors/businessturku.png" },
    { name: "Eisko", logo: "/assets/sponsors/eisko.svg" },
    { name: "ElevenLabs", logo: "/assets/sponsors/elevenlabs.png" },
    { name: "Featherless", logo: "/assets/sponsors/featherless.svg" },
    { name: "Kongsberg", logo: "/assets/sponsors/kongsberg.png" },
    { name: "Sandvik", logo: "/assets/sponsors/sandvik.png" },
    { name: "Skillio", logo: "/assets/sponsors/Skillio.png" },
    { name: "Valmet", logo: "/assets/sponsors/valmet.png" },
  ];

  const supporters = [
    { name: "Aalto AI", logo: "/assets/supports/aaltoai.png" },
    { name: "AI Mad Lab", logo: "/assets/supports/aimadlab.svg" },
    { name: "Boost Turku", logo: "/assets/supports/boost.svg" },
    { name: "City of Turku", logo: "/assets/supports/cityofturku.png" },
    { name: "Turku", logo: "/assets/supports/turku.png" },
    { name: "Turku AMK", logo: "/assets/supports/turkuamk.png" },
    {
      name: "University of Turku",
      logo: "/assets/supports/universityofturku.png",
    },
  ];

  const allLogos = [...sponsors, ...supporters];

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="flex flex-col gap-40 max-w-7xl mx-auto">
        {/* Partner & Supporter Logos Slider */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          once
        >
          <div>
            <p className="text-center text-neutral-500 text-xs md:text-sm font-medium tracking-wider mb-12">
              Trusted & supported by
            </p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
              <InfiniteSlider speed={25} gap={64}>
                {allLogos.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center h-16 w-40 opacity-40 hover:opacity-100 transition-all duration-500 group"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo — Since AI hackathon partner`}
                      style={{ height: '64px', width: 'auto' }}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 p-10 md:p-12 text-center border border-white/5 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col items-center gap-6">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
                    {stat.value}
                  </div>

                  <div className="text-sm md:text-base text-neutral-500 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default StatsSection;
