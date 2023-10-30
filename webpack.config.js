module.exports = {
  entry: {
    home: './src/home.js',
    teams: '/src/teams.js',
    contact: '/src/contact.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    clean: true,
  },
};
