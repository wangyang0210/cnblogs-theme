const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base')


module.exports = {
    mode: 'development',
    entry: '../src/main.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        clean: true
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true
        }),
    ],
    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
