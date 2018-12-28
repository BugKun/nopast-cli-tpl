const fs = require('fs'),
    express = require('express'),
    app = express(),
    compress = require("compression"),
    bodyParser = require('body-parser'),
    path = require('path'),
    options = require("../options.js"),
    isProd = process.env.NODE_ENV === "production",
    port = (isProd)? options.port : options.devPort;





/* 处理 application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({extended: false}));
/* 处理 application/json */
app.use(bodyParser.json());
/* 开启GZIP */
app.use(compress());
/* 阻止窥探服务器构造 */
app.disable("x-powered-by");



app.get("/api/server", require("./services/server"));
app.use("/api/*", (req, res) => res.json({code: false, msg: "API is not found"}));



/* 开启history模式 */
if(isProd){
    /* 挂载静态页面 */
    app.use(express.static(path.join(__dirname, '../static')));

    app.use((req, res) => {
        /* 读取index文件 */
        const index = fs.readFileSync(path.join(__dirname, '../static/build/index.html'), "utf-8");
        res.header('Strict-Transport-Security', 'max-age=31536000; preload');
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.end(index);
    });
}




app.listen(port, () => {
    console.log(`Server is now running in localhost:${port}`);
});