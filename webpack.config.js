const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 mode: 'production',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'app.bundle.js'
 },

 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
     {
      loader: 'babel-loader'
     }
    ]
   },

   {
    test: /\.css$/,
    use: [
     MiniCssExtractPlugin.loader,
     'css-loader'
    ],
   },

   {
    test: /\.html$/,
    use: [
     {
      loader: 'html-loader'
     }
    ],
   },

  ]
 },

 plugins: [
  new HtmlWebpackPlugin({
   template: './src/index.html'
  }),
  new MiniCssExtractPlugin()
 ],


} 