const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');





module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': 'http://localhost:5005'
        }
    },
});
