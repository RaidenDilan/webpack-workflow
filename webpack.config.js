const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // location of generated output
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // multiple loaders
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          }, {
            loader: 'postcss-loader', options: {
              indent: 'postcss',
              // execute plugins
              plugins: () => [autoprefixer()]
            }
          }
        ]
      }
    ]
  }
};
