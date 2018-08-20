var CustomerDetail = require('../model/customerDetail.model');


exports.findCustomers = function (req, res) {
    CustomerDetail.find({
       
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
           res.status(200).json(userDetail);
           
        }
    });

};


exports.findModelType = function (req, res) {
    
    CustomerDetail.find({
            'modelType': req.params.model,
            'shootType':req.params.shoot
        }, function (err, userDetail) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
               res.status(200).json(userDetail);
               
            }
        });
    
    };
    
    exports.findShootType = function (req, res) {
        CustomerDetail.find({
            'shootType': req.params.shoot
        }, function (err, userDetail) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
               res.status(200).json(userDetail);
               
            }
        });
    
    }

    exports.findProductType = function (req, res) {
        CustomerDetail.find({
            'product': req.params.product
        }, function (err, userDetail) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
               res.status(200).json(userDetail);
               
            }
        });
    }