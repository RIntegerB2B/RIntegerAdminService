'use strict';
var SuperCategory = require('../../model/supercategory.model');
var MainCategory = require('../../model/mainCategory.model')
var Portfolio = require('../../model/portfolioimages.model')


exports.mainCategoryData = function (req, res) {
    SuperCategory.find({}).select('categoryName ').exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.json(superCat);
        }
    });
}

exports.mainCategoryOnSub = function (req, res) {
    SuperCategory.findById(req.params.id, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(category);
        }
    });
}

exports.createPrimeImage = function (req, res,file) {
    SuperCategory.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.sub)

        mainCat.category.push({
            primeImage: file.originalname,
        })

        category.save(function (err, result) {
            if (err) {
                res.status(500).send({
                    "result": 1
                });
            } else {
                res.status(200).json(result)
            }
        });

    });
}

exports.createCategory = function (req, res) {
    SuperCategory.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.sub)

        mainCat.category.push({
            categoryName : req.body.categoryName,
            categoryPosition : req.body.categoryPosition

        })

        category.save(function (err, result) {
            if (err) {
                res.status(500).send({
                    "result": 1
                });
            } else {
                res.status(200).json(result)
            }
        });

    });
}
exports.showCategory = function (req, res) {
    SuperCategory.find({},function(err,details) {
        if(err) {
            res.status(500).send({
                "message":"error occured while retreiving data"
            })
        } else {
            res.status(200).json(details);
        }
    });
}
