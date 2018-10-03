var subscribeDA = require('./subscribeDA');
const webpush = require('web-push');

 const vapidKeys = {
    "publicKey": "BEe66AvTCe_qowysFNV2QsGWzgEDnUWAJq1ytVSXxtwqjcf0bnc6d5USXmZOnIu6glj1BFcj87jIR5eqF2WJFEY",
    "privateKey": "M75vu-773ly2mBZ3LdaUCzC-A8aK9p4UuNZFEawXXNo"
}; 


exports.addPushSubscriber = function (req, res) {

    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    subscribeDA.notificationSubscription(req, res);
}