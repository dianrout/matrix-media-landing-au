const path = require("path")
const { i18n } = require("./next-i18next.config")
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  experimental: {
    appDir: true
  },
  unoptimized: true
}

module.exports = nextConfig
