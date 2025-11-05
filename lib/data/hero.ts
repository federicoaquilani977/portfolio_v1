import type { HeroData } from "../types";

export const heroData: HeroData = {
  name: "Il Tuo Nome",
  role: "Cybersecurity Developer",
  tagline: "Creo esperienze digitali sicure e performanti",
  description: "Specializzato in sviluppo web moderno con focus su sicurezza informatica. Dal frontend interattivo al backend robusto, trasformo idee in soluzioni digitali concrete.",
  cta: {
    primary: {
      text: "Vedi i progetti",
      href: "/projects",
    },
    secondary: {
      text: "Parliamone",
      href: "/contact",
    },
  },
};

export const navigationData = {
  logo: "Portfolio",
  links: [
    { name: "Home", href: "/", label: "Home" },
    { name: "About", href: "/about", label: "About" },
    { name: "Projects", href: "/projects", label: "Projects" },
    { name: "Contact", href: "/contact", label: "Contact" },
  ],
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Il Tuo Nome. All rights reserved.`,
  madeWith: "Made with Next.js, TypeScript & Tailwind CSS",
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/cfdddde",
    email: "mailto:your.email@example.com",
    twitter: "https://twitter.com/yourhandle",
    telegram: "https://t.me/yourhandle",
  },
};