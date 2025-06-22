import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["admin.absar.sa"],
  },
  env: {
    STRAPI_URI: "https://admin.absar.sa",
  },
  // output: "export",
};

export default nextConfig;
