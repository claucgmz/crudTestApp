const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })*/
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader'
        }]
    },
};