/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // Only analyze when explicitly set
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/blogs/:slug",
        destination: "https://cms.daikimedia.com/api/blogs/:slug",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/learn/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    domains: ["cms.daikimedia.com"],
  },

  compress: true,

  // Move experimental inside nextConfig
  experimental: {
    optimizeCss: true, // This requires the critters package
  },
};

module.exports = withBundleAnalyzer(nextConfig);
