'use strict';
var SuperCategoryVideo = require('../../model/superCategoryVideo.model');
var MainCategoryVideo = require('../../model/mainCategoryVideo.model');
var videoPortfolio = require('../../model/videoPortfolio.model');



exports.mainCategoryData = function (req, res) {
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

exports.mainCategoryOnSub = function (req, res) {
    SuperCategoryVideo.find({
        _id: req.params.id
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(category);
        }
    });
}

exports.createPrimeImage = function (req, res, file) {
    /* SuperCategory.findById(req.params.main, function (err, category) {


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

    }); */
}

exports.editPrimeImage = function (req, res, file) {
    SuperCategoryVideo.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.subid)
var subcat = mainCat.category.id(req.params.catid);
subcat.primeImage = file.originalname;

        category.save(function (err, result) {
            if (err) {
                res.status(500).send({
                    "result": 1
                });
            } else {
                SuperCategoryVideo.find({
                    _id: req.params.main
                }, function (err, category) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
            
                        var mainCat = category[0].mainCategory.id(req.params.subid);
                        var subCat = mainCat.category.id(req.params.catid);
                        res.status(200).json(subCat);
                    }
                });
            }
        });

    });
}


exports.createCategory = function (req, res) {
    SuperCategoryVideo.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.sub)

        mainCat.category.push({
            videosUrl: req.body.videosUrl,
            videoName: req.body.videoName,

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

exports.saveVideo = function (req, res, file) {  
    SuperCategoryVideo.findById(req.params.supid, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.mainid)
var cat = mainCat.category.id(req.params.catid)

            var ID = file.originalname;
            var i = cat.images.indexOf(ID)
            if (i > -1) {
                console.log('Exist');
            } else {
                cat.videosUrl.push(file.originalname)
                category.save(function (err, result) {
                    if (err) {
                        res.status(500).send({
                            "result": 1
                        });
                    } else {
                        console.log(result);
                    }
        
                    
                });
            }
       

    });
}

exports.deleteCategory = function (req, res) {
    SuperCategoryVideo.findById( req.params.super
    , function (err, categoryDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = categoryDetails.mainCategory.id(req.params.main);
             var subcat = mainCat.category.id(req.params.cat);
             subcat.remove();
             /* var subcatname = subcat.categoryName; */
             categoryDetails.save(function(err, result) {
                 if(err) {
                    res.status(500).send({
                        "message": "error occured while retreiving data"
                    })  
                 } else {
                    SuperCategoryVideo.find({}, function (err, details) {
                        if (err) {
                            res.status(500).send({
                                "message": "error occured while retreiving data"
                            })
                        } else {
                            res.status(200).json(details);
                        }
                    });
                 }
             })
             
             
        
        }
    });
}
exports.showCategory = function (req, res) {
    SuperCategoryVideo.find({}, function (err, details) {
        if (err) {
            res.status(500).send({
                "message": "error occured while retreiving data"
            })
        } else {
            res.status(200).json(details);
        }
    });
}

exports.showMainCategory = function (req, res) {
    SuperCategoryVideo.find({
        _id: req.params.super
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = category[0].mainCategory.id(req.params.main)
            var arr = mainCat.category;
            res.status(200).json(mainCat);
        }
    });
}
exports.categoryDetails = function (req, res) {
    SuperCategoryVideo.find({
        _id: req.params.super
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = category[0].mainCategory.id(req.params.main)
            var subCat = mainCat.category.id(req.params.cat);
            res.status(200).json(subCat);
        }
    });
}