var CreativeStatus = require('../../model/creativeStatus.model');
var BookingDetail = require('../../model/booking-detail.model');

exports.materialReceivedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].materialPickedUp = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.shootPlanningStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].shootPlanning = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.shootingStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].shootCompleted = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.postProductionWorkStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].postProductionWork = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.creativePaymentStatus = function (req, res) {
    CreativeStatus.find({
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
                    CreativeStatus.find({
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
exports.creativeMaterialReturnStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].materialReturn = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
//completed status
exports.materialReceivedCompletedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].materialPickedUp = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.shootPlanningCompletedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].shootPlanning = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.shootingCompletedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].shootCompleted = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.postProductionCompletedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].postProductionWork = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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
exports.creativePaymentCompletedStatus = function (req, res) {
    CreativeStatus.find({
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
                    CreativeStatus.find({
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
exports.creativeMaterialReturnCompletedStatus = function (req, res) {
    CreativeStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].materialReturn = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    CreativeStatus.find({
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