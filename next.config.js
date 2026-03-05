/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
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

  // ✅ SIMPLE cache headers for static assets
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    domains: ["cms.daikimedia.com"],
  },

  compress: true,
  
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);