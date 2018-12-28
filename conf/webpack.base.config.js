const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    threadLoader = require('thread-loader'),
    pkg = require('../package.json');


threadLoader.warmup({}, [
    'style-loader',
    'sass-loader',
    'babel-loader',
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
        filename: 'build/[name].[chunkhash:6].js', 
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
                            cssModules: {
                                minimize: true
                            },
                            threadMode: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'thread-loader',
                    'style-loader',
                    { 
                        loader: 'css-loader',
                        options: {
                            minimize: true 
                        } 
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'thread-loader',
                    'style-loader',
                    { 
                        loader: 'css-loader',
                        options: {
                            minimize: true 
                        } 
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            outputStyle: 'compressed'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'thread-loader',
                    'babel-loader?cacheDirectory=true'
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
        })
    ]
};
