const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"), //this is where the output file is going to be generated
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"], // non changing files are will be here; all non react base files
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    // this section is responsible for giving the rules for the compiler to follow
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
}
