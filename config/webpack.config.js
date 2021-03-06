var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry:{
		app:[
		'./src/index.js',
		//'webpack-dev-server/client?http://localhost:8080/'
		]
	},
	output:{
		path:__dirname,
		filename:'../dist/bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:[
					{loader:'vue-loader'}
				]
			},
			{
				test:/\.js$/,
				use:[
					{loader:'babel-loader'}
				]
			},
			{
				test:/\.css$/,
				use:[
					{loader:'css-loader'}
				]
			}
		]
	},
	/*devServer:{
		contentBase:__dirname,
		port:8080,
		hot:true
	},*/
	plugins: [
    	new webpack.optimize.UglifyJsPlugin({
      		compress: {
        		warnings: false
      		}
    	})
  	]
};