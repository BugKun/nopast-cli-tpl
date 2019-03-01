const port = process.env.PORT || 8081,
    child_process = require('child_process'),
    express = require('express'),
    app = express(),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    portfinder = require('portfinder'),
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


portfinder.basePort = port;
portfinder.getPortPromise()
    .then(newPort => {
        if (port !== newPort) {
            console.log(`Port ${port} is occupied, open new port ${newPort}`)
        }
        app.listen(newPort, () => {
            console.log(`Server is now running in localhost:${newPort}`);
            if(isWin32) {
                /* 自动打开浏览器 */
                child_process.exec(`start http://localhost:${newPort}`);
            }
        });
    }).catch(error => {
        console.log('Did not find the free port, please open the task manager to kill the process who use this port and then try again', error)
    })