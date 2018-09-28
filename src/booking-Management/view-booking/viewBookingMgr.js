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
exports.findCatalogBooking = function (req, res) {
    try {
        viewBookingDA.findCatalogBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.findRegistrationBooking = function (req, res) {
    try {
        viewBookingDA.findRegistrationBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.findMarketingBooking = function (req, res) {
    try {
        viewBookingDA.findMarketingBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findEditingBooking = function (req, res) {
    try {
        viewBookingDA.findEditingBooking(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findCreativeBooking = function (req, res) {
    try {
        viewBookingDA.findCreativeBooking(req, res)
   
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
