const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [new UglifyJsPlugin({
        chunkFilter: (chunk) => {
          if (chunk.name === 'vendor') {
            return false;
          }
          return true;
        },
      })],
    },
    plugins: [
      new ImageminPlugin({
        optipng: {
          optimizationLevel: 9
        },
        pngquant: {
          quality: '95-100'
        },
        jpegtran: { progressive: true },
        disable: process.env.NODE_ENV !== 'production',
      })
    ]
  },
  publicPath: '/'
}