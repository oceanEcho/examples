const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = webpack;
const { ModuleFederationPlugin } = webpack.container;
const CopyPlugin = require('copy-webpack-plugin');

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
      name: 'shell',
      filename: 'shell.js',
      shared: {
        react: { requiredVersion: deps.react },
        'react-dom': { requiredVersion: deps['react-dom'] },
        'react-query': {
          requiredVersion: deps['react-query'],
        },
      },
      remotes: {
        widgets: `widgets@http://localhost:3002/widgets.js`,
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'environment.json'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3001,
  },
};
