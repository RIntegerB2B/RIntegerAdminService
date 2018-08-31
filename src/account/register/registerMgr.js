var registerDA = require('./registerDA');
var ServiceProvider = require('../../model/serviceProvider.model');
var Model = require('../../model/model.model');
var Agency = require('../../model/agency.model');
var zeroFill = require('zero-fill')
exports.create = function (req, res) {
    try {
      if(req.body.userType === 'Service Provider') {
        var sp = "SP";
        ServiceProvider.findOne({}).select().sort('-Id').limit(1).exec(function (err, details) {
            if (err) {
              res.status(500).send({
                message: "Some error occurred while retrieving notes."
              });
            } else {
              if( details == null) {
               var registeredId = sp + "0001";
               registerDA.spcreate(req, res,  registeredId);
              } 
              else {
              var maxID = details.Id;
              var incOrder = maxID.slice(-4);
              var addZero =zeroFill(4, 1);
              var result = parseInt(incOrder) + parseInt(addZero);
               var results =zeroFill(4,result);
              var registeredId = sp + results;
              registerDA.spcreate(req, res, registeredId);
              console.log(registeredId);
              }
            }
          });
        }
        else if(req.body.userType === 'Model') {
          var mdl = "MDL";
          Model.findOne({}).select().sort('-Id').limit(1).exec(function (err, details) {
              if (err) {
                res.status(500).send({
                  message: "Some error occurred while retrieving notes."
                });
              } else {
                if( details == null) {
                 var registeredId = mdl + "0001";
                 registerDA.modelcreate(req, res,  registeredId);
                } 
                else {
                var maxID = details.Id;
                var incOrder = maxID.slice(-4);
                var addZero =zeroFill(4, 1);
                var result = parseInt(incOrder) + parseInt(addZero);
                 var results =zeroFill(4,result);
                var registeredId = mdl + results;
                registerDA.modelcreate(req, res, registeredId);
                console.log(registeredId);
                }
              }
            });
        }
        else if(req.body.userType === 'Agency') {
          var agency = "AG";
          Agency.findOne({}).select().sort('-Id').limit(1).exec(function (err, details) {
              if (err) {
                res.status(500).send({
                  message: "Some error occurred while retrieving notes."
                });
              } else {
                if( details == null) {
                 var registeredId = agency + "0001";
                 registerDA.agencycreate(req, res,  registeredId);
                } 
                else {
                var maxID = details.Id;
                var incOrder = maxID.slice(-4);
                var addZero =zeroFill(4, 1);
                var result = parseInt(incOrder) + parseInt(addZero);
                 var results =zeroFill(4,result);
                var registeredId = agency + results;
                registerDA.agencycreate(req, res, registeredId);
                console.log(registeredId);
                }
              }
            });
        }
        
    } catch (error) {
        console.log(error);
    }
};