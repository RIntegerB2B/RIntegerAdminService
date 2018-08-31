'use strict';
var viewAgencyDA = require('./viewAgencyDA');

exports.findAgency = function (req, res) {
    try {
        viewAgencyDA.findAgency(req, res);
    } catch (error) {
        console.log(error);
    }
}

