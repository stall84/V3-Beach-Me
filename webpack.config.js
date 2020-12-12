const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': 'http://localhost:5005'
        }
    },
    watch: true,
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?/,
                loader: 'babel-loader',  
            }]
    },
    plugins: [
        new Dotenv()
    ]
}
