/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/blogs/:slug',
        destination: 'https://cms.daikimedia.com/api/blogs/:slug',
      },
    ];
  },
  compress: true, 
  swcMinify: true, // Enables SWC minification for better performance

  images: {
    domains: ['cms.daikimedia.com'], // Optimize images from your CMS
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

module.exports = nextConfig;
