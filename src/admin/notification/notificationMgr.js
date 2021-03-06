var notificationDA = require('./notificationDA');
const webpush = require('web-push');

 const vapidKeys = {
    "publicKey": "BEe66AvTCe_qowysFNV2QsGWzgEDnUWAJq1ytVSXxtwqjcf0bnc6d5USXmZOnIu6glj1BFcj87jIR5eqF2WJFEY",
    "privateKey": "M75vu-773ly2mBZ3LdaUCzC-A8aK9p4UuNZFEawXXNo"
}; 

/* const vapidKeys = {
    "publicKey": "BKt65eGjjxVC8EDZj-9awfTMKLydA0jxM6mhren6Hz1UBIduWTFEtIXB7thtCN9nnMZlJsvkYqTn7rUKo8mmGxw",
    "privateKey": "NH-bfQ6QTsEE81Gkx4DfP-fpWf80lJm-LhhgwEFI8f4"
}; */


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
exports.bookingStatus = function (req, res) {
    try {
        notificationDA.pushNotification(req, res)

    } catch (error) {
        console.log(error);
    }
}
exports.pushNotificationToAny = function (req, res) {
    try {
        notificationDA.pushNotificationToAny(req, res)

    } catch (error) {
        console.log(error);
    }
}

exports.pushNotification = function (req, res) {
    if (req.body.isAdmin)
        notificationDA.pushNotificationToAdmin(req, res);
    else
        notificationDA.pushNotificationToUsers(req, res);
}

exports.addPushSubscriber = function (req, res) {

    const sub = req.body;

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var date = day + "/" + month + "/" + year;
console.log(date);
    notificationDA.notificationSubscription(req, res, date);
}