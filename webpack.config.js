const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: ['./assets/js/main.js', './assets/css/style.css'],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
};
