const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map', // 配置source-map
    entry: {
        main: path.resolve(__dirname, './main.js')
    },
    output: {
        filename: '[name]/main.[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './main/index.html', //文件名
            minify: true,
            title: 'HTMLWEBPACK',
            base: ''
        }),

        new CleanWebpackPlugin(),
        new ProgressBarPlugin(), //打包进度条
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name]/main.[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
};
