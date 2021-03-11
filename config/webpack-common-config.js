// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require("path");

const paths = require("./paths");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new Dotenv()
  ],
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js", ".jsx", ".scss"],
    modules: ["node_modules"],
    // Aliases help with shortening relative paths
    // 'Components/button' === '../../../components/button'
    alias: {
      SrcRoot: paths.appSrc,
      Components: path.resolve(paths.appSrc, "components"),
      Containers: path.resolve(paths.appSrc, "containers"),
      Pages: path.resolve(paths.appSrc, "pages"),
      Redux: path.resolve(paths.appSrc, "redux"),
      Reducers: path.resolve(paths.appSrc, "redux", "reducers"),
      Actions: path.resolve(paths.appSrc, "redux", "actions"),
      Utils: path.resolve(paths.appSrc, "utils"),
      Services: path.resolve(paths.appSrc, "services"),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"]
      }
    ]
  }
};
