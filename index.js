require('babel-register');
require('babel-polyfill');
const http = require("http");
const fs = require("fs");

const webpack = require('webpack');
const config = require('./webpack.config')
const compiler = webpack({
    ...config,
    plugins: [],
})

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    const stream = fs.createReadStream("./secretSantaForm.html");
    stream.pipe(response);

    // Send the response body as "Hello World"

    stream.on('end', function(){
        response.end();
    })
 }).listen(8081);

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
