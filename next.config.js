/** @type {import('next').NextConfig} */

const nextConfigDevelopment = {
  reactStrictMode: true,
  basePath: '',
  env: {
    BASE_PATH: '',
  },
}

const nextConfig = {
  reactStrictMode: true,
  basePath: '/sparky-solutions',
  distDir: 'build',
  env: {
    BASE_PATH: '/sparky-solutions',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    unoptimized: true
  }
}

module.exports = process.env.NODE_ENV == 'development' ? nextConfigDevelopment : nextConfig
