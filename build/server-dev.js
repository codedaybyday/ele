var config = require('../config/webpack.config.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
	//hot:true,
});
server.listen(8080);