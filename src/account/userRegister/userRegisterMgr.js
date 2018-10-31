var userRegisterDA = require('./userRegisterDA');
var UserRegister = require('./../../model/userRegister.model')
var zeroFill = require('zero-fill')

exports.userCreate = function (req, res) {
    try {
        var user = "US";
        UserRegister.findOne({}).select().sort('-Id').limit(1).exec(function (err, details) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                if (details == null) {
                    var registeredId = user + "0001";
                    userRegisterDA.userCreate(req, res, registeredId);
                } else {
                    var maxID = details.Id;
                    var incOrder = maxID.slice(-4);
                    var addZero = zeroFill(4, 1);
                    var result = parseInt(incOrder) + parseInt(addZero);
                    var results = zeroFill(4, result);
                    var registeredId = user + results;
                    userRegisterDA.userCreate(req, res, registeredId);
                    console.log(registeredId);
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
};