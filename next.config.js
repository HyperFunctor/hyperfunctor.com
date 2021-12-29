/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */
const { withPlaiceholder } = require("@plaiceholder/next");

const withBundleAnalyzer = (
  ({ enabled = true } = {}) =>
  (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (enabled && !options.isServer) {
          const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              reportFilename: "./analyze/client.html",
              excludeAssets: /polyfills-.*\.js/,
              defaultSizes: "gzip",
            })
          );
        }

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }
        return config;
      },
    });
  }
)({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type import('next/dist/server/config-shared').NextConfig
 */
const config = {
  trailingSlash: false,
  reactStrictMode: true,
  excludeDefaultMomentLocales: true,
  optimizeFonts: true,
  webpack5: true,
  httpAgentOptions: { keepAlive: true },
  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  esmExternals: true,
  swcMinify: true,
  urlImports: ["https://cdn.skypack.dev"],
  images: {
    loader: "default",
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "tailwindui.com",
      "media.graphcms.com",
      "zaisteprogramuj.pl",
      "reactnextaz.com",
      "reactnextaz.pl",
    ],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizeImages: true,
    workerThreads: true,
    scrollRestoration: true,
    gzipSize: true,
  },

  headers() {
    return Promise.resolve([
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]);
  },
};

module.exports = withBundleAnalyzer(
  withPlaiceholder({
    ...config,
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  })
);
