const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [new UglifyJsPlugin({})],
    },
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
      })
    ]
  },
  publicPath: '/'
}