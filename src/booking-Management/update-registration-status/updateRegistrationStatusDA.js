var RegistrationStatus = require('../../model/registrationStatus.model');

exports.documentsRequiredStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].documentsRequired = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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
exports.accountCreationStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].accountCreation = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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

exports.brandRegistrationStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].brandRegistration = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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
exports.verificationStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].account_brandVerification = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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
exports.activationStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].accountActivation = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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
exports.detailsStatus = function (req, res) {
    RegistrationStatus.find({
        'mobileNumber': req.params.no,
        'bookingOrderId': req.params.id,
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            statusDetail[0].detailsForwarding = req.params.val;
            statusDetail[0].save({}, function (err, updatedData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    RegistrationStatus.find({
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
exports.paymentStatus = function (req, res) {
    RegistrationStatus.find({
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
                    RegistrationStatus.find({
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
