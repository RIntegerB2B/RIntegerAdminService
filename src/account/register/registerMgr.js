var registerDA = require('./registerDA');
var ServiceProvider = require('../../model/serviceProvider.model');
var zeroFill = require('zero-fill')
exports.create = function (req, res) {
    try {
        var sp = "SP";
        ServiceProvider.findOne({}).select().sort('-Id').limit(1).exec(function (err, details) {
            if (err) {
              res.status(500).send({
                message: "Some error occurred while retrieving notes."
              });
            } else {
              if( details == null) {
               var registeredId = sp + "0001";
               registerDA.create(req, res,  registeredId);
              } 
              else {
              var maxID = details.Id;
              var incOrder = maxID.slice(-4);
              var addZero =zeroFill(4, 1);
              var result = parseInt(incOrder) + parseInt(addZero);
               var results =zeroFill(4,result);
              var registeredId = sp + results;
              registerDA.create(req, res, registeredId);
              console.log(registeredId);
              }
            }
          });
        
    } catch (error) {
        console.log(error);
    }
};