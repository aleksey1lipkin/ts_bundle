const {
  paths: { babelCachePath },
} = require('../paths');

module.exports = {
  test: /\.tsx?$|\.jsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: babelCachePath,
    },
  },
};
