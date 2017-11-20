var path = require('path');//路径
var buildConfig = require('../config/buildConfig');//打包配置
var webpack = require('webpack');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ZipPlugin = require('zip-webpack-plugin');//生成zip文件包
var CopyWebpackPlugin = require('copy-webpack-plugin');//copy没有打包的文件

var ROOT_PATH = path.resolve(__dirname);//使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
var APP_PATH = path.resolve(ROOT_PATH, '../src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'App.jsx'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '../dist'); //发布文件所存放的目录

const webpackConfig = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: APP_FILE
    },
    output: {
        path: buildConfig.build.assetsRoot, //编译到当前目录
        publicPath: process.env.NODE_ENV === 'production' ? buildConfig.build.assetsPublicPath : buildConfig.dev.assetsPublicPath,
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    // output: {
    //     publicPath: '../dist/', //编译好的文件，在服务器的路径,这是静态资源引用路径
    //     path: BUILD_PATH, //编译到当前目录
    //     filename: '[name].js', //编译后的文件名字
    //     chunkFilename: '[name].[chunkhash:5].min.js',
    // },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader',
            include: [APP_PATH]
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer']),
            include: [APP_PATH]
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less']),
            include: [APP_PATH]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass']),
            include: [APP_PATH]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [APP_PATH]
        }, {
            test: /\.(png|jpg)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            include: [APP_PATH]
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
              limit: 10000,
              // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
              name: utils.assetsPath('font/[name].[ext]')
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
          },
          {//代码检查
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
          },
         {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel-loader'],
            include: [APP_PATH]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};
module.exports = webpackConfig;