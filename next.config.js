/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false
  },
  eslint: {
    dirs: ['src']
  },
  experimental: {
    typedRoutes: true
  }
}

module.exports = nextConfig

