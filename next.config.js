/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/blogs/:slug',
        destination: 'https://cms.daikimedia.com/api/blogs/:slug ',
      },
    ];
  },
  compress: true, // HTML minify ke liye compression enable
};

module.exports = nextConfig;
