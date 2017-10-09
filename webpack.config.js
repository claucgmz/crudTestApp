const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/src/styles/',
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.json?$/,
        loader: 'json',
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_HOST: JSON.stringify('http://localhost:8000'),
      },
    }),
  ],
};
