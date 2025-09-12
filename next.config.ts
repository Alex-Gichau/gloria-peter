import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol : "https",
      hostname: "photos.google.com"
      },
      {
        protocol: "https",
        hostname: "unsplash.com"
      }
    ],
  }
};

export default nextConfig;
