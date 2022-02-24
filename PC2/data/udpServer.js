const dgram = require('dgram');

const udpServer = dgram.createSocket('udp4');

const emitNumberViaRestApi = require('./../rest-api/emitter');

const _mqttEmitter = require('./../mqtt/emitter');
const mqttEmitter = new _mqttEmitter();

udpServer.on('error', (error) => {
    console.log(`error: ${error.stack}`);
    udpServer.close();
});

udpServer.on('close', () => {
    console.log('udp server is closed');
});

udpServer.on('listening', () => {
    const address = udpServer.address();
    const port = address.port;

    console.log(`UDP Server is listening at port: ${port}`);
});

udpServer.on('message', (msg, rinfo) => {
    console.log(`UDP Server got data: ${msg} from ${rinfo.address}:${rinfo.port}`);
    const data = JSON.parse(msg);

    emitNumberViaRestApi(data['number1']);
    mqttEmitter.emitNumber(data['number2']);
});

module.exports = udpServer;