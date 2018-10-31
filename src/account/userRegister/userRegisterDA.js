var UserRegister = require('../../model/userRegister.model');
var AdminAccount = require('../../model/adminAccount.model');
var ServiceProvider = require('../../model/serviceProvider.model');
exports.userCreate = function (req, res, registeredId) {
    var adminAccount = new AdminAccount();
    adminAccount.Id = registeredId;
    adminAccount.userName = req.body.userName;
    adminAccount.password = req.body.password;
    adminAccount.mobileNumber = req.body.mobileNumber;
    adminAccount.emailId = req.body.emailId;
    adminAccount.role = req.body.role;
    adminAccount.isActive = 1;
    adminAccount.save(function (err, userData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            var userAccount = new UserRegister();
            userAccount.Id = registeredId;
            userAccount.userName = req.body.userName;
            userAccount.password = req.body.password;
            userAccount.mobileNumber = req.body.mobileNumber;
            userAccount.emailId = req.body.emailId;
            userAccount.location = req.body.location;
            userAccount.role = req.body.role;
            userAccount.isActive = 1;
            userAccount.save(function (err, registeredData) {
                if (err) {
                    res.send(err);
                    console.log(err);
                } else {
                    var serviceAccount = new ServiceProvider();
                    serviceAccount.Id = registeredId;
                    serviceAccount.userName = req.body.userName;
                    serviceAccount.password = req.body.password;
                    serviceAccount.mobileNumber = req.body.mobileNumber;
                    serviceAccount.emailId = req.body.emailId;
                    serviceAccount.location = req.body.location;
                    serviceAccount.role = req.body.role;
                    serviceAccount.isActive = 1;
                    serviceAccount.save(function (err, fullData) {
                        if (err) {
                            res.send(err);
                            console.log(err);
                        } else {
                            res.status(200).json(fullData);

                        }
                    })
                }
            })
        }
    });
};
