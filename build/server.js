var path = require('path');//路径
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var buildConfig = require('../config/buildConfig');//打包配置
var ora = require('ora');

//代理服务器
var proxy = [{
	path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
	target: 'http://cangdu.org',
	host: 'cangdu.org',
	secure: false
}];

console.log(
	'  Tip:\n' +
	'  Built files are meant to be served over an HTTP server.\n' +
	'  Opening index.html over file:// won\'t work.\n'
  )
  
  var spinner = ora('building for production...')
  spinner.start()
  
  var assetsPath = path.join(buildConfig.buildTest.assetsRoot, buildConfig.buildTest.assetsSubDirectory)
  rm('-rf', assetsPath)
  rm('-rf', '*.zip', path.resolve(__dirname, '../*.zip'))
  mkdir('-p', assetsPath)
  //cp('-R', 'CubeModule.json', config.build.assetsRoot);
  cp('-R', 'static/*', assetsPath)


var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	progress: true,
	stats: {
		colors: true,
	},
	proxy
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
server.listen(8089, function() {
	console.log('正常打开8089端口')
});
