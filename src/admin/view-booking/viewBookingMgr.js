var viewBookingDA=require('./viewBookingDA');

exports.findBooking = function (req, res) {
    try {
        viewBookingDA.findBooking(req, res)
   
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
