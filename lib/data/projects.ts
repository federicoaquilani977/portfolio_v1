import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Sicuro",
    slug: "ecommerce-platform",
    category: "web",
    shortDescription: "Full-stack e-commerce with advanced security",
    description: "A complete e-commerce platform built with modern technologies and security best practices. Features include user authentication, payment processing, inventory management, and comprehensive security measures against common vulnerabilities.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Security"],
    featured: true,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    features: [
      "Secure user authentication with JWT",
      "Payment processing with Stripe",
      "Real-time inventory management",
      "Admin dashboard",
      "SQL injection prevention",
      "XSS protection",
    ],
  },
  {
    id: "2",
    title: "Security Monitoring Dashboard",
    slug: "security-dashboard",
    category: "cybersecurity",
    shortDescription: "Real-time security monitoring and alerting",
    description: "A comprehensive security monitoring dashboard that provides real-time insights into application security, detects anomalies, and alerts on potential threats.",
    tags: ["React", "Python", "Django", "WebSockets", "PostgreSQL", "Security"],
    featured: true,
    githubUrl: "https://github.com/yourusername/security-dashboard",
    features: [
      "Real-time threat detection",
      "Automated security alerts",
      "Vulnerability scanning",
      "Log analysis and visualization",
      "Custom security rules engine",
    ],
  },
  {
    id: "3",
    title: "Portfolio Cinematografico",
    slug: "portfolio-site",
    category: "design",
    shortDescription: "Modern portfolio with smooth animations",
    description: "A stunning portfolio website featuring cinematic animations, smooth transitions, and an elegant dark theme. Built with performance and user experience in mind.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Design"],
    featured: true,
    demoUrl: "https://portfolio.example.com",
    features: [
      "Cinematic scroll animations",
      "Interactive project showcases",
      "Optimized performance",
      "Responsive design",
      "Dark mode theme",
    ],
  },
  {
    id: "4",
    title: "API Security Testing Tool",
    slug: "api-security-tool",
    category: "cybersecurity",
    shortDescription: "Automated API security testing",
    description: "A command-line tool for automated security testing of REST APIs. Scans for common vulnerabilities and generates detailed security reports.",
    tags: ["Python", "Security", "REST API", "Testing", "CLI"],
    featured: false,
    githubUrl: "https://github.com/yourusername/api-security",
    features: [
      "Automated vulnerability scanning",
      "Authentication testing",
      "Rate limiting checks",
      "Detailed security reports",
      "Easy integration with CI/CD",
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category);
}