

module.exports = {
    resolve: {
        // webpack 自动解析确定的扩展 默认值为：['.wasm', '.mjs', '.js', '.json']
        extensions: ['.wasm', '.mjs', '.js', '.json'],
        // 针对 npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ['jsnext:main', 'browser', 'module', 'main']
    }
}
