const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "../dist"),
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js"],
    alias: {
      "~src": join(__dirname, "../src"),
      "~utils": join(__dirname, "../src/utils"),
      "~components": join(__dirname, "../src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
