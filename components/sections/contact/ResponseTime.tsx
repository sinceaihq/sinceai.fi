"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const ResponseTime: React.FC = () => {
  return (
    <motion.section 
      className="w-full bg-black py-8 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-xl mx-auto">
        <div className="border border-white/10 rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-white/70" />
          </div>
          <div>
            <p className="text-white font-medium mb-1">
              We typically respond within 24 hours
            </p>
            <p className="text-white/60 text-sm font-light">
              For urgent inquiries, please mention it in your message or email us directly at{" "}
              <a
                href="mailto:info@sinceai.fi"
                className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
              >
                info@sinceai.fi
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResponseTime;
