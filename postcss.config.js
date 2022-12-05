module.exports = {
    plugins: [
        require('cssnano')({
            preset: ['advanced', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }),
    ],
};
