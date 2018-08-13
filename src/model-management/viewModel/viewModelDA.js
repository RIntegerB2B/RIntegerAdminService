var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');

exports.viewModels = function (req, res) {
    ModelDetail.find({
        'serviceProviderId': req.params.id
    }, function (err, models) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var arraylength =models.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
                models[i].portfolioImageName = appSetting.imageServerPath  + models[i].userName + '/' + models[i].portfolioImageName;
            }
            res.status(200).json(models);
        }
    });
}

exports.findModels = function (req, res) {
    ModelDetail.find({
            }).select('-password').exec(function (err, models) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var arraylength =models.length-1;
                    for (var i= 0; i<=arraylength; i++)
                    {
                        models[i].portfolioImageName = appSetting.imageServerPath  + models[i].userName + '/' + models[i].portfolioImageName;
                    }
                    res.status(200).json(models);
                }
            });
}


/* exports.approvedModels = function (req, res) {
    ModelDetail.find({
        'serviceProviderId': req.params.id,
        'isActive': 1
    }, function (err, data) {
        if (err) res.status(500).json(0);
        else {
            res.status(200).json(data)
            
        }
    });
} */