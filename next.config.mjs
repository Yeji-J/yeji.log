/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://yeji-j.github.io/yeji.log/'
    : ''

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@animations': path.resolve(__dirname, 'src/animations'),
    }
    return config
  },
  output: 'export',
  assetPrefix: prefix,
  basePath: prefix,
  images: { unoptimized: true },
}

export default nextConfig
