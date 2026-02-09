/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用ESLint和TypeScript检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 输出更多信息
  swcMinify: true,
  // 确保API路由包含在构建中
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // 添加headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
