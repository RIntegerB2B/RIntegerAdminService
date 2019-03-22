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

exports.updateProductBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    directdetails.bookingStatus = 'Booking Approved';
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

exports.updateaplusBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    aplusdetails.bookingStatus = 'Booking Approved';
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


exports.updatecatalogBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    catalogdetails.bookingStatus = 'Booking Approved';
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

exports.updatecreativeBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    creativedetails.bookingStatus = 'Booking Approved';
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

exports.updateediteBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    editingdetails.bookingStatus = 'Booking Approved';
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

exports.updateITBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    ITdetails.bookingStatus = 'Booking Approved';
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

exports.updatemarketBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
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
                                    marketdetails.bookingStatus = 'Booking Approved';
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

exports.updateregistrationBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        registrationbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, registrationdetails) {
                                if (err) return handleError(err);
                                else {
                                    registrationdetails.bookingStatus = 'Booking Approved';
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


exports.updateAccountManagementBooking = function (req, res) {
    BookingDetail.findOne({ 'bookingOrderId': req.params.id }, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err, approved) {
                    if (err) {
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        digitalmanagementbookings.findOne({ 'bookingOrderId': req.params.id },
                            function (err, accountdetails) {
                                if (err) return handleError(err);
                                else {
                                    accountdetails.bookingStatus = 'Booking Approved';
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




