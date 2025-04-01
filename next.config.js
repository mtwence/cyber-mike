/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.saymedia-content.com', 'cdn.sanity.io', 'user-images.githubusercontent.com'],
  },
}

module.exports = nextConfig
