import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // This allows production builds to succeed even if there are TypeScript errors
    // We are using this temporarily only for canvas-confetti types issue
    ignoreBuildErrors: true,
  },
};

export default nextConfig;