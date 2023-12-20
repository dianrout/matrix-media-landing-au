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
  unoptimized: true,
  async headers() {
    return [
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/jquery.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/bootstrap.bundle.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/wow.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/owl.carousel.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/jquery.magnific-popup.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/meanmenu.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 1
        source: "/public/assets/js/jquery.ajaxchimp.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 2
        source: "/public/assets/js/form-validator.min.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 2
        source: "/public/assets/js/contact-form-script.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      },
      {
        // Cấu hình cho script 2
        source: "/public/assets/js/custom.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript"
          }
        ]
      }
      // Thêm cấu hình cho các script khác nếu cần
    ]
  }
}

module.exports = nextConfig
