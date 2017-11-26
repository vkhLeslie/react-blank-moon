// https://github.com/shelljs/shelljs
require('./check-versions')();
require('shelljs/global');
// env.NODE_ENV = 'production';

var path = require('path');
var buildConfig = require('../config/buildConfig');//打包配置
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join(buildConfig.build.assetsRoot, buildConfig.build.assetsSubDirectory);
rm('-rf', assetsPath);
rm('-rf', '*.zip', path.resolve(__dirname, '../*.zip'));
mkdir('-p', assetsPath);
// cp('-R', 'CubeModule.json', config.build.assetsRoot);
cp('-R', 'static/*', assetsPath);

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
