import { Metadata } from "next";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Since AI - Finland's Largest AI Developer Community | Turku",
  description:
    "Since AI is Europe's AI builders community with 1000+ members based in Turku. Founded in 2025, we launched with our flagship hackathon bringing 260 builders together at EduCity. Registered non-profit (Since AI ry).",
  keywords: [
    "Since AI",
    "about",
    "AI community Finland",
    "Turku AI",
    "Boost Turku",
    "AI hackathon",
    "machine learning community",
    "AI developers",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Since AI - Finland's Largest AI Developer Community",
    description:
      "Since AI is Finland's largest AI community with 1000+ members. We organize hackathons bringing 200+ developers and 15+ companies together in Turku.",
    type: "website",
    locale: "en_US",
    siteName: "Since AI",
    url: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Since AI",
    description: "Information about Since AI, Finland's largest AI developer community",
    mainEntity: organizationSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      {children}
    </>
  );
}
