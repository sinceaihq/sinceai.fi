"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "@/components/motion-primitives/in-view";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface ParticipantTestimonial {
  type: "participant";
  name: string;
  role: string;
  company?: string;
  photo: string;
  quote: string;
  rating: number;
}

interface PartnerTestimonial {
  type: "partner";
  contactName: string;
  title: string;
  companyLogo: string;
  companyName: string;
  quote: string;
}

type Testimonial = ParticipantTestimonial | PartnerTestimonial;

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    type: "participant",
    name: "Anna Korhonen",
    role: "ML Engineer",
    company: "TechCorp",
    photo: "/assets/images/testimonials/placeholder.jpg",
    quote: "Since AI was the most inspiring hackathon I've ever attended. The community support and mentorship were invaluable.",
    rating: 5,
  },
  {
    type: "participant",
    name: "Marcus Chen",
    role: "Full-Stack Developer",
    photo: "/assets/images/testimonials/placeholder.jpg",
    quote: "Found my co-founder here! The networking opportunities are unmatched in the Nordic region.",
    rating: 5,
  },
  {
    type: "partner",
    contactName: "Partner Representative",
    title: "Head of Talent",
    companyLogo: "/assets/sponsors/valmet.png",
    companyName: "Partner Company",
    quote: "We hired 3 exceptional developers. Best recruiting investment we made this year.",
  },
  {
    type: "participant",
    name: "Sofia Lindberg",
    role: "AI Researcher",
    company: "University of Turku",
    photo: "/assets/images/testimonials/placeholder.jpg",
    quote: "The quality of projects and participants is remarkable. This community truly pushes AI forward.",
    rating: 5,
  },
  {
    type: "partner",
    contactName: "Partner Contact",
    title: "Innovation Lead",
    companyLogo: "/assets/sponsors/kongsberg.png",
    companyName: "Partner Company",
    quote: "Partnership exceeded expectations. The community is engaged, talented, and genuinely passionate about AI.",
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const participantTestimonials = testimonials.filter((t) => t.type === "participant") as ParticipantTestimonial[];
  const partnerTestimonials = testimonials.filter((t) => t.type === "partner") as PartnerTestimonial[];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % participantTestimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + participantTestimonials.length) % participantTestimonials.length);
  };

  return (
    <section className="py-32 md:py-40 px-6">
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
              Testimonials
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] tracking-tight text-white max-w-4xl">
              Hear from our
              <br />
              <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">community.</span>
            </h2>
          </div>
        </InView>

        {/* Participant Testimonials - Desktop Grid / Mobile Carousel */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="mb-20">
            <h3 className="text-sm font-medium text-neutral-600 tracking-wide mb-12 text-center">
              From Participants
            </h3>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {participantTestimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 p-10 border border-white/5 hover:border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative">
                    <p className="text-neutral-300 font-normal leading-relaxed mb-8 text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg font-semibold text-neutral-400">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-neutral-500">
                          {testimonial.role}
                          {testimonial.company && ` @ ${testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-2xl p-10 border border-white/5"
                  >
                    <div className="relative">
                      <p className="text-neutral-300 font-normal leading-relaxed mb-8 text-base">
                        &ldquo;{participantTestimonials[activeIndex].quote}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg font-semibold text-neutral-400">
                          {participantTestimonials[activeIndex].name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">
                            {participantTestimonials[activeIndex].name}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {participantTestimonials[activeIndex].role}
                            {participantTestimonials[activeIndex].company && 
                              ` @ ${participantTestimonials[activeIndex].company}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-400" />
                </button>
                <div className="flex items-center gap-2">
                  {participantTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "bg-white w-8" : "bg-white/20"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-400" />
                </button>
              </div>
            </div>
          </div>
        </InView>

        {/* Partner Testimonials */}
        {/* <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div>
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-8 text-center">
              From Partners
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.companyName + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8"
                >
                  <div className="absolute top-6 right-6 text-white/5">
                    <Quote className="w-12 h-12" />
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.companyLogo}
                        alt={`${testimonial.companyName} logo`}
                        className="w-20 h-20 object-contain opacity-70"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-white/70 font-light leading-relaxed italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      
                      <div>
                        <div className="font-medium text-white">{testimonial.contactName}</div>
                        <div className="text-sm text-white/50">
                          {testimonial.title}, {testimonial.companyName}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </InView> */}
      </div>
    </section>
  );
};

export default Testimonials;
