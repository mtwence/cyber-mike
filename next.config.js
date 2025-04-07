/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.saymedia-content.com', 'cdn.sanity.io', 'user-images.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
  // Exclude Sanity Studio from the build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig
