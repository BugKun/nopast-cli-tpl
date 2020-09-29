﻿const path = require('path'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    threadLoader = require('thread-loader'),
    isProd = process.env.NODE_ENV === 'production',
    isDev = !isProd,
    pkg = require('../package.json');



threadLoader.warmup({}, [
    'babel-loader',
    'style-loader',
    'css-loader',
    'less-loader',
    'file-loader'
]);

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src')]
    },
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: 'build/js/[name].[chunkhash:6].js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        alias: {
            Assets: path.resolve(__dirname, "../src/assets"),
            Utils: path.resolve(__dirname, "../src/utils"),
            Services: path.resolve(__dirname, "../src/services"),
            Components: path.resolve(__dirname, "../src/components"),
            API: path.resolve(__dirname, "../src/api"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|mjs)$/,
                exclude: /node_modules/,
                use:[
                    "thread-loader",
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    (isProd) && MiniCssExtractPlugin.loader,
                    'thread-loader',
                    (isDev) && 'style-loader',
                    'css-loader'
                ].filter(item => typeof item !== "boolean")
            },
            {
                test: /\.less$/,
                use: [
                    (isProd) && MiniCssExtractPlugin.loader,
                    'thread-loader',
                    (isDev) && 'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDev,
                            paths: [] // 黑魔法，保证thread-loader能正常运行
                        }
                    },
                ].filter(item => typeof item !== "boolean")
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: "vendor",
                    chunks: "initial",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            title: `${pkg.name} demo`,
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true,
                minifyJS: true,
                removeScriptTypeAttributes: true
            }
        })
    ]
};
