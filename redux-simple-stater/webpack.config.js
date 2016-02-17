var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config =  {
  devtool: 'cheap-eval-source-map',

  entry : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.js')
  ],

  output : {
    path : path.resolve(__dirname, 'build'),
    filename : 'bundle.js'
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
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets : ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ]
  },

  devServer: {
    contentBase: 'build',
    hot : true
  }
}

module.exports = config
