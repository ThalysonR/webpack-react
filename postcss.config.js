const pImport = require('postcss-import');
const pUrl = require('postcss-url');
const pEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    pImport,
    pUrl,
    pEnv({
      browsers: 'last 2 versions',
      stage: 0,
    }),
  ],
};
