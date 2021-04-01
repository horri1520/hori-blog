/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, 'src/'),
    };
    return config;
  },
};
