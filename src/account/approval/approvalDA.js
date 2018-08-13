var ServiceProvider = require('../../model/serviceProvider.model');

exports.giveApproval = function (req, res) {
    ServiceProvider.findOne({
        '_id': req.params.id
    }, function (err, data) {
        if (err) res.status(500).json(0);
        else {
            data.isActive = 1;
            data.save(function(err,updatedData){
                if(err){
                    res.status(500).send({
                        message:1
                    }
                );
                }
                else{
                    res.status(200).json(updatedData);
                }
            })
        }
    });
};

exports.findServiceProvider = function (req, res) {
    ServiceProvider.find({
        'isActive':0
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
        'isActive':1
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