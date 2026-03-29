"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { 
  MessageSquare, 
  Presentation, 
  Briefcase, 
  Calendar,
  ChevronRight 
} from "lucide-react";

interface CommunityEvent {
  icon: React.ReactNode;
  title: string;
  description: string;
  frequency: string;
  color: string;
}

interface CommunityEngagementProps {
  discordUrl?: string;
  nextHackathonDate?: string;
  jobBoardUrl?: string;
}

export const CommunityEngagement: React.FC<CommunityEngagementProps> = ({
  discordUrl = "https://discord.gg/6PC74zW68v",
  nextHackathonDate = "November 21-23, 2025",
  jobBoardUrl = "#jobs",
}) => {
  const events: CommunityEvent[] = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discord Meetups",
      description: "Connect with fellow developers, share projects, and get feedback from the community.",
      frequency: "Monthly",
      color: "text-blue-400",
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Workshops & Talks",
      description: "Learn from industry experts and community members about cutting-edge AI topics.",
      frequency: "Quarterly",
      color: "text-purple-400",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Job Board",
      description: "Exclusive opportunities from partner companies looking for AI/ML talent.",
      frequency: "Always Open",
      color: "text-green-400",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Next Hackathon",
      description: `Mark your calendar for Since AI 2025. ${nextHackathonDate} in Turku, Finland.`,
      frequency: "Annual",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
              Year-Round Community
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center leading-tight text-white max-w-4xl">
              It&apos;s not just an event.
              <br />
              <span className="text-white/70">It&apos;s a community.</span>
            </h2>
          </div>
        </InView>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          {events.map((event, index) => (
            <InView
              key={event.title}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                visible: { opacity: 1, x: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              once
            >
              <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 max-w-md"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-xs text-white/40 uppercase tracking-wider">
                        {event.frequency}
                      </span>
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${event.color}`}>
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
                
                <div className="relative z-10 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40" />
                
                <div className="flex-1" />
              </div>
            </InView>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <InView
              key={event.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              once
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${event.color}`}>
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-white">
                        {event.title}
                      </h3>
                      <span className="text-xs text-white/40 uppercase tracking-wider">
                        {event.frequency}
                      </span>
                    </div>
                    <p className="text-white/60 font-light text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </InView>
          ))}
        </div>

        {/* CTA */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          once
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-light hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <span>Join Discord Community</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href={jobBoardUrl}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-light transition-colors duration-200 group"
            >
              <span>Browse Job Board</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default CommunityEngagement;
