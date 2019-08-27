const request = require('request');

// const url = 'https://api.darksky.net/forecast/bb77ab25f7ec9102c1e6e6a8e24ee1c2/31.3100,118.9730?units=si';

// request({ url: url, json: true }, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to weahter service!');
//     } else if (res.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(res.body.daily.data[0].summary);
//         console.log('It is currently ' + res.body.currently.temperature + ' degrees out.');
//         console.log('There is ' + res.body.currently.precipProbability + 'chance of rain.')
//     }
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Melbourne.json?access_token=pk.eyJ1IjoiZ3pjIiwiYSI6ImNqenRzZGUwcDA4bjczbm55Z29zNWhmbmUifQ.cAsIl2zOQqqeDbmYhud8yg';

// request({ url: geocodeURL, json: true }, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to geocoding service');
//     } else if (res.body.features.length === 0) {
//         console.log('Unable to find location. Try another searach!')
//     } else {
//         const latitude = res.body.features[0].center[0];
//         const longitude = res.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
// });

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + ".json?access_token=pk.eyJ1IjoiZ3pjIiwiYSI6ImNqenRzZGUwcDA4bjczbm55Z29zNWhmbmUifQ.cAsIl2zOQqqeDbmYhud8yg";

    request ({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to geocoding service!', undefined);
        } else if (res.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[0],
                longtitude: res.body.features[0].center[1],
                location: res.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;