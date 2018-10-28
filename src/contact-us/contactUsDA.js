var CustomerQuery = require('../model/query.model');



exports.viewQuery = function (req, res) {
    /*  */CustomerQuery.find({'isHandled':0}, function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(data);
        }
    });

}

exports.requestHandled = function (req, res) {
    CustomerQuery.find({'_id':req.params.id}, function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            data[0].isHandled = 1;
            data[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CustomerQuery.find({
                        'isHandled':0
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}
exports.handledRequest = function (req, res) {
    CustomerQuery.find({'isHandled':1}, function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(data);
        }
    });
}