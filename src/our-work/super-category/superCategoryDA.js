'use strict';
var SuperCategory = require('../../model/supercategory.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');
var rmdir = require('rmdir');
var mkdirp = require('mkdirp');

exports.superCategoryInsert = function (req, res) {

    var superCategoryData = new SuperCategory(req.body);
    superCategoryData.categoryName = req.body.categoryName;
    const PATH = appSetting.imageOurWorkUploadPath + '/' + req.body.categoryName;
mkdirp(PATH);
    superCategoryData.save(
        function (err, superCat) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
                SuperCategory.find({}).select().exec(function (err, superCat) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        res.status(200).json(superCat);
                    }
                });
               /*  res.status(200).json(superCat);
                console.log(superCat); */
            }
        });

}

exports.superCategoryEdit = function (req, res) {
    SuperCategory.findById(req.params.id, function (err, superCat) {
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
                        /*  res.status(200).json(SuperCategory); */
            

                        SuperCategory.find({}).select().exec(function (err, superCat) {
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
    SuperCategory.findByIdAndRemove(req.params.categoryId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const PATH = appSetting.imageOurWorkUploadPath +  '/' + req.params.name;
            rmdir(PATH);
            SuperCategory.find({}).select().exec(function (err, superCat) {
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
    SuperCategory.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });

}
