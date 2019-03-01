const path = require('path'),
    TerserPlugin = require('terser-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    threadLoader = require('thread-loader'),
    pkg = require('./package.json');


threadLoader.warmup({}, [
  'babel-loader'
]);


module.exports = {
    mode: "production",
    entry: {
        [pkg.name]: path.resolve(__dirname, './src')
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
        publicPath: '/'
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
        modules: [
            path.resolve(__dirname, './src'), 
            'node_modules'
        ],
        alias: {
            Images: path.join(__dirname, './src/images'),
            Utils: path.join(__dirname, './src/utils'),
            Services: path.join(__dirname, './src/services')
        },
        extensions: [
            '.jsx',
            '.js'
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|mjs)$/,
                exclude: /node_modules/,
                use: [
                    "thread-loader",
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
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
