var registerMgr = require('./register/registerMgr');
var signInMgr = require('./signIn/signInMgr');
var approvalMgr = require('./approval/approvalMgr');

module.exports = function (app) {

    app.route('/admin')
        .post(signInMgr.create); //admin

    app.route('/validate')
        .post(signInMgr.signInToSite);  //admin & sp


    app.route('/user')
        .post(registerMgr.create);

 app.route('/user/validate')
        .post(signInMgr.signIn);        //serviceProvider signin

    app.route('/serviceProvider/:name/Approval/:num')
        .get(approvalMgr.giveApproval); //serviceProvider approval

    app.route('/serviceProviders')
        .get(approvalMgr.findServiceProvider); // unapproved serviceProviders 

    app.route('/serviceProviderApproved')
        .get(approvalMgr.approved);    //approved service providers



    
}