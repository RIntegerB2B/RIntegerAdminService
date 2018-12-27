'use strict';
var SuperCategoryVideo = require('../../model/superCategoryVideo.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');
var rmdir = require('rmdir');
var mkdirp = require('mkdirp');

exports.superCategoryInsert = function (req, res) {

    var superCategoryData = new SuperCategoryVideo(req.body);
    superCategoryData.categoryName = req.body.categoryName;
    superCategoryData.save(
        function (err, superCat) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
                SuperCategoryVideo.find({}).select().exec(function (err, superCat) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        res.status(200).json(superCat);
                    }
                });
            }
        });

}

exports.superCategoryEdit = function (req, res) {
    SuperCategoryVideo.findById(req.params.id, function (err, superCat) {
        if (err) return handleError(err);
        else {
            superCat.categoryName = req.body.categoryName;
            superCat.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        SuperCategoryVideo.find({}).select().exec(function (err, superCat) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(superCat);
                            }
                        });



                    }
                });
                
        }
    });
}


exports.superCategoryDelete = function (req, res) {
    SuperCategoryVideo.findByIdAndRemove(req.params.categoryId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            SuperCategoryVideo.find({}).select().exec(function (err, superCat) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(superCat);
                }
            });
        }
    });
}


exports.superCategoryShow = function (req, res) {
    SuperCategoryVideo.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });

}
