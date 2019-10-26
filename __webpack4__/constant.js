const path = require('path');

// 项目根文件夹
const rootDir = path.join(__dirname, '..')

// htmlWebpackPlugin 生产环境配置
const htmlWebpackPluginMinifyConfig = {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
}

module.exports = {
    rootDir,
    htmlWebpackPluginConfig
}
