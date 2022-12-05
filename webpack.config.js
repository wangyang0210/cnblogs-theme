const path = require('path')
const json5 = require('json5')
const terserPlugin = require("terser-webpack-plugin")
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const fileManagerPlugin = require('filemanager-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'simple-memory.js',
        chunkFilename:'script/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        // new fileManagerPlugin({
        //     events: {
        //         onEnd: {
        //             copy: [
        //                 { source: './src/style/simple-memory.css', destination: './dist/simple-memory.css' },
        //             ],
        //         }
        //     }
        // }),
        // new BundleAnalyzerPlugin({
            // analyzerMode: 'disabled',
            // generateStatsFile: true
        // }),
        new miniCssExtractPlugin({
            filename: 'style/[name].[contenthash:8].css',
            chunkFilename:'style/[name].[contenthash:8].css',
            ignoreOrder: true
        }),
    ],
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                parallel: true,
                extractComments: false,
            }),
            new cssMinimizerPlugin({
                minimizerOptions: {
                    preset: ["default", {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
                parallel: true,
            }),
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.js$|\.html$|\.css$/,
                minRatio: 1,
                threshold: 10240,
                deleteOriginalAssets: false,
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext][query]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'iconfont/[contenthash][ext][query]'
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
        ],
    },
};
