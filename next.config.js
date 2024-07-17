const withPWA = require('next-pwa')({
  dest: 'public'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**', // Allow all paths from this hostname
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
