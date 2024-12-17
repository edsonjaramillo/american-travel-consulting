import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'picsum.photos' }, { hostname: 'media.graphassets.com' }],
  },
  experimental: { reactCompiler: isDev },
};

export default nextConfig;
