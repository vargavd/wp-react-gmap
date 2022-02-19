const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
}
