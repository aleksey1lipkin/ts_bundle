const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.base.config.js');
const devServerConfig = require('./webpack.devServer.config');


module.exports = function (env, argv) {
  return webpackMerge(
    commonConfig(env, argv),
    devServerConfig,
    {
      devtool: 'cheap-module-eval-source-map',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
  );
};
