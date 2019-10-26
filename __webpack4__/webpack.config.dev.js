
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
