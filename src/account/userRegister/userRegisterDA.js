var UserRegister = require('../../model/userRegister.model');
var AdminAccount = require('../../model/adminAccount.model');

exports.userCreate = function (req, res) {
    var userAccount = new UserRegister();
    userAccount.userName = req.body.userName;
    userAccount.password = req.body.password;
    userAccount.mobileNumber = req.body.mobileNumber;
    userAccount.emailId = req.body.emailId;
    userAccount.location = req.body.location;
    userAccount.role = req.body.role;
    userAccount.isActive = 1;
    userAccount.save(function (err, userData) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            var adminAccount = new AdminAccount();
            adminAccount.userName = req.body.userName;
            adminAccount.password = req.body.password;
            adminAccount.mobileNumber = req.body.mobileNumber;
            adminAccount.emailId = req.body.emailId;
            adminAccount.role = req.body.role;
            adminAccount.isActive = 1;
            adminAccount.save(function (err, registeredData) {
                if (err) {
                    res.send(err);
                    console.log(err);
                } else {
                    res.status(200).json(registeredData);
                }
            })
        }
    });
};

