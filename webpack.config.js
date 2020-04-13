const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // location of generated output
    filename: 'bundle.js',
    publicPath: ''
  },
  devtools: 'cheap-module-eval-source-map',
};
