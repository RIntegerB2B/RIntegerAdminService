var ModelDetail = require('../../model/model.model');
var appSetting = require('../../config/appSetting');


exports.findImages = function(req,res) {
    ModelDetail.findOne({
        'serviceProviderName':req.params.name,
        '_id':req.params.id

    },function(err,data) {
        if(err){
            res.status(500).send({
                message:'some thing went wrong'
            })
        }
        else{
            var ecommerceImages = data.ecommerceImageName;
            var arrayLength = ecommerceImages.length-1;
               for ( var i = 0; i<= arrayLength; i++){
                ecommerceImages[i];
                console.log(ecommerceImages[i])
               }
            res.status(200).json(data);
        }
    })
}