
'use strict';
const { merge } = require('webpack-merge');
const { renderer, main } = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

const produce = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            drop_console: true// production modeでconsole.log消えます
          }
        }
      })
    ]
  }
}

module.exports = [
  merge(renderer, produce),
  merge(main, produce)
];