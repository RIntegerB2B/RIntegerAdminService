var CustomerDetail = require('../../model/customerDetail.model');

exports.singleCustomer = function (req, res) {
    var singCustomer = new CustomerDetail();
    singCustomer.mobileNumber = req.body.mobileNumber;
    singCustomer.name = req.body.name;
    singCustomer.emailId = req.body.emailId;
    singCustomer.location = req.body.location;
    singCustomer.bookingType = req.body.bookingType;
    singCustomer.shootType = req.body.shootType;
    singCustomer.modelType = req.body.modelType;
    singCustomer.product = req.body.product;
    singCustomer.companyAddress = req.body.companyAddress;
    singCustomer.location = req.body.location;
    singCustomer.gstNumber = req.body.gstNumber;
    singCustomer.customerGrade = req.body.customerGrade;
    singCustomer.brandName = req.body.brandName;
    singCustomer.save(function (err, contentData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
            console.log(err);
        } else {
            res.status(200).json(contentData);
        }
    });
}

exports.allCustomers = function (req, res) {
    CustomerDetail.find({}).select().exec(function (err, customerAcc) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(customerAcc);
        }
    });
}
exports.customerDetailsEdit = function (req, res) {
    CustomerDetail.findById(req.params.id, function (err, editCustomer) {
        if (err) {
            console.log('Error:', err);
        } else {
            editCustomer.mobileNumber = req.body.mobileNumber;
            editCustomer.name = req.body.name;
            editCustomer.emailId = req.body.emailId;
            editCustomer.location = req.body.location;
            editCustomer.bookingType = req.body.bookingType;
            editCustomer.shootType = req.body.shootType;
            editCustomer.modelType = req.body.modelType;
            editCustomer.product = req.body.product;
            editCustomer.companyAddress = req.body.companyAddress;
            editCustomer.location = req.body.location;
            editCustomer.gstNumber = req.body.gstNumber;
            editCustomer.customerGrade = req.body.customerGrade;
            editCustomer.brandName = req.body.brandName;
            editCustomer.save(function (err, contentData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(contentData);
                    console.log('details:', contentData)
                }
            });
        }
    });
}
exports.customerDetailsDelete = function (req, res) {
    CustomerDetail.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            CustomerDetail.find({}).select().exec(function (err, deleteAcc) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(deleteAcc);
                }
            });
        }
    });
}

exports.customerDuplicateData = function (req, res) {
    var duplicatePhoneNos = [];
    CustomerDetail.aggregate([{
            $group: {
                _id: {
                    mobileNumber: "$mobileNumber"
                },
                count: {
                    "$sum": 1
                }
            }
        },
        {
            $match: {
                count: {
                    "$gt": 1
                }
            }
        }
    ]).exec(function (err, data) {
        console.log(res); // [ { maxBalance: 98 } ]
        for (var i = 0; i < data.length; i++) {
            duplicatePhoneNos.push(data[i]._id.mobileNumber);
        }
        console.log(duplicatePhoneNos);
        // Please write the query to get all the records with this duplicateNos

        CustomerDetail.find({
            'mobileNumber': {
                '$in': duplicatePhoneNos
            }
        }, function (err, duplicateData) {
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                });
            } else {
                console.log('duplicateDetails: ', duplicateData);
                res.status(200).json(duplicateData)
            }
        });
    });
};
