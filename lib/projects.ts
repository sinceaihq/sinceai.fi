/**
 * Since AI Hackathon Challenge Themes (Public Summaries Only)
 * 
 * IMPORTANT: This file contains only high-level, non-confidential summaries.
 * Full challenge statements, datasets, evaluation criteria, and participant
 * solutions are not published due to contractual restrictions.
 */

export type ChallengeTheme = {
  sponsor: string;
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  industry: string;
  modality: ("Text" | "Vision" | "Audio" | "Agents" | "Data")[];
  whyItMatters: string;
};

export const challengeThemes: ChallengeTheme[] = [
  {
    sponsor: "Kongsberg",
    slug: "kongsberg-maritime-audio",
    title: "Maritime Sound Signal Detection",
    summary: "Audio ML for detecting and classifying maritime sound signals in real-time for autonomous vessel safety.",
    bullets: [
      "Teams explored CNN-based audio classification models",
      "Focus on detecting COLREG whistle signals in noisy environments",
      "Real-time inference for collision avoidance systems"
    ],
    tags: ["Audio", "CNN", "Real-time ML", "Safety"],
    industry: "Maritime",
    modality: ["Audio", "Data"],
    whyItMatters: "Critical for autonomous vessel safety and regulatory compliance at sea."
  },
  {
    sponsor: "Sandvik",
    slug: "sandvik-spare-parts",
    title: "Intelligent Spare Part Discovery",
    summary: "Agent-based system to detect and resolve spare-part inquiries with SKU search and product matching.",
    bullets: [
      "Teams built agents for parsing customer inquiries",
      "Explored RAG patterns for product catalog search",
      "Focus on reducing manual lookup time for support teams"
    ],
    tags: ["Agents", "RAG", "NLP", "Search"],
    industry: "Manufacturing",
    modality: ["Text", "Agents"],
    whyItMatters: "Reduces support response time and improves customer satisfaction in industrial services."
  },
  {
    sponsor: "Valmet",
    slug: "valmet-visual-detection",
    title: "Visual Object Detection for Industrial Field Devices",
    summary: "3D and vision-based detection of industrial equipment in field environments.",
    bullets: [
      "Teams explored computer vision models for device recognition",
      "Focus on challenging field conditions (lighting, angles, occlusion)",
      "Integration with maintenance workflows"
    ],
    tags: ["Vision", "Object Detection", "3D", "CV"],
    industry: "Manufacturing",
    modality: ["Vision", "Data"],
    whyItMatters: "Enables faster equipment identification and maintenance planning in complex industrial sites."
  },
  {
    sponsor: "Skillio",
    slug: "skillio-lead-discovery",
    title: "Agentic Lead Discovery for B2B Sales",
    summary: "AI agents for discovering and qualifying B2B leads from public signals and data sources.",
    bullets: [
      "Teams built agents for scanning public company data",
      "Explored pattern matching for buying signals",
      "Focus on automating early-stage prospecting"
    ],
    tags: ["Agents", "NLP", "Data Mining", "B2B"],
    industry: "Sales/CRM",
    modality: ["Text", "Agents", "Data"],
    whyItMatters: "Automates tedious prospecting work and surfaces high-quality leads faster."
  },
  {
    sponsor: "Business Turku",
    slug: "business-turku-funding-advisor",
    title: "AI Advisor for Funding Discovery",
    summary: "Context-aware assistant for identifying relevant funding instruments and investor opportunities.",
    bullets: [
      "Teams explored RAG for funding database search",
      "Focus on matching company profiles to grant criteria",
      "Conversational interface for non-technical users"
    ],
    tags: ["RAG", "NLP", "Agents", "Recommender"],
    industry: "Public Sector",
    modality: ["Text", "Agents"],
    whyItMatters: "Helps startups and SMEs navigate complex funding landscapes more efficiently."
  },
  {
    sponsor: "A'Pelago",
    slug: "apelago-environmental-decision",
    title: "Environmental Data Decision Support",
    summary: "AI decision support from environmental and cyanobacteria monitoring data.",
    bullets: [
      "Teams explored time-series analysis for water quality data",
      "Focus on predictive models for harmful algae blooms",
      "Integration with monitoring sensor networks"
    ],
    tags: ["Time-series", "Data", "ML", "Forecasting"],
    industry: "Climate/Blue Economy",
    modality: ["Data"],
    whyItMatters: "Supports proactive environmental management and public health protection."
  },
  {
    sponsor: "Eisko",
    slug: "eisko-component-extraction",
    title: "Vision + OCR for Component List Extraction",
    summary: "Extracting structured component lists from switchboard PDFs using vision and OCR.",
    bullets: [
      "Teams explored document AI and layout understanding",
      "Focus on noisy, non-standardized PDF formats",
      "Structured data extraction for downstream systems"
    ],
    tags: ["Vision", "OCR", "Document AI", "NLP"],
    industry: "Manufacturing",
    modality: ["Vision", "Text"],
    whyItMatters: "Automates manual data entry and reduces errors in electrical component management."
  },
  {
    sponsor: "ElevenLabs",
    slug: "elevenlabs-voice-ai",
    title: "Open Build Track: Voice AI Applications",
    summary: "Open-ended exploration of voice AI using ElevenLabs API and tools.",
    bullets: [
      "Teams built creative voice applications",
      "Explored text-to-speech, voice cloning, and conversational agents",
      "Focus on novel use cases and user experiences"
    ],
    tags: ["Voice", "Audio", "Agents", "TTS"],
    industry: "Dev Tools",
    modality: ["Audio", "Agents"],
    whyItMatters: "Demonstrates creative applications of state-of-the-art voice synthesis technology."
  },
  {
    sponsor: "Featherless",
    slug: "featherless-model-routing",
    title: "Tools for Navigating Open Model Ecosystems",
    summary: "Infrastructure for routing and navigating across many open-source AI models.",
    bullets: [
      "Teams explored model selection and routing strategies",
      "Focus on cost, latency, and quality trade-offs",
      "Tools for developers working with diverse model APIs"
    ],
    tags: ["Agents", "Model Routing", "Infrastructure", "Dev Tools"],
    industry: "Dev Tools",
    modality: ["Text", "Agents"],
    whyItMatters: "Helps developers choose and switch between models efficiently in production."
  },
  {
    sponsor: "Confidential Partner",
    slug: "confidential-healthcare",
    title: "Context-Aware Data Visualization for Safety Analytics",
    summary: "Interactive visualization tools for analyzing safety and compliance data in healthcare contexts.",
    bullets: [
      "Teams explored context-aware dashboards",
      "Focus on regulatory compliance and risk signals",
      "User-centric design for non-technical stakeholders"
    ],
    tags: ["Data Viz", "Analytics", "Safety", "Compliance"],
    industry: "Healthcare",
    modality: ["Data"],
    whyItMatters: "Improves decision-making and compliance monitoring in regulated industries."
  },
];

/**
 * Get unique industries for filtering
 */
export function getIndustries(): string[] {
  return Array.from(new Set(challengeThemes.map(t => t.industry))).sort();
}

/**
 * Get unique modalities
 */
export function getModalities(): string[] {
  const allModalities = challengeThemes.flatMap(t => t.modality);
  return Array.from(new Set(allModalities)).sort();
}

/**
 * Get unique sponsors
 */
export function getSponsors(): string[] {
  return Array.from(new Set(challengeThemes.map(t => t.sponsor))).sort();
}

/**
 * Get unique tags
 */
export function getAllTags(): string[] {
  const allTags = challengeThemes.flatMap(t => t.tags);
  return Array.from(new Set(allTags)).sort();
}

/**
 * Filter challenge themes
 */
export function filterChallengeThemes(
  industry?: string,
  modality?: string,
  sponsor?: string,
  searchQuery?: string
): ChallengeTheme[] {
  return challengeThemes.filter(theme => {
    if (industry && theme.industry !== industry) return false;
    if (modality && !theme.modality.includes(modality as ChallengeTheme['modality'][number])) return false;
    if (sponsor && theme.sponsor !== sponsor) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchableText = [
        theme.title,
        theme.summary,
        ...theme.bullets,
        ...theme.tags,
        theme.sponsor,
      ].join(' ').toLowerCase();
      if (!searchableText.includes(query)) return false;
    }
    return true;
  });
}

export default challengeThemes;
