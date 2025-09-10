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
      // Handle specific broken URLs that aren't covered by dynamic validation
      {
        source: "/authors",
        destination: "/author/lukesh-pillai",
        permanent: true,
      },
      {
        source: "/lukesh@daikimedia.com",
        destination: "/author/lukesh-pillai",
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
