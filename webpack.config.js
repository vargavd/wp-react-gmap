
require("dotenv").config({});

const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(tsx|ts|js)$/,
        loader: "string-replace-loader",
        options: {
          search: /GOOGLE_MAPS_API_KEY/g,
          replace: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};