// webpack.config.js
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

module.exports = ({
  entry: [
    './app/index.js',
    './app/styles/styles.scss'
  ],
  output: {
    path: './public/dist/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      'appConfig': '../../env/prod-config.js'
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: extractCss ? [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ] : ['style-loader', ...cssRules]
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
          loader: 'file'
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new MiniCssExtractPlugin('style.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        'Map': 'core-js/fn/map',
        'Symbol': 'core-js/fn/symbol',
        'Promise': 'core-js/fn/promise',
        'Object.assign': 'core-js/fn/object/assign'
    })
  ],
  watch: false,
  devtool: 'source-map',
});
