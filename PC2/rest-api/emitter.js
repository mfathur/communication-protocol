const axios = require('axios');
const config = require('../config');

const emitNumberViaRestApi = (number) => {

    const data = { 'number1': number };

    axios.post(`http://${config.PC3_HOST_NAME}:${config.PC3_PORT}/`, data)
        .then((response) => {
            console.log('data  sent');
            console.log(`${response}`);
        }).catch((error) => {
            console.log(`${error}`);
        });
};

module.exports = emitNumberViaRestApi;