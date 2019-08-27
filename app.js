const request = require("request");

const url = 'https://api.darksky.net/forecast/bb77ab25f7ec9102c1e6e6a8e24ee1c2/37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
    console.log(res.body.currently);
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Melbourne.json?access_token=pk.eyJ1IjoiZ3pjIiwiYSI6ImNqenRzZGUwcDA4bjczbm55Z29zNWhmbmUifQ.cAsIl2zOQqqeDbmYhud8yg';

request({ url: geocodeURL, json: true }, (err, res) => {
    const latitude = res.body.features[0].center[0];
    const longitude = res.body.features[0].center[1];
    console.log(latitude, longitude);
});