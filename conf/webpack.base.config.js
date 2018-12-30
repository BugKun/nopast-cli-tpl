const webpack = require('webpack'),
    path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    threadLoader = require('thread-loader'),
    isProd = process.env.NODE_ENV === 'production',
    isDev = !isProd,
    pkg = require('../package.json');

    console.log([MiniCssExtractPlugin.loader]);

threadLoader.warmup({}, [
    'vue-loader',
    'babel-loader',
    'vue-style-loader',
    'sass-loader',
    'css-loader',
    'file-loader'
]);
      

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/mainScript.js')
        ]
    }, 
    output: {
        path: path.resolve(__dirname, '../static'), 
        filename: 'build/js/[name].[chunkhash:6].js', 
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'), 
            'node_modules'
        ],
        alias: {
            Services: path.resolve(__dirname, '../src/services'),
            Utils: path.resolve(__dirname, '../src/utils'),
            Assets: path.resolve(__dirname, '../src/assets'),
            API: path.resolve(__dirname, '../src/api'),
            Components: path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'thread-loader',
                    {
                        loader: 'vue-loader',
                        options: {
                            threadMode: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    (isProd) && MiniCssExtractPlugin.loader,
                    'thread-loader',
                    (isDev) && 'vue-style-loader',
                    'css-loader'
                ].filter(item => typeof item !== "boolean")
            },
            {
                test: /\.scss$/,
                use: [
                    (isProd) && MiniCssExtractPlugin.loader,
                    'thread-loader',
                    (isDev) && 'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ].filter(item => typeof item !== "boolean")
            },
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
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
                    name: 'vendor',
                    chunks: 'initial',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            title: `${pkg.name} demo`,
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true,
                minifyJS: true,
                removeScriptTypeAttributes: true
            }
        }),
        new VueLoaderPlugin()
    ]
};
