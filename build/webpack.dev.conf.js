var buildConfig = require('../config/buildConfig');//打包配置
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {

  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // module: {
  //   loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  // },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({//注册全局服务
      '$envType': path.resolve(__dirname, '../config/dev.env.js'),
      '$common': path.resolve(__dirname, '../src/js/service/common.js'),
      '$configGlobal': path.resolve(__dirname, '../config/configGlobal.js'),//configGlobal
    }),
    new webpack.DefinePlugin({
      'process.env': buildConfig.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrors()
  ]
})