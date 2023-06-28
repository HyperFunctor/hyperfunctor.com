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
 * @type import('next').NextConfig
 */
const config = {
  trailingSlash: false,
  reactStrictMode: true,
  excludeDefaultMomentLocales: true,
  optimizeFonts: true,
  httpAgentOptions: { keepAlive: true },
  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    loader: "default",
    dangerouslyAllowSVG: true,
    domains: [
      "i3.ytimg.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "tailwindui.com",
      "media.graphcms.com",
      "hyperfunctor.com",
      "reactnextaz.com",
      "reactnextaz.pl",
    ],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    workerThreads: true,
    scrollRestoration: true,
    gzipSize: true,
    urlImports: ["https://cdn.skypack.dev"],
    esmExternals: true,
    fallbackNodePolyfills: true,
    nextScriptWorkers: false,
    legacyBrowsers: false,
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
  redirects: () => {
    return Promise.resolve([
      {
        source: "/:path*",
        destination: "https://next13masters.pl/",
        permanent: true,
      },
    ]);
    // return Promise.resolve([
    //   {
    //     source: "/",
    //     destination: "https://hyperfunctor.com/nextjs-react-graphql-typescript",
    //     has: [
    //       {
    //         type: "host",
    //         value: "zaisteprogramuj.pl",
    //       },
    //     ],
    //     permanent: true,
    //   },
    //   {
    //     source: "/",
    //     destination: "https://hyperfunctor.com/nextjs-react-graphql-typescript",
    //     has: [
    //       {
    //         type: "host",
    //         value: "next.hyperfunctor.com",
    //       },
    //     ],
    //     permanent: true,
    //   },
    //   {
    //     source: "/",
    //     destination: "/nextjs-react-graphql-typescript",
    //     permanent: false,
    //   },
    // ]);
  },
  rewrites: () => {
    return Promise.resolve([
      {
        source: "/js/script.js",
        destination: "https://plausible.io/js/plausible.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
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
