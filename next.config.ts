import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    // domains: ["admin.absar.sa"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.absar.sa",
        port: "",
      },
    ],
  },
  env: {
    STRAPI_URI: "https://admin.absar.sa",
  },
  // output: "export",
};

export default nextConfig;
