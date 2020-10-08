const express = require('express'),
    app = express(),
    proxy = require('http-proxy-middleware'),
    compress = require("compression"),
    child_process = require('child_process'),
    fs = require('fs'),
    path = require('path'),
    JSON5 = require('json5'),
    portfinder = require('portfinder'),
    isWin32 = require('os').platform() === 'win32',
    options = require("../options.js"),
    proxyConfigJsonPath = path.resolve('conf/proxy.config.json5'),
    port = process.env.PORT || 8081;


/* webpack-dev-middleware */
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
app.use(express.static(compiler.outputPath));

/* 代理API接口 */
let proxyList = []

function parseProxyConfig() {
    try {
        const proxyListOpt = JSON5.parse(
            String(
                fs
                .readFileSync(proxyConfigJsonPath)
            )
            .replace(/{mockServerPort}/g, options.devPort)
        )
        proxyList = proxyListOpt.map(([path, opt]) => {
            return [
                path,
                proxy(path, opt)
            ]
        })
    } catch(e) {
        console.log(e)
    }
}
parseProxyConfig()

fs.watch(proxyConfigJsonPath, (eventType) => {
    console.log('proxy config => ' + eventType)
    if(eventType === 'change') {
        parseProxyConfig()
    }
})

app.use('*', (req, res, next) => {
    for(const [path, proxyInstance] of proxyList) {
        if(req.baseUrl.match(path)) {
            return proxyInstance(req, res, next)
        }
    }
    next()
})

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