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
// const webpack = require('webpack')
// const path = require('path')

// module.exports = {
//   entry: [
//     'babel-polyfill',
//     './src/client'
//   ],
//   module: {
//     loaders: [
//       {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'src/client/public')
//     // path
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.json',
//       '.jsx',
//     ]
//   }
// };
