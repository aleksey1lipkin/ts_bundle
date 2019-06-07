const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.base.config.js');

module.exports = (env, argv) => webpackMerge(commonConfig(env, argv), {});
