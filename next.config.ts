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
      },
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com"
      }
    ],
  }
};

export default nextConfig;
