var path = require('path');//路径
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.hot');
var proxyMiddleware = require('http-proxy-middleware')
var buildConfig = require('../config/buildConfig');//打包配置
var ora = require('ora');

var app = express();
var compiler = webpack(config);

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



app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));

//代理服务器
app.use('/shopro', proxyMiddleware({
    target: 'http://cangdu.org',
    changeOrigin: true,
}))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(8089, function() {
	console.log('正常打开8089端口')
});
