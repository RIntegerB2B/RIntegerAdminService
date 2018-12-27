'use strict';
var SuperCategoryVideo = require('../../model/superCategoryVideo.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');
var rmdir = require('rmdir');
var mkdirp = require('mkdirp');

exports.mainCategoryInsert = function (req, res) {
    let mainCat = {
        mainCategoryName: req.body.mainCategoryName,
    };
    SuperCategoryVideo.findOneAndUpdate({
        _id: req.body._id
        }, {
            $push: {
                mainCategory: mainCat
            }
        },
        function (err, mainCatValue) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
               SuperCategoryVideo.findById(req.body._id, function (err, superCat) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    res.status(200).json(superCat.mainCategory[superCat.mainCategory.length -1]);
                }
            });
            }
        }
    )
}



exports.mainCategoryDelete = function (req, res) {
    SuperCategoryVideo.findById(req.params.categoryId, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
           
           
            var maincategory =  category.mainCategory.id(req.params.mainCategoryId);
            maincategory.remove();
            category.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    SuperCategoryVideo.find({_id: req.params.categoryId }).select('mainCategory').exec(function (err, createdCatalog) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(createdCatalog)
                        }
                    })
                }
            });
            

        }
    });
}




exports.mainCategoryUpdate = function (req, res) {
    SuperCategoryVideo.findById(req.params.categoryId, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var mainCat = category.mainCategory.id(req.params.mainCategoryId);
            mainCat.mainCategoryName = req.body.mainCategoryName;
            category.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    SuperCategoryVideo.find({_id: req.params.categoryId }).select('mainCategory').exec(function (err, createdCatalog) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(createdCatalog)
                        }
                    })
                }
            });
        }
    });
}



exports.getMainCategory = function (req, res) {
    SuperCategoryVideo.find({_id: req.params.id }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(category);
        }
    });
}



exports.showSuperCategory = function (req, res) {
    SuperCategoryVideo.find({}).select('categoryName ').exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
}


/* exports.mainCategoryShow = function (req, res) {
    SuperCategory.find({}).select(' mainCategory._id mainCategory.mainCategoryName mainCategory.mainCategoryDescription  ').exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
} */



exports.getCategory = function (req, res) {
    SuperCategoryVideo.findById(req.params.id, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(category);
        }
    });
}
