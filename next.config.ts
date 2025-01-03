import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, // Ensures proper static file paths
  assetPrefix: '/<repository-name>/',
};

export default nextConfig;
