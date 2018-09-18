'use strict';
var BookingDetail = require ('../../model/booking-detail.model');
var Status = require ('../../model/status.model');


exports.findBooking = function (req, res) {
    BookingDetail.find({}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
   
}
exports.approvedBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });  
}
exports.cancelledBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findModelBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Model Booking','bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findDirectBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Direct Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findCatalogBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Catalog Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findRegistrationBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Registration Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Marketing Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}

 exports.bookingApproval = function (req, res) {
    BookingDetail.findOne({
        'mobileNumber': req.params.no,
        'bookingOrderId':req.params.id
       }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            bookingDetail.bookingStatus = 'Booking Approved';
            bookingDetail.save({},function(err,details) {
                if(err){
                    console.log(err)
                }
                else {
                    res.status(200).json(details);
                }
            })
        }
    });
}
 exports.cancelBooking = function (req, res) {
    BookingDetail.findOne({
        'mobileNumber': req.params.no,
        'bookingOrderId':req.params.id
       }, function (err, bookingDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            bookingDetail.bookingStatus = 'Booking Cancelled';
            bookingDetail.save({},function(err,details) {
                if(err){
                    console.log(err)
                }
                else {
                    res.status(200).json(details);
                }
            })
        }
    });
} 

exports.findStatus = function (req, res) {
    Status.find({
        'bookingOrderId': req.params.id
       }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(statusDetail);
        }
    });
}

exports.bookingStatusForOne = function (req, res) {
    Status.findOne({
        'mobileNumber': req.params.no,
        '_id':req.params.id
       }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(statusDetail);
        }
    });
}