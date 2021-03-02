const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyFilePlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = (argv.mode === 'production');

  return {
    entry: path.resolve(__dirname, './src/assets/js/index.ts'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path:  __dirname + '/dist',
      filename: 'main.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "My App",
        filename: 'index.html',
        template: "./src/pages/index.tsx",
      }),
      new HtmlWebpackPlugin({
        title: "My App",
        filename: 'about/index.html',
        template: "./src/pages/about/index.tsx",
      }),
      new CopyFilePlugin(
        {
          patterns: [
            {
                context: "public",
                from: "**/*",
                to: path.resolve(__dirname, "dist")
            }
        ]},
        { copyUnmodified: true }
      ),
    ],
    devtool: isProduction === 'production' ? undefined : 'eval-source-map',
    module: {
      rules: [
        {
          test: [/\.ts$/, /\.tsx$/, /\.js$/],
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      host: '0.0.0.0',
      port: 58080
    }
  }
};