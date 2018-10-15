var DigitalMgmtStatus = require('../model/digitalMgmtStatus.model');


exports.addMonth = function(req,res) {
    var digitalMgmtStatusData = new DigitalMgmtStatus(req.body);
    digitalMgmtStatusData.bookingOrderId = req.body.bookingOrderId;
    digitalMgmtStatusData.monthName = req.body.monthName;  
    digitalMgmtStatusData.year = req.body.year;
    digitalMgmtStatusData.save(
        function (err, digtalMgmtData) {
            if (err) { 
                res.status(500).send({
                    "result": 0
                });
            } else {
                res.status(200).json(digtalMgmtData);
            }
        });
}
exports.viewMonthlyPlan = function(req,res) {
    DigitalMgmtStatus.find({'bookingOrderId': req.params.id,
    'monthName':req.params.month,
    'year':req.params.year,
}, function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            res.status(200).json(data);
        }
    });
}
exports.addMonthlyPlan = function(req,res) {
    let monthlyplan = {
        planTitle: req.body.planTitle,
        planDescription: req.body.planDescription
    };
    DigitalMgmtStatus.findOneAndUpdate({
        bookingOrderId: req.body.bookingOrderId,
        monthName: req.body.monthName,
        year:req.body.year
        }, {
            $push: {
                monthlyPlan: monthlyplan
            }
        },
        function (err, addedData) {
            if (err) { 
                res.status(500).send({
                    "result": 0
                });
            } else {
                DigitalMgmtStatus.find({'bookingOrderId': req.body.bookingOrderId,
                'monthName':req.body.monthName}, function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        res.status(200).json(data);
                    }
                });
            }
        }
    )
}
exports.deleteWeeklyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id, function (err, monthlyData) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            
            monthlyData.weeklyPlan.id(req.params.weekid).remove();
            monthlyData.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, updatedPlan) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(updatedPlan)
                        }
                    })
                }
            });

        }
    });
}
exports.editMonthlyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
, function (err, monthlyData) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            var monthlyValue = monthlyData.monthlyPlan.id(req.params.monthid);
            monthlyValue.planTitle = req.body.planTitle;
            monthlyValue.planDescription = req.body.planDescription;
            monthlyData.save(function (err, editedData) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(createdPlan)
                        }
                    })
                }
            });
        }
    });
}
exports.deleteMonthlyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id, function (err, monthlyData) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            
            monthlyData.monthlyPlan.id(req.params.monthid).remove();
            monthlyData.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, updatedPlan) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(updatedPlan)
                        }
                    })
                }
            });

        }
    });
}
exports.updateMonthlyStatus = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.monthlyPlan.id(req.params.monthid);
                    monthlyValue.status = req.params.status;
                    monthlyData.save(function (err, editedData) {
                        if (err) {
                            res.status(201).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                                if (err) {
                                    res.status(500).json({
                                        "result": 0
                                    })
                                } else {
                                    res.status(200).json(createdPlan)
                                }
                            })
                        }
                    });
                }
            });
    
}
exports.copyMonthlyPlanToWeekly = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.monthlyPlan.id(req.params.monthid);
                   let weeklyplan = {
                    week:req.params.weekno,
                    planTitle: monthlyValue.planTitle,
                    planDescription: monthlyValue.planDescription
                };
                DigitalMgmtStatus.findByIdAndUpdate(req.params.id,
                    {
                        $push: {
                            weeklyPlan: weeklyplan
                        }
                    },
                    function (err, addedData) {
                        if (err) { 
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id, function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 0
                                    });
                                } else {
                                    res.status(200).json(data);
                                }
                            });
                        }
                    }
                )
                }
            });
}
exports.addWeeklyPlan = function(req,res) {
    let plan = {
        week: req.body.week,
        planTitle: req.body.planTitle,
        planDescription: req.body.planDescription
    };
    DigitalMgmtStatus.findOneAndUpdate({
        bookingOrderId: req.params.id,
        monthName:req.params.month,
        year:req.params.year
        }, {
            $push: {
                weeklyPlan: plan
            }
        },
        function (err, addedData) {
            if (err) { 
                res.status(500).send({
                    "result": 0
                });
            } else {
                DigitalMgmtStatus.find({'bookingOrderId': req.params.id,
                'monthName':req.params.month}, function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        res.status(200).json(data);
                    }
                });
            }
        }
    )
}

exports.viewWeeklyPlan = function(req,res) {
    DigitalMgmtStatus.find({'bookingOrderId': req.params.id,
    'monthName':req.params.month,
    'year':req.params.year}
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                   var monthlyvalue = monthlyData[0].weeklyPlan;
                   
                   /* monthlyvalue.find({'week':req.params.week},function(err,data){
                       if(err){
                           console.log(err)
                       }
                       else{
                        res.status(200).json(data);
                       }
                   }) */
                }
            });
} 
exports.editWeeklyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.weeklyPlan.id(req.params.weekid);
                    monthlyValue.planTitle = req.body.planTitle;
                    monthlyValue.planDescription = req.body.planDescription;
                    monthlyValue.week = req.body.week
                    monthlyData.save(function (err, editedData) {
                        if (err) {
                            res.status(201).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                                if (err) {
                                    res.status(500).json({
                                        "result": 0
                                    })
                                } else {
                                    res.status(200).json(createdPlan)
                                }
                            })
                        }
                    });
                }
            });
}
exports.copyWeeklyPlanToDaily = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.weeklyPlan.id(req.params.weekid);
                   let dailyPlan = {
                    date:req.params.date,
                    planTitle: monthlyValue.planTitle,
                    planDescription: monthlyValue.planDescription
                };
                DigitalMgmtStatus.findByIdAndUpdate(req.params.id,
                    {
                        $push: {
                            dailyPlan: dailyPlan
                        }
                    },
                    function (err, addedData) {
                        if (err) { 
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id, function (err, data) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 0
                                    });
                                } else {
                                    res.status(200).json(data);
                                }
                            });
                        }
                    }
                )
                }
            });
}
exports.updateWeeklyStatus = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.weeklyPlan.id(req.params.weekid);
                    monthlyValue.status = req.params.status;
                    monthlyData.save(function (err, editedData) {
                        if (err) {
                            res.status(201).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                                if (err) {
                                    res.status(500).json({
                                        "result": 0
                                    })
                                } else {
                                    res.status(200).json(createdPlan)
                                }
                            })
                        }
                    });
                }
            });
}
exports.addDailyPlan = function(req,res) {
    let dailyplan = {
        date:req.body.day,
        planTitle: req.body.planTitle,
        planDescription: req.body.planDescription
    };
    DigitalMgmtStatus.findOneAndUpdate({
       
        bookingOrderId: req.params.id,
        monthName: req.params.month,
        year:req.params.year
        }, {
            $push: {
                dailyPlan: dailyplan
            }
        },
        function (err, addedData) {
            if (err) { 
                res.status(500).send({
                    "result": 0
                });
            } else {
                DigitalMgmtStatus.find({'bookingOrderId': req.params.id,
                'monthName':req.params.month}, function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        res.status(200).json(data);
                    }
                });
            }
        }
    )
}
exports.editDailyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.dailyPlan.id(req.params.dateid);
                    monthlyValue.planTitle = req.body.planTitle;
                    monthlyValue.planDescription = req.body.planDescription;
                    monthlyValue.date = req.body.date
                    monthlyData.save(function (err, editedData) {
                        if (err) {
                            res.status(201).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                                if (err) {
                                    res.status(500).json({
                                        "result": 0
                                    })
                                } else {
                                    res.status(200).json(createdPlan)
                                }
                            })
                        }
                    });
                }
            });
}

exports.deleteDailyPlan = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id, function (err, monthlyData) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            
            monthlyData.dailyPlan.id(req.params.dateid).remove();
            monthlyData.save(function (err) {
                if (err) {
                    res.status(201).send({
                        "result": 0
                    });
                } else {
                    DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, updatedPlan) {
                        if (err) {
                            res.status(500).json({
                                "result": 0
                            })
                        } else {
                            res.status(200).json(updatedPlan)
                        }
                    })
                }
            });

        }
    });
}
exports.updateDailyStatus = function(req,res) {
    DigitalMgmtStatus.findById(req.params.id
        , function (err, monthlyData) {
                if (err) {
                    res.status(500).send({
                        "result": 0
                    });
                } else {
                    var monthlyValue = monthlyData.dailyPlan.id(req.params.dailyid);
                    monthlyValue.status = req.params.status;
                    monthlyData.save(function (err, editedData) {
                        if (err) {
                            res.status(201).send({
                                "result": 0
                            });
                        } else {
                            DigitalMgmtStatus.findById(req.params.id).select('').exec(function (err, createdPlan) {
                                if (err) {
                                    res.status(500).json({
                                        "result": 0
                                    })
                                } else {
                                    res.status(200).json(createdPlan)
                                }
                            })
                        }
                    });
                }
            });
}