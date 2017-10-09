const path = require('path')
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();
const indexPath = path.join(__dirname, './dist/index.html');
const publicPath = express.static(path.join(__dirname, '../dist'));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.deployment.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPathdist
    }))
}

app.use('/dist', publicPath);
app.use(express.static('dist'));
require('./server/routes')(app);

app.get('/', function (_, res) { res.sendFile(indexPath) });
// Setup a default catch-all route that sends back a welcome message in JSON format.
/*app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));*/

module.exports = app;