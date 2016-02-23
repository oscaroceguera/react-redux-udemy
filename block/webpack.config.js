var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
	devtool : 'cheap-eval-source-map',

	entry : [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/index.js')
	],

	output : {
		path : path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template : './app/index.html'
		})
	],

	module : {
      loaders:[
        {
          test : /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          loader: 'style!css!stylus'
        }
      ]
    },

	devServer: {
	  contentBase: './',
	  historyApiFallback : true
	}
}

module.exports = config
