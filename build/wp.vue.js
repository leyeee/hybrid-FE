// vue-loader是vue的loader,vue文件是一个SFC类文件，vue-loader会将其解析成为三部分，template部分用于渲染视图，js，style。
// vue-style-loader用于处理vue-loader解析后的style.
// vue-template-compiler用于处理解析解析后的template

const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const baseConfig = require('./wp.base');

const vueConfig = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'vue-style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            //别名
            vue$: 'vue/dist/vue.esm.js'
            // '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new VueLoaderPlugin()
        // new HtmlWebpackPlugin({
        //     filename: './index.html', //文件名
        //     template: path.resolve(__dirname, './index.html') //模板文件
        // })
    ]
};

module.exports = merge(baseConfig, vueConfig);
