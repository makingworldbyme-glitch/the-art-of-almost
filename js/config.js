/**
 * THE ART OF ALMOST — CONFIGURATION SPECIFICATION
 * Centralized settings for the Dual Identity Model (The Persona vs. The Person).
 * Update this file to configure owner identity and contact channels without modifying markup.
 */

export const siteConfig = {
  // Layer 1: The Persona
  persona: {
    brandName: "THE ART OF ALMOST",
    tagline: "An Ongoing Study of Nothing in Particular.",
    year: "2026",
    copyright: "All possibilities reserved."
  },

  // Layer 2: The Person (The Owner)
  person: {
    name: "Muhammad Rafi Kurnianto",
    bio: "An identity currently being developed without the unnecessary pressure of premature definition.",
    contactEmail: "makingworldbyme@gmail.com",
    socials: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" }
    ]
  }
};

export default siteConfig;
