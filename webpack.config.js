const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        exclude: /node_modules/,
        // multiple loaders
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              // execute plugins
              plugins: () => [autoprefixer()]
            }
          }
        ],
      },
      {
        test: /\.(png|jp?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]' // limit=8000 kilobytes, path it should be stored it.
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html', // base html file
      filename: 'index.html', // generate the file
      inject: 'body' // inject content into 'head' or 'body'
    })
  ]
};
