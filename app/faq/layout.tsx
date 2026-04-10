import { Metadata } from "next";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Since AI",
  description:
    "Answers to common questions about Since AI, Finland's largest AI community. Learn about hackathons, membership, partnerships, events, and how to get involved with 1000+ AI developers in Turku.",
  keywords: [
    "Since AI FAQ",
    "AI community questions",
    "hackathon FAQ",
    "join AI community",
    "AI events Finland",
    "partnership questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Since AI Community Questions Answered",
    description:
      "Common questions about Since AI, Finland's largest AI community. Hackathons, partnerships, membership, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Since AI",
    url: "/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ data for JSON-LD (subset of most important questions)
const faqData = [
  {
    question: "What is Since AI?",
    answer: "Since AI is Europe's AI builders community with 1000+ members, based in Turku. We organize hackathons and networking events that bring together AI developers, researchers, and companies. Founded in 2025, our flagship hackathon brought together 260 builders who produced 30+ AI projects.",
  },
  {
    question: "Where is Since AI based?",
    answer: "Since AI is based in Turku, Finland. We're a registered non-profit organization (Since AI ry, Business ID: 3593920-2). While our events are typically held in Turku, our Discord community is global with members across Finland and internationally.",
  },
  {
    question: "How do I join the community?",
    answer: "Join our Discord server for free at discord.gg/6PC74zW68v. You'll get access to member-only channels, job board, event updates, technical discussions, and networking opportunities with 1000+ AI developers and founders.",
  },
  {
    question: "What sponsorship options are available?",
    answer: "Every partnership is custom-tailored to your goals. Whether you're looking to recruit talent, build brand awareness, or support the AI community, we'll create a solution that works. Options include event sponsorships, workshop hosting, job board access, and custom partnership packages.",
  },
  {
    question: "What happens at Since AI hackathons?",
    answer: "Our hackathons are multi-day events where teams of 3-5 people build AI solutions for real company challenges. You'll receive mentorship from industry experts, access to compute credits and APIs, and the chance to showcase your work.",
  },
  {
    question: "How do I contact Since AI?",
    answer: "For general inquiries: info@sinceai.fi. We typically respond within 24 hours.",
  },
];

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = getFAQSchema(faqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
