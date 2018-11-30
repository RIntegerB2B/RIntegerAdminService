'use strict';
var SuperCategory = require('../../model/supercategory.model');
var MainCategory = require('../../model/maincategory.model');
var Portfolio = require('../../model/portfolioimages.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');
var rmdir = require('rmdir');


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
    SuperCategory.find({
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

/* /primeimage/:main/subcat/:subid/cat/:catid/mainname/:name/subname/:sub/catname/:cat */
exports.editPrimeImage = function (req, res, file) {
    SuperCategory.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.subid)
var subcat = mainCat.category.id(req.params.catid);
subcat.primeImage = file.originalname;

        category.save(function (err, result) {
            if (err) {
                res.status(500).send({
                    "result": 1
                });
            } else {
                SuperCategory.find({
                    _id: req.params.main
                }, function (err, category) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
            
                        var mainCat = category[0].mainCategory.id(req.params.subid);
                        var subCat = mainCat.category.id(req.params.catid);
                        subCat.primeImage = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + 'prime' + '/' + subCat.primeImage;
                        var arr = subCat.images;
                        for( var i = 0; i<= arr.length -1; i++) {
            arr[i] = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + arr[i] ;
                        }
                        res.status(200).json(subCat);
                    }
                });
            }
        });

    });
}


exports.createCategory = function (req, res) {
    SuperCategory.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.sub)

        mainCat.category.push({
            primeImage: req.body.primeImage,
            categoryName: req.body.categoryName,
            categoryPosition: req.body.categoryPosition

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
/* exports.categoryImages = function (req, res, file) {
    SuperCategory.findById(req.params.main, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.sub)

        var ID = file.originalname;
            var i = modelDetail.ecommerceImageName.indexOf(ID);
            if (i > -1) {
                console.log('Exist');
            } else {
                mainCat.category.push({
           
                    images: file.originalname
                })
                modelDetail.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        console.log(data);
                    }
                })
            }
       

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
} */

exports.saveImages = function (req, res, file) {  
    SuperCategory.findById(req.params.supid, function (err, category) {


        var mainCat = category.mainCategory.id(req.params.mainid)
var cat = mainCat.category.id(req.params.catid)

            var ID = file.originalname;
            var i = cat.images.indexOf(ID)
            if (i > -1) {
                console.log('Exist');
            } else {
                cat.images.push(file.originalname)
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
exports.viewMulitpleImages = function (req, res) {
    SuperCategory.find({
        _id: req.params.super
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = category[0].mainCategory.id(req.params.main);
            var subCat = mainCat.category.id(req.params.cat);
            subCat.primeImage = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + 'prime' + '/' + subCat.primeImage;
            var arr = subCat.images;
            for( var i = 0; i<= arr.length -1; i++) {
arr[i] = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + arr[i] ;
            }
            res.status(200).json(subCat);
        }
    });
}
exports.deleteMulitpleImage = function (req, res) {
    SuperCategory.find({
        _id: req.params.super
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = category[0].mainCategory.id(req.params.main);
            var subCat = mainCat.category.id(req.params.cat);
            var arr = subCat.images
         
           const PATH = appSetting.imageOurWorkUploadPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + req.params.image; 
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    var list = arr;
                    const index = list.indexOf(req.params.image);
                    if (index !== -1) {
                        list.splice(index, 1);
                        category[0].save(function (err, models) {
                            if (err) {
                                res.status(500).send({
                                    message: "somethong went wrong while deleting data"
                                });
                            } else {
                                SuperCategory.find({
                                    _id: req.params.super
                                }, function (err, category) {
                                    if (err) {
                                        res.status(500).send({
                                            "result": 0
                                        });
                                    } else {
                            
                                        var mainCat = category[0].mainCategory.id(req.params.main);
                                        var subCat = mainCat.category.id(req.params.cat);
                                        subCat.primeImage = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + 'prime' + '/' + subCat.primeImage;
                                        var arr = subCat.images;
                                        for( var i = 0; i<= arr.length -1; i++) {
                            arr[i] = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + subCat.categoryName + '/' + arr[i] ;
                                        }
                                        res.status(200).json(subCat);
                                    }
                                });
                            }
                        });
                    } else {
                        res.status(500).send({
                            message: "image is not there in the array"
                        })
                    }
                }
               
              });
        }
    });
}
exports.deleteCategory = function (req, res) {
    SuperCategory.findById( req.params.super
    , function (err, categoryDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = categoryDetails.mainCategory.id(req.params.main);
             var subcat = mainCat.category.id(req.params.cat)
             var subcatname = subcat.categoryName;
             subcat.remove();
        const PATH =  appSetting.imageOurWorkUploadPath + categoryDetails.categoryName + '/' + mainCat.mainCategoryName + '/' + subcatname;
        rmdir(PATH , function (err, dirs) {
            if (err) {throw err;} 
            else {
                categoryDetails.save(function(err, result) {
                    if(err){
                        console.log(err)
                    } else {
                        SuperCategory.find({
                            _id: req.params.super
                        }, function (err, category) {
                            if (err) {
                                res.status(500).send({
                                    "result": 0
                                });
                            } else {
                    
                                var mainCat = category[0].mainCategory.id(req.params.main)
                                var arr = mainCat.category;
                                for (var i = 0; i <= arr.length - 1; i++) {
                    
                    
                                    categoryName: String,
                                    arr[i].primeImage = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + arr[i].categoryName + '/' + 'prime' + '/' + arr[i].primeImage;
                                }
                                res.status(200).json(mainCat);
                            }
                        });
                    }
                })
            }
        });
        }
    });
}
exports.showCategory = function (req, res) {
    SuperCategory.find({}, function (err, details) {
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
    SuperCategory.find({
        _id: req.params.super
    }, function (err, category) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            var mainCat = category[0].mainCategory.id(req.params.main)
            var arr = mainCat.category;
            for (var i = 0; i <= arr.length - 1; i++) {


                categoryName: String,
                arr[i].primeImage = appSetting.imageOurWorkServerPath + category[0].categoryName + '/' + mainCat.mainCategoryName + '/' + arr[i].categoryName + '/' + 'prime' + '/' + arr[i].primeImage;
            }
            res.status(200).json(mainCat);
        }
    });
}
exports.categoryDetails = function (req, res) {
    SuperCategory.find({
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
            /* console.log(category); */
        }
    });
}