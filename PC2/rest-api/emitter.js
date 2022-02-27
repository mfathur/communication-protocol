const axios = require('axios');
const { PC3_HOST_NAME, PC3_PORT } = require('../config');

const emitNumberViaRestApi = (number) => {

    const data = { 'number1': number };

    axios.post(`http://${PC3_HOST_NAME}:${PC3_PORT}/`, data)
        .then((response) => {
            console.log(`${response}`);
        }).catch((error) => {
            console.log(`${error}`);
        });
};

module.exports = emitNumberViaRestApi;