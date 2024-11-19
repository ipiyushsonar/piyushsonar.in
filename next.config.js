const isExport = process.env.NEXT_PHASE === 'phase-export';

module.exports = {
  output: 'export',
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
    if (isExport) {
      return [];
    }
    return [
      // ...your custom headers configuration...
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
