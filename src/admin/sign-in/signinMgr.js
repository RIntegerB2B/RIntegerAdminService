'use strict';

var signInDA = require('./signinDA');

exports.signInToSite = function (req, res) {
    try {
        signInDA.signInToSite(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.create = function (req, res) {
    try {
        signInDA.createContent(req, res);
    } catch (error) {
        console.log(error);
    }
};