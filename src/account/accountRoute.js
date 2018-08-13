var registerMgr = require('./register/registerMgr');
var signInMgr = require('./signIn/signInMgr');
var approvalMgr = require('./approval/approvalMgr');

module.exports = function (app) {

    app.route('/admin')
        .post(signInMgr.create); //admin

    app.route('/validate')
        .post(signInMgr.signInToSite);  //admin & sp

    app.route('/serviceProvider')
        .post(registerMgr.create);  //serviceProvider

 app.route('/serviceProvider/validate')
        .post(signInMgr.signIn);        //serviceProvider signin

    app.route('/serviceProviderApproval/:id')
        .get(approvalMgr.giveApproval); //serviceProvider approval

    app.route('/serviceProviders')
        .get(approvalMgr.findServiceProvider); // unapproved serviceProviders 

    app.route('/serviceProviderApproved')
        .get(approvalMgr.approved);    //approved service providers
}