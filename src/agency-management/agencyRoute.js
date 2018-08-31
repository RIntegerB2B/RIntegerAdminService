'use strict';

var viewAgencyMgr = require('./view-agency/viewAgencyMgr');
var approvalMgr = require('../agency-management/agency-approval/approvalMgr')

module.exports = function (app) {


    app.route('/agency')
        .get(viewAgencyMgr.findAgency);  //unapproved agency

        app.route('/agency/:name/Approval/:num')
        .get(approvalMgr.giveApproval);             //admin gives approval for agency
}