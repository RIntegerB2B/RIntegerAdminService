var addModelMgr = require('../model-management/addModel/addModelMgr');
var viewModelMgr = require('../model-management/viewModel/viewModelMgr');
var modelApprovalMgr = require('../model-management/model-approval/modelApprovalMgr');
var viewProfileMgr = require('./viewProfile/viewProfileMgr');

module.exports = function (app) {

    app.route('/model')
        .post(addModelMgr.createModel); //add model 

    app.route('/serviceprovider/:id/model')
        .get(viewModelMgr.viewModels); //view  unapproved models for sp

     //approved models for sp

    app.route('/models')
        .get(viewModelMgr.findModels); //view unapproved models for admin

    app.route('/model/:name/Approval/:num')
        .get(modelApprovalMgr.giveApproval); //admin gives approval for model

    app.route('/portFolioImage/:modelName/sp/:spName')
        .put(addModelMgr.createPrime);
       

    app.route('/ecommerceImage/:sp/id/:id/name/:modelName')
        .put(addModelMgr.createecommerceImage);  //upload product image

    app.route('/portraitImage/:sp/id/:id/name/:modelName')
        .put(addModelMgr.createportraitImage);
        
     app.route('/productImage/:sp/id/:id/name/:modelName')
        .put(addModelMgr.createproductImage);

     app.route('/portFolioImage/:sp/id/:id/name/:modelName')
        .put(addModelMgr.createportFolioImage);

    app.route('/model/:id/sp/:name/model/:modelname')
        .delete(viewModelMgr.deleteModel);

    app.route('/model/:id')
        .get(viewModelMgr.findModel);

     app.route('/model/:id')
        .put(addModelMgr.updateModel);

  // profile images view from sp
  app.route('/serviceprovider/:name/modelimages/:id')
  .get(viewProfileMgr.findImages);

  //delete  ecommerce images from sp
  app.route('/serviceprovider/:name/model/:id/ecomm/:image/modelname/:modelname')
  .delete(viewProfileMgr.deleteEcomImage);

  // delete portrait images from sp
  app.route('/serviceprovider/:name/model/:id/portrait/:image')
  .delete(viewProfileMgr.deletePortraitImage);

  //delete product images from sp
  app.route('/serviceprovider/:name/model/:id/product/:image/modelname/:modelname')
  .delete(viewProfileMgr.deleteProductImage);

  //delete portFolio images from sp
  app.route('/serviceprovider/:name/model/:id/portFolio/:image/modelname/:modelname')
  .delete(viewProfileMgr.deletePortFolioImage);


  // update scheduled model
  app.route('/scheduledbooking/:id/serviceproviders/:spid')
  .get(addModelMgr.scheduledBooking);

  app.route('/removescheduledbooking/:id/serviceproviders/:spid')
  .get(addModelMgr.removeScheduledBooking);


    // update projection model
    app.route('/projectionmodel/:id/serviceproviders/:spid')
    .get(addModelMgr.projectionModel);
  
    app.route('/removeprojectionmodel/:id/serviceproviders/:spid')
    .get(addModelMgr.removeProjectionModel);

  // update available

  app.route('/avaialble/:id/serviceproviders/:spid')
  .get(addModelMgr.modelAvailable);

  app.route('/notavailable/:id/serviceproviders/:spid')
  .get(addModelMgr.notAvailable);


  // scheduled date

  app.route('/scheduleddate/:id/serviceproviders/:spid/date/:date')
  .get(addModelMgr.scheduledDate);


  // check images for ecommerce
  app.route('/checkecommerceImage/:sp/id/:modelid')
  .put(addModelMgr.checkecommerceImage);


  // edit prime image
  app.route('/editprimeimage/:modelName/sp/:spName')
  .put(addModelMgr.editPrime);


  // 

  app.route('/scheduled/:id/serviceproviders/:spid/location/:location')
  .get(addModelMgr.scheduledLocation);
  
}