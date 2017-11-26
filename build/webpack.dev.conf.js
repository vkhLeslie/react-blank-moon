var buildConfig = require('../config/buildConfig');//打包配置
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var utils = require('./utils');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
// add hot-reload related code to entry chunks 热更新编译
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
 
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({//注册全局服务
      '$configGlobal': path.resolve(__dirname, '../config/configGlobal.js'),//configGlobal
    }),
    new webpack.DefinePlugin({ //定义编译环境
       //process.argv：当前进程的命令行参数数组。
      //process.env：指向当前shell的环境变量，比如process.env.HOME。
      'process.env': buildConfig.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({//根据模板插入css/js等生成最终HTML
      filename: 'index.html', //生成的html存放路径，相对于 path
      // template: '../src/template/index.html', //html模板路径
      inject: true
    }),
    new ExtractTextPlugin('[name].css'),
    new FriendlyErrors()
  ],
})
