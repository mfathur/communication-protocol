const config = require('../config');

const mqtt = require('mqtt');

class Emitter {
    constructor() {
        this.client = mqtt.connect(`mqtt://${config.PC3_HOST_NAME}:${config.PC3_PORT}`);
    }

    emitNumber(number) {
        const data = { 'number2': number };

        this.client.publish('random-number', JSON.stringify(data));
    }
}

module.exports = Emitter