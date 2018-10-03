var SubscribeDetail = require('../model/subscribe.model');
const webpush = require('web-push');

exports.notificationSubscription = function (req, res) {
    SubscribeDetail.findOne({
        'mobileNumber': req.body.mobileNumber,
        'userSubscriptions':req.body.userSubscriptions,
        'user':req.body.user
    }, function (err, subscriptionDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (subscriptionDetail == null) {
                var subscribe = new SubscribeDetail(req.body);
                subscribe.save(
                    function (err,subscribedData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(subscribedData)
                        }
                    });
            } 
        }
    });
};