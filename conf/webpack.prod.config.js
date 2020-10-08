const path = require('path'),
    webpackBaseConfig = require('./webpack.base.config'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    TerserPlugin = require('terser-webpack-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: "production",
    entry: webpackBaseConfig.entry,
    output: webpackBaseConfig.output,
    resolve: webpackBaseConfig.resolve,
    module: webpackBaseConfig.module,
    optimization: {
        ...webpackBaseConfig.optimization,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        ...webpackBaseConfig.plugins,
        new MiniCssExtractPlugin({
            filename: 'build/css/[name].[hash:6].css',
            chunkFilename: 'build/css/[name].[hash:6].css',
        }),
        new CleanWebpackPlugin()
    ]
};