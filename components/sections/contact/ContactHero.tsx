"use client";
import React from "react";
import { motion } from "framer-motion";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center bg-black  pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Decorative line */}
        <motion.div
          className="flex items-center gap-4 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-white/50 text-sm font-light tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let&apos;s Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
            Together
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you&apos;re a community member, potential partner, or just
          curious—we&apos;d love to hear from you.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  );
};

export default ContactHero;
