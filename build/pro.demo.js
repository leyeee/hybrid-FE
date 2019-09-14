const webpack = require('webpack');
const webpackConfig = require('../webpack-demos/webpack.config');

webpack(webpackConfig, (err, stats) => {
    if (err) {
        return console.log(err);
    }

    if (stats.hasErrors()) {
        console.log(`Build failed with errors.`);
        return console.log(stats.compilation.errors);
    }
});
