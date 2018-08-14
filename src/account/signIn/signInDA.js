'use strict';
var AdminAccount = require('../../model/adminAccount.model');
var ServiceProvider = require('../../model/serviceProvider.model');

exports.signInToSite = function (req, res) {
    AdminAccount.findOne({
        'userName': req.body.userName,
        'password': req.body.password
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if(userDetail == null) {
                res.send({
                    message:1
                })
            }
            else {
                res.send(userDetail.role);
            }
           
        }
    });

};

exports.create = function (req, res) {
    var adminAccount = new AdminAccount(req.body);
 adminAccount.role = 0;
    adminAccount.save(function (err, contentData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send(contentData);
         
        }
    });
};


exports.signIn = function (req, res) {
    ServiceProvider.findOne({
        'userName': req.body.userName,
        'password': req.body.password
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(userDetail);
        }
    });

};