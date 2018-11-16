'use strict';

var dataAnalysisMgr = require('./dataAnalysisMgr');

module.exports = function (app) {
    app.route('/subscribedcustomers')
    .get(dataAnalysisMgr.onlySubscribed);


    app.route('/notsubscribedcustomers')
    .get(dataAnalysisMgr.notSubscribed);
} 