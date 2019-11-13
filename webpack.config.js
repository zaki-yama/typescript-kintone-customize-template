const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    config: "./src/main.tsx"
  },
  output: {
    path: path.join(__dirname, "dest", "js"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
