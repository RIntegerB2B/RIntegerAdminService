var Catalog = require('../model/catalogingPlatform.model');

exports.addB2BNational = function(req,res) {
   
    var b2bPlatform= new Catalog(req.body);
    b2bPlatform.b2bNationalplatform.push(req.body.b2bNationalplatform) ;

    b2bPlatform.save(function (err, contentData) {
           if (err) {
               res.send(err);
           } else {
               res.send(contentData);
               console.log(contentData);
           }
       });
}