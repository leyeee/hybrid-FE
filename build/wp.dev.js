const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const baseConfig = require('./wp.base');
const vueConfig = require('./wp.vue');
const webpack = require('webpack');

// module.exports = merge(base, {
//     mode: 'development',
//     devtool: 'source-map',
//     devServer: {
//         compress: true, //启用压缩
//         port: 1207, //端口
//         open: false, //自动打开浏览器
//         hot: true
//     },
//     plugins: [new webpack.HotModuleReplacementPlugin()]
// });

const devConfig = {
    mode: 'development',
    devtool: 'cheap-source-map', // 配置source-map
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

const appPath = path.resolve(__dirname, '../apps');
const dirs = fs.readdirSync(appPath);

const configMap = {
    base: baseConfig,
    vue: vueConfig
};
const wpConfigs = [];
dirs.forEach(function(dir) {
    let appConfig;
    const appConfigPath = path.resolve(`${appPath}/${dir}/app.config.js`);
    if (fs.existsSync(appConfigPath)) {
        appConfig = require(appConfigPath);
        const config = merge(
            configMap[appConfig.webpackType] || baseConfig,
            devConfig,
            appConfig.webpackConfig
        );
        wpConfigs.push(config);
    }
});

module.exports = wpConfigs;
