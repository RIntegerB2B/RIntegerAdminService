var AplusStatus = require('../../model/aplusStatus.model');
var BookingDetail = require('../../model/booking-detail.model');


exports.materialPickUpStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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
exports.aplusShootPlanningStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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
exports.aplusShootStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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
exports.aplusProductDetailsStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].productDetailsReceived = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusPostProductionStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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
exports.aplusProductDetailsStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].productDetailsReceived = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusLoginCredentialStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].loginCredentialsReceived = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusContentStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].catalogContentMaking = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusCatalogUploadStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].catalogUploaded = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusQcProcessingStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].qc_processing = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusInventoryStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].inventoryUpdation = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusProductLiveStatus = function (req, res) {
    AplusStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].productLive = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    AplusStatus.find({
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
exports.aplusPaymentStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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
exports.aplusMaterialReturnStatus = function (req, res) {
    AplusStatus.find({
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
                    AplusStatus.find({
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