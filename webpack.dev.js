const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.common');

console.log(`Variable de entorno NODE_ENV=${process.env.NODE_ENV}`);

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    clean: false,
  },
});
