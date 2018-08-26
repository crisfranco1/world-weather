'use strict';
const { argv } = require('./utilities/yargs');
const { getGeographicCoordiantes } = require('./services/geocoding');
const { getCurrentWeather } = require('./services/weather');


const getCurrentWeatherByLatitudeAndLongitude = async (address) => {

    try {
        let geographicCoordiantes = await getGeographicCoordiantes(address);
        let temperature = await getCurrentWeather(geographicCoordiantes.lat, geographicCoordiantes.lng);
        return `The weather in ${geographicCoordiantes.formatted_address} is: ${temperature} ºC`;

    }
    catch (error) {
        return `It was not possible to determinate the climate for ${address}`;
    }

};





getCurrentWeatherByLatitudeAndLongitude(argv.address).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});



