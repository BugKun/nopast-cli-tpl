const path = require('path'),
    webpackBaseConfig = require('./webpack.base.config'),
    CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "production",
    entry: webpackBaseConfig.entry,
    output: webpackBaseConfig.output,
    resolve: webpackBaseConfig.resolve,
    module: webpackBaseConfig.module,
    optimization: webpackBaseConfig.optimization,
    plugins: [
        ...webpackBaseConfig.plugins,
        new CleanWebpackPlugin(
            ["build"], {
                root: path.resolve(__dirname, '../static/'),
                　　　　　　　　　　 //根目录
                verbose: true,
                　　　　　　　　　　 //开启在控制台输出信息
                dry: false　　　　　　　　　　 //启用删除文件
            })
    ]
};