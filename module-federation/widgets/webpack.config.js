const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = webpack;
const { ModuleFederationPlugin } = webpack.container;

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'none',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ModuleFederationPlugin({
      name: 'widgets',
      filename: 'widgets.js',
      shared: {
        react: { requiredVersion: deps.react },
        'react-dom': { requiredVersion: deps['react-dom'] },
        'react-query': {
          requiredVersion: deps['react-query'],
        },
      },
      exposes: {
        './Todo': './src/App',
        './Gallery': './src/pages/Gallery/Gallery',
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3002,
  },
};
