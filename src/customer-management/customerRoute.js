'use strict';

var customerMgr = require('./customerMgr');

module.exports = function (app) {

    app.route('/customers')
    .get(customerMgr.findCustomers);

    app.route('/modelType/:model/shootType/:shoot')
        .get(customerMgr.findModelType);

    app.route('/shootType/:shoot')
        .get(customerMgr.findShootType);

    app.route('/productType/:product')
        .get(customerMgr.findProductType);
}