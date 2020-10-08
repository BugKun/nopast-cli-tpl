const webpack = require('webpack'),
    path = require('path'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    threadLoader = require('thread-loader'),
    isProd = process.env.NODE_ENV === 'production',
    isDev = !isProd,
    pkg = require('../package.json');

threadLoader.warmup({}, [
    'vue-loader',
    'babel-loader',
    'vue-style-loader',
    'less-loader',
    'css-loader',
    'postcss-loader',
    'file-loader'
]);


module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, '../src/mainScript.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'build/js/[name].[chunkhash:6].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.less', '.css'], //后缀名自动补全
        modules: [
            path.resolve(__dirname, '../src'),
            'node_modules'
        ],
        alias: {
            Services: path.resolve(__dirname, '../src/services'),
            Utils: path.resolve(__dirname, '../src/utils'),
            Assets: path.resolve(__dirname, '../src/assets'),
            API: path.resolve(__dirname, '../src/api'),
            Components: path.resolve(__dirname, '../src/components'),
            Mixins: path.resolve(__dirname, '../src/mixins'),
            Constant: path.resolve(__dirname, '../src/constant'),
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
                    'css-loader',
                    'postcss-loader',
                ].filter(item => typeof item !== "boolean")
            },
            {
                test: /\.less$/,
                use: [
                    (isProd) && MiniCssExtractPlugin.loader,
                    'thread-loader',
                    (isDev) && 'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDev,
                            paths: [] // 黑魔法，保证thread-loader能正常运行
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
                test: /\.(png|jpe?g|gif|svg|woff)$/,
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
        runtimeChunk: {
            name: "manifest"
        },
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
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
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../static'), to: path.resolve(__dirname, '../dist') }
        ]),
    ]
};
