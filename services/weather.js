'use strict'
const axios = require('axios');
const getCurrentWeather = async (latitude, longitude) => {
    let weather = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: latitude,
            lon: longitude,
            units: 'metric',
            appid: '89ddf8cfea0ff757548774ee66db34e7'
        }
    });
    return weather.data.main.temp
}
module.exports = { getCurrentWeather };