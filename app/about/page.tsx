import React from "react";
import Link from "next/link";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion-primitives/fade-in";
import { TimelineItem } from "@/components/motion-primitives/timeline-item";
import { FOUNDING_YEAR, FIRST_EVENT, COPY } from "@/lib/sinceai";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ORG } from "@/lib/org";
import NewsletterSignup from "@/components/NewsletterSignup";

const milestones = [
  { year: "2025", event: "Since AI founded as Europe's AI builders community" },
  { year: "2025", event: `Flagship hackathon: ${FIRST_EVENT.attendance} builders at ${FIRST_EVENT.locationName}` },
  { year: "2025", event: "500+ community members in Discord" },
  { year: "2025", event: "30+ AI projects built with partner companies" },
  { year: "2026", event: "Post-hackathon production support program launched" },
  { year: "2026", event: "European AI open-source initiatives started" },
];

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: ORG.baseUrl },
    { name: "About", url: `${ORG.baseUrl}/about` },
  ]);

  return (
    <SmoothScroll>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex flex-col w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              About Since AI
            </h1>

            <div className="prose prose-invert prose-neutral max-w-none">
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8">
                Since AI is Europe&apos;s only full-lifecycle AI innovation ecosystem — not just a hackathon organizer
                or developer meetup. With 1000+ members based in Turku, Finland, we support AI projects from challenge
                ideation through production deployment to commercialization.{" "}
                {COPY.foundingLineShort}
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                {COPY.firstEventLineLong} Since AI is a registered non-profit organization (Since AI ry, Business ID: 3593920-2)
                dedicated to fostering innovation and AI development in the Turku region and beyond.
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed mb-12">
                We partner with leading companies including Valmet, Sandvik, Kongsberg, ElevenLabs, and Antler to
                provide real-world challenges, mentorship, and career opportunities. Our community spans AI researchers,
                full-stack developers, ML engineers, designers, and founders — all passionate about shipping production AI.
              </p>

              {/* Quick Facts */}
              <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  Quick Facts
                </h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Type</dt>
                    <dd className="text-neutral-300">Full-lifecycle AI innovation ecosystem</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Base</dt>
                    <dd className="text-neutral-300">Turku, Finland (EU)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Community</dt>
                    <dd className="text-neutral-300">1000+ members (builders, researchers, founders)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Focus</dt>
                    <dd className="text-neutral-300">Applied AI, ML engineering, production deployment</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Unique value</dt>
                    <dd className="text-neutral-300">Ideation → hackathon → production → commercialization</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Legal entity</dt>
                    <dd className="text-neutral-300">Since AI ry (Business ID: 3593920-2)</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Official links</dt>
                    <dd className="flex flex-wrap gap-3">
                      <a href={ORG.social.discord} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Discord</a>
                      <a href={ORG.social.telegram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Telegram</a>
                      <a href={ORG.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">LinkedIn</a>
                      <a href={ORG.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">GitHub</a>
                      <a href={ORG.social.x} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">X</a>
                      <a href={ORG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Instagram</a>
                      <a href={ORG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">YouTube</a>
                      <a href={ORG.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">TikTok</a>
                      <a href={ORG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Facebook</a>
                      <a href={ORG.social.substack} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">Substack</a>
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Impact Numbers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Our Impact in Numbers
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Since launching in {FOUNDING_YEAR}, Since AI has grown into one of the fastest-growing AI communities in the Nordics.
                  Every metric below reflects real builder activity — not vanity numbers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
                    <div className="text-sm text-neutral-500">Community Members</div>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">260+</div>
                    <div className="text-sm text-neutral-500">Hackathon Builders</div>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
                    <div className="text-sm text-neutral-500">AI Projects Shipped</div>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-neutral-500">Partner Companies</div>
                  </div>
                </div>
              </section>

              {/* What Makes Since AI Different */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  What Makes Since AI Different
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Since AI is Europe&apos;s only full-lifecycle AI innovation ecosystem. Unlike traditional developer
                  communities or hackathon organizers, we support the entire journey from research to production
                  to commercialization. Most hackathons end with a demo — Since AI projects become production systems.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  The Since AI Innovation Lifecycle
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 1: Challenge Ideation (Before Event)</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                      We don&apos;t just accept company challenges — we actively help companies ideate and design
                      hackathon challenges that are technically feasible within 72 hours, aligned with real business needs,
                      commercially viable for production deployment, and designed for maximum innovation potential.
                    </p>
                    <p className="text-neutral-500 text-sm">
                      Most communities wait for companies to bring challenges. We co-create them.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 2: Intensive Building (During Event)</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      72-hour AI hackathons with real company challenges from Valmet, Sandvik, Kongsberg, and ElevenLabs.
                      Production-focused mentorship from day 1. Teams build deployable solutions, not just demos.
                      Focus on code quality and architecture that scales.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03]">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 3: Production Support (After Event)</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                      This is where Since AI fundamentally differs from other communities. We help companies take
                      winning projects to production with technical architecture review, deployment guidance,
                      integration assistance, security review, performance optimization, and ongoing technical mentorship.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Most hackathons end with a demo. Since AI projects become production systems.{" "}
                      <Link href="/production-support" className="text-white hover:text-neutral-300 underline">
                        Learn about our production support program
                      </Link>.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <h4 className="text-lg font-bold text-white mb-2">Phase 4: Commercialization & Entrepreneurship</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      We support teams in building businesses: assessing commercial viability, connecting with investors
                      through our Antler partnership, providing startup formation guidance, and offering ongoing technical
                      and business mentorship. We also help researchers commercialize academic AI work and support
                      university students in taking course projects to market.
                    </p>
                  </div>
                </div>
              </section>

              {/* European AI Sovereignty */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  European AI Sovereignty Initiatives
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Beyond individual projects, Since AI actively contributes to European AI sovereignty through
                  community-driven open-source AI projects, European alternatives to non-European AI providers,
                  collaborative development of strategic AI capabilities, and privacy-first solutions aligned
                  with EU values and GDPR.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Our mission is to ensure Europe has strong, independent AI capabilities.{" "}
                  <Link href="/european-ai" className="text-white hover:text-neutral-300 underline">
                    Learn about our European AI initiatives
                  </Link>.
                </p>
              </section>

              {/* Research to Market */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Research → Education → Market Pipeline
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Since AI uniquely bridges three worlds that usually don&apos;t connect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-2">Academic Research</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Partnership with University of Turku and Turku AMK. Help researchers validate commercial
                      applications and facilitate tech transfer.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-2">Education</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Students get hands-on experience with real company challenges. Learn production deployment,
                      not just theory. Direct path from classroom to industry.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-2">Commercial Reality</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Companies get production-ready solutions. Both sides learn from each other.
                      Real business outcomes, not just academic exercises.
                    </p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm">
                  <Link href="/research-to-market" className="text-neutral-400 hover:text-white underline">
                    Learn about our research-to-market program
                  </Link>.
                </p>
              </section>

              {/* Who We Serve */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Who We Serve
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Developers</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Work on real AI challenges with business impact. Learn production AI development, not just tutorials.
                      Build a portfolio with deployed, working systems. Access a path to entrepreneurship and connect
                      with 1000+ like-minded AI builders.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Companies</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      End-to-end innovation support from ideation to production. Access 1000+ AI developers and researchers.
                      Get production-ready solutions, not just proof-of-concepts. Ongoing technical support after the hackathon
                      and a direct talent pipeline for hiring.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Researchers & Students</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Validate research with real-world applications. Learn commercialization and business skills.
                      Bridge academic work and industry needs. Access entrepreneurship support and build real impact
                      beyond papers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For the European AI Ecosystem</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Strengthen European AI sovereignty. Reduce dependence on non-European AI providers.
                      Collaborative open-source AI development. Build European AI capabilities for the future.
                    </p>
                  </div>
                </div>
              </section>

              {/* Community Values */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Community Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-bold text-white mb-2">Builders First</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      We prioritize people who ship. Our community rewards hands-on building over theoretical discussion, and our hackathons produce working AI products — not slide decks.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-bold text-white mb-2">Real Projects</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Every hackathon challenge comes from a real partner company with a real problem. Teams build solutions that continue beyond the event into production systems.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-bold text-white mb-2">Open & Inclusive</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Whether you&apos;re a student writing your first model or a senior ML engineer, you belong here. We welcome all skill levels and backgrounds.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-bold text-white mb-2">Learn by Doing</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      The fastest way to learn AI is to build with it. Our events provide compute credits, APIs, mentorship, and real datasets so members can learn through practice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Our Mission */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  To build the most impactful AI community in Europe by creating spaces where developers, researchers,
                  and companies collaborate on meaningful AI projects that reach production. We believe the best way
                  to learn AI is by building real solutions to real problems — that&apos;s why our{" "}
                  <Link href="/events" className="text-white hover:text-neutral-300 underline">
                    AI hackathons
                  </Link>{" "}
                  focus on partner company challenges with real stakes and post-event production support.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  We&apos;re committed to making AI accessible, fostering diversity in tech, advancing European AI
                  sovereignty, and ensuring our community members have opportunities to grow their skills, network
                  with peers, and advance their careers.
                </p>
              </section>

              {/* What We Do */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  What We Do
                </h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Full-Lifecycle Hackathons:</strong> Multi-day events where teams build AI solutions for partner company challenges, with post-event production support until deployment. Recent projects include maritime safety systems, customer support automation, and computer vision applications. <Link href="/projects" className="text-white hover:text-neutral-300 underline">See our hackathon projects</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Production Support:</strong> 8+ weeks of post-hackathon technical support including architecture review, deployment guidance, integration assistance, and ongoing mentorship. <Link href="/production-support" className="text-white hover:text-neutral-300 underline">Learn about production support</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Community Channels:</strong> Join 1000+ members in our Discord and Telegram channels, sharing knowledge, job opportunities, and collaborating on projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Entrepreneurship Support:</strong> Partnership with Antler for startup formation, investor connections, business mentorship, and go-to-market strategy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">European AI Open Source:</strong> Community-driven projects advancing European AI sovereignty and independence. <Link href="/european-ai" className="text-white hover:text-neutral-300 underline">Learn about European AI initiatives</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">•</span>
                    <span><strong className="text-white">Research-to-Market Bridge:</strong> Helping academics commercialize AI research through real-world validation and production deployment. <Link href="/research-to-market" className="text-white hover:text-neutral-300 underline">Learn about our research program</Link>.</span>
                  </li>
                </ul>
              </section>

              {/* Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Since AI vs Other AI Communities
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">vs Traditional Hackathon Organizers</h3>
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    Traditional hackathons are excellent weekend events for networking and quick builds.
                    Since AI provides a full lifecycle from challenge ideation through production deployment.
                    The key difference: hackathon projects become production systems, not just demos.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-3 pr-4 text-neutral-500 font-semibold">Feature</th>
                          <th className="py-3 pr-4 text-neutral-500 font-semibold">Traditional Hackathons</th>
                          <th className="py-3 text-white font-semibold">Since AI</th>
                        </tr>
                      </thead>
                      <tbody className="text-neutral-400">
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4 text-neutral-300">Duration</td>
                          <td className="py-3 pr-4">Weekend only</td>
                          <td className="py-3 text-neutral-200">Full lifecycle (months)</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4 text-neutral-300">Pre-event</td>
                          <td className="py-3 pr-4">Accept challenges</td>
                          <td className="py-3 text-neutral-200">Co-create challenges</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4 text-neutral-300">Post-event</td>
                          <td className="py-3 pr-4">None</td>
                          <td className="py-3 text-neutral-200">8+ weeks production support</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4 text-neutral-300">Outcome</td>
                          <td className="py-3 pr-4">Demo</td>
                          <td className="py-3 text-neutral-200">Production system</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 pr-4 text-neutral-300">Entrepreneurship</td>
                          <td className="py-3 pr-4">Variable</td>
                          <td className="py-3 text-neutral-200">Active support + Antler partnership</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 text-neutral-300">Open source</td>
                          <td className="py-3 pr-4">Rare</td>
                          <td className="py-3 text-neutral-200">European AI initiatives</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">vs Online AI Communities</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Online communities are great for learning, discussions, and networking.
                    Since AI adds hands-on building with real companies, in-person events, production deployment support,
                    and a path to entrepreneurship. We complement online learning with real-world impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">vs Academic AI Groups</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Academic groups focus on research and publications. Since AI complements them by providing
                    the commercialization and production path. We don&apos;t replace academic groups — we provide
                    the bridge from research to market through our{" "}
                    <Link href="/research-to-market" className="text-white hover:text-neutral-300 underline">
                      research-to-market program
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Timeline */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Timeline
                </h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <TimelineItem key={index} index={index}>
                      <span className="text-white font-bold text-lg min-w-[60px]">{milestone.year}</span>
                      <span className="text-neutral-400">{milestone.event}</span>
                    </TimelineItem>
                  ))}
                </div>
              </section>

              {/* Location & Operations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Location & Operations
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong className="text-white">Headquarters:</strong> Turku, Finland
                  <br />
                  <strong className="text-white">Legal Entity:</strong> Since AI ry
                  <br />
                  <strong className="text-white">Business ID:</strong> 3593920-2
                  <br />
                  <strong className="text-white">Founded:</strong> {FOUNDING_YEAR}
                  <br />
                  <strong className="text-white">Scope:</strong> Europe + Global
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  While our operations are based in Turku, our community is global. We have members across Finland
                  and international participants from 10+ countries who join our events or travel to Turku for hackathons.
                </p>
              </section>

              {/* Why Turku */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Why Turku, Finland?
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Turku is Finland&apos;s oldest city and a growing tech hub with two major universities — the University of Turku
                  and Turku University of Applied Sciences — producing strong engineering and AI research talent. The city&apos;s
                  compact size makes it easy for the community to meet regularly, while its proximity to Helsinki (under 2 hours)
                  and Stockholm connects us to the broader Nordic tech ecosystem.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Finland consistently ranks among the world&apos;s most innovative countries, with strong public investment in AI
                  education and research. Since AI brings this national momentum to the local level, giving Turku-area builders
                  and companies a high-signal community to accelerate their AI work.
                </p>
              </section>

              {/* Support & Partners */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Support & Partners
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Since AI is supported by leading organizations including:
                </p>
                <ul className="grid grid-cols-2 gap-3 text-neutral-400 mb-6">
                  <li>• University of Turku</li>
                  <li>• Turku University of Applied Sciences</li>
                  <li>• City of Turku</li>
                  <li>• Business Turku</li>
                  <li>• Aalto AI</li>
                  <li>• AI Mad Lab</li>
                </ul>
                <p className="text-neutral-400 leading-relaxed">
                  Our partner companies include Valmet, Sandvik, Kongsberg, ElevenLabs, Featherless.ai, Skillio,
                  Antler, Apelago, and Eisko.{" "}
                  <Link href="/partners" className="text-white hover:text-neutral-300 underline">
                    Learn about partnership opportunities
                  </Link>.
                </p>
              </section>

              {/* Get Involved */}
              <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Get Involved
                </h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    <strong className="text-white">Developers & Researchers:</strong>{" "}
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      Join our Discord community
                    </Link> to participate in hackathons, connect with peers, and access job opportunities.
                  </p>
                  <p>
                    <strong className="text-white">Companies:</strong>{" "}
                    <Link href="/partners" className="text-white hover:text-neutral-300 underline">
                      Partner with us
                    </Link> for end-to-end innovation support from challenge ideation to production deployment.
                  </p>
                  <p>
                    <strong className="text-white">Researchers:</strong>{" "}
                    <Link href="/research-to-market" className="text-white hover:text-neutral-300 underline">
                      Explore our research-to-market program
                    </Link> to commercialize your AI innovations.
                  </p>
                  <p>
                    <strong className="text-white">Questions?</strong>{" "}
                    <Link href="/faq" className="text-white hover:text-neutral-300 underline">
                      Check our FAQ
                    </Link> or{" "}
                    <Link href="/contact" className="text-white hover:text-neutral-300 underline">
                      contact our team
                    </Link>. View our{" "}
                    <Link href="/stats" className="text-white hover:text-neutral-300 underline">
                      impact statistics
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Newsletter */}
              <section className="mb-12">
                <NewsletterSignup />
              </section>

              <p className="text-xs text-neutral-600 mt-16 pt-6 border-t border-white/5">
                Last updated: February 2026
              </p>
            </div>
          </FadeIn>
        </div>

        <Footer discordUrl={ORG.social.discord} />
      </main>
    </SmoothScroll>
  );
}
