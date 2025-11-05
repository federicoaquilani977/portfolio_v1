export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  description?: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  cybersecurity: Skill[];
  tools: Skill[];
}

export interface JourneyHighlight {
  id: string;
  year?: string;
  title: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
  };
  journey: {
    title: string;
    content: string[];
    highlights: JourneyHighlight[];
  };
  skills: SkillCategory;
  certifications: Certification[];
  philosophy: {
    title: string;
    content: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export interface ContactData {
  hero: {
    title: string;
    subtitle: string;
  };
  email: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    telegram?: string;
  };
  calendly?: string;
  cv?: string;
}
