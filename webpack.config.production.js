/**
 * Build config for electron 'Renderer Process' file
 */

/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import baseConfig, { theme } from './webpack.config.base';

export default merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: './index.js', // ['babel-polyfill', './index.js'],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].min.js',
    publicPath: './dist/'
  },

  module: {
    rules: [
      // Pipe other less styles through css modules and append to style.css
      {
        test: /node_modules\/.*\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[local]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    /**
     * Babli is an ES6+ aware minifier based on the Babel toolchain (beta)
     */
    // new BabiliPlugin(),

    new ExtractTextPlugin('[name]-[hash].min.css'),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new UglifyJSPlugin({
      sourceMap: true
    }),

    /**
     * Dynamically generate index.html page
     */
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.production.html',
      inject: 'body'
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(css|js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  target: 'web'
});
