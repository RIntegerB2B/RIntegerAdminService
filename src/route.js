var accountRoutes = require('./account/accountRoute');
var bookingRoutes = require('./booking-Management/bookingRoute');
var modelRoutes = require('./model-management/modelRoute');
var adminRoutes = require('./admin/adminRoute');
var customerRoutes = require('./customer-management/customerRoute');
var agencyRoutes = require('./agency-management/agencyRoute');
var catalogRoutes = require('./catalog-settings/catalogRoute');
var subscribeRoutes = require('./subscribe/subscribeRoute');
var digitalMgmtRoutes = require('./digital-management/digitalManagementStatusRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    bookingRoutes(app);
    modelRoutes(app);
    adminRoutes(app);
    customerRoutes(app);
    agencyRoutes(app);
    catalogRoutes(app);
    subscribeRoutes(app);
    digitalMgmtRoutes(app);
};
