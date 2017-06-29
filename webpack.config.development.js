/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.js.org/concepts/hot-module-replacement/
 */
/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { spawn } from 'child_process';
import baseConfig, { theme } from './webpack.config.base';

const port = process.env.PORT || 3000;
const publicPath = `http://localhost:${port}/`;

export default merge(baseConfig, {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, './index.js')
  ],
  output: {
    publicPath: `http://localhost:${port}/`
  },

  module: {
    rules: [
      {
        test: /node_modules\/.*\.less$/,
        use: [
          { loader: 'style-loader' },
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
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
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
      }
    ]
  },

  plugins: [
    // https://webpack.js.org/concepts/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // turn debug mode on.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.development.html'
    })
  ],
  target: 'web',
  devServer: {
    port,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets')],
    publicPath,
    setup () {
      if (process.env.START_HOT) {
        spawn('npm', ['run', 'start-hot'], { shell: true, env: process.env, stdio: 'inherit' })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError));  // eslint-disable-line no-console
      }
    }
  }
});
