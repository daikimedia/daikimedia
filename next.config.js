/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  transpilePackages: ['swiper'],
  
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

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
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
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    domains: ["cms.daikimedia.com"],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizeCss: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);