import webpack from 'webpack'
import path from 'path'

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client',
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/client/public')
    // path
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
  },
};


//SIMPLEST VERSION
// var webpack = require('webpack');
// var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');

// var config = {
//   entry: APP_DIR + '/index.jsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };

// module.exports = config;
