'use strict';
var AdminAccount = require('../../model/adminAccount.model');
var ServiceProvider = require('../../model/serviceProvider.model');
var UserRegister = require('../../model/userRegister.model');
var RolePermssionAccount = require('../../model/permission.model');
var jwt = require('jsonwebtoken');

exports.signInToSite = function (req, res) {
    var secretKey='123456789?*!^sghd';
    var token = jwt.sign({ id: req.body.userName }, secretKey, {
        expiresIn: 43200 // expires in 12 hours
      });
    AdminAccount.findOne({
        'userName': req.body.userName,
        'password': req.body.password,
        'isActive': 1
    }, function (err, dataDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (dataDetail == null) {
                res.status(200).send(
                    dataDetail
                );
            } else {
                ServiceProvider.findOne({
                    'userName': req.body.userName,
                    'password': req.body.password,
                    'isActive': 1
                }, function (err, userDetail) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        if (userDetail == null) {
                            res.status(200).send(
                                userDetail
                            );
                        }
                        else{
                            ServiceProvider.findOne({
                                'userName': req.body.userName,
                                'password': req.body.password,
                                'isActive': 1
                            }, function (err, fullDeatails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    console.log(fullDeatails);
                                    RolePermssionAccount.findOne({
                                        'role': fullDeatails.role
                                    }, function (err, fullData) {
                                        if (err) {
                                            res.status(500).send({
                                                message: "Some error occurred while retrieving notes."
                                            });
                                        } else {
                                            var accountDetails = [];
                                            if (fullData !== null) {
                                                fullData.token=token;
                                                accountDetails.push(userDetail);
                                                accountDetails.push(fullData);
                                               /*  console.log(accountDetails); */
                                            } else {
                                                accountDetails.push(userDetail);
                                            }
                                            res.status(200).send(accountDetails);
                                            /* console.log(accountDetails); */
                                        }
                                    });
                            } 
                            });
                        }
                    }
                });
            }
        }
    });
}

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