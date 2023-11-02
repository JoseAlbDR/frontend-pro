const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/homePage.ts',
    teams: './src/teamsPage.ts',
    contact: './src/contactPage.ts',
    notFound: './src/notFoundPage.ts',
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      chunks: ['global', 'home'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/teams.html',
      filename: 'teams.html',
      chunks: ['global', 'teams'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/contact.html',
      filename: 'contact.html',
      chunks: ['global', 'contact'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/404.html',
      filename: '404.html',
      chunks: ['global', 'notFound'],
    }),
  ],
};
