var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');

exports.findImages = function (req, res) {
    ModelDetail.find({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
            data[0].primeImage = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + data[0].primeImage;
            data[0].ecommerceImages = data[0].ecommerceImageName;
            var ecommerceImages = data[0].ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'ecommerce' + '/' + ecommerceImages[i];
            }
            data[0].productImages = data[0].productImageName;
            var productImages = data[0].productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'product' + '/' + productImages[i];
            }
            var portraitImages = data[0].portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portrait' + '/' + portraitImages[i];
            }
            data[0].portFolioImages = data[0].portFolioImageName;
            var portFolioImages = data[0].portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portfolio' + '/'+ portFolioImages[i];
            }

            res.status(200).json(data);
        }
    })
}

exports.deleteEcomImage = function (req, res) {
    var element = req.params.image;
    ModelDetail.find({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
            const DIR = appSetting.imageUploadPath;
            const PATH = DIR + 'SP_'+ req.params.name + '_models'+ '/' + req.params.modelname  + '/' + 'ecommerce' + '/' + element;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    var list = data[0].ecommerceImageName;
                    const index = list.indexOf(element);
                    if (index !== -1) {
                        list.splice(index, 1);
                        data[0].save(function (err, models) {
                            if (err) {
                                res.status(500).send({
                                    message: "somethong went wrong while deleting data"
                                });
                            } else {
                                data[0].primeImage = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + data[0].primeImage;
        
                    var ecommerceImages = data[0].ecommerceImageName;
                    var arrayLength = ecommerceImages.length - 1;
                    for (var i = 0; i <= arrayLength; i++) {
                        ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'ecommerce' + '/' + ecommerceImages[i];
                    }
                    var productImages = data[0].productImageName;
                    var productLength = productImages.length - 1;
                    for (var i = 0; i <= productLength; i++) {
                        productImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'product' + '/' + productImages[i];
                    }
                    var portraitImages = data[0].portraitImageName;
                    var portraitLength = portraitImages.length - 1;
                    for (var i = 0; i <= portraitLength; i++) {
                        portraitImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portrait' + '/' + portraitImages[i];
                    }
                    var portFolioImages = data[0].portFolioImageName;
                    var portFolioLength = portFolioImages.length - 1;
                    for (var i = 0; i <= portFolioLength; i++) {
                        portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portfolio' + '/'+ portFolioImages[i];
                    }
        
                    res.status(200).json(data);
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
    })
}
exports.deletePortraitImage = function (req, res) {
    var element = req.params.image;
    ModelDetail.findOne({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
            const DIR = appSetting.imageUploadPath;
            const PATH = DIR + 'SP_'+ req.params.name + '_models'+ '/' + req.params.modelname  ;
            fs.unlink(PATH, (err) => {
                if (err) throw err;
                console.log('path/file.txt was deleted');
              });
        }
    })
}
exports.deleteProductImage = function (req, res) {
    var element = req.params.image;
    ModelDetail.find({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
           
            const DIR = appSetting.imageUploadPath;
            const PATH = DIR + 'SP_'+ req.params.name + '_models'+ '/' + req.params.modelname  + '/' + 'product' + '/' + element;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    var list = data[0].productImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        data[0].primeImage = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + data[0].primeImage;

            var ecommerceImages = data[0].ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'ecommerce' + '/' + ecommerceImages[i];
            }
            var productImages = data[0].productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'product' + '/' + productImages[i];
            }
            var portraitImages = data[0].portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portrait' + '/' + portraitImages[i];
            }
            var portFolioImages = data[0].portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portfolio' + '/'+ portFolioImages[i];
            }

            res.status(200).json(data);
                    }
                });
               
            } else {
                /* res.status(200).json(data);
                console.log(data); */
            }
                }
               
              });
        }
    })
}
exports.deletePortFolioImage = function (req, res) {
    var element = req.params.image;
    ModelDetail.find({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
            
            const DIR = appSetting.imageUploadPath;
            const PATH = DIR + 'SP_'+ req.params.name + '_models'+ '/' + req.params.modelname  + '/' + 'portfolio' + '/' + element;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    var list = data[0].portFolioImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data[0].save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        data[0].primeImage = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + data[0].primeImage;

            var ecommerceImages = data[0].ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'ecommerce' + '/' + ecommerceImages[i];
            }
            var productImages = data[0].productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'product' + '/' + productImages[i];
            }
            var portraitImages = data[0].portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portrait' + '/' + portraitImages[i];
            }
            var portFolioImages = data[0].portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data[0].serviceProviderName + '_models' + '/' + data[0].userName + '/' + 'portfolio' + '/'+ portFolioImages[i];
            }

            res.status(200).json(data);
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
    })
}