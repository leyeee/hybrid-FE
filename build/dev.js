const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const 

// create compiler
const compiler = webpack(webpackConfig);

// create server
const server = new WebpackDevServer(
    compiler,
    Object.assign(
        {
            clientLogLevel: 'silent',
            historyApiFallback: {
                disableDotRule: true,
                rewrites: genHistoryApiFallbackRewrites(
                    options.publicPath,
                    options.pages
                )
            },
            contentBase: api.resolve('public'),
            watchContentBase: !isProduction,
            hot: !isProduction,
            quiet: true,
            compress: isProduction,
            publicPath: options.publicPath,
            overlay: isProduction // TODO disable this
                ? false
                : { warnings: false, errors: true }
        },
        projectDevServerOptions,
        {
            https: useHttps,
            proxy: proxySettings,
            // eslint-disable-next-line no-shadow
            before(app, server) {
                // launch editor support.
                // this works with vue-devtools & @vue/cli-overlay
                app.use(
                    '/__open-in-editor',
                    launchEditorMiddleware(() =>
                        console.log(
                            `To specify an editor, specify the EDITOR env variable or ` +
                                `add "editor" field to your Vue project config.\n`
                        )
                    )
                );
                // allow other plugins to register middlewares, e.g. PWA
                api.service.devServerConfigFns.forEach(fn => fn(app, server));
                // apply in project middlewares
                projectDevServerOptions.before &&
                    projectDevServerOptions.before(app, server);
            },
            // avoid opening browser
            open: false
        }
    )
);

server.listen(port, host, err => {
    if (err) {
        reject(err);
    }
});
