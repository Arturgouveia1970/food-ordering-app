import nextConfig from 'next/config.js';

const nextImageConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
    },
  ],
};

const api = {
  bodyParser: false,
  bodyParserMiddleware: (req, res, next) => {
    if (req.url !== '/api/menu-items') {
      return next();
    }

    const bodyParser = require('body-parser');
    const jsonParser = bodyParser.json();
    jsonParser(req, res, next);
  },
};

nextConfig.default = {
  ...nextConfig.default,
  ...api,
  images: {
    ...nextConfig.default.images,
    ...nextImageConfig,
  },
};

export default nextConfig.default;