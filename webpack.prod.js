const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, './build');


module.exports = merge(common, {
    mode: "production",
    output: {
        path: BUILD_DIR,
        filename: '[name].[contenthash].bundle.js',
        publicPath: '',
    },
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`
          new CssMinimizerPlugin(),
        ],
      },
});
