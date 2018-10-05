var CatalogStatus = require('../../model/catalogingStatus.model');
var BookingDetail = require('../../model/booking-detail.model');


exports.imageReceivedStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.productDetailsStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.credentialStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.catalogContentStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.catalogUploadStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.qcprocessingStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.inventoryUpdateStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.productLiveStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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
exports.catalogPaymentStatus = function (req, res) {
    CatalogStatus.find({
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
                    CatalogStatus.find({
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

exports.imageReceivedCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.imageReceivedCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.productDetailsCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.productDetailsCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.credentialCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.credentialCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.catalogContentCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.catalogContentCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.catalogUploadCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.catalogUploadCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.qcprocessingCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.qcprocessingCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.inventoryUpdateCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.inventoryUpdateCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.productLiveCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.productLiveCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.catalogPaymentCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.catalogPaymentCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}