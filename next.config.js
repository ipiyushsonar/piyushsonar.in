module.exports = {
  output: 'export',
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/ipiyushsonar/piyushsonar.in/main/public/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 3000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};
