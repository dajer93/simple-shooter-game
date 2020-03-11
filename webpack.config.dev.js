const merge = require('webpack-merge')
// const LiveReloadPlugin = require('webpack-livereload-plugin')
const path = require('path');


// let liveReloadOptions = {
//   protocol: "http",
//   port: 3002,
//   hostname: "localhost",
// }

module.exports = merge(require('./webpack.config.js'), {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "./public",
    hot: true
},
  // plugins: [
  //   new LiveReloadPlugin(liveReloadOptions)
  // ]
});