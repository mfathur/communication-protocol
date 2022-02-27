const { HOST_NAME, PORT, PC4_HOST_NAME, PC4_PORT } = require('./config');

const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);

const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: `http://${PC4_HOST_NAME}:${PC4_PORT}`
    }
});

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const { number1 } = req.body;
    console.log(`number1: ${number1}`);

    io.emit('random-number', JSON.stringify({ "number1": number1 }));
});

io.on('connection', async (socket) => {
    console.log('web socket is running');

    socket.on('message', (data) => {
        console.log(data);
    });
});

server.listen(PORT, () => {
    console.log(`PC3 running at ${HOST_NAME}:${PORT}`);
});