var ServiceProvider = require('../../model/serviceProvider.model');
var AdminAccount = require('../../model/adminAccount.model');
var Model = require('../../model/model.model');


exports.giveApproval = function (req, res) {
    ServiceProvider.findOne({
        'userName': req.params.name,
        'mobileNumber': req.params.num
    }, function (err, data) {
        if (err) res.status(500).json(0);
        else {
            data.isActive = 1;
            data.save(function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: "data is not found in service Provider account"
                    });
                } else {
                    AdminAccount.findOne({
                        'userName': req.params.name,
                        'mobileNumber': req.params.num
                    }, function (err, data) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            data.isActive = 1;
                            data.save(function (err, savedData) {
                                if (err) {
                                    res.status(500).send({
                                        message: "data is not found in admin account"
                                    })
                                } else {
                                    res.status(200).json(savedData);
                                }
                            })

                        }
                    })

                }
            })
        }
    });
};


exports.findServiceProvider = function (req, res) {
    ServiceProvider.find({
        'isActive': 0
    }).select('-password').exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
};

exports.approved = function (req, res) {
    ServiceProvider.find({
        'isActive': 1
    }).select('-password').exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
};