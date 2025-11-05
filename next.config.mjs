/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      // aggiungi altri host se li usi (es. Cloudinary, GitHub, ecc.)
    ],
  },
  // opzionale:
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
