// webpack.config.js
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');

module.exports = ({
  optimization: {
    minimizer: [new UglifyJsPlugin({
    uglifyOptions: {
          warnings: false,
          compress: {},
    },
  })
  ]
  },
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
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        options: {
          presets: ['es2015', 'react'],
        }
      },
       {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          'css-loader',
        ],
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
    new MiniCssExtractPlugin({
      filename: 'style.css'
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
