'use strict';

var catalogMgr = require('./catalogMgr');

module.exports = function (app) {

    app.route('/b2bnational')
        .post(catalogMgr.addB2BNational);
}