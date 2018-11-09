var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');


exports.createModel = function (req, res) {
    var modelDetail = new ModelDetail(req.body);
    modelDetail.isScheduledBooking = 0;
    modelDetail.save(function (err, contentData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send(contentData);
        }
    });
}
exports.createecommerceImage = function (req, file, res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail.ecommerceImageName.push(file);
            modelDetail.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });

}
exports.createportraitImage = function (req, file, res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail.portraitImageName.push(file);
            modelDetail.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });

}
exports.createproductImage = function (req, file, res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail.productImageName.push(file);
            modelDetail.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });

}
exports.createportFolioImage = function (req, file, res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            res.status(500).send({
                "result": 0
            });

        } else {
            modelDetail.portFolioImageName.push(file);
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
    });

}

exports.updateModel = function (req, res) {
    ModelDetail.findById(req.params.id, function (err, models) {
        if (err) return handleError(err);
        else {
            // models.userName = req.body.userName;
            models.description = req.body.description;
            models.availability = req.body.availability;
            models.mobileNumber = req.body.mobileNumber;
            models.emailId = req.body.emailId;
            models.faceBook = req.body.faceBook;
            models.whatsapp = req.body.whatsapp;
            models.modelType = req.body.modelType;
            models.categoryType = req.body.categoryType;
            models.height = req.body.height;
            models.bust = req.body.bust;
            models.chest = req.body.chest;
            models.waist = req.body.waist;
            models.hips = req.body.hips;
            models.hair = req.body.hair;
            models.eyes = req.body.eyes;
            models.shoulder = req.body.shoulder;
            models.shoeSize = req.body.shoeSize;
            models.topsize = req.body.topsize;
            models.bottomsize = req.body.bottomsize;
            models.save(
                function (err, data) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        res.status(200).json(data);
                    }
                });
        }
    });

}
exports.scheduledBooking = function (req, res) {
    ModelDetail.find({
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail[0].isScheduledBooking = 'true';
            modelDetail[0].save(function (err, models) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    ModelDetail.find({
                        'serviceProviderId': req.params.spid
                    }, function (err, models) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            var arraylength =models.length-1;
                            for (var i= 0; i<=arraylength; i++)
                            {
                                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                            }
                            res.status(200).json(models);
                        }
                    });
                   
                }
            })
        }
    });

}
exports.removeScheduledBooking = function (req, res) {
    ModelDetail.find({
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail[0].isScheduledBooking = 'false';
            modelDetail[0].scheduledDate = '';
            modelDetail[0].save(function (err, models) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    ModelDetail.find({
                        'serviceProviderId': req.params.spid
                    }, function (err, models) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            var arraylength =models.length-1;
                            for (var i= 0; i<=arraylength; i++)
                            {
                                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                            }
                            res.status(200).json(models);
                        }
                    });
                      /*   models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;
                    res.status(200).json(models); */
                }
            })
        }
    });
}
exports.scheduledDate = function (req, res) {
    ModelDetail.find({
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail[0].scheduledDate = req.params.date;
            modelDetail[0].save(function (err, models) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    ModelDetail.find({
                        'serviceProviderId': req.params.spid
                    }, function (err, models) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            var arraylength =models.length-1;
                            for (var i= 0; i<=arraylength; i++)
                            {
                                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                            }
                            res.status(200).json(models);
                        }
                    });
                      /*   models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;
                    res.status(200).json(models); */
                }
            })
        }
    });
}
exports.modelAvailable = function (req, res) {
    ModelDetail.find({
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail[0].availability = 'Yes';
            modelDetail[0].save(function (err, models) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    ModelDetail.find({
                        'serviceProviderId': req.params.spid
                    }, function (err, models) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            var arraylength =models.length-1;
                            for (var i= 0; i<=arraylength; i++)
                            {
                                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                            }
                            res.status(200).json(models);
                        }
                    });
                      /*   models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;
                    res.status(200).json(models); */
                }
            })
        }
    });
}

exports.notAvailable = function (req, res) {
    ModelDetail.find({
        '_id': req.params.id
    }, function (err, modelDetail) {
        if (err) {
            console.log(err);

        } else {
            modelDetail[0].availability = 'No';
            modelDetail[0].isScheduledBooking = 'false';
            modelDetail[0].scheduledDate = '';
            modelDetail[0].save(function (err, models) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    ModelDetail.find({
                        'serviceProviderId': req.params.spid
                    }, function (err, models) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            var arraylength =models.length-1;
                            for (var i= 0; i<=arraylength; i++)
                            {
                                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
                            }
                            res.status(200).json(models);
                        }
                    });
                      /*   models.primeImage = appSetting.imageServerPath + 'SP_' + models.serviceProviderName + '_models' + '/' + models.userName + '/' + models.primeImage;
                    res.status(200).json(models); */
                }
            })
        }
    });
}