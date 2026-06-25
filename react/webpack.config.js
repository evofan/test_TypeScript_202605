const { resolve } = require("path");

module.exports = {
  mode: "development",
  // mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",
  entry: resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
