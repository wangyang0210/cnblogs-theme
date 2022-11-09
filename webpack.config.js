const path = require('path')
const json5 = require('json5')
const terserPlugin = require("terser-webpack-plugin")
const fileManagerPlugin = require('filemanager-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * 随机字符串
 * @param len
 * @returns {string}
 */
function randomString(len) {
    len = len || 32;
    let $chars = 'abcdefhijkmnprstwxyz23456789';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'simple-memory.js',
        chunkFilename:'script/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
        }),
        new fileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './dist/simple-memory.js', destination: './dist/simple-memory.' + randomString(8) + '.js' },
                    ],
                }
            }
        }),
        new miniCssExtractPlugin({
            filename: 'style/[name].[contenthash:8].css',
            chunkFilename:'style/[name].[contenthash:8].css',
            ignoreOrder: true

        }),
    ],
    // devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                extractComments: false,
            }),
            new cssMinimizerPlugin(),
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
