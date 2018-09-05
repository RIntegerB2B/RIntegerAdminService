var addModelMgr = require('../model-management/addModel/addModelMgr');
var viewModelMgr = require('../model-management/viewModel/viewModelMgr');
var modelApprovalMgr = require('../model-management/model-approval/modelApprovalMgr');

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

    app.route('/portFolioImage/:modelName')
        .put(addModelMgr.createportFolioImage);

    app.route('/ecommerceImage/:id/name/:modelName')
        .put(addModelMgr.createecommerceImage);  //upload product image

    app.route('/portraitImage/:id/name/:modelName')
        .put(addModelMgr.createportraitImage);
        
     app.route('/productImage/:id/name/:modelName')
        .put(addModelMgr.createproductImage);

    app.route('/model/:id')
        .delete(viewModelMgr.deleteModel);

    app.route('/model/:id')
        .get(viewModelMgr.findModel);

     app.route('/model/:id')
        .put(addModelMgr.updateModel);
}