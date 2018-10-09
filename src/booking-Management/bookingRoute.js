'use strict';

var viewBookingMgr = require('./view-booking/viewBookingMgr');
var updateStatusMgr = require('./update-status/updateStatusMgr');
var updateEditingStatusMgr = require('./update-editing-status/updateEditingStatusMgr');
var updateCreativeStatusMgr = require('./update-creative-status/updateCreativeStatusMgr');
var updateCatalogStatusMgr = require('./update-catalog-status/updateCatalogStatusMgr');
var updateRegistrationStatusMgr = require('./update-registration-status/updateRegistrationStatusMgr');
var updateAplusStatusMgr = require('./update-aplus-status/updateAplusStatusMgr');

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

     app.route('/aplusbooking')
        .get(viewBookingMgr.findAplusBooking);


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
        
     // find status  editing booking 
     app.route('/editingbooking/:id/status')
     .get(viewBookingMgr.findEditingStatus);

     // update editing booking status
     app.route('/editing/:no/received/:id/value/:val')
     .get(updateEditingStatusMgr.imgReceivedStatus);

     app.route('/editing/:no/imageediting/:id/value/:val')
     .get(updateEditingStatusMgr.imgEditingStatus);

     app.route('/editing/:no/imagedelivery/:id/value/:val')
     .get(updateEditingStatusMgr.imgDeliveryStatus);

     app.route('/editing/:no/payment/:id/value/:val')
     .get(updateEditingStatusMgr.imgPaymentStatus);
     

      // complete editing booking status
      app.route('/editing/:no/receivedcompleted/:id/value/:val')
      .get(updateEditingStatusMgr.imgReceivedCompletedStatus);

      app.route('/editing/:no/editingcompleted/:id/value/:val')
      .get(updateEditingStatusMgr.imgEditingCompletedStatus);

      app.route('/editing/:no/deliverycompleted/:id/value/:val')
      .get(updateEditingStatusMgr.imgDeliveryCompletedStatus);

      app.route('/editing/:no/paymentcompleted/:id/value/:val')
      .get(updateEditingStatusMgr.imgPaymentCompletedStatus);

       // find status  creative booking 
     app.route('/creativebooking/:id/status')
     .get(viewBookingMgr.findCreativeStatus);

     //update creative status 
     app.route('/creative/:no/materialreceived/:id/value/:val')
      .get(updateCreativeStatusMgr.materialReceivedStatus);

      app.route('/creative/:no/shootplanning/:id/value/:val')
      .get(updateCreativeStatusMgr.shootPlanningStatus);

      app.route('/creative/:no/shoot/:id/value/:val')
      .get(updateCreativeStatusMgr.shootingStatus);

      app.route('/creative/:no/postproduction/:id/value/:val')
      .get(updateCreativeStatusMgr.postProductionWorkStatus);

      app.route('/creative/:no/payment/:id/value/:val')
      .get(updateCreativeStatusMgr.creativePaymentStatus);

      app.route('/creative/:no/materialReturn/:id/value/:val')
      .get(updateCreativeStatusMgr.creativeMaterialReturnStatus);

      //completed creative booking status

      app.route('/creative/:no/materialreceivedcompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.materialReceivedCompletedStatus);

      app.route('/creative/:no/shootplanningcompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.shootPlanningCompletedStatus);

      app.route('/creative/:no/shootcompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.shootingCompletedStatus);

      app.route('/creative/:no/postproductioncompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.postProductionCompletedStatus);

      app.route('/creative/:no/paymentcompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.creativePaymentCompletedStatus);

      app.route('/creative/:no/materialReturncompleted/:id/value/:val')
      .get(updateCreativeStatusMgr.creativeMaterialReturnCompletedStatus);

      
       // find status  catalog booking 
     app.route('/catalogbooking/:id/status')
     .get(viewBookingMgr.findCatalogingStatus);

     //update catalog status 

     app.route('/catalog/:no/imagereceived/:id/value/:val')
      .get(updateCatalogStatusMgr.imageReceivedStatus);

      app.route('/catalog/:no/productdetails/:id/value/:val')
      .get(updateCatalogStatusMgr.productDetailsStatus);

      app.route('/catalog/:no/logincredentials/:id/value/:val')
      .get(updateCatalogStatusMgr.credentialStatus);

      app.route('/catalog/:no/catalogcontent/:id/value/:val')
      .get(updateCatalogStatusMgr.catalogContentStatus);

      app.route('/catalog/:no/catalogupload/:id/value/:val')
      .get(updateCatalogStatusMgr.catalogUploadStatus);

      app.route('/catalog/:no/qcprocessing/:id/value/:val')
      .get(updateCatalogStatusMgr.qcprocessingStatus);

      app.route('/catalog/:no/inventoryupdate/:id/value/:val')
      .get(updateCatalogStatusMgr.inventoryUpdateStatus);

      app.route('/catalog/:no/productlive/:id/value/:val')
      .get(updateCatalogStatusMgr.productLiveStatus);

      app.route('/catalog/:no/payment/:id/value/:val')
      .get(updateCatalogStatusMgr.catalogPaymentStatus);

        // find status  registration booking 
        app.route('/registrationbooking/:id/status')
        .get(viewBookingMgr.findRegistrationStatus);

         //update regsitration status 
         
         app.route('/registration/:no/documents/:id/value/:val')
         .get(updateRegistrationStatusMgr.documentsRequiredStatus);

         app.route('/registration/:no/accountcreation/:id/value/:val')
         .get(updateRegistrationStatusMgr.accountCreationStatus);

         app.route('/registration/:no/brandregistration/:id/value/:val')
         .get(updateRegistrationStatusMgr.brandRegistrationStatus);
         
         app.route('/registration/:no/verification/:id/value/:val')
         .get(updateRegistrationStatusMgr.verificationStatus);

         app.route('/registration/:no/activation/:id/value/:val')
         .get(updateRegistrationStatusMgr.activationStatus);

         app.route('/registration/:no/details/:id/value/:val')
         .get(updateRegistrationStatusMgr.detailsStatus);

         app.route('/registration/:no/payment/:id/value/:val')
         .get(updateRegistrationStatusMgr.paymentStatus);

           // find status  aplus booking 
        app.route('/aplusbooking/:id/status')
        .get(viewBookingMgr.findAplusStatus);

        //update aplus status

        app.route('/aplus/:no/materialpickup/:id/value/:val')
        .get(updateAplusStatusMgr.materialPickUpStatus);

        app.route('/aplus/:no/shootplanning/:id/value/:val')
        .get(updateAplusStatusMgr.aplusShootPlanningStatus);

        app.route('/aplus/:no/shoot/:id/value/:val')
        .get(updateAplusStatusMgr.aplusShootStatus);

        app.route('/aplus/:no/productdetails/:id/value/:val')
        .get(updateAplusStatusMgr.aplusProductDetailsStatus);

        app.route('/aplus/:no/postproduction/:id/value/:val')
        .get(updateAplusStatusMgr.aplusPostProductionStatus);

        app.route('/aplus/:no/logincredentials/:id/value/:val')
        .get(updateAplusStatusMgr.aplusLoginCredentialStatus);

        app.route('/aplus/:no/content/:id/value/:val')
        .get(updateAplusStatusMgr.aplusContentStatus);

        app.route('/aplus/:no/catalogupload/:id/value/:val')
        .get(updateAplusStatusMgr.aplusCatalogUploadStatus);

        app.route('/aplus/:no/qcprocessing/:id/value/:val')
        .get(updateAplusStatusMgr.aplusQcProcessingStatus);

        app.route('/aplus/:no/inventory/:id/value/:val')
        .get(updateAplusStatusMgr.aplusInventoryStatus);

        app.route('/aplus/:no/productlive/:id/value/:val')
        .get(updateAplusStatusMgr.aplusProductLiveStatus);

        app.route('/aplus/:no/payment/:id/value/:val')
        .get(updateAplusStatusMgr.aplusPaymentStatus);

        app.route('/aplus/:no/materialreturn/:id/value/:val')
        .get(updateAplusStatusMgr.aplusMaterialReturnStatus);

}
