require('babel-register');
require('babel-polyfill');
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack');
const config = require('./webpack.config')
const compiler = webpack(config)

const app = express()
app.use(webpackDevMiddleware(compiler, { noInfo: true, stats: 'errors-only', publicPath: '/scripts' }))


app.get('/', (req, res) => {
    // res.set('Content-Type', 'text/html')
    res.send(`
    <!doctype html>
        <html>
            <head>
                <title>Secret Santa</title>
            </head>
            <body>
                <div id="root"></div>
                <script src="./scripts/bundle.js"></script>
            </body>
        </html>
    `)
})

app.listen(8081, () => {
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/')
})
