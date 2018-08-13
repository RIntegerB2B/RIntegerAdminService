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
exports.findModelBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'model booking'}).select().exec(function (err, details) {
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
    BookingDetail.find({'bookingType': 'direct booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findStatus = function (req, res) {
    Status.find({
        'bookingId': req.params.id
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