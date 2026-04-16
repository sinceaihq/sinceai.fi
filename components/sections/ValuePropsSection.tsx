"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Users, CheckCircle, Briefcase } from "lucide-react";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export const ValuePropsSection: React.FC = () => {
  const valueProps: ValueProp[] = [
    {
      icon: <Users className="w-6 h-6 text-white/50 group-hover:text-blue-500 transition-all duration-300" />,
      title: "Build with world-class peers",
      description: "Hackathons and meetups for people who actually ship — research-to-product, not theory-only.",
      gradient: "from-gray-500/10",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white/50 group-hover:text-green-500 transition-all duration-300" />,
      title: "Proof you can verify",
      description: "Every featured project has GitHub links, demos, and post-event reports. No 'vibes-only' communities.",
      gradient: "from-gray-500/10",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white/50 group-hover:text-purple-500 transition-all duration-300" />,
      title: "Direct access to high-quality opportunities",
      description: "Partners sponsor challenges, run workshops, and recruit — with a community built for signal, not noise.",
      gradient: "from-gray-500/10",
    },
  ];

  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          once
        >
          <div className="flex flex-col items-center gap-8 mb-24">
            <div className="text-xs md:text-sm font-medium text-neutral-500 tracking-wider">
              Why Since AI
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight text-white max-w-4xl">
              High-signal builders.
              <br />
              <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">Real outcomes.</span>
            </h2>
          </div>
        </InView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {valueProps.map((prop, index) => (
            <InView
              key={prop.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              once
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 border border-white/5 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 md:p-12 flex flex-col gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                      {prop.title}
                    </h3>
                    <p className="text-neutral-400 font-normal leading-relaxed text-base">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
