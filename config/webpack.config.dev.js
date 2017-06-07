var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry:{
		app:[
		'./src/index.js',
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://localhost:9090/'
		]
	},
	output:{
		//publicPath: "http://127.0.0.1:8080/dist/",
    	//path: __dirname+'/static/dist/',
    	filename: "bundle.js"
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
			},{
				test:/\.css$/,
				use:[
					{loader:'css-loader'}
				]
			}
		]
	},
	devServer:{
		/*contentBase:__dirname,
		port:8080,
		hot:true*/
	},
	plugins:[
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};