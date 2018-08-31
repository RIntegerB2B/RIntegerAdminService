var Agency = require('../../model/agency.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.giveApproval = function(req,res) {
    Agency.findOne({
        'userName': req.params.name,
        'mobileNumber':req.params.num
 }, function (err, data) {
     if (err) res.status(500).json(0);
     else {
         data.isActive = 1;
         data.save(function(err,updatedData){
             if(err){
                 res.status(500).send({
                     message:"data is not found in service Provider account"
                 }
             );
             }
             else{
                 AdminAccount.findOne({
                     'userName': req.params.name,
                     'mobileNumber':req.params.num
                 },function(err, data) {
                if(err) {
                    res.status(500).json(err);
                }
                else{
                    data.isActive = 1;
                    data.save(function(err,savedData){
                        if(err) {
                            res.status(500).send({
                                message:"data is not found in admin account"
                            })
                        }
                        else{
                         res.status(200).json(savedData);
                        }
                    })
                   
                }
                 })
                
             }
         })
     }
 });


}