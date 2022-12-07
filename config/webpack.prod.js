const path = require('path')


module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'simple-memory.js',
        chunkFilename:'script/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
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
        minimizer: [],
    },
};
