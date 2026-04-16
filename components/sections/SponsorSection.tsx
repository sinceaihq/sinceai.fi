"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { Users, Lightbulb, Target } from "lucide-react";

export const SponsorSection: React.FC = () => {
  const valueProps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Connect",
      description:
        "Access to pre-vetted AI developers in a thriving community. No data harvesting, real relationships.",
      gradient: "from-blue-500/10",
      color: "group-hover:text-blue-400",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Collaborate",
      description:
        "Custom partnership options tailored to your hiring, R&D, or growth goals. We work with you.",
      gradient: "from-purple-500/10",
      color: "group-hover:text-purple-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Succeed",
      description:
        "80% of partners stayed connected with our developers after the event. Track record of successful hires and meaningful partnerships.",
      gradient: "from-green-500/10",
      color: "group-hover:text-green-400",
    },
  ];

  return (
    <section id="partner-section" className="py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              Partner With Us
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight text-white max-w-4xl">
              Partner With Our
              <br />
              <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">Community.</span>
            </h2>
          </div>
        </InView>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-32">
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

                <div className="relative p-10 md:p-12 flex flex-col gap-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {prop.title}
                    </h3>
                    <p className="text-neutral-400 font-normal leading-relaxed text-base md:text-lg">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>

        {/* Testimonial */}
        {/* <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 mb-24">
            <div className="absolute top-8 left-8 text-white/10">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/assets/sponsors/sandvik.png"
                  alt="Sandvik logo — engineering partner providing real AI challenges at Since AI Hackathon"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl md:text-2xl text-white/80 font-light italic mb-6 leading-relaxed">
                  "We found 3 exceptional developers. and we would love to be a
                  part of event like this in the future."
                </blockquote>
                <div className="space-y-1">
                  <div className="text-white font-medium">
                    Partner Representative
                  </div>
                  <div className="text-white/50 text-sm">Sandvik</div>
                </div>
              </div>
            </div>
          </div>
        </InView> */}

        {/* CTA Section */}
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

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                  Let&apos;s Create Something Great Together
                </h3>
                <p className="text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto">
                  Every partnership is different. Tell us your goals—we&apos;ll reach
                  it with you
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full transition-all duration-500 hover:bg-neutral-100 hover:scale-[1.02] transform"
                  href="/contact"
                >
                  <span>Let&apos;s Talk</span>
                </a>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default SponsorSection;
