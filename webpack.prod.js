const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.common');

console.log(`Variable de entorno NODE_ENV=${process.env.NODE_ENV}`);

module.exports = merge(defaultConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    clean: true,
  },
});
