import { FooterSection } from "./types";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Marketplace",
    links: [
      { label: "All NFTs", href: "#" },
      { label: "Art", href: "#" },
      { label: "Gaming", href: "#" },
      { label: "Photography", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
