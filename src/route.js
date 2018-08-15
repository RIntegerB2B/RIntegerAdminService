var accountRoutes = require('./account/accountRoute');
var bookingRoutes = require('./booking-Management/bookingRoute');
var modelRoutes = require('./model-management/modelRoute');
var adminRoutes = require('./admin/adminRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    bookingRoutes(app);
    modelRoutes(app);
    adminRoutes(app);
};
