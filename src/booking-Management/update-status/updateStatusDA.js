var Status = require('../../model/status.model');

exports.progressMaterialStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialPickedUp = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });

}
exports.progressShootingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.shootCompleted = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });

}
exports.progressImageEditingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.imageEditing = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.progressDeliveryStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.delivery = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.progressPaymentStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.payment = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}
exports.progressMaterialReturnStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialReturn = 2;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

// completed
exports.updateMaterialStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialPickedUp = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}


exports.shootingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.shootCompleted = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}


exports.imageEditingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.imageEditing = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.deliveryStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.delivery = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.paymentStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.payment = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.materialReturnStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialReturn = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.orderStatus = function (req, res) {
    Status.find({
        '_id': req.params.id
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: 0
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {

                    if (data.materialPickedUp == 1 && data.shootCompleted == 1 &&
                        data.imageEditing == 1 && data.delivery == 1 &&
                        data.materialReturn == 1 && data.payment == 1
                    ) {
                        data.order = 1;
                        data.save({}, function (err, orderStatus) {
                            if (err) {
                                res.status(500).send({
                                    message: 2
                                });
                            } else {

                                res.status(200).json(orderStatus);
                            }
                        })

                    } else {
                        res.status(500).send({
                            message: 3
                        });
                    }
                }

            })
        }
    });
}
// not -completed
exports.notCompletedMaterialStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialPickedUp = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}

exports.notCompletedShootingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.shootCompleted = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}
exports.notCompletedImageEditingStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.imageEditing = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}
exports.notCompletedDeliveryStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.delivery = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}
exports.notCompletedPaymentStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.payment = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}
exports.notCompletedMaterialReturnStatus = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.materialReturn = 0;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                            Status.find({
                                'mobileNumber': req.params.no
                            }, function (err, statusDetail) {
                                if (err) {
                                    res.status(500).send({
                                        message: 0
                                    });
                                } else {
                                    Status.find({
                                        '_id': req.params.id
                                    }, function (err, data) {
                                        if (err) {
                                            res.status(500).send({
                                                message: 2
                                            });
                                        } else {
                                            res.status(200).json(data);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}


/* exports.cancelBooking = function (req, res) {
    Status.find({
        'mobileNumber': req.params.no
    }, function (err, statusDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            Status.findOne({
                '_id': req.params.id
            }, function (err, data) {
                if (err) {
                    res.status(500).send({
                        message: 0
                    });
                } else {
                    data.orderStatus = 1;
                    data.save({}, function (err, updatedData) {
                        if (err) {
                            res.status(500).send({
                                message: 1
                            });
                        } else {
                           res.status(200).json(updatedData);
                        }
                    })
                }
            })
        }
    });
} */