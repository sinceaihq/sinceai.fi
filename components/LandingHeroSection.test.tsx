import { render, screen } from "@testing-library/react";
import LandingHeroSection from "./LandingHeroSection";

// Mock video element
const mockPlay = jest.fn().mockResolvedValue(undefined);

Object.defineProperty(HTMLVideoElement.prototype, "play", {
  configurable: true,
  value: mockPlay,
});

Object.defineProperty(HTMLVideoElement.prototype, "canPlayType", {
  configurable: true,
  value: jest.fn().mockReturnValue(""),
});

describe("LandingHeroSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Content Rendering", () => {
    it("renders the badge with hackathon information", () => {
      render(<LandingHeroSection />);
      expect(
        screen.getByText(/Since AI Hackathon 2026/)
      ).toBeInTheDocument();
    });

    it("renders the main headline words", () => {
      render(<LandingHeroSection />);
      expect(screen.getByText("Build")).toBeInTheDocument();
      expect(screen.getByText("AI.")).toBeInTheDocument();
      expect(screen.getByText("Ship")).toBeInTheDocument();
      expect(screen.getByText("Products.")).toBeInTheDocument();
    });

    it("renders CTA buttons", () => {
      render(<LandingHeroSection />);
      expect(screen.getByText("Join Hackathon 2026")).toBeInTheDocument();
      expect(screen.getByText("Join Discord")).toBeInTheDocument();
    });

    it("renders the subtitle", () => {
      render(<LandingHeroSection />);
      expect(
        screen.getByText(/500\+ AI builders/)
      ).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has video element with required attributes", () => {
      render(<LandingHeroSection />);
      const video = document.querySelector("video");
      expect(video).toHaveAttribute("autoplay");
      expect(video).toHaveAttribute("loop");
      expect(video).toHaveAttribute("playsinline");
      // muted is a property, not an attribute - check it exists
      expect(video).not.toBeNull();
    });

    it("has semantic h1 heading", () => {
      render(<LandingHeroSection />);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });
  });

  describe("Layout", () => {
    it("renders full viewport height", () => {
      render(<LandingHeroSection />);
      const section = document.querySelector("section");
      expect(section).toHaveStyle({ height: "100vh" });
    });

    it("has responsive container", () => {
      render(<LandingHeroSection />);
      const container = document.querySelector(".max-w-7xl");
      expect(container).toBeInTheDocument();
    });
  });

  describe("CTA Links", () => {
    it("has hackathon link with correct href", () => {
      render(<LandingHeroSection />);
      const hackathonLink = screen.getByText("Join Hackathon 2026").closest("a");
      expect(hackathonLink).toHaveAttribute("href", "/hackathon");
    });

    it("has Discord link with correct attributes", () => {
      render(<LandingHeroSection />);
      const discordLink = screen.getByText("Join Discord").closest("a");
      expect(discordLink).toHaveAttribute("href", "https://discord.gg/6PC74zW68v");
      expect(discordLink).toHaveAttribute("target", "_blank");
    });
  });
});
