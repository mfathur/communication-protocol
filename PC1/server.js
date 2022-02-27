const config = require('./config');

const http = require('http');

const udpClient = require('./udpClient');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, this is PC1');
});

server.listen(config.PORT, config.HOST_NAME, () => {
    udpClient.bind(config.PORT);
    console.log(`PC1 running at http://localhost:${config.PORT}`);
});