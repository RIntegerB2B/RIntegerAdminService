'use strict';
var  dataAnalysisDA = require('./dataAnalysisDA');

exports.onlySubscribed = function (req, res) {
    try {
        dataAnalysisDA.onlySubscribed(req, res);
    } catch (error) {
        console.log(error);
    }
}