const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let resolve = dir => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  entry: {
    homejs: resolve("src/index.js")
  },
  output: {
    path: resolve("dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude:　/(node_modules|bower_components)/,
        include: [resolve("src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: []
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 8,
              name: "img/[name].[hash:7].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    open: true,
    port: 8080,
    stats: "errors-only",
    quiet: true
  },
  devtool: "cheap-module-eval-source-map"
};
