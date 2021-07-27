const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: path.resolve(__dirname, './src/assets/js/index.ts'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: './src/pages/index.tsx',
      }),
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'about/index.html',
        template: './src/pages/about/index.tsx',
      }),
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
        filename: 'style.css',
      }),
    ],
    devtool: isProduction ? undefined : 'eval-source-map',
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
