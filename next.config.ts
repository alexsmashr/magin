import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático → Cloudflare Pages (deploy continuo desde GitHub)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
