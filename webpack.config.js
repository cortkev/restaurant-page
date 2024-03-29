const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      inject: false,
      template: './dist/index.html',
      filename: 'index.html',
      minify: false,
      
    }),
  ],
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    ],
  },
};