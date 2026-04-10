import { Metadata } from "next";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Partner With Since AI - Access 1000+ AI Developers | Turku, Finland",
  description:
    "Partner with Since AI to recruit AI talent, solve technical challenges, and build brand awareness. 1000+ developers, 200+ hackathon participants, 80% placement rate. Partners: Valmet, Sandvik, Kongsberg, ElevenLabs, Antler.",
  keywords: [
    "Since AI partnership",
    "AI talent recruitment",
    "AI developer community",
    "tech partnership Finland",
    "recruit AI engineers",
    "partner with AI community",
    "Turku tech partners",
    "AI challenge sponsor",
  ],
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partner With Since AI - Access 1000+ AI Developers",
    description:
      "Recruit AI talent, solve technical challenges, and build brand awareness. 80% of partners hired from our community.",
    type: "website",
    locale: "en_US",
    siteName: "Since AI",
    url: "/partners",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();

  // Aggregate rating schema (conservative, based on partner outcomes)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Since AI Partnership Program",
    description: "Partner with Finland's largest AI community to recruit talent, solve challenges, and build brand awareness",
    provider: organizationSchema,
    serviceType: "Community Partnership",
    areaServed: {
      "@type": "Country",
      name: "Finland",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Challenge Partner",
        price: "3000",
        priceCurrency: "EUR",
        description: "A focused challenge with clear deliverables and a simple process",
      },
      {
        "@type": "Offer",
        name: "Workshop Partner",
        price: "1500",
        priceCurrency: "EUR",
        description: "Run a technical workshop or masterclass for the community",
      },
      {
        "@type": "Offer",
        name: "Job Board Partner",
        price: "500",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "500",
          priceCurrency: "EUR",
          unitText: "MONTH",
        },
        description: "Ongoing hiring access to the community",
      },
      {
        "@type": "Offer",
        name: "Community Partner",
        description: "Support the community and enable prizes, spaces, and builder programs",
      },
    ],
  };

  // Testimonial/Review schema (anonymized but factual)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: "Since AI Partnership Program",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "Partner Company",
    },
    reviewBody: "We met highly capable builders and moved from introductions to interviews fast. The quality was senior-level—clear thinking, clean implementation, and strong communication.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      {children}
    </>
  );
}
