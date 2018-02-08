const webpack = require('webpack')
const path = require('path')

const BUILT_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILT_DIR,
    filename: 'bundle.js',
    publicPath: 'scripts/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
