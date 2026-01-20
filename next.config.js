/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emotres.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
