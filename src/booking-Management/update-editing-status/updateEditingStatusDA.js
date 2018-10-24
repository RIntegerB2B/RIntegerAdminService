var EditingStatus = require('../../model/editingStatus.model');
var BookingDetail = require('../../model/booking-detail.model');

exports.imgReceivedStatus = function (req, res) {

    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].imageReceived = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}

exports.imgEditingStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].editing = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}
exports.imgDeliveryStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].imageDelivery = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}
exports.imgPaymentStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].payment = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {

                    
                   
                }
            })
        }
    });
}

//completed

exports.imgReceivedCompletedStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].imageReceived = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}

exports.imgEditingCompletedStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].editing = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}
exports.imgDeliveryCompletedStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].imageDelivery = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    EditingStatus.find({
                        'mobileNumber': req.params.no,
                        'bookingOrderId': req.params.id,
                    }, function (err, data) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            res.status(200).send(data);
                        }
                    })
                }
            })
        }
    });
}

exports.imgPaymentCompletedStatus = function (req, res) {
    EditingStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
   statusDetail[0].payment = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    BookingDetail.find({'bookingOrderId': req.params.id},function(err,details) {
                        details[0].bookingStatus = "Order Completed";
                        details[0].save({}, function (err, savedData) {
                        if (err) {
                            res.status(500).send({
                                message: 0
                            });
                        } else {
                            EditingStatus.find({
                                'mobileNumber': req.params.no,
                                'bookingOrderId': req.params.id,
                            }, function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        message: 1
                                    });
                                } else {
                                    res.status(200).send(data);
                                }
                            })
                        }
                    }) 
                    })
                   
                }
            })
        }
    });
}