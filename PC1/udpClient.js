const dgram = require('dgram');

const { PC2_HOST_NAME, PC2_PORT } = require('./config');

const generateRandomNumber = require('./helper');

const client = dgram.createSocket('udp4');

client.on('listening', () => {

    setInterval(() => {
        const data = {
            "number1": generateRandomNumber(),
            "number2": generateRandomNumber()
        };
        const message = JSON.stringify(data);

        client.send(message, 0, message.length, PC2_PORT, PC2_HOST_NAME, (err, bytes) => {
            if (err) throw err;
            console.log(`UDP message ${message} sent to ${PC2_HOST_NAME}:${PC2_PORT}`);
        });
    }, 500);
});

module.exports = client;






