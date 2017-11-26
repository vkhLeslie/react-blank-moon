var path = require('path');
var buildConfig = require('../config/buildConfig');//打包配置
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlStringReplace = require('html-string-replace-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);//使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
var APP_PATH = path.resolve(ROOT_PATH, '../src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'App.jsx'); //根目录文件app.jsx地址

var webpackConfig = merge(baseWebpackConfig, {
 
  devtool: buildConfig.buildTest.productionSourceMap ? '#source-map' : false,
  entry: {
    app: APP_FILE,
    common: [
      "react",
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-thunk',
      'immutable'
    ]
  },
  output: {
    path: buildConfig.buildTest.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new CopyWebpackPlugin([
      { from:path.join(__dirname, '../CubeModule.json'), to: path.join(__dirname, '../dist/CubeModule.json') },
    ]),
  new webpack.ProvidePlugin({//全局服务注册
      '$configGlobal': path.resolve(__dirname, '../config/configGlobal.js'),
      //'$common': path.resolve(__dirname, '../src/js/service/common.js'),
  }),
  new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production') //定义生产环境
      }
  }),
  new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
      filename: buildConfig.buildTest.index, //生成的html存放路径，相对于 path
      template: 'index.html', //html模板路径
      inject: 'body',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
  }),
  new ExtractTextPlugin('[name].css'),
  //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
  new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
  new webpack.optimize.UglifyJsPlugin({
      output: {
          comments: false, // remove all comments
      },
      compress: {
          warnings: false
      }
  }),
  new ZipPlugin({//生成zip文件包
      path: path.join(__dirname, '../'),
      filename: buildConfig.buildTest.zipName,
  }),
  ],
})

if (buildConfig.buildTest.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        buildConfig.buildTest.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
