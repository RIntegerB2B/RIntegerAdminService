var addModelMgr = require('../model-management/addModel/addModelMgr');
var viewModelMgr = require('../model-management/viewModel/viewModelMgr');
var modelApprovalMgr = require('../model-management/model-approval/modelApprovalMgr');

module.exports = function (app) {

    app.route('/model')
        .post(addModelMgr.createModel); //add model 

    app.route('/serviceprovider/:id/model')
        .get(viewModelMgr.viewModels); //view  unapproved models for sp

    /*  app.route('/serviceprovider/:id/approvedmodel')
         .get(viewModelMgr.approvedModels);  */ //approved models for sp

    app.route('/models')
        .get(viewModelMgr.findModels); //view unapproved models for admin

    app.route('/admin/:id/aprove')
        .get(modelApprovalMgr.giveApproval); //admin gives approval for model

    app.route('/portFolioImage/:modelName')
        .put(addModelMgr.createportFolioImage);

    app.route('/model/:id')
        .delete(viewModelMgr.deleteModel);

    app.route('/model/:id')
        .get(viewModelMgr.findModel);

     app.route('/model/:id')
        .put(addModelMgr.updateModel);
}