'use strict';
var viewAgencyDA = require('./viewAgencyDA');

exports.findAgency = function (req, res) {
    try {
        viewAgencyDA.findAgency(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.findApproved = function (req, res) {
    try {
        viewAgencyDA.findApproved(req, res);
    } catch (error) {
        console.log(error);
    }
}
