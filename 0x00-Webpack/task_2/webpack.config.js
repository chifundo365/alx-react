const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  performance: {    
    maxAssetSize: 512000,       // 500 KiB
    maxEntrypointSize: 512000,  // 500 KiB
    hints: 'warning',  // This is the default; you can set it to 'error' to break on size limit
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 4000 * 1024
          }
        },

        generator: {
          filename: "assets/images/[hash][ext][query]"
        }
      }
    ]
  }
};
