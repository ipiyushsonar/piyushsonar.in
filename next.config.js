const withPlugins = require('next-compose-plugins');
const { EnvironmentPlugin } = require('webpack');

module.exports = withPlugins([], {
  webpack(config, { isServer }) {
    if (!isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    config.plugins.push(new EnvironmentPlugin(process.env));
    return config;
  },
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: false,
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
});
