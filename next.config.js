/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.saymedia-content.com', 'cdn.sanity.io', 'user-images.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
  // Exclude the Sanity Studio route from the build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => ext !== 'tsx' && ext !== 'jsx'),
}

module.exports = nextConfig
