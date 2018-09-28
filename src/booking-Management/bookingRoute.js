'use strict';

var viewBookingMgr = require('./view-booking/viewBookingMgr');
var updateStatusMgr = require('./update-status/updateStatusMgr');


module.exports = function (app) {

    app.route('/booking')
        .get(viewBookingMgr.findBooking);
        
    
    app.route('/booking/:no/approve/:id')
        .get(viewBookingMgr.bookingApproval);

     app.route('/booking/:no/cancel/:id')
        .get(viewBookingMgr.cancelBooking);

    app.route('/cancelled')
        .get(viewBookingMgr.cancelledBooking);

     app.route('/approved')
        .get(viewBookingMgr.approvedBooking);

    app.route('/modelbooking')
        .get(viewBookingMgr.findModelBooking);

    app.route('/directbooking')
        .get(viewBookingMgr.findDirectBooking);

    app.route('/catalogbooking')
        .get(viewBookingMgr.findCatalogBooking);

     app.route('/registrationbooking')
        .get(viewBookingMgr.findRegistrationBooking);

    app.route('/marketingbooking')
        .get(viewBookingMgr.findMarketingBooking);

    app.route('/creativebooking')
        .get(viewBookingMgr.findCreativeBooking);

    app.route('/editingbooking')
        .get(viewBookingMgr.findEditingBooking);


    app.route('/booking/:id/status')
        .get(viewBookingMgr.findStatus);

    app.route('/booking/:no/status/:id')
        .get(viewBookingMgr.bookingStatusForOne);

    //update-status-completed

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

    app.route('/booking/:no/status/:id/materialReturn')
        .get(updateStatusMgr.materialReturnStatus);

    app.route('/order/:id')
        .get(updateStatusMgr.orderStatus);

    //update-status-progress

    app.route('/booking/:no/progress/:id/material')
        .get(updateStatusMgr.progressMaterialStatus);

    app.route('/booking/:no/progress/:id/shootCompleted')
        .get(updateStatusMgr.progressShootingStatus);

     app.route('/booking/:no/progress/:id/imageEditing')
        .get(updateStatusMgr.progressImageEditingStatus);

     app.route('/booking/:no/progress/:id/delivery')
        .get(updateStatusMgr.progressDeliveryStatus);

     app.route('/booking/:no/progress/:id/payment')
        .get(updateStatusMgr.progressPaymentStatus);

    app.route('/booking/:no/progress/:id/materialReturn')
        .get(updateStatusMgr.progressMaterialReturnStatus);

        //not - completed
        app.route('/booking/:no/false/:id/material')
        .get(updateStatusMgr.notCompletedMaterialStatus);

    app.route('/booking/:no/false/:id/shootCompleted')
        .get(updateStatusMgr.notCompletedShootingStatus);

     app.route('/booking/:no/false/:id/imageEditing')
        .get(updateStatusMgr.notCompletedImageEditingStatus);

     app.route('/booking/:no/false/:id/delivery')
        .get(updateStatusMgr.notCompletedDeliveryStatus);

     app.route('/booking/:no/false/:id/payment')
        .get(updateStatusMgr.notCompletedPaymentStatus);

    app.route('/booking/:no/false/:id/materialReturn')
        .get(updateStatusMgr.notCompletedMaterialReturnStatus);
        
      
        

}
