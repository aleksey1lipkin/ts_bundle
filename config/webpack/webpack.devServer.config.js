module.exports = {
  devServer: {
    port: 3333,
    hotOnly: true,
    overlay: true,
    clientLogLevel: 'warning',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
  },
};
