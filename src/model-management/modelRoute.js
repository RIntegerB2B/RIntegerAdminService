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

    app.route('/model/:id/sp/:name')
        .delete(viewModelMgr.deleteModel);

    app.route('/model/:id')
        .get(viewModelMgr.findModel);

     app.route('/model/:id')
        .put(addModelMgr.updateModel);

  // profile images view from sp
  app.route('/serviceprovider/:name/modelimages/:id')
  .get(viewProfileMgr.findImages);

  //delete  ecommerce images from sp
  app.route('/serviceprovider/:name/model/:id/ecomm/:image')
  .delete(viewProfileMgr.deleteEcomImage);

  // delete portrait images from sp
  app.route('/serviceprovider/:name/model/:id/portrait/:image')
  .delete(viewProfileMgr.deletePortraitImage);

  //delete product images from sp
  app.route('/serviceprovider/:name/model/:id/product/:image')
  .delete(viewProfileMgr.deleteProductImage);

  //delete portFolio images from sp
  app.route('/serviceprovider/:name/model/:id/portFolio/:image')
  .delete(viewProfileMgr.deletePortFolioImage);


  // update scheduled model
  app.route('/scheduledbooking/:id/')
  .get(addModelMgr.scheduledBooking);

  app.route('/removescheduledbooking/:id/')
  .get(addModelMgr.removeScheduledBooking);

}