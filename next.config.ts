import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Isse build ke waqt TypeScript errors ignore ho jayenge
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
