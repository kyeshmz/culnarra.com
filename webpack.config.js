const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: ['./src/style.scss', './src/index.js'],
  watch: true,
  mode: 'production',
  module: {
    rules: [
      // {
      //   test: /\.pug$/,
      //   loader: 'pug-loader'
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js')
  }
};
