var allBookingMgr = require('./allbookingMgr');




module.exports = function (app) {

    app.route('/allbooking')
    .get(allBookingMgr.allbooking);

    app.route('/allApproved')
    .get(allBookingMgr.allApproved);

    app.route('/allCancelled')
    .get(allBookingMgr.allCancelled);


}
