import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { PartnerMarquee } from "./PartnerMarquee";

const DISCORD_URL = "https://discord.com/invite/YkqJswRGSW";

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-[85vh] md:min-h-screen bg-black pt-[100px]">
      {/* ── Vertically-centred content ─────────────────────── */}
      <div className="flex-1 flex items-center">
        <div
          className="mx-auto w-full px-6"
          style={{ maxWidth: "1200px" }}
        >
          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-headline-lg)",
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              margin: 0,
              color: "#fff",
            }}
          >
            Global execution-focused AI innovation ecosystem.
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--color-fg-muted)",
              marginTop: "var(--space-md)",
              letterSpacing: "0.01em",
              lineHeight: 1.6,
            }}
          >
            where frontier AI becomes shipped products.
          </p>

          {/* Hackathon announcement */}
          <a
            href="/hackathon"
            className="flex sm:inline-flex"
            style={{
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#000",
              textDecoration: "none",
              letterSpacing: "0.02em",
              marginTop: "var(--space-lg)",
              padding: "12px 16px",
              border: "0.5px solid #fff",
              background: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22c55e",
              flexShrink: 0,
            }} />
            <span className="sm:hidden">Since AI Hackathon 2026 &thinsp;·&thinsp; Apply now →</span>
            <span className="hidden sm:inline">Since AI Hackathon 2026 &thinsp;·&thinsp; €50,000 cash prize pool &thinsp;·&thinsp; Registration open →</span>
          </a>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row"
            style={{ marginTop: "var(--space-md)", gap: "12px" }}
          >
            {/* Secondary — outlined */}
            <Link
              href="/partners"
              className="hero-cta-secondary"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#fff",
                background: "transparent",
                padding: "12px 20px",
                borderRadius: 0,
                border: "0.5px solid var(--color-border-strong)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Partner with Since AI →
            </Link>

            {/* Tertiary — Discord */}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#fff",
                background: "transparent",
                padding: "12px 20px",
                borderRadius: 0,
                border: "0.5px solid var(--color-border-strong)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <FaDiscord style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
              Join Discord
            </a>
          </div>
        </div>
      </div>

      {/* ── Partner marquee — bottom-docked ─────────────────── */}
      <div className="h-10 shrink-0" />
      <PartnerMarquee />
    </section>
  );
}
