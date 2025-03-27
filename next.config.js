/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/blogs/:slug',
          destination: 'https://cms.daikimedia.com/api/blogs/:slug'
        }
      ]
    }
  }