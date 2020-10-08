const webpack = require('webpack'),
    path = require('path'),
    threadLoader = require('thread-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpackConfig = require('../webpack.config'),
    pkg = require('../package.json');


threadLoader.warmup({}, [
    'babel-loader',
    'style-loader',
    'less-loader',
    'postcss-loader',
    'css-loader',
    'url-loader'
]);


module.exports = {
    mode: 'development',
    entry: {
        [pkg.name]: [
            'babel-polyfill',
            path.resolve(__dirname, './src/index.js'),
            'webpack-hot-middleware/client?reload=true'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ],
        alias: {
            ...webpackConfig.resolve.alias,
            [pkg.name]: path.join(__dirname, '../src/index.js?hot=true'),
            [`${pkg.name}/src`]: path.join(__dirname, '../src')
        },
        extensions: [
            '.vue',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: [
                    'thread-loader',
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
                    'thread-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'thread-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    'thread-loader',
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: `${pkg.name} demo`,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
