'use strict';
var  dataAnalysisDA = require('./dataAnalysisDA');

exports.onlySubscribed = function (req, res) {
    try {
        dataAnalysisDA.onlySubscribed(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.notSubscribed = function (req, res) {
    try {
        dataAnalysisDA.notSubscribed(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteSubscribedNumber = function (req, res) {
    try {
        dataAnalysisDA.deleteSubscribedNumber(req, res);
    } catch (error) {
        console.log(error);
    }
}

