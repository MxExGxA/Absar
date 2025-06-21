import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost"],
  },
  env: {
    STRAPI_URI: "https://exuberant-life-aa8cf8724b.strapiapp.com/",
  },
  // output: "export",
};

export default nextConfig;
