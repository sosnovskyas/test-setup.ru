'use strict';

import {HotModuleReplacementPlugin} from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss'

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

export default {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  watch: isDevelopment,
  // devtool: isDevelopment ? 'cheap-module-inline-cource-map' : null,
  devtool: 'cheap-module-inline-cource-map',
  devServer: {
    hot: true,
    contentBase: 'dist'
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      }, {
        test: /\.jade$/,
        loader: 'jade'
      }, {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css!postcss-loader!stylus')
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({browsers: ['last 2 versions']})]
  },

  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: true}),
    new HtmlWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{from: 'src/assets', to: ''}], {})
  ]
}