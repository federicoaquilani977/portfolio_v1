// Unsplash Image Collections per Portfolio Cybersecurity

export const unsplashImages = {
  // Hero Backgrounds
  hero: {
    cyber: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80", // Cyber circuits
    code: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80", // Code screen
    matrix: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80", // Matrix style
  },
  
  // Projects Thumbnails
  projects: {
    ecommerce: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // E-commerce dashboard
    security: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80", // Security monitor
    portfolio: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80", // Modern website
    api: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // Code/API
  },
  
  // About Section
  about: {
    workspace: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80", // Developer workspace
    learning: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80", // Learning/books
    teamwork: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", // Team collaboration
  },
  
  // Tech Stack Icons (illustrative)
  tech: {
    frontend: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80", // React logo style
    backend: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&q=80", // Server/backend
    security: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80", // Padlock/security
    tools: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80", // Tools/gear
  },
  
  // Backgrounds/Textures
  textures: {
    gradient: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80", // Purple gradient
    particles: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80", // Space particles
    grid: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80", // Tech grid
  }
};

// Helper function per Next.js Image
export function getUnsplashUrl(url: string, width?: number, height?: number) {
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', '80');
  params.set('fit', 'crop');
  
  return `${url}${params.toString() ? '&' + params.toString() : ''}`;
}
