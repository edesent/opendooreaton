import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // The parent CRM folder has its own lockfile; pin the root so Turbopack
  // does not pick the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/giving", destination: "/give", permanent: true },
      { source: "/services", destination: "/visit", permanent: true },
      { source: "/times", destination: "/visit", permanent: true },
      { source: "/prayer-request", destination: "/prayer", permanent: true },
    ];
  },
};

export default nextConfig;
