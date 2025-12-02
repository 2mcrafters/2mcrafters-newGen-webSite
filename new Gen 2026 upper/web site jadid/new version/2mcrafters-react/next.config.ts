import { resolve } from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // distDir intentionally omitted to avoid windows path-length issues and Turbopack normalization
  turbopack: {
    root: resolve(__dirname),
  },
};

export default nextConfig;
