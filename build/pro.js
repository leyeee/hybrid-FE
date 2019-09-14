const webpack = require('webpack');
const wbepackConfig = require('../webpack-demos/webpack.config');

webpack(webpackConfig, (err, stats) => {
    if (err) {
        return console.log(err);
    }
});
