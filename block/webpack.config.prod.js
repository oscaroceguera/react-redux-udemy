var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
	devtool : 'source-map',

	entry : [path.resolve(__dirname, 'app/index.js')],

	output : {
		path : path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	      compressor : {
	        warnings: false
	      },
	    }),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new HtmlWebpackPlugin({
	      template: './app/index.html'
	    }),
	    new webpack.DefinePlugin({
	      'process.env.NODE_ENV' : JSON.stringify('production')
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
    }
}

module.exports = config
