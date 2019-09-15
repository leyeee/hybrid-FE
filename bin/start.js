const path = require('path');
const fs = require('fs');
const util = require('util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../build/wp.dev');

// create compiler
const compiler = webpack(webpackConfig);

// WebpackDevServer.addDevServerEntrypoints()

// create server
const server = new WebpackDevServer(compiler, {
    clientLogLevel: 'info',
    historyApiFallback: false,
    contentBase: path.resolve(__dirname, '../dist/m-reader'),
    watchContentBase: true,
    hot: true,
    quiet: true,
    compress: false,
    open: false,
    publicPath: path.resolve(__dirname, '../dist/m-reader'),
    overlay: true,
    writeToDisk: true
});

fs.writeFile('build/config.json', util.inspect(webpackConfig, true, 10), err =>
    console.log(err)
);

server.listen(8080, '127.0.0.1', err => {
    if (err) {
        console.log(err);
    }
});
