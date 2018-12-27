const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    threadLoader = require('thread-loader');



threadLoader.warmup({}, [
    'babel-loader',
    'style-loader',
    'css-loader',
    'sass-loader',
    'file-loader'
]);

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src')]
    },
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: 'build/[name].[chunkhash:6].js',
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
                test: /\.jsx|.js|.mjs$/,
                exclude: /node_modules/,
                use:[
                    "thread-loader",
                    "babel-loader?cacheDirectory=true"
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
