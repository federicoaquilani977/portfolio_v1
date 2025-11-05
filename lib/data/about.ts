import type { AboutData } from "../types";

export const aboutData: AboutData = {
  hero: {
    title: "About Me",
    subtitle: "Developer, Security Enthusiast, Problem Solver",
  },
  journey: {
    title: "My Journey",
    content: [
      "My passion for technology started during my studies at ITS, where I discovered the fascinating world of web development and cybersecurity.",
      "Through hands-on projects and continuous learning, I developed a strong foundation in modern web technologies and security best practices.",
      "Today, I combine creative problem-solving with technical expertise to build secure, performant, and user-friendly applications.",
    ],
    highlights: [
      {
        id: "1",
        year: "2023",
        title: "ITS Diploma",
        description: "Specialized training in web development and cybersecurity",
      },
      {
        id: "2",
        title: "First Major Project",
        description: "Built a full-stack e-commerce platform with security features",
      },
      {
        id: "3",
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
      },
    ],
  },
  skills: {
    frontend: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Vue.js" },
      { name: "Framer Motion" },
    ],
    backend: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python" },
      { name: "Django" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
    ],
    cybersecurity: [
      { name: "OWASP Top 10" },
      { name: "JWT Authentication" },
      { name: "SQL Injection Prevention" },
      { name: "XSS Protection" },
      { name: "Security Headers" },
      { name: "Penetration Testing" },
      { name: "Burp Suite" },
      { name: "Metasploit" },
    ],
    tools: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Jira" },
      { name: "CI/CD" },
    ],
  },
  certifications: [
    {
      id: "1",
      name: "ITS Cybersecurity Specialist",
      issuer: "ITS Academy",
      date: "2023",
      description: "Advanced training in web security and secure development practices",
    },
    {
      id: "2",
      name: "Full-Stack Web Development",
      issuer: "ITS Academy",
      date: "2023",
      description: "Comprehensive training in modern web technologies",
    },
  ],
  philosophy: {
    title: "My Philosophy",
    content: "I believe that great software is built on three pillars: clean code, strong security, and excellent user experience. Every project is an opportunity to learn, improve, and create something meaningful.",
  },
};