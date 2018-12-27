const webpack = require('webpack'),
    webpackBaseConfig = require('./webpack.base.config.js');


module.exports = {
    mode: "development",
    entry: {
        ...webpackBaseConfig.entry,
        app: [...webpackBaseConfig.entry.app, "webpack-hot-middleware/client?reload=true"]
    },
    output: {
        ...webpackBaseConfig.output,
        filename: '[name].[hash:8].js' //输入文件
    },
    resolve: webpackBaseConfig.resolve,
    devtool: "source-map",
    module: webpackBaseConfig.module,
    optimization: webpackBaseConfig.optimization,
    plugins: [
        ...webpackBaseConfig.plugins,
        new webpack.HotModuleReplacementPlugin()
    ]
};