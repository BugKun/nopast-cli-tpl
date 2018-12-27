const webpack = require("webpack"),
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
    mode: "development",
    entry: {
        app: [
            path.resolve(__dirname, './src'), 
            "webpack-hot-middleware/client?reload=true"
        ]
    },
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: 'build/[name].[hash:6].js',
        publicPath: '/' 
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './src'), 
            'node_modules'
        ],
        alias: {
            Images: path.join(__dirname, './src/images'),
            Utils: path.join(__dirname, './src/utils'),
            Services: path.join(__dirname, './src/services'),
            [`${pkg.name}`]: path.join(__dirname, '../src/index.js'),
            [`${pkg.name}/src`]: path.join(__dirname, '../src')
        },
        extensions: [
            '.jsx',
            '.js'
        ]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "thread-loader",
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
                    "thread-loader",
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 
                    'sass-loader?outputStyle=compressed'
                ]
            },
            {
                test: /\.jsx|.js|.mjs$/,
                exclude: /node_modules/,
                use: [
                    "thread-loader",
                    "babel-loader?cacheDirectory=true"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    "thread-loader",
                    'url-loader'
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
            template: path.resolve(__dirname, "./src/index.html"),
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true,
                minifyJS: true,
                removeScriptTypeAttributes: true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
