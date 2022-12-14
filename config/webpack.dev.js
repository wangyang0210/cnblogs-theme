const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig= require('./webpack.base.js')

let webpackDevelopmentConfig = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../public'),
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        compress: true,
        port: 9000,
    }
};

module.exports = webpackMerge.merge(webpackBaseConfig, webpackDevelopmentConfig)
