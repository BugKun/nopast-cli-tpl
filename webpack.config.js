const path = require('path'),
    threadLoader = require('thread-loader'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    pkg = require('./package.json');



threadLoader.warmup({}, [
    'babel-loader',
    'style-loader',
    'sass-loader',
    'css-loader',
    'url-loader'
]);

module.exports = {
    mode: 'production',
    entry: {
        [pkg.name]: [path.resolve(__dirname, './src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: ['ReactDom'],
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types'
        }
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        alias: {
            Utils: path.resolve(__dirname, './src/utils'),
            Services: path.resolve(__dirname, './src/services'),
            Icons: path.resolve(__dirname, './src/icons'),
        }
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
                    MiniCssExtractPlugin.loader,
                    'thread-loader',
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
                    MiniCssExtractPlugin.loader,
                    'thread-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed'
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
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new CleanWebpackPlugin(
            ["dist"],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    ]
};
