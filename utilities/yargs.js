'use strict';
const argv = require('yargs').options(
    {
        address: {
            alias: 'a',
            desc: 'city address, for get weather',
            demand: true
        }
    }).argv;
module.exports = { argv };