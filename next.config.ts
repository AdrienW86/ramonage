import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  images: { formats: ['image/avif', 'image/webp'], qualities: [60, 75] },
  async redirects() {
    return [
      {
        source: '/prestations/ramonage-foyer-ferme',
        destination: '/prestations/ramonage-insert',
        permanent: true,
      },
      {
        source: '/prestations/traitement-du-bistre',
        destination: '/prestations/debistrage',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};
export default config;
