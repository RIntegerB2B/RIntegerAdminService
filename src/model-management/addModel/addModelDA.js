var ModelDetail = require('../../model/model.model');


exports.createModel = function (req, res) {
 var modelDetail = new ModelDetail(req.body);
 modelDetail.save(function (err, contentData) {
        if (err) {
            res.send(err);
        } else {
            res.send(contentData);
            console.log(contentData);
        }
    });
} 
exports.createecommerceImage = function(req,file,res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id':req.params.id
    },function(err,modelDetail) {
        if(err) {
            console.log(err);

        }
        else{
            modelDetail.ecommerceImageName.push(file);
            modelDetail.save(function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            })
        }
    });

}
exports.createportraitImage = function(req,file,res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id':req.params.id
    },function(err,modelDetail) {
        if(err) {
            console.log(err);

        }
        else{
            modelDetail.productImageName.push(file);
            modelDetail.save(function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            })
        }
    });

}
exports.createproductImage = function(req,file,res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id':req.params.id
    },function(err,modelDetail) {
        if(err) {
            console.log(err);

        }
        else{
            modelDetail.portraitImageName.push(file);
            modelDetail.save(function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            })
        }
    });

}
exports.createportFolioImage = function(req,file,res) {
    ModelDetail.findOne({
        'userName': req.params.modelName,
        '_id':req.params.id
    },function(err,modelDetail) {
        if(err) {
            console.log(err);

        }
        else{
            modelDetail.portFolioImageName.push(file);
            modelDetail.save(function(err,data){
                if(err) {
                    console.log(err);
                }
                else{
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
            models.categoryType  = req.body.categoryType;
            models.save(
                function (err,data) {
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