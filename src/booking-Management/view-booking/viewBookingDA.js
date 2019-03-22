'use strict';
var BookingDetail = require ('../../model/booking-detail.model');
var Status = require ('../../model/status.model');
var EditingStatus = require('../../model/editingStatus.model');
var CreativeStatus = require('../../model/creativeStatus.model');
var CatalogingStatus = require('../../model/catalogingStatus.model');
var RegistrationStatus = require('../../model/registrationStatus.model');
var AplusStatus = require('../../model/aplusStatus.model');
var ProductDetail = require('../../model/directBooking.model');
var ModelBookingDetail = require('../../model/modelBooking.model');
var EditingBookingDetail = require('../../model/editingBooking.model');
var CreativeBookingDetail = require('../../model/creativeBooking.model');
var RegistrationBookingDetail = require('../../model/registrationBooking.model');
var DigitalMarketingDetail = require('../../model/digitalmarketingBooking.model');
var AplusDetail = require('../../model/aplusBooking.model');
var CatalogingDetail = require('../../model/catalogingBooking.model');
var MarketingBookingDetail = require('../../model/marketingBooking.model');
var ITServicesDetail = require('../../model/itbooking.model');
var ScheduledBookingDetail  = require('../../model/scheduledBooking.model');


exports.findBooking = function (req, res) {
    BookingDetail.find({
        $and: [{"bookingStatus" : "Waiting for approval"}]
    },function(error,waitingDetails){
        if (error) {
            throw error;
        } else {
            res.status(200).json(waitingDetails);
            console.log(waitingDetails);
        }
    });
}

exports.findProductDetails = function (req, res) {
    ProductDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}

exports.findApprovedProductBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Approved','bookingType':'Product Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findModelDetails = function (req, res) {
    ModelBookingDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findApprovedModelBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Approved','bookingType':'Model Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findApprovedEditingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Approved','bookingType':'Editing Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCancelledProductBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled','bookingType':'Product Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });  
}
exports.findCancelledEditingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled','bookingType':'Editing Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCompletedProductBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'Product Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });  
}
exports.findEditingDetails = function (req, res) {
    EditingBookingDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCreativeDetails = function (req, res) {
    CreativeBookingDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCompletedEditingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'Editing Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.editingBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Editing Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelEditingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Editing Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledEditingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Editing Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}

exports.cancelNewModelBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Model Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewEditingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Editing Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelEditingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Editing Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
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
    BookingDetail.find({'bookingType': 'Product Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
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
exports.marketingBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Marketing Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findApprovedMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Marketing Booking' ,'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelNewMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Marketing Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled','bookingType':'Marketing Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else { 
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Marketing Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Marketing Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findMarketingDetails = function (req, res) {
    MarketingBookingDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findCompletedMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'Marketing Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findITBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'IT Services Booking' ,'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.itBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'IT Services Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findApprovedITBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'IT Services Booking' ,'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelNewITBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'IT Services Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledITBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled','bookingType':'IT Services Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelITBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else { 
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'IT Services Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledITBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'IT Services Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCompletedITBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'IT Services Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findITDetails = function (req, res) {
    ITServicesDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
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
exports.findApprovedCatalogBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Catalog Booking' ,'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.catalogBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Catalog Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewCatalogBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Catalog Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledCatalogBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Catalog Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelCatalogBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else { 
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Catalog Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledCatalogBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Catalog Booking',
                        'bookingStatus':  'Booking Cancelled'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCompletedCatalogBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed',
    'bookingType':'Catalog Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findCatalogDetails = function (req, res) {
    CatalogingDetail.find({'bookingOrderId':req.params.id}).select()
    .exec(function (err, details) {
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
    BookingDetail.find({'bookingType': 'Registration Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findEditingBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Editing Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findCreativeBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Creative Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findApprovedCreativeBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Creative Booking' ,
    'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelCreativeBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Creative Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledCreativeBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Creative Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCompletedCreativeBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed',
    'bookingType':'Creative Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelNewCreativeBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Creative Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledCreativeBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Creative Booking',
                        'bookingStatus':  'Booking Cancelled'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledRegistrationBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Registration Booking',
                        'bookingStatus':  'Booking Cancelled'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledDigitalMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Account Management Booking',
                        'bookingStatus':  'Booking Cancelled'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCompletedDigitalMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed',
    'bookingType':'Account Management Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findDigitalMarketingDetails = function (req, res) {
    DigitalMarketingDetail.find({'bookingOrderId':req.params.id}).select()
    .exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.findCompletedRegistrationBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed',
    'bookingType':'Registration Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findRegistrationDetails = function (req, res) { RegistrationBookingDetail
    RegistrationBookingDetail.find({'bookingOrderId':req.params.id}).select()
    .exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}
exports.creativeBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Creative Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.registrationBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Registration Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findDigitalMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Account Management Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.digitalBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Account Management Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findApprovedDigitalMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Account Management Booking' ,
    'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelNewDigitalMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Account Management Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledDigitalMarketingBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Account Management Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}


exports.cancelDigitalMarketingBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Account Management Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}

exports.marketingbookingBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Account Management Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findApprovedRegistrationBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Registration Booking' ,
    'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelNewRegistrationBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Registration Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledRegistrationBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Registration Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelRegistrationBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Registration Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findAplusBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'A+ Cataloging Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findApprovedAplusBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'A+ Cataloging Booking' ,
    'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.aplusBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'A+ Cataloging Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewAplusBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'A+ Cataloging Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledAplusBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'A+ Cataloging Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}

exports.cancelAplusBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'A+ Cataloging Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledAplusBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'A+ Cataloging Booking',
                        'bookingStatus':  'Booking Cancelled'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findAplusDetails = function (req, res) {  
    AplusDetail.find({'bookingOrderId':req.params.id}).select()
    .exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findCompletedAplusBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed',
    'bookingType':'A+ Cataloging Booking'}).select().exec(function (err, details) {
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
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Product Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.modelBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Model Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewModelBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Model Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledModelBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Model Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });  
}
exports.updateCancelledBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Product Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.updateCancelledModelBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Model Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCompletedModelBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'Model Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });  
}
 exports.cancelBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Product Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
} 
exports.cancelModelBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Model Booking',
                        'bookingStatus':  'Booking Approved'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Product Booking',
                        'bookingStatus':  'Waiting for approval'}).select().exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
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
exports.findEditingStatus = function (req, res) {
    EditingStatus.find({
        'bookingOrderId': req.params.id,
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
exports.findCreativeStatus = function (req, res) {
    CreativeStatus.find({
        'bookingOrderId': req.params.id,

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
exports.findCatalogingStatus = function (req, res) {
    CatalogingStatus.find({
        'bookingOrderId': req.params.id,

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
exports.findRegistrationStatus = function (req, res) {
    RegistrationStatus.find({
        'bookingOrderId': req.params.id,

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
exports.findAplusStatus = function (req, res) {
    AplusStatus.find({
        'bookingOrderId': req.params.id,

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

// scheduled booking

exports.findScheduledBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Scheduled Model Booking' ,
    'bookingStatus':  'Waiting for approval'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findApprovedScheduledBooking = function (req, res) {
    BookingDetail.find({'bookingType': 'Scheduled Model Booking' ,
    'bookingStatus':  'Booking Approved'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}

exports.scheduledBookingApproval = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Scheduled Model Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.cancelNewScheduledBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Scheduled Model Booking',
                        'bookingStatus':  'Waiting for approval'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}
exports.findCancelledScheduledBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Booking Cancelled',
    'bookingType':'Scheduled Model Booking'}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.cancelScheduledBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else { 
            details.bookingStatus = 'Booking Cancelled';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Scheduled Model Booking',
                        'bookingStatus':  'Booking Approved'}).select()
                        .exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}

exports.updateCancelledScheduledBooking = function (req, res) {
    BookingDetail.findById(req.params.id, function (err, details) {
        if (err) return handleError(err);
        else {
            details.bookingStatus = 'Booking Approved';
            details.save(
                function (err) {
                    if (err) { 
                        res.status(500).send({
                            "result": 'Some error occured'
                        });
                    } else {
                        BookingDetail.find({'bookingType':'Scheduled Model Booking',
                        'bookingStatus':  'Booking Cancelled'}).select().
                        exec(function (err, detail) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(detail);
                            }
                        });



                    }
                });
                
        }
    });
}

exports.findCompletedScheduledBooking = function (req, res) {
    BookingDetail.find({'bookingStatus':'Order Completed','bookingType':'Scheduled Model Booking'}).select()
    .exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
exports.findScheduledBookingDetails = function (req, res) {
    ScheduledBookingDetail.find({'bookingOrderId':req.params.id}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    });
}
