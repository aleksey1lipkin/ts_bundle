module.exports = {
  test: /\.(png|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images/',
  },
};
