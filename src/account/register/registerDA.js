var ServiceProvider = require('../../model/serviceProvider.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.create = function (req, res,registeredId) {
    var spAccount = new ServiceProvider();
    spAccount.Id = registeredId;
    spAccount.userName = req.body.userName;
    spAccount.companyName= req.body.companyName;
    spAccount.emailId = req.body.emailId;
    spAccount.mobileNumber = req.body.mobileNumber;
    spAccount.website = req.body.website;
    spAccount.location = req.body.location;
    spAccount.password= req.body.password;
    spAccount.isActive = 0;
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
adminAccount.role = 1;

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