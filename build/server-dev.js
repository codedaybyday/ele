var config = require('../config/webpack.config.dev.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('../config/proxy.config.js');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
	hot:true,
	contentBase:'./',
	proxy,
	hotOnly:true
});
server.listen(8080);