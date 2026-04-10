"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { ORG } from "@/lib/org";

interface ContactCard {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
  href: string;
  external?: boolean;
}

interface DirectContactProps {
  discordUrl?: string;
}

export const DirectContact: React.FC<DirectContactProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
}) => {
  const contacts: ContactCard[] = [
    {
      icon: Mail,
      title: "Email",
      description: "For general inquiries and questions",
      value: "info@sinceai.fi",
      href: "mailto:info@sinceai.fi",
    },
    {
      icon: FaDiscord,
      title: "Discord",
      description: "Join 1000+ AI builders",
      value: "Join our server",
      href: discordUrl,
      external: true,
    },
    {
      icon: FaTelegram,
      title: "Telegram",
      description: "Get event updates",
      value: "Join channel",
      href: ORG.social.telegram,
      external: true,
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in Finland",
      value: "Turku, Finland",
      href: "https://maps.google.com/?q=Turku,Finland",
      external: true,
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      value: "24 hours",
      href: "#",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Or reach out directly
          </h2>
          <p className="text-white/60 font-light">
            Connect with us through any of these channels.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contacts.map((contact, index) => {
            const isClickable = contact.href !== "#";
            const Component = isClickable ? "a" : "div";

            return (
              <motion.div key={index}>
                <Component
                  {...(isClickable && {
                    href: contact.href,
                    target: contact.external ? "_blank" : undefined,
                    rel: contact.external ? "noopener noreferrer" : undefined,
                  })}
                  className={`group block h-full hover:bg-white/5 rounded-2xl p-6 text-center transition-all duration-300 ${
                    isClickable
                      ? "hover:bg-white/10 hover:border-white/20 cursor-pointer"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-1">
                    {contact.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-xs font-light mb-3">
                    {contact.description}
                  </p>

                  {/* Value */}
                  <p
                    className={`text-sm font-medium ${
                      isClickable
                        ? "text-white group-hover:text-white/80"
                        : "text-white/80"
                    } transition-colors duration-200`}
                  >
                    {contact.value}
                  </p>
                </Component>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DirectContact;
