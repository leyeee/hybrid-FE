const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirname = 'm-reader';

module.exports = {
    name: 'EPUB电子书阅读器',
    dirname,
    webpackType: 'vue',
    webpackConfig: {
        entry: {
            main: path.resolve(__dirname, './src/main.js')
        },
        output: {
            filename: '[name].[hash:8].js',
            path: path.resolve(__dirname, `../../dist/${dirname}`)
            // publicPath: '/m-reader/'
        },
        resolve: {
            // extensions: ['.js'], //后缀名自动补全
            alias: {
                //别名
                '@': path.resolve(__dirname, './src')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                base: '/m-reader/'
            })
        ]
    }
};
