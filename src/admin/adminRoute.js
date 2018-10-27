 'use strict';

var signInMgr = require('./sign-in/signinMgr');
var viewBookingMgr = require('./view-booking/viewBookingMgr');
var updateStatusMgr = require('./update-status/updateStatusMgr');
var notificationMgr = require('../admin/notification/notificationMgr');


module.exports = function (app) {
/*
        app.route('/admin')
                .post(signInMgr.create);

        app.route('/admin/validate')
                .post(signInMgr.signInToSite);

        app.route('/booking')
                .get(viewBookingMgr.findBooking);

        app.route('/booking/:id/status')
                .get(viewBookingMgr.findStatus);

        app.route('/booking/:no/status/:id')
                .get(viewBookingMgr.bookingStatusForOne);


        app.route('/booking/:no/status/:id/material')
                .get(updateStatusMgr.updateMaterialStatus);

        app.route('/booking/:no/status/:id/shootCompleted')
                .get(updateStatusMgr.shootingStatus);

        app.route('/booking/:no/status/:id/imageEditing')
                .get(updateStatusMgr.imageEditingStatus);

        app.route('/booking/:no/status/:id/delivery')
                .get(updateStatusMgr.deliveryStatus); 

        app.route('/booking/:no/status/:id/payment')
                .get(updateStatusMgr.paymentStatus); 

        app.route('/booking/:no/status/:id/payment')
                .get(updateStatusMgr.paymentStatus);

        app.route('/booking/:no/status/:id/materialReturn')
                .get(updateStatusMgr.materialReturnStatus);

        app.route('/order/:id')
                .get(updateStatusMgr.orderStatus);

                */ 

        app.route('/pushnotification')
                .post(notificationMgr.pushNotification);
        app.route('/pushnotificationtoany')
                .post(notificationMgr.pushNotificationToAny);


        app.route('/pushnotificationsubscribe')
                .post(notificationMgr.addPushSubscriber);
                

} 