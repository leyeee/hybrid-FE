const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        // extensions: ['.js', '.vue', '.scss', '.css'], //后缀名自动补全
        alias: {
            //别名
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html', //文件名
            template: './src/index.html' //模板文件
        })
    ]
};
