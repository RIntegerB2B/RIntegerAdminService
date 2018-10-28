var RolePermssionAccount = require('../../model/permission.model');
var AdminAccount = require('./../../model/adminAccount.model');

exports.permissionUser = function (req, res) {
    var rolePermssionAccount = new RolePermssionAccount(req.body);
    rolePermssionAccount.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
            console.log(err);
        } else {
            console.log(data);
            RolePermssionAccount.find({
                'role':  req.body.role,
            }, function (err, roleData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(roleData);
                    console.log(roleData);
                }
            });
        }
    });
}

exports.getRoles = function (req, res) {
    RolePermssionAccount.find({}).select().exec(function (err, setRoleType) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(setRoleType);
        }
    });
};