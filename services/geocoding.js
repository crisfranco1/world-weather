'use strict';
const axios = require('axios');

const getGeographicCoordiantes = async address => {
    let geographicCoordiantes = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=AIzaSyAlxxHBq1jaOd6kclCFJvpdC4l5_lxS4ic`)
    /*axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address:encodeURI(address),
            key: 'AIzaSyAlxxHBq1jaOd6kclCFJvpdC4l5_lxS4ic'
        }
    })*/
    if (geographicCoordiantes.data.status === 'ZERO_RESULTS') {
        throw new Error(`There are no results to the address ${address}`);
    }
    let result = geographicCoordiantes.data.results[0];
    let  geometryLocation= result.geometry.location;
    return {
        formatted_address: result.formatted_address,
        lat: geometryLocation.lat,
        lng: geometryLocation.lng
    }









};


module.exports = {
    getGeographicCoordiantes
};
