const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack-demos/webpack.dev.config');

// create compiler
const compiler = webpack(webpackConfig);

// WebpackDevServer.addDevServerEntrypoints()

// create server
const server = new WebpackDevServer(compiler, {
    clientLogLevel: 'silent',
    historyApiFallback: true,
    contentBase: './public',
    watchContentBase: true,
    hot: true,
    quiet: true,
    compress: false,
    open: false,
    // publicPath: options.publicPath,
    overlay: true
});

server.listen(8080, '127.0.0.1', err => {
    if (err) {
        console.log(err);
    }
});
