import nextConfig from 'next/config.js';

const nextImageConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
    },
  ],
};

nextConfig.default.images = {
  ...nextConfig.default.images,
  ...nextImageConfig,
};

export default nextConfig.default;