"use client";
import React from "react";
import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

interface Sponsor {
  src: string;
  url: string;
  alt: string;
}

interface PastSponsorsProps {
  sponsors?: Sponsor[];
  supports?: Sponsor[];
}

const defaultSponsors: Sponsor[] = [
  { src: "/assets/sponsors/businessturku.png", url: "https://businessturku.fi/", alt: "Business Turku logo — regional development partner of Since AI Hackathon" },
  { src: "/assets/sponsors/valmet.png", url: "https://www.valmet.com", alt: "Valmet logo — industrial technology partner providing AI hackathon challenges" },
  { src: "/assets/sponsors/sandvik.png", url: "https://www.sandvik.com", alt: "Sandvik logo — engineering partner of Since AI Hackathon 2025" },
  { src: "/assets/sponsors/elevenlabs.png", url: "https://www.elevenlabs.io", alt: "ElevenLabs logo — AI voice technology sponsor providing API credits" },
  { src: "/assets/sponsors/apelago.png", url: "https://www.apelago.fi", alt: "Apelago logo — Finnish tech partner of Since AI community" },
  { src: "/assets/sponsors/eisko.svg", url: "https://eisko.fi", alt: "Eisko logo — partner company at Since AI Hackathon" },
  { src: "/assets/sponsors/featherless.svg", url: "https://featherless.ai", alt: "Featherless.ai logo — AI compute sponsor providing model inference credits" },
  { src: "/assets/sponsors/Skillio.png", url: "https://skillio.ai", alt: "Skillio logo — AI skills platform partner of Since AI" },
  { src: "/assets/sponsors/kongsberg.png", url: "https://www.kongsberg.com/", alt: "Kongsberg logo — maritime technology partner providing hackathon challenges" },
  { src: "/assets/sponsors/antler.png", url: "https://www.antler.co/", alt: "Antler logo — venture capital partner supporting AI startup builders" },
];

const defaultSupports: Sponsor[] = [
  { src: "/assets/supports/boost.svg", url: "https://boostturku.com/", alt: "Boost Turku logo — startup ecosystem supporter of Since AI" },
  { src: "/assets/supports/turkuamk.png", url: "https://turkuamk.fi", alt: "Turku University of Applied Sciences logo — academic partner of Since AI" },
  { src: "/assets/supports/cityofturku.png", url: "https://turku.fi/", alt: "City of Turku logo — municipal supporter of Since AI community events" },
  { src: "/assets/supports/universityofturku.png", url: "https://utu.fi/", alt: "University of Turku logo — research university partner of Since AI" },
  { src: "/assets/supports/aimadlab.svg", url: "https://aimadlab.com/", alt: "AI Mad Lab logo — AI community partner of Since AI" },
  { src: "/assets/supports/aaltoai.png", url: "https://aaltoai.com/", alt: "Aalto AI logo — student AI community partner of Since AI" },
];

export const PastSponsors: React.FC<PastSponsorsProps> = ({
  sponsors = defaultSponsors,
  supports = defaultSupports,
}) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Partners Section */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
              Past Partners
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-center text-white/80">
              Trusted by leading companies
            </h3>
          </div>
        </InView>

        <div className="mb-16">
          <InfiniteSlider gap={48} className="py-4" speed={30}>
            {sponsors.map((sponsor, index) => (
              <a
                key={`${sponsor.alt}-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-2xl transition-all duration-300 min-w-[150px]"
                aria-label={sponsor.alt}
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  style={{ height: '48px', width: 'auto' }}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </a>
            ))}
          </InfiniteSlider>
        </div>

        {/* Supporters Section */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          once
        >
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="text-sm font-medium text-white/50 uppercase tracking-[0.3em]">
              Supported By
            </div>
          </div>
        </InView>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {supports.map((support, index) => (
            <a
              key={`${support.alt}-${index}`}
              href={support.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-2xl transition-all duration-300"
              aria-label={support.alt}
            >
              <img
                src={support.src}
                alt={support.alt}
                style={{ height: '48px', width: 'auto' }}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastSponsors;
