const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    'index': './src/index.js',
    'about': './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      filename: 'index.html',
      template: "./src/index.jsx",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: "My App",
      filename: 'about/index.html',
      template: "./src/about/index.jsx",
      chunks: ['about'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
    ],
  },
};