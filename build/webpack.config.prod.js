const { merge } = require("webpack-merge");
const base = require("./webpack.config.base.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
});
