const port = process.env.PORT || 8081,
    child_process = require('child_process'),
    express = require('express'),
    app = express(),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    isWin32 = require('os').platform() === 'win32',
    path = require('path');



/* webpack-dev-middleware */
const webpack = require('webpack'),
webpackDevMiddleware = require('webpack-dev-middleware'),
webpackHotMiddleWare = require('webpack-hot-middleware'),
webpackDevConfig = require('../webpack.babel.config');
const compiler = webpack(webpackDevConfig);
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    lazy: false
}),
hotMiddleware = webpackHotMiddleWare(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);


/* 处理 application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));
/* 处理 application/json */
app.use(bodyParser.json());
/* 开启GZIP */
app.use(compress());







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



app.listen(port, () => {
    console.log(`Server is now running in localhost:${port}`);
    /* 自动打开浏览器 */
    if(isWin32) {
        child_process.exec(`start http://localhost:${port}`);
    }
});
