const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    stats: './src/statistics.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  },

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },

};
