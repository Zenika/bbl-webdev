const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dev')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev', ),
        compress: true,
        port: 9000
    }
}