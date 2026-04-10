"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FOUNDING_YEAR, FIRST_EVENT } from "@/lib/sinceai";

export function ProofStrip() {
  const metrics = [
    { value: `${FOUNDING_YEAR}`, label: "Founded" },
    { value: "1000+", label: "Community Members" },
    { value: `${FIRST_EVENT.attendance}`, label: "Hackathon Builders" },
    { value: "30+", label: "Projects Shipped" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-neutral-950 to-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-neutral-500 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed mb-6">
            &ldquo;We hired 3 exceptional developers. Best recruiting investment we made this year.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold text-neutral-400">
              Head of Talent, Partner Company
            </p>
            <Link
              href="/partners"
              className="text-sm text-neutral-600 hover:text-white transition-colors underline"
            >
              Read more partner stories →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
