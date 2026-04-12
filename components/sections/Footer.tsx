"use client";
import React from "react";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaMedium,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { ORG } from "@/lib/org";

interface FooterProps {
  discordUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  discordUrl = "https://discord.com/invite/YkqJswRGSW",
}) => {
  const socialLinks = [
    { name: "Discord", href: discordUrl, icon: FaDiscord },
    { name: "Telegram", href: ORG.social.telegram, icon: FaTelegram },
    { name: "LinkedIn", href: ORG.social.linkedin, icon: FaLinkedin },
    { name: "Instagram", href: ORG.social.instagram, icon: FaInstagram },
    { name: "X", href: ORG.social.x, icon: FaXTwitter },
    { name: "GitHub", href: ORG.social.github, icon: FaGithub },
    { name: "YouTube", href: ORG.social.youtube, icon: FaYoutube },
    { name: "TikTok", href: ORG.social.tiktok, icon: FaTiktok },
    { name: "Facebook", href: ORG.social.facebook, icon: FaFacebook },
    { name: "Medium", href: ORG.social.medium, icon: FaMedium },
    { name: "Substack", href: ORG.social.substack, icon: SiSubstack },
    { name: "Reddit", href: ORG.social.reddit, icon: FaReddit },
  ];

  const navigationColumns = [
    {
      title: "Community",
      links: [
        { name: "Events", href: "/events" },
        { name: "Projects", href: "/projects" },
        { name: "Partners", href: "/partners" },
        { name: "Blog", href: "/blog" },
        { name: "Resources", href: "/resources" },
        { name: "Discord", href: discordUrl },
      ],
    },
    {
      title: "Programs",
      links: [
        { name: "About", href: "/about" },
        { name: "Production Support", href: "/production-support" },
        { name: "European AI", href: "/european-ai" },
        { name: "Research to Market", href: "/research-to-market" },
        { name: "Stats & Impact", href: "/stats" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Locations",
      links: [
        { name: "Turku, Finland", href: "/turku" },
        { name: "Finland", href: "/finland-ai" },
        { name: "Europe", href: "/europe-ai" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Code of Conduct", href: "/code-of-conduct" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Logo & Description */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Since AI
            </h2>
            <p className="text-neutral-500 text-sm max-w-md">
              Europe&apos;s full-lifecycle AI innovation ecosystem. Turku-based, globally connected.
            </p>
            <a
              href={`mailto:${ORG.contact.infoEmail}`}
              className="text-neutral-400 hover:text-white transition-colors text-sm mt-3 inline-block"
            >
              {ORG.contact.infoEmail}
            </a>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {navigationColumns.map((column) => (
              <div key={column.title} className="text-center">
                <h3 className="text-neutral-600 text-xs font-semibold tracking-wider uppercase mb-6">
                  {column.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Social Icons - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-neutral-500 text-sm">
              {ORG.legalName} • Business ID: {ORG.businessId}
            </p>
            <p className="text-neutral-600 text-xs">
              © {new Date().getFullYear()} Since AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
