/**
 * Created by JOE on 2017/3/16.
 */
const express = require('express'),
    app = express(),
    proxy = require('http-proxy-middleware'),
    compress = require("compression"),
    path = require('path'),
    options = require("../options.js"),
    port = process.env.PORT || 8081;




/**
 * webpack-dev-middleware
 */
const webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleWare = require("webpack-hot-middleware"),
        webpackDevConfig = require("./webpack.dev.config"),
        compiler = webpack(webpackDevConfig),
        devMiddleware = webpackDevMiddleware(compiler, {
            publicPath: webpackDevConfig.output.publicPath,
            hot: true,
            lazy: false
        }),
        hotMiddleware = webpackHotMiddleWare(compiler);
    app.use(devMiddleware);
    app.use(hotMiddleware);


/* 开启GZIP */
app.use(compress());
/* 阻止窥探服务器构造 */
app.disable("x-powered-by");
/* 挂载静态页面 */
app.use(express.static(path.join(__dirname, '../static')));

/* 代理API接口 */
app.use("/api/*", proxy({ target: `http://localhost:${options.devPort}`, changeOrigin: false }));


/* 开启history模式 */
app.use((req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (error, result) => {
        if (error) {
            throw error;
        } else {
            res.set('Content-Type', 'text/html; charset=utf-8');
            res.end(result);
        }
    });
});


app.listen(port);
console.log(`Server is now running in localhost:${port}`);
