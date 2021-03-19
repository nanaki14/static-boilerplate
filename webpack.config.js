const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { htmlFiles } = require('./config/files.js')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: path.resolve(__dirname, './src/assets/js/index.ts'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: 'js/main.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...htmlFiles().map(
        (page) =>
          new HtmlWebpackPlugin({
            template: page.path,
            filename: page.filename,
          })
      ),
      new CopyWebpackPlugin(
        {
          patterns: [
            {
              context: 'public',
              from: '**/*',
              to: path.resolve(__dirname, 'dist'),
            },
          ],
        },
        { copyUnmodified: true }
      ),
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
      }),
    ],
    devtool: isProduction === 'production' ? undefined : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: !isProduction,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'autoprefixer',
                      {
                        grid: true,
                      },
                    ],
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
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
      port: 58080,
    },
  }
}
