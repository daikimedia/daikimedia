/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Only analyze when explicitly set
});
const Critters = require('critters-webpack-plugin');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new Critters({
        preload: 'swap',
        compress: true,
      }));
    }
    return config;
  },
};
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
};

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/blogs/:slug',
        destination: 'https://cms.daikimedia.com/api/blogs/:slug',
      },
    ];
  },

  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60, // in seconds
  },

  compress: true,

  // Move experimental inside nextConfig
  experimental: {
    optimizeCss: true, // This requires the critters package
  }
};

module.exports = withBundleAnalyzer(nextConfig);