var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');
/* var fs = require('fs'); */
var rmdir = require('rmdir');

exports.viewModels = function (req, res) {
 ModelDetail.find({
    }).sort({
        position: 1
    }).exec(function (err, models) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
            }
            res.status(200).json(models);
        }
    }) 
}

exports.findModels = function (req, res) {
    ModelDetail.find({'isActive': 0
            }).select('-password').exec(function (err, models) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var arraylength =models.length-1;
                    for (var i= 0; i<=arraylength; i++)
                    {
                        models[i].primeImage = appSetting.imageServerPath  + models[i].userName + '/' + models[i].primeImage;
                    }
                    res.status(200).json(models);
                }
            });
}

exports.deleteModel = function (req, res) {
    ModelDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const DIR = appSetting.imageUploadPath;
            const PATH = DIR + 'SP_'+ req.params.name + '_models'+ '/' + req.params.modelname  ;
            rmdir(PATH , function (err, dirs) {
if(err) {
    res.status(500).send({
        "result": 0
    });
} else{
    ModelDetail.find({'serviceProviderName':req.params.name
    }).sort({
        position: 1
    }).exec(function (err, models) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].primeImage = appSetting.imageServerPath  + 'SP_' + models[i].serviceProviderName + '_models' + '/' + models[i].userName + '/' + models[i].primeImage;
            }
            res.status(200).json(models);
        }
    }) 
}
          }) ;
        }
    });
}


exports.findModel = function (req, res) {
    ModelDetail.findOne({
        '_id': req.params.id
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
                models.primeImage = appSetting.imageServerPath  + models.userName + '/' +  models.primeImage;
           
            res.status(200).json(models);
        }
    });
}

