'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var APP_DIR = path.resolve(__dirname, 'client');
var DIST_DIR = path.resolve(__dirname, 'dist');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(APP_DIR, 'index.html'),
  filename: path.resolve(DIST_DIR, 'index.html'),
  inject: 'body'
});

var config = {
  entry: path.resolve(APP_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;