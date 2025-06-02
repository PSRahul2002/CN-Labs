/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CN-Labs',        // 👈 must match your GitHub repo name
  assetPrefix: '/CN-Labs',     // 👈 same here

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
