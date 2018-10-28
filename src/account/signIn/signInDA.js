'use strict';
var AdminAccount = require('../../model/adminAccount.model');
var ServiceProvider = require('../../model/serviceProvider.model');
var RolePermssionAccount = require('../../model/permission.model');

exports.signInToSite = function (req, res) {
    AdminAccount.find({
        'userName': req.body.userName,
        'password': req.body.password,
        'isActive':1
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (!userDetail[0]) {
                res.status(500).send({
                    result: 1
                });
            } else {
            RolePermssionAccount.findOne({
                'role': userDetail.role
                }, function (err, fullData) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        var  accountDetails = [];
                        accountDetails.push(userDetail);
                        accountDetails.push(fullData)
                        res.status(200).send(accountDetails);
                        console.log(accountDetails);
                    }
                });
        }
    }
    });

};

exports.create = function (req, res) {
    var adminAccount = new AdminAccount(req.body);
 adminAccount.role = 'admin';
 adminAccount.isActive = 1;
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
    AdminAccount.findOne({
        'userName': req.body.userName,
        'password': req.body.password,
       
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