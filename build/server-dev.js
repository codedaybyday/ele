var config = require('../config/webpack.config.dev.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('../config/proxy.config.js');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
	hot:true,
	contentBase:'./',
	proxy,
	hotOnly:true,
	port:9090
});
server.listen(9090);