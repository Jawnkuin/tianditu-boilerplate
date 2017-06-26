/**
 * Base webpack config used across other specific configs
 */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';

export const theme = {
  '@primary-color': '#373277'
};

export default {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: '[name].js'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
