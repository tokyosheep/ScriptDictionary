'use strict';
const path = require('path');

exports.renderer = {
  entry: './src/main.tsx',
  output: {
    publicPath: '/dist/', // 重要更新を監視するために
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
// DefinePlugin、文字列もJSON.stringnifyする。文字列も"が外れる

exports.main = {
	target: 'electron-main',
	entry: './mainProcess/index.ts',
	output: {
	  publicPath: '/dist/', // 重要更新を監視するために
	  path: __dirname,
	  filename: 'main.js'
	},
	module: {
	  rules: [
		{
		  test: /\.tsx?$/,
		  use: 'babel-loader',
		  exclude: /node_modules/
		}
	  ]
	},
	// import 文で .ts や .tsx ファイルを解決するため
	resolve: {
	  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	}
  };