const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');


var APP_DIR = path.resolve(__dirname, 'src');

const VENDOR_LIBS = [
    "react", "react-dom", "react-router-dom", "redux", "react-redux", "@material-ui/core", "axios", "react-geocode", "react-loader-spinner"
]

module.exports = {
    entry: {
        main: APP_DIR + '/index.js',
        vendor: VENDOR_LIBS
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        modules: [ 'node_modules', 'src' ]  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new Dotenv(),
        {
            apply(compiler) {
                compiler.hooks.beforeRun.tapAsync('CustomBeforeRunPlugin', function (compiler, callback) {           // Retained For Debugging
                    //debugger
                    console.dir(compiler.options)
                    callback()
                });
            }
        },
    ],
    module: {
        rules: [
            {
                test: /\.(gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                  limit: false,
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.jsx?/,
                exclude: '/node_modules/',
                use: {
                loader: 'babel-loader',  
                }
            }]
    },
}
