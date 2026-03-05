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

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)',
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
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.daikimedia.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components', '@/utils'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);