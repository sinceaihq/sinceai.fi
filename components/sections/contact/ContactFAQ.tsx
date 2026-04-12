"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

interface ContactFAQProps {
  discordUrl?: string;
}

export const ContactFAQ: React.FC<ContactFAQProps> = ({
  discordUrl = "https://discord.com/invite/YkqJswRGSW",
}) => {
  const faqs: FAQItem[] = [
    {
      question: "What sponsorship options are available?",
      answer: "Every partnership is custom-tailored to your goals. Whether you're looking to recruit talent, build brand awareness, or support the AI community, we'll create a solution that works. Email us or fill out the contact form with your objectives, and we'll get back to you with options.",
    //   link: {
    //     text: "Learn about partnerships",
    //     href: "/#partner-section",
    //   },
    },
    {
      question: "How do I join the community?",
      answer: "Join our Discord or Telegram for free! You'll get access to member-only channels, our job board, networking events, and updates about upcoming hackathons. It's the best way to connect with 1000+ AI developers, founders, and enthusiasts.",
      link: {
        text: "Join Discord",
        href: discordUrl,
        external: true,
      },
    },
    // {
    //   question: "Can I post a job opportunity?",
    //   answer: "Yes! Companies can post jobs to our community job board through Discord, or you can sponsor the hackathon for dedicated recruiting access. We have 1000+ AI-focused developers, designers, and founders in our community looking for their next opportunity.",
    //   link: {
    //     text: "Email us about job postings",
    //     href: "mailto:info@sinceai.fi?subject=Job%20Posting%20Inquiry",
    //   },
    // },
    {
      question: "What's the best way to reach you?",
      answer: "For general inquiries, fill out the contact form above. For urgent matters, email us directly at info@sinceai.fi. We typically respond within 24 hours. For partnership discussions, you can also reach out to individual team members listed on this page.",
    },
    {
      question: "Where are you based?",
      answer: "Since AI is based in Turku, Finland. We're a registered non-profit organization (Since AI ry, Business ID: 3593920-2) focused on fostering innovation and AI development in the region and beyond. Our hackathons and events are typically held in Turku, but our community is global.",
    },
    {
      question: "How can I volunteer or contribute?",
      answer: "We're always looking for passionate individuals to help with events, content creation, community management, and more. Join our Discord or Telegram and let us know you're interested in contributing. We'll find a way to get you involved!",
      link: {
        text: "Join Discord to learn more",
        href: discordUrl,
        external: true,
      },
    },
  ];

  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 font-light">
            Find quick answers to common questions below.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl px-6 border-none data-[state=open]:bg-white/[0.07] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-white font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 font-light leading-relaxed pb-5">
                  <p className="mb-3">{faq.answer}</p>
                  {faq.link && (
                    <a
                      href={faq.link.href}
                      target={faq.link.external ? "_blank" : undefined}
                      rel={faq.link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors duration-200"
                    >
                      {faq.link.text}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {faq.link.external ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        )}
                      </svg>
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
