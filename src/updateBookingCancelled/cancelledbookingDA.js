'use strict';
var BookingDetail = require('./../model/booking-detail.model');
var directbookings = require('./../model/directBooking.model');
var aplusbookings = require('./../model/aplusBooking.model');
var catalogbookings = require('./../model/catalogingBooking.model');
var creativebookings = require('./../model/creativeBooking.model');
var editingbookings = require('./../model/editingBooking.model');
var itservicesbookings = require('./../model/itbooking.model');
var marketingbookings = require('./../model/marketingBooking.model');
var registrationbookings = require('./../model/registrationBooking.model');
var digitalmanagementbookings = require('./../model/digitalmarketingBooking.model');


 exports.cancelProductBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        directbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, directdetails) {
                                if (err) return handleError(err);
                                else {
                                    directdetails.bookingStatus = 'Booking Cancelled';
                                    directdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelaplusBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        aplusbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, aplusdetails) {
                                if (err) return handleError(err);
                                else {
                                   aplusdetails.bookingStatus = 'Booking Cancelled';
                                    aplusdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}


exports.cancelcatalogBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        catalogbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, catalogdetails) {
                                if (err) return handleError(err);
                                else {
                                    catalogdetails.bookingStatus = 'Booking Cancelled';
                                    catalogdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelcreativeBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        creativebookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, creativedetails) {
                                if (err) return handleError(err);
                                else {
                                    creativedetails.bookingStatus = 'Booking Cancelled';
                                    creativedetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelediteBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        editingbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, editingdetails) {
                                if (err) return handleError(err);
                                else {
                                    editingdetails.bookingStatus = 'Booking Cancelled';
                                    editingdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelITBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        itservicesbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, ITdetails) {
                                if (err) return handleError(err);
                                else {
                                    ITdetails.bookingStatus = 'Booking Cancelled';
                                    ITdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelmarketBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        marketingbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, marketdetails) {
                                if (err) return handleError(err);
                                else {
                                   marketdetails.bookingStatus = 'Booking Cancelled';
                                    marketdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelregistrationBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        registrationbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err,registrationdetails) {
                                if (err) return handleError(err);
                                else {
                                   registrationdetails.bookingStatus = 'Booking Cancelled';
                                    registrationdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}

exports.cancelAccountManagementBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        digitalmanagementbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err,accountdetails) {
                                if (err) return handleError(err);
                                else {
                                    accountdetails.bookingStatus = 'Booking Cancelled';
                                    accountdetails.save(
                                        function (err) {
                                            if (err) {
                                                res.status(500).send({
                                                    "result": 'Some error occured'
                                                });
                                            }
                                            else {
                                                BookingDetail.find({})
                                                    .select().exec(function (err, detail) {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: "Some error occurred while retrieving notes."
                                                            });
                                                        } else {
                                                            res.status(200).json(detail);
                                                        }
                                                    });


                                            } 
                                        }
                                    )
                                }
                            });
                    }

                });

        }
    });
}


