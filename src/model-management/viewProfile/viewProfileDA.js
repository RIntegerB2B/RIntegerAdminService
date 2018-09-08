var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');


exports.findImages = function (req, res) {
    ModelDetail.findOne({
        'serviceProviderName': req.params.name,
        '_id': req.params.id

    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } else {
            data.primeImage = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + data.primeImage;

            var ecommerceImages = data.ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + ecommerceImages[i];
            }
            var productImages = data.productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + productImages[i];
            }
            var portraitImages = data.portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portraitImages[i];
            }
            var portFolioImages = data.portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portFolioImages[i];
            }

            res.status(200).json(data);
        }
    })
}

exports.deleteEcomImage = function (req, res) {
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
            var list = data.ecommerceImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data.save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;

            var ecommerceImages = data.ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + ecommerceImages[i];
            }
            var productImages = data.productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + productImages[i];
            }
            var portraitImages = data.portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + portraitImages[i];
            }
            var portFolioImages = data.portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portFolioImages[i];
            }
             res.status(200).json(models);
                    }
                });
            } else {
                res.status(500).send({
                    message: "image is not there in the array"
                })
            }
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
            var list = data.portraitImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data.save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;

                        var ecommerceImages = data.ecommerceImageName;
                        var arrayLength = ecommerceImages.length - 1;
                        for (var i = 0; i <= arrayLength; i++) {
                            ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + ecommerceImages[i];
                        }
                        var productImages = data.productImageName;
                        var productLength = productImages.length - 1;
                        for (var i = 0; i <= productLength; i++) {
                            productImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + productImages[i];
                        }
                        var portraitImages = data.portraitImageName;
                        var portraitLength = portraitImages.length - 1;
                        for (var i = 0; i <= portraitLength; i++) {
                            portraitImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + portraitImages[i];
                        }
                        var portFolioImages = data.portFolioImageName;
                        var portFolioLength = portFolioImages.length - 1;
                        for (var i = 0; i <= portFolioLength; i++) {
                            portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portFolioImages[i];
                        }
                    }
                });
            } else {
                res.status(500).send({
                    message: "image is not there in the array"
                })
            }

        }
    })
}
exports.deleteProductImage = function (req, res) {
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
            var list = data.productImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data.save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;

            var ecommerceImages = data.ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + ecommerceImages[i];
            }
            var productImages = data.productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + productImages[i];
            }
            var portraitImages = data.portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + portraitImages[i];
            }
            var portFolioImages = data.portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portFolioImages[i];
            }
                    }
                });
            } else {
                res.status(500).send({
                    message: "image is not there in the array"
                })
            }

        }
    })
}
exports.deletePortFolioImage = function(req,res) {
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
            var list = data.portFolioImageName;
            const index = list.indexOf(element);
            if (index !== -1) {
                list.splice(index, 1);
                data.save(function (err, models) {
                    if (err) {
                        res.status(500).send({
                            message: "somethong went wrong while deleting data"
                        });
                    } else {
                        models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;

            var ecommerceImages = data.ecommerceImageName;
            var arrayLength = ecommerceImages.length - 1;
            for (var i = 0; i <= arrayLength; i++) {
                ecommerceImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + ecommerceImages[i];
            }
            var productImages = data.productImageName;
            var productLength = productImages.length - 1;
            for (var i = 0; i <= productLength; i++) {
                productImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + productImages[i];
            }
            var portraitImages = data.portraitImageName;
            var portraitLength = portraitImages.length - 1;
            for (var i = 0; i <= portraitLength; i++) {
                portraitImages[i] = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + portraitImages[i];
            }
            var portFolioImages = data.portFolioImageName;
            var portFolioLength = portFolioImages.length - 1;
            for (var i = 0; i <= portFolioLength; i++) {
                portFolioImages[i] = appSetting.imageServerPath + 'SP_' + data.serviceProviderName + '_models' + '/' + data.userName + '/' + portFolioImages[i];
            }
                    }
                });
            } else {
                res.status(500).send({
                    message: "image is not there in the array"
                })
            }

        }
    })
}