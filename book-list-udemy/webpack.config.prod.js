var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',

	entry: [path.resolve(__dirname, 'app/index.js')],

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
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
	 module: {
	   loaders: [
       {
         test: /\.styl$/,
         loader: 'style!css!stylus'
       },
       {
         test: /\.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query : {
           presets: ['es2015', 'react']
         }
       }
     ]
	 }
}
