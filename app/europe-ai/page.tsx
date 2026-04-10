import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import SmoothScroll from "@/components/smoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/motion-primitives/fade-in";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ORG } from "@/lib/org";

export const metadata: Metadata = {
  title: "Europe AI Community | Since AI - Continental AI Network",
  description:
    "Join Europe's leading AI community. 1000+ developers from Finland to France, Germany to Greece. Production-focused AI hackathons, real company projects, and European AI sovereignty.",
  keywords:
    "europe ai community, european ai developers, ai community europe, europe hackathon, european ai, ai europe, pan-european ai",
  alternates: {
    canonical: "https://sinceai.fi/europe-ai",
  },
  openGraph: {
    title: "Europe AI Community | Since AI - Continental AI Network",
    description:
      "Join Europe's leading AI community. 1000+ developers across the continent building production AI systems.",
    url: "https://sinceai.fi/europe-ai",
    siteName: "Since AI",
    type: "website",
  },
};

export default function EuropeAIPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: ORG.baseUrl },
    { name: "Europe AI", url: `${ORG.baseUrl}/europe-ai` },
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
              Europe AI Community
            </h1>

            <div className="prose prose-invert prose-neutral max-w-none">
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8">
                Since AI is Europe&apos;s only full-lifecycle AI innovation ecosystem,
                connecting 1000+ developers across the continent to build production AI
                systems and advance European AI sovereignty.
              </p>

              {/* Why Europe Needs This */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Why Europe Needs Strong AI Communities
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Europe faces a strategic challenge: while excelling in AI research and
                  ethics, the continent has fallen behind the US and China in AI deployment
                  and commercial success. Since AI addresses this gap directly:
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">&bull;</span>
                    <span><strong className="text-white">Connecting European Builders:</strong> Developers from 10+ countries collaborating on real projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">&bull;</span>
                    <span><strong className="text-white">Production Focus:</strong> Full lifecycle from ideation to deployment — not just demos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">&bull;</span>
                    <span><strong className="text-white">European Values:</strong> Privacy-first, GDPR-compliant AI development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">&bull;</span>
                    <span><strong className="text-white">Open Source:</strong> Community-driven European AI alternatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white font-bold mt-1">&bull;</span>
                    <span><strong className="text-white">Research Commercialization:</strong> Bridging European academic excellence and market needs</span>
                  </li>
                </ul>
              </section>

              {/* European AI Ecosystem */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  The European AI Ecosystem
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03]">
                    <h3 className="text-xl font-bold text-white mb-3">Strengths</h3>
                    <ul className="text-neutral-400 text-sm space-y-2">
                      <li>&bull; World-class universities and research institutions</li>
                      <li>&bull; Strong privacy and ethical AI frameworks (GDPR, AI Act)</li>
                      <li>&bull; Talented multilingual developers</li>
                      <li>&bull; Industrial AI applications (manufacturing, automotive)</li>
                      <li>&bull; Government support for AI innovation</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
                    <ul className="text-neutral-400 text-sm space-y-2">
                      <li>&bull; Fragmented ecosystem across countries</li>
                      <li>&bull; Less venture capital than US/China</li>
                      <li>&bull; Slower commercialization of research</li>
                      <li>&bull; Dependence on non-European AI providers</li>
                      <li>&bull; Brain drain to US tech companies</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Since AI&apos;s Role</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                    We&apos;re addressing these challenges by creating a unified European AI
                    community that:
                  </p>
                  <ul className="text-neutral-400 text-sm space-y-2">
                    <li>&bull; Connects developers across borders through events and online community</li>
                    <li>&bull; Accelerates research-to-production timelines with 8+ weeks post-hackathon support</li>
                    <li>&bull; Supports entrepreneurship and commercialization via Antler partnership</li>
                    <li>&bull; Builds European AI alternatives through open-source initiatives</li>
                    <li>&bull; Keeps talent in Europe through meaningful opportunities</li>
                  </ul>
                </div>
              </section>

              {/* Countries */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Since AI&apos;s European Network
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Our community spans 10+ European countries, with members contributing
                  to hackathons, open-source projects, and collaborative AI development:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    "Finland", "Sweden", "Norway", "Denmark", "Germany", "France",
                    "Netherlands", "Poland", "Spain", "United Kingdom",
                  ].map((country) => (
                    <div key={country} className="p-3 rounded-lg border border-white/5 bg-white/[0.02] text-neutral-300 text-sm text-center">
                      {country}
                    </div>
                  ))}
                  <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] text-neutral-500 text-sm text-center">
                    ...and more
                  </div>
                </div>
              </section>

              {/* Sovereignty */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  European AI Sovereignty Initiative
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Beyond individual projects, Since AI actively contributes to European
                  AI independence through community-driven initiatives:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-2">Open-Source European AI</h4>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>&bull; European AI model alternatives</li>
                      <li>&bull; Privacy-first tools aligned with EU values</li>
                      <li>&bull; On-premise deployment options</li>
                      <li>&bull; Community-maintained AI infrastructure</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-2">Strategic Projects</h4>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>&bull; European language models and datasets</li>
                      <li>&bull; GDPR-compliant AI frameworks</li>
                      <li>&bull; European AI collaboration tools</li>
                      <li>&bull; Cross-border AI platforms</li>
                    </ul>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  <Link href="/european-ai" className="text-white hover:text-neutral-300 underline">
                    Learn more about European AI sovereignty &rarr;
                  </Link>
                </p>
              </section>

              {/* Why Join */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Why Join Since AI from Anywhere in Europe
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Developers</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li>&bull; Connect with 1000+ European AI builders</li>
                      <li>&bull; Work on real company challenges (remote-friendly)</li>
                      <li>&bull; Production deployment support — not just demos</li>
                      <li>&bull; Access European job and startup opportunities</li>
                      <li>&bull; Contribute to European AI sovereignty projects</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Companies</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li>&bull; Access pan-European AI talent pool</li>
                      <li>&bull; Production-ready AI solutions with deployment support</li>
                      <li>&bull; GDPR-compliant development approach</li>
                      <li>&bull; European values alignment</li>
                      <li>&bull; Cross-border innovation partnerships</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">For Researchers</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li>&bull; Validate research with real-world applications</li>
                      <li>&bull; European commercialization pathway</li>
                      <li>&bull; Stay in Europe while building impact</li>
                      <li>&bull; Collaborate across European institutions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Since AI vs Other European Communities
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-3 pr-4 text-neutral-500 font-semibold">Feature</th>
                        <th className="py-3 pr-4 text-white font-semibold">Since AI</th>
                        <th className="py-3 text-neutral-500 font-semibold">Other Communities</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-400">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-neutral-300">Geographic Scope</td>
                        <td className="py-3 pr-4 text-neutral-200">Pan-European (10+ countries)</td>
                        <td className="py-3">Often single-country</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-neutral-300">Production Support</td>
                        <td className="py-3 pr-4 text-neutral-200">8+ weeks deployment help</td>
                        <td className="py-3">Rarely offered</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-neutral-300">Lifecycle Coverage</td>
                        <td className="py-3 pr-4 text-neutral-200">Ideation &rarr; production &rarr; commercialization</td>
                        <td className="py-3">Event-only</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4 text-neutral-300">European Sovereignty</td>
                        <td className="py-3 pr-4 text-neutral-200">Active open-source initiatives</td>
                        <td className="py-3">Not a focus</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-neutral-300">Commercialization</td>
                        <td className="py-3 pr-4 text-neutral-200">Full support + Antler partnership</td>
                        <td className="py-3">Limited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Success Stories */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  European Success Stories
                </h2>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-1">Cross-Border Teams</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Developers from multiple European countries building production AI together
                      at Since AI hackathons.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-1">Production Systems</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      30+ AI systems deployed at European companies including Kongsberg, Sandvik,
                      and Valmet through hackathon projects with production support.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h4 className="text-base font-bold text-white mb-1">Research Impact</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      European research commercialized through the Since AI community, bridging
                      academia and industry.
                    </p>
                  </div>
                </div>
                <p className="text-neutral-400 mt-4">
                  <Link href="/projects" className="text-white hover:text-neutral-300 underline">
                    View all projects &rarr;
                  </Link>
                </p>
              </section>

              {/* CTA */}
              <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Build Europe&apos;s AI Future
                </h2>
                <p className="text-neutral-300 mb-6">
                  Connect with 1000+ European AI developers, work on real projects, and
                  contribute to European AI sovereignty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={ORG.social.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white rounded-full transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02]"
                  >
                    Join Discord Community
                  </a>
                  <Link
                    href="/events"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-full transition-all duration-300 hover:bg-white/15 border border-white/20 hover:border-white/30 hover:scale-[1.02]"
                  >
                    View Events
                  </Link>
                </div>
              </section>

              {/* Cross-links */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Explore More
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Link href="/turku" className="text-neutral-400 hover:text-white underline">Turku AI</Link>
                  <span className="text-neutral-600">&bull;</span>
                  <Link href="/finland-ai" className="text-neutral-400 hover:text-white underline">Finland AI</Link>
                  <span className="text-neutral-600">&bull;</span>
                  <Link href="/european-ai" className="text-neutral-400 hover:text-white underline">European AI Sovereignty</Link>
                  <span className="text-neutral-600">&bull;</span>
                  <Link href="/production-support" className="text-neutral-400 hover:text-white underline">Production Support</Link>
                  <span className="text-neutral-600">&bull;</span>
                  <Link href="/stats" className="text-neutral-400 hover:text-white underline">Stats &amp; Impact</Link>
                </div>
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
