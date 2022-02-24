const udpServer = require('./data/udpServer');

const config = require('./config');

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World');
});

server.listen(config.PORT, config.HOST_NAME, () => {
    udpServer.bind(config.PORT);
    console.log(`PC2 running at http://localhost:${config.PORT}`);
});