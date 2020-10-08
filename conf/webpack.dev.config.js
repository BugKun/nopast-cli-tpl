﻿const path = require('path'),
    webpack = require('webpack'),
    webpackBaseConfig = require('./webpack.base.config');


module.exports = {
    mode: "development",
    entry: {
        ...webpackBaseConfig.entry,
        app: [
            path.resolve(__dirname, '../src/helper/index.js'),
            ...webpackBaseConfig.entry.app, 
            "webpack-hot-middleware/client?reload=true"
        ]
    },
    output: {
        ...webpackBaseConfig.output,
        filename: '[name].[hash:8].js'
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