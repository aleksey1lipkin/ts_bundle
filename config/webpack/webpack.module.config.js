const babelLoader = require('./rules/babelLoader');
const imageLoader = require('./rules/imageLoader');
const fontsLoader = require('./rules/fontsLoader');

module.exports = {
  module: {
    rules: [babelLoader, imageLoader, fontsLoader],
  },
};
