const webpack = require('webpack')

module.exports = {
  entry: "./src/sketch.js",
  output: {
      path: __dirname,
      filename: "./public/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};