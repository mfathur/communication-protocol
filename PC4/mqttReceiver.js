const { BROKER_HOST_NAME, BROKER_PORT } = require('./config');

const mqtt = require('mqtt');

const connectUrl = `mqtt://${BROKER_HOST_NAME}:${BROKER_PORT}`;

const client = mqtt.connect(connectUrl);

const topic = 'data/random-number';

client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString());
});

module.exports = client;

