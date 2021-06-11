const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  const plugins = [
    new MiniCssExtractPlugin({
      filename: `[name]${isProd ? '.min' : ''}.css`
    }),
  ]

  return {
    entry: {
      'svg-paper': [
        './scss/svg-paper.scss', // before js
        './js/src/svg-paper.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `[name]${isProd ? '.min' : ''}.js`,
      library: 'SvgPaper',
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'autoprefixer',
                  ],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: plugins,
    devtool: 'inline-source-map',
  }
}
