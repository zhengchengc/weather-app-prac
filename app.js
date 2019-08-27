const request = require("request");
const geocode = require('./utils/geocode.js');

geocode('Gaochun', (err, data) => {
    console.log('Error', err);
    console.log('Data', data);
});