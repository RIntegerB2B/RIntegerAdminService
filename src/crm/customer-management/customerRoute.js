'use strict';

var customerMgr = require('./customerMgr');

module.exports = function (app) {
    app.route('/allcustomers')
        .get(customerMgr.allCustomers);
    app.route('/customers/:id')
        .put(customerMgr.customerDetailsEdit);
    app.route('/customersdelete/:id')
        .delete(customerMgr.customerDetailsDelete);
    app.route('/duplicatecustomers')
        .get(customerMgr.customerDuplicateData);
    app.route('/singlecustomers')
        .post(customerMgr.singleCustomer);
    app.route('/subscribecustomers')
        .get(customerMgr.subcribeCustomerData);

        app.route('/subscribedcustomers/:id')
        .delete(customerMgr.subcribeCustomerDelete);
}