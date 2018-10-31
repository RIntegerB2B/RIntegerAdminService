var ServiceProvider = require('../../model/serviceProvider.model');
var AdminAccount = require('../../model/adminAccount.model');
var Model = require('../../model/model.model');
var Agency = require('../../model/agency.model');

exports.spcreate = function (req, res,registeredId) {
    var spAccount = new ServiceProvider();
    spAccount.Id = registeredId;
    spAccount.userName = req.body.userName;
    spAccount.companyName= req.body.companyName;
    spAccount.emailId = req.body.emailId;
    spAccount.mobileNumber = req.body.mobileNumber;
    spAccount.website = req.body.website;
    spAccount.location = req.body.location;
    spAccount.password= req.body.password;
    spAccount.role = 'Service Provider';
    spAccount.isActive = 1;
    spAccount.save(function (err, spData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
    var adminAccount = new AdminAccount();
    adminAccount.userName = req.body.userName;
    adminAccount.password = req.body.password;
    adminAccount.emailId = req.body.emailId;
    adminAccount.mobileNumber = req.body.mobileNumber;
    adminAccount.role = 'Service Provider';
    adminAccount.isActive = 1;
adminAccount.save(function (err, registeredData){
    if (err) {
        res.send(err);
        console.log(err);
    }
    else {
        res.status(200).json(registeredData);
    }
})
        }
    }); 
};

 exports.modelcreate = function (req, res,registeredId) {
    var models = new Model();
    models.Id = registeredId;
    models.userName = req.body.userName;
    models.mobileNumber = req.body.mobileNumber;
    models.location = req.body.location;
    models.password= req.body.password;
    models.isActive = 0;
    models.save(function (err, modelData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
var adminAccount = new AdminAccount();
adminAccount.userName = req.body.userName;
adminAccount.password = req.body.password;
adminAccount.emailId = req.body.emailId;
adminAccount.mobileNumber = req.body.mobileNumber;
adminAccount.role = 'Model' ;
adminAccount.isActive = 0;
adminAccount.save(function (err, registeredData){
    if (err) {
        res.send(err);
        console.log(err);
    }
    else {
        res.status(200).json(registeredData);
    }
})
            
        }
    }); 
};
exports.agencycreate = function (req, res,registeredId) {
    var agency = new Agency();
    agency .Id = registeredId;
    agency .userName = req.body.userName;
    agency .mobileNumber = req.body.mobileNumber;
    agency .location = req.body.location;
    agency .password= req.body.password;
    agency.isActive = 0;
    agency .save(function (err, modelData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
var adminAccount = new AdminAccount();
adminAccount.userName = req.body.userName;
adminAccount.password = req.body.password;
adminAccount.emailId = req.body.emailId;
adminAccount.mobileNumber = req.body.mobileNumber;
adminAccount.role = 'Agency' ;
adminAccount.isActive = 0;
adminAccount.save(function (err, registeredData){
    if (err) {
        res.send(err);
        console.log(err);
    }
    else {
        res.status(200).json(registeredData);
    }
})
            
        }
    }); 
};

