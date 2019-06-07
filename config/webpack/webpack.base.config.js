const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const moduleConfig = require('./webpack.module.config');
const resolveConfig = require('./webpack.resolve.config');
const {
  paths: { rootPath, projectSrcPath, buildPath, staticFilesPath   },
} = require('./paths');

module.exports = () =>
  webpackMerge(moduleConfig, resolveConfig, {
  entry: path.join(projectSrcPath, 'index.tsx'),
  output: {
    path: buildPath,
      publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
    noEmitOnErrors: true,
  },
    plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
        failOnError: true,
      allowAsyncCycles: false,
        cwd: rootPath,
    }),
    new HtmlWebpackPlugin({
      template: path.join(staticFilesPath, 'index.html'),
        favicon: path.join(staticFilesPath, 'favicon.ico'),
    }),
    ],
});
