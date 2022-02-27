const { SOCKET_SERVER_HOST_NAME, SOCKET_SERVER_PORT, HOST_NAME, PORT } = require('./config');

const mqttClient = require('./mqttReceiver');

const express = require('express');
const app = express();
const server = require('http').Server(app);

const io = require("socket.io-client");

const socket = io(`ws://${SOCKET_SERVER_HOST_NAME}:${SOCKET_SERVER_PORT}`);

const path = require('path');

socket.on('connect', socketOnConnect);
socket.on('message', socketOnMessageReceived);
socket.on('connection', (socket) => {

    console.log('web socket is running');

    socket.on('message', (data) => {
        console.log(data);
    });
});

function socketOnConnect() {
    console.log(`Connected to web socket`);
}

function socketOnMessageReceived(data) {
    const value = JSON.parse(data);
    console.log(value);
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(PORT, HOST_NAME, () => {
    console.log(`PC4 running at http://${HOST_NAME}:${PORT}`);
});






