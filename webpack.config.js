const path = require("path");

module.exports = {
  entry: "./client/App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
