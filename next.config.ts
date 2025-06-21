import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost"],
  },
  env: {
    STRAPI_URI: "http://localhost:1337",
  },
  // output: "export",
};

export default nextConfig;
