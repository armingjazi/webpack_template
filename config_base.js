const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getConfig = function() {
  return {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Webpack Template'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ]
    }
  }
};

module.exports = getConfig;
