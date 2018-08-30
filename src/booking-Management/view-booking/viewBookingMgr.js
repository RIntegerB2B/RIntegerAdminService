var viewBookingDA=require('./viewBookingDA');

exports.findBooking = function (req, res) {
    try {
        viewBookingDA.findBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.approvedBooking = function (req, res) {
    try {
        viewBookingDA.approvedBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.cancelledBooking = function (req, res) {
    try {
        viewBookingDA.cancelledBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findModelBooking = function (req, res) {
    try {
        viewBookingDA.findModelBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.bookingApproval = function (req, res) {
    try {
        viewBookingDA.bookingApproval(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.cancelBooking = function (req, res) {
    try {
        viewBookingDA.cancelBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findDirectBooking = function (req, res) {
    try {
        viewBookingDA.findDirectBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findStatus = function (req, res) {
    try {
        viewBookingDA.findStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.bookingStatusForOne = function (req, res) {
    try {
        viewBookingDA.bookingStatusForOne(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
