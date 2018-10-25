var NotificationDetail = require('../../model/notification.model');
const webpush = require('web-push');
var appSetting = require('../../config/appSetting');

exports.pushNotificationOld = function (req, res) {

    NotificationDetail.findOne({
        '_id': req.body._id
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": "Notification fromRipsil",
                    "body": "Photo Shoot Completed!",
                    "icon": "assets/main-page-logo-small-hat.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            var allSubscriptions = [];
            allSubscriptions.push(subscriptionData.userSubscriptions);
            Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
                    sub, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Newsletter sent successfully.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });




};

exports.bookingStatus = function (req, res) {
    NotificationDetail.find({}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            NotificationDetail.findOne({
                '_id': req.body._id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    /* res.status(200).json({data}) */
                    const subscriptions = [];
                    subscriptions.push(data.userSubscriptions);

                    const notificationPayload = {
                        "notification": {
                            "title": "Notification fromRipsil",
                            "body": "Photo Shoot Completed!",
                            "icon": "assets/main-page-logo-small-hat.png",
                            "vibrate": [100, 50, 100],
                            "data": {
                                "dateOfArrival": Date.now(),
                                "primaryKey": 1
                            }
                        }
                    };

                    Promise.all(subscriptions.map(subscription => webpush.sendNotification(
                            subscription, JSON.stringify(notificationPayload))))
                        .then(() => res.status(200).json({
                            message: 'Newsletter sent successfully.'
                        }))
                        .catch(err => {
                            console.error("Error sending notification, reason: ", err);
                            res.sendStatus(500);
                        });
                }
            });
        }
    });
}

exports.pushNotificationToAdmin = function (req, res) {
    var notificationDetail = new NotificationDetail(req.body);
    NotificationDetail.find({
        'isAdmin': true
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            console.log('Total subscriptions', subscriptionData);

            const notificationPayload = {
                "notification": {
                    "title": req.body.title,
                    "body": req.body.notificationBody,
                    "icon": "assets/rinteger.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    }
                }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: 'Push Notificatoin Successfull.'
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
        }
    });
};

exports.pushNotificationToUsers = function (req, res) {
    
    var notificationDetail = new NotificationDetail(req.body);
    var mobNos = req.body.mobileNumber.toString().split(',');
    NotificationDetail.find({
        'mobileNumber': {
            '$in': mobNos
        }
    }, function (err, subscriptionData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
           /*  console.log('Total subscriptions', subscriptionData); */

            const notificationPayload = {
                "notification": {
                    "title": req.body.title,
                    "body": req.body.notificationBody,
                    "icon": req.body.imageUrl != null ? req.body.imageUrl : appSetting.imageUrl,
                    "vibrate": [100, 50, 100],
                    "data": {
                        "url": appSetting.serviceUrl + req.body.mobileNumber ,
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    },
                    /* "actions": [
                        {
                          "action": "opentweet",
                          "title": "Open tweet"
                        }
                      ], */
                }
            };
            Promise.all(subscriptionData.map(sub => webpush.sendNotification(
                    sub.userSubscriptions, JSON.stringify(notificationPayload))))
                .then(() => res.status(200).json({
                    message: subscriptionData
                }))
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });
                
        }
    });
};

exports.notificationSubscription = function (req, res) {
    NotificationDetail.findOne({
        'mobileNumber': req.body.mobileNumber,
        'userSubscriptions':req.body.userSubscriptions,
        'user':req.body.user
    }, function (err, notificationDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (notificationDetail == null) {
                var notification = new NotificationDetail(req.body);
                notification.save(
                    function (err,notificationData) {
                        if (err) {
                            res.status(500).send({
                                "result": err
                            });
                        } else {
                            res.status(200).json(notificationData)
                        }
                    });
            } 
        }
    });
};