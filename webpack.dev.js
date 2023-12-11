'use strict';
const { merge } = require('webpack-merge');
const { renderer, main } = require('./webpack.common');

module.exports = [
	merge(renderer, {
	  mode: 'development',
	  devtool: 'source-map'
	}),
	merge(main, {
	  mode: 'development',
	  devtool: 'source-map'
	})
  ];