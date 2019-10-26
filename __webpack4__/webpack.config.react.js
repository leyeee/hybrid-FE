

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [];
                            }
                        }
                    },
                    'less-loader'
                ]
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
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
}
