var config = require('../config/webpack.config.js');
var webpack = require('webpack');
var compiler = new webpack(config);
compiler.run((err,status) => {
	if(err) {
		console.log('打包失败！');
		return ;
	}
	console.log('打包完成！');
});