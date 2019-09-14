const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// vue-loader是vue的loader,vue文件是一个SFC类文件，vue-loader会将其解析成为三部分，template部分用于渲染视图，js，style。
// vue-style-loader用于处理vue-loader解析后的style.
// vue-template-compiler用于处理解析解析后的template

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        name: 'images/[name].[ext]?[hash]'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js'], //后缀名自动补全
        alias: {
            //别名
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html', //文件名
            template: './src/index.html' //模板文件
        }),
        new ProgressBarPlugin() //打包进度条
    ]
};
