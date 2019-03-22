var allbooking = require('./../model/booking-detail.model');

exports.allbooking = function(req,res){
    allbooking.find({},function(error,alldetails){
        if(error){
            throw error;
        } else {
            res.status(200).json(alldetails);
            console.log(alldetails);
        }
    });
}

exports.allApproved = function(req,res){
    allbooking.find({
        $and: [{"bookingStatus" : "Booking Approved"}]
    },function(error,approvedDetails){
        if (error) {
            throw error;
        } else {
            res.status(200).json(approvedDetails);
            console.log(approvedDetails);
        }
    });
}


exports.allCancelled = function(req,res){
    allbooking.find({
        $and: [{"bookingStatus" : "Booking Cancelled"}]
    },function(error,cancelledDetails){
        if (error) {
            throw error;
        } else {
            res.status(200).json(cancelledDetails);
            console.log(cancelledDetails);
        }
    });
}