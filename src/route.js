var accountRoutes = require('./account/accountRoute');
var bookingRoutes = require('./booking-Management/bookingRoute');
var modelRoutes = require('./model-management/modelRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    bookingRoutes(app);
    modelRoutes(app);
};
