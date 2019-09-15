const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
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
    plugins: [
        new ProgressBarPlugin() //打包进度条
    ]
};
