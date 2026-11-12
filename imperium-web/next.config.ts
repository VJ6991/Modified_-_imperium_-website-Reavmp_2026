import type { NextConfig } from "next";

// Static export: the site is pre-rendered to plain HTML in /out and can be served
// by the existing Apache host (redirects live in public/.htaccess) or any CDN.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
