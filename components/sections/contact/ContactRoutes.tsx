"use client";
import React from "react";
import { motion } from "framer-motion";
import { Handshake, Users, Megaphone, Briefcase } from "lucide-react";

interface RouteCard {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  action: () => void;
}

interface ContactRoutesProps {
  onPartnerClick: () => void;
  onTeamClick: () => void;
  discordUrl?: string;
}

export const ContactRoutes: React.FC<ContactRoutesProps> = ({
  onTeamClick,
  discordUrl = "https://discord.com/invite/YkqJswRGSW",
}) => {
  const routes: RouteCard[] = [
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Looking to sponsor the next hackathon or collaborate? We'd love to talk.",
      cta: "Start a Partnership",
      action: onTeamClick,
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Want to connect with AI developers? Join our Discord.",
      cta: "Join Discord",
      action: () => window.open(discordUrl, "_blank"),
    },
    {
      icon: Megaphone,
      title: "Press & Media",
      description: "Interested in covering Since AI? Have press inquiries?",
      cta: "Contact Press",
      action: onTeamClick,
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Hiring? Our community members are looking for their next role.",
      cta: "Post a Job",
      action: onTeamClick,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            How can we help?
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto">
            Choose the option that best fits your needs, or scroll down to send us a message.
          </p>
        </motion.div>

        {/* Route cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {routes.map((route, index) => (
            <motion.button
              key={index}
              onClick={route.action}
              className="group relative rounded-2xl p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <route.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {route.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm font-light mb-4 leading-relaxed">
                  {route.description}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center text-sm font-medium text-white group-hover:text-white/80 transition-colors duration-200">
                  {route.cta}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactRoutes;
