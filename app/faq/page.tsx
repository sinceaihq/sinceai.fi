"use client";
import React from "react";
import Link from "next/link";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LINKS } from "@/lib/sinceai";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { ORG } from "@/lib/org";

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Since AI?",
          a: "Since AI is Europe's only full-lifecycle AI innovation ecosystem with 500+ members, based in Turku, Finland. Unlike traditional hackathon organizers, we support AI projects from challenge ideation through hackathon building to production deployment and commercialization. Founded in 2025, our flagship hackathon brought together 260 builders who produced 30+ AI projects, many of which were subsequently deployed to production at partner companies.",
        },
        {
          q: "Where is Since AI based?",
          a: "Since AI is based in Turku, Finland. We're a registered non-profit organization (Since AI ry, Business ID: 3593920-2). While our events are typically held in Turku, our Discord community is global with members across Finland and internationally.",
        },
        {
          q: "Who can join Since AI?",
          a: "Anyone interested in AI is welcome! Our community includes ML engineers, full-stack developers, researchers, designers, founders, and students. Whether you're a beginner learning AI or an experienced practitioner, you'll find value in our events and community discussions.",
        },
      ],
    },
    {
      category: "Community & Events",
      questions: [
        {
          q: "How do I join the community?",
          a: "Join our Discord server for free at discord.gg/6PC74zW68v. You'll get access to member-only channels, job board, event updates, technical discussions, and networking opportunities with 500+ AI developers and founders.",
        },
        {
          q: "What happens at Since AI hackathons?",
          a: "Our hackathons are multi-day events where teams of 3-5 people build AI solutions for real company challenges. You'll receive mentorship from industry experts, access to compute credits and APIs, and the chance to showcase your work. Past projects include maritime sound classification, customer support automation, and switchboard diagram analysis.",
        },
        {
          q: "When is the next hackathon?",
          a: `Since AI Hackathon 2026 will be held in November 2026. Exact dates will be announced soon. Get updates on our Luma page (${LINKS.lumaOrg}) or join our Discord community. Follow us on LinkedIn and Instagram (@sinceaihq) for announcements.`,
        },
        {
          q: "Do I need a team to participate?",
          a: "No! You can join as an individual and we'll help you find teammates during the event kickoff. Many successful projects have been built by teams that formed at the hackathon.",
        },
      ],
    },
    {
      category: "Partnerships & Sponsorships",
      questions: [
        {
          q: "What sponsorship options are available?",
          a: "Every partnership is custom-tailored to your goals. Whether you're looking to recruit talent, build brand awareness, or support the AI community, we'll create a solution that works. Options include event sponsorships, workshop hosting, job board access, and custom partnership packages. Email us at info@sinceai.fi with your objectives.",
        },
        {
          q: "What do partners get?",
          a: "Partners get direct access to 500+ AI developers through hackathon challenges, recruiting events, logo placement, speaking opportunities, and Discord job board access. 80% of our partner companies have hired developers from our community. We can provide custom packages based on your hiring or brand goals.",
        },
        {
          q: "How much does partnership cost?",
          a: "Partnership packages vary based on scope and goals. Contact our partnerships team at info@sinceai.fi for pricing and custom packages tailored to your needs.",
        },
      ],
    },
    {
      category: "Projects & Learning",
      questions: [
        {
          q: "What kind of projects are built at hackathons?",
          a: "Recent projects include: SoundWatch (maritime sound classification using CNN), NLCAR Smart Message Router (fine-tuned LLM for customer support), Switchboard Diagram Analyzer (computer vision + OCR), and COLREG Sound Signal Classifier (audio ML for ship safety). All projects solve real company challenges.",
        },
        {
          q: "Can I showcase my project?",
          a: "Yes! Hackathon projects are presented to judges and attendees. Top projects are featured on our website and social media. If you've built an AI project outside our events, share it in our Discord #showcase channel.",
        },
        {
          q: "What resources are provided?",
          a: "Hackathon participants receive: compute credits (ElevenLabs, Featherless.ai), API access, datasets from partner companies, mentorship from industry experts, food and drinks, and networking opportunities. Plus, access to our Discord community for ongoing support.",
        },
      ],
    },
    {
      category: "Contact & Support",
      questions: [
        {
          q: "How do I contact Since AI?",
          a: "For general inquiries: info@sinceai.fi. For urgent matters, check our contact page for specific team members and their areas. We typically respond within 24 hours.",
        },
        {
          q: "Can I volunteer or contribute?",
          a: "Yes! We're always looking for passionate individuals to help with events, content creation, community management, and more. Join our Discord and let us know you're interested in contributing. We'll find a way to get you involved.",
        },
        {
          q: "Is there a code of conduct?",
          a: "Yes. We're committed to creating a safe, inclusive environment for all community members. View our full Code of Conduct at /code-of-conduct. In brief: be respectful, be inclusive, no harassment, and help us build a positive community.",
        },
      ],
    },
    {
      category: "What Makes Since AI Different",
      questions: [
        {
          q: "How is Since AI different from Junction or other hackathons?",
          a: "Junction is an excellent 48-hour hackathon focused on the event experience and networking. Since AI is a full-lifecycle AI innovation ecosystem. The key differences: Since AI co-creates challenges with companies before the event, provides 8+ weeks of post-hackathon production deployment support, and offers entrepreneurship and commercialization assistance. Junction delivers a premier weekend experience. Since AI delivers production outcomes and commercialization support over months. Both are excellent — different purposes.",
        },
        {
          q: "What happens after the hackathon?",
          a: "This is what makes Since AI unique. Unlike other hackathons where projects end with a demo, we provide 8+ weeks of production support: architecture review and optimization (weeks 1-2), infrastructure setup and CI/CD configuration (weeks 3-4), deployment support and monitoring (weeks 5-8), and ongoing mentorship (month 3+). The result: projects get deployed to production systems at companies like Kongsberg and Sandvik.",
        },
        {
          q: "Do you help with challenge ideation before the hackathon?",
          a: "Yes! We actively help companies ideate and design hackathon challenges that are technically feasible in 72 hours, aligned with real business needs, commercially viable for production deployment, and designed for maximum innovation potential. Most communities wait for companies to bring challenges. We co-create them to ensure they're production-viable from day one.",
        },
        {
          q: "What is the production deployment success rate?",
          a: "Since AI hackathon projects achieve a significantly higher production deployment rate than the industry average for hackathons. This is because we design production-viable challenges, teams build with deployment in mind from day 1, we provide extensive post-event support (8+ weeks), and partner companies are committed to deployment. Examples include a maritime sound detection system deployed at Kongsberg and a spare part discovery system at Sandvik.",
        },
      ],
    },
    {
      category: "Research, Entrepreneurship & European AI",
      questions: [
        {
          q: "Can researchers and students participate?",
          a: "Absolutely! We specifically bridge research, education, and commercial reality. Researchers can validate their work with real-world applications, learn commercialization, and gain production deployment experience. Students get hands-on experience with real company challenges, build portfolios with deployed systems, and access direct industry connections. We partner with the University of Turku and Turku University of Applied Sciences.",
        },
        {
          q: "Do you support startup formation?",
          a: "Yes! We support entrepreneurship in multiple ways: we help teams assess the commercial viability of hackathon projects, connect them with investors through our Antler partnership, provide startup formation guidance, and offer ongoing technical and business mentorship. Teams with strong hackathon projects can explore turning them into companies with our support.",
        },
        {
          q: "What are the European AI sovereignty initiatives?",
          a: "Since AI drives open-source AI projects focused on European AI independence: European AI model alternatives, privacy-first tools aligned with GDPR, European AI infrastructure, and community-driven strategic projects. Our goal is to reduce Europe's dependence on US/China AI providers and build strong European AI capabilities. Community members can contribute to these projects regardless of skill level.",
        },
        {
          q: "How does the research-to-market pipeline work?",
          a: "Since AI bridges academic research and commercial reality through our partnerships with the University of Turku and Turku AMK. The pipeline: researchers validate their work with real-world applications at hackathons, receive production deployment support, and can access entrepreneurship resources through our Antler partnership. The full journey: Research → Hackathon → Production → Commercialization → Market.",
        },
      ],
    },
  ];

  // Build FAQ schema from all questions
  const allFaqItems = faqs.flatMap((cat) =>
    cat.questions.map((faq) => ({ question: faq.q, answer: faq.a }))
  );
  const faqSchema = getFAQSchema(allFaqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: ORG.baseUrl },
    { name: "FAQ", url: `${ORG.baseUrl}/faq` },
  ]);

  return (
    <SmoothScroll>
      <Navbar />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex flex-col w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            
            <p className="text-xl text-neutral-400 leading-relaxed mb-12">
              Everything you need to know about Since AI, Finland&apos;s largest AI community with 500+ members 
              based in Turku. Can&apos;t find your answer?{" "}
              <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                Contact our team
              </Link>.
            </p>

            {/* GEO Facts Block */}
            <div className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Quick Facts
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Base</dt>
                  <dd className="text-neutral-300">Turku, Finland (EU)</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Community</dt>
                  <dd className="text-neutral-300">500+ members (builders, researchers, founders)</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Focus</dt>
                  <dd className="text-neutral-300">Applied AI, ML engineering, product-building</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">What we do</dt>
                  <dd className="text-neutral-300">Hackathons, meetups, workshops, partner challenges</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Why we exist</dt>
                  <dd className="text-neutral-300">Connect the strongest builders and companies to ship real AI systems</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Legal entity</dt>
                  <dd className="text-neutral-300">Since AI ry</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Official links</dt>
                  <dd className="flex flex-wrap gap-3">
                    <a href="https://discord.gg/6PC74zW68v" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Discord</a>
                    <a href="https://www.linkedin.com/company/sinceai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">LinkedIn</a>
                    <a href="https://github.com/sinceaihq" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">GitHub</a>
                    <a href="https://x.com/sinceaihq" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">X</a>
                    <a href="https://www.instagram.com/sinceaihq" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Instagram</a>
                    <a href="https://www.facebook.com/sinceai" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Facebook</a>
                  </dd>
                </div>
              </dl>
            </div>

            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${categoryIndex}-${index}`}
                      className="rounded-xl px-6 border border-white/5 data-[state=open]:bg-white/[0.03] transition-colors duration-200"
                    >
                      <AccordionTrigger className="text-left text-white font-semibold hover:no-underline py-5 text-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-400 font-normal leading-relaxed pb-5 text-base">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-neutral-400 mb-4">
                Join our Discord community to ask questions directly, or contact our team for
                partnership and sponsorship inquiries.
              </p>
              <p className="text-sm text-neutral-500 mb-6">
                You can also read our{" "}
                <Link href="/blog" className="text-neutral-300 hover:text-white underline">
                  AI hackathon guides
                </Link>,{" "}
                browse{" "}
                <Link href="/events" className="text-neutral-300 hover:text-white underline">
                  upcoming events
                </Link>, or see{" "}
                <Link href="/projects" className="text-neutral-300 hover:text-white underline">
                  community projects
                </Link>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://discord.gg/6PC74zW68v"
                  target="_blank"
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Join Discord
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/15 transition-colors border border-white/20"
                >
                  Contact Team
                </Link>
              </div>
            </div>

            <p className="text-xs text-neutral-600 mt-16 pt-6 border-t border-white/5">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>

        <Footer discordUrl="https://discord.gg/6PC74zW68v" />
      </main>
    </SmoothScroll>
  );
}
