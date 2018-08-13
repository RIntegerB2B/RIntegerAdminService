'use strict';

var signInDA = require('./signInDA');

exports.create = function (req, res) {
    try {
        signInDA.create(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.signInToSite = function (req, res) {
    try {
        signInDA.signInToSite(req, res);
    } catch (error) {
        console.log(error);
    }
};

exports.signIn = function (req, res) {
    try {
        signInDA.signIn(req, res);
    } catch (error) {
        console.log(error);
    }
}