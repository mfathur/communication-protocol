const { BROKER_HOST_NAME, BROKER_PORT } = require('../config');

const mqtt = require('mqtt');

class Emitter {
    constructor() {
        this.client = mqtt.connect(`mqtt://${BROKER_HOST_NAME}:${BROKER_PORT}`);
    }

    emitNumber(number) {
        const data = { 'number2': number };

        this.client.publish('data/random-number', JSON.stringify(data));
    }
}

module.exports = Emitter