/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: true,
});

const nextConfig = withPWA({});

module.exports = nextConfig;
